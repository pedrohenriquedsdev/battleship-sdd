# Proposal

## Why

As regras da Batalha Naval existem apenas em prosa no `README.md`. Antes de qualquer interface, elas precisam existir como código determinístico e testável, para que preparação, combate e fim de partida compartilhem uma única fonte de verdade.

## What Changes

- Definir os tipos do domínio: `Coordenada` (linha `A`–`J`, coluna `1`–`10`), `Orientacao`, `TipoEmbarcacao`, `Embarcacao`, `Tabuleiro`, `Frota` e os resultados de validação/ataque.
- Implementar geometria de posicionamento: conversão de coordenada para índice e cálculo das posições ocupadas por uma embarcação, detectando quando ela ultrapassa a borda.
- Implementar validação de posicionamento: fora do tabuleiro e sobreposição com embarcação já posicionada.
- Implementar geração automática de frota que respeite as mesmas regras, com gerador aleatório **injetado** para permitir testes determinísticos.
- Implementar resolução de ataque: água, acerto, embarcação destruída na última posição intacta e rejeição de coordenada já atacada.
- Implementar detecção de frota totalmente destruída.
- Cobrir com Vitest todos os casos da seção 8 do enunciado.
- Nenhum componente de interface é criado nesta fase; o domínio é TypeScript puro, sem dependência de Angular.

## Capabilities

### New Capabilities

- `tabuleiro`: geometria do tabuleiro 10×10, identificação de coordenadas e ocupação das células.
- `frota`: composição da frota, regras de posicionamento, validação e distribuição automática.
- `combate`: resolução de ataques, estados de resultado, destruição de embarcação e detecção de frota eliminada.

### Modified Capabilities

- Nenhuma.

## Impact

- **Novos arquivos:** `src/app/dominio/` (`tipos.ts`, `coordenada.ts`, `tabuleiro.ts`, `frota.ts`, `combate.ts`) e respectivos `*.spec.ts`.
- **Sem impacto em UI, rotas ou dependências externas.**
- **Fases seguintes:** `tabuleiro-interativo`, `preparacao-da-frota`, `turnos-e-ataques` e `fim-de-partida` passam a consumir essas funções em vez de reimplementar regras.
