# Tasks

## 1. Estrutura e tipos

- [ ] 1.1 Criar `src/app/dominio/tipos.ts` com `Coordenada`, `Orientacao`, `TipoEmbarcacao`, `Embarcacao`, `Celula`, `Tabuleiro` e as uniões de resultado, verificando com `npm run build` que os tipos compilam sem dependência de Angular
- [ ] 1.2 Definir a tabela de frota (porta-aviões 5, encouraçado 4, cruzador 3, submarino 3, destroyer 2) como constante somente leitura e verificar com teste que o total de células ocupadas é 17

## 2. Coordenadas e geometria

- [ ] 2.1 Implementar normalização e validação de coordenada (`c7` → `C7`, rejeição de `A-1` e `1A`) e verificar com testes de tabela cobrindo os dois cenários do spec
- [ ] 2.2 Implementar conversão coordenada ↔ índices (0–9) e verificação de limites (`K1`, `A0`, `A11` inválidas), verificando com testes que apenas as 100 coordenadas válidas são aceitas
- [ ] 2.3 Implementar cálculo das posições de uma embarcação a partir de origem, orientação e tamanho, verificando com teste que `B2` horizontal por 3 gera `B2`,`B3`,`B4` e que `A8` horizontal por 5 ultrapassa a borda

## 3. Posicionamento e validação

- [ ] 3.1 Implementar criação de tabuleiro vazio com 100 células e consulta de ocupação, verificando com teste que toda célula inicia vazia e não atacada
- [ ] 3.2 Implementar posicionamento de embarcação no tabuleiro, verificando com teste que as células ocupadas passam a referenciar a embarcação
- [ ] 3.3 Implementar `validarPosicionamento` com os motivos `fora-do-tabuleiro` e `sobreposicao`, verificando com testes os cenários de borda, sobreposição e manutenção do posicionamento válido existente
- [ ] 3.4 Garantir que embarcações encostadas (lado a lado e na diagonal, ex.: `B2` e `C3`) sejam aceitas, verificando com teste dedicado
- [ ] 3.5 Implementar verificação de frota completa e válida, verificando com teste que a falta de qualquer uma das cinco embarcações impede o início da batalha

## 4. Geração automática da frota

- [ ] 4.1 Implementar `gerarFrotaAleatoria(gerador)` com orientação e origem sorteadas por embarcação, verificando com teste que a frota gerada contém as cinco embarcações
- [ ] 4.2 Validar internamente cada tentativa de posicionamento e reiniciar a geração ao atingir o limite de tentativas, verificando com teste que nenhuma frota gerada tem sobreposição ou posição fora do tabuleiro
- [ ] 4.3 Implementar um gerador determinístico de teste (LCG semeado) e verificar com teste que duas execuções com a mesma semente produzem a mesma frota
- [ ] 4.4 Executar a geração com pelo menos 100 sementes distintas e verificar com teste que todas produzem frota válida

## 5. Combate

- [ ] 5.1 Implementar resolução de ataque em célula vazia e em célula ocupada, verificando com testes os resultados água e acerto
- [ ] 5.2 Implementar rejeição de ataque em célula já atacada, verificando com teste que o tabuleiro permanece igual e que o resultado indica ataque inválido
- [ ] 5.3 Implementar detecção de embarcação destruída na última posição intacta, verificando com testes os estados atingida (parcial) e destruída (completa)
- [ ] 5.4 Garantir que o resultado de acerto exponha apenas a célula atacada, verificando com teste que nenhuma outra posição da embarcação é revelada
- [ ] 5.5 Implementar detecção de frota eliminada, verificando com testes os cenários com embarcação restante e com a última embarcação destruída

## 6. Verificação de integração

- [ ] 6.1 Cobrir com testes nomeados todos os casos da seção 8 do `README.md` que pertencem ao domínio e verificar que cada cenário do spec tem teste correspondente
- [ ] 6.2 Executar `npm test` e verificar que a suíte do domínio passa sem depender de `TestBed` ou de `jsdom`
- [ ] 6.3 Executar `npm run lint` e `npm run format:check` e verificar que o diretório `src/app/dominio/` está limpo

## Workflow follow-up

- Arquivar a change quando as três verificações acima estiverem verdes.
- Após o arquivamento, `tabuleiro-interativo` consome `tabuleiro` e `frota` sem reimplementar regras.
