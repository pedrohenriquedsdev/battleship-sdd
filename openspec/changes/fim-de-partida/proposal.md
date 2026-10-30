# Proposal

## Why

Uma partida sem encerramento explícito deixa o jogador sem saber que venceu ou perdeu e permite ataques após o resultado. O jogo precisa fechar o ciclo e oferecer recomeço.

## What Changes

- Encerrar a partida imediatamente quando todas as embarcações de um participante forem destruídas, sem conceder ataque extra ao computador.
- Diferenciar vitória (frota do computador destruída) e derrota (frota do jogador destruída).
- Bloquear qualquer ataque após o encerramento, inclusive por teclado.
- Exibir o resultado em destaque, com resumo da partida (ataques realizados, acertos e embarcações destruídas).
- Oferecer "Jogar novamente", reiniciando os tabuleiros e voltando à preparação com frotas novas.
- Manter o resultado e o resumo acessíveis, com texto explícito além de cor.

## Capabilities

### New Capabilities

- `partida`: ciclo de vida da partida — preparação, batalha, encerramento e reinício, incluindo as condições de vitória e derrota.

### Modified Capabilities

- `combate`: passa a rejeitar ataques quando a partida já estiver encerrada e a interromper o turno do computador após o fim.

## Impact

- **Novos arquivos:** `src/app/componentes/fim-de-partida/`, resumo/estatísticas no `PartidaStore`.
- **Dependências:** `tabuleiro` (bloqueio de interação), `combate` (detecção de frota destruída) e a tela `preparacao-da-frota` para o reinício.
- **Fecha o escopo do jogo obrigatório** descrito no enunciado, exceto itens explicitamente fora de escopo.
