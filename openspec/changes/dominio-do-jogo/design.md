# Design

## Context

A change `dominio-do-jogo` implementa as regras descritas no `README.md` antes de qualquer interface. Ela depende apenas da change `fundacao-do-app` (workspace Angular com Vitest configurado) e não conhece componentes, rotas ou estado de UI. Ver `proposal.md` — Why para a motivação.

## Goals / Non-Goals

**Goals:**

- Uma única implementação das regras, usada por todas as fases seguintes.
- Funções determinísticas e testáveis sem navegador.
- Modelo imutável, para que o estado possa ser mantido em signals sem efeitos colaterais escondidos.

**Non-Goals:**

- Nenhum componente, template ou estilo.
- Nenhuma noção de turno, histórico ou ciclo de partida (pertencem a `turnos-e-ataques` e `fim-de-partida`).
- Nenhuma persistência local.

## Decisions

**1. TypeScript puro, sem imports de `@angular/*`.**
O domínio fica em `src/app/dominio/` e não importa Angular. Alternativa descartada: services `@Injectable` com signals desde já, o que acoplaria as regras ao framework e exigiria `TestBed` para testar aritmética de coordenadas.

**2. Coordenada canônica como string `"A1"`, com índices 0–9 internamente.**
A string é o identificador que aparece na UI, no histórico e nos testes; linha e coluna numéricas só existem dentro das funções de geometria. Alternativa descartada: objeto `{ linha, coluna }` em toda a API, que polui mensagens e chaves de mapa.

**3. Validação retorna resultado, não lança exceção.**
`validarPosicionamento` devolve união discriminada `{ valido: true, posicoes } | { valido: false, motivo }` com motivos como `fora-do-tabuleiro` e `sobreposicao`. A UI precisa transformar o motivo em mensagem em português; exceções forçariam `try/catch` em fluxo normal de jogo. Alternativa descartada: `throw`, que também dificulta testes de tabela.

**4. Tabuleiro como matriz 10x10 de células imutáveis.**
`Tabuleiro` carrega `celulas` (100 posições), `embarcacoes` e `ataques`. Aplicar ataque ou posicionamento devolve um novo tabuleiro. Alternativa descartada: mutação in-place, que quebra a comparação de signals e permite estado inconsistente entre tabuleiro e frota.

**5. Aleatoriedade por injeção de `() => number` (0–1).**
`gerarFrotaAleatoria(gerador)` tenta posicionar cada embarcação em orientação e origem sorteadas e reinicia com limite de tentativas. O gerador default é `Math.random`, mas testes passam um gerador determinístico (ex.: LCG semeado). Alternativa descartada: `Math.random` interno, que impossibilita testar a reprodução exigida pelo spec.

**6. Funções pequenas por arquivo, nomes em português.**
`coordenada.ts` (parse, normalização, vizinhança), `tabuleiro.ts` (criação, ocupação, consulta), `frota.ts` (composição, validação, geração), `combate.ts` (ataque, destruição, frota eliminada). Segue a convenção do `AGENTS.md` sem criar classes.

**7. Sem estado global.**
Nenhum singleton ou variável de módulo mutável; a fase seguinte guarda o estado no store.

## Risks / Trade-offs

- **Geração aleatória pode não convergir** → limite de tentativas com reinício total da frota e teste com gerador semeado cobrindo várias sementes.
- **Custo de copiar a matriz a cada ataque** → 100 células por cópia é irrelevante na escala do jogo; a clareza compensa.
- **Divergência entre regra de domínio e o texto do README** → cada requisito do spec tem cenário espelhado do enunciado, e os testes usam os mesmos exemplos (`B2`,`B3`,`B4` e `A8`).
- **Normalização de coordenada aceitar entradas frouxas** → apenas letra/caixa são normalizadas; formatos como `A-1` e `1A` são rejeitados, conforme cenário do spec.

## Open Questions

Nenhuma pendente. A representação de célula para exibição (símbolos e rótulos) é decidida em `tabuleiro-interativo`, que consome este domínio sem alterá-lo.

## Migration Plan

Não aplicável: código novo e isolado, sem consumidores anteriores. Rollback consiste em remover `src/app/dominio/`, já que nenhuma outra change depende dela até `tabuleiro-interativo` ser aplicada.
