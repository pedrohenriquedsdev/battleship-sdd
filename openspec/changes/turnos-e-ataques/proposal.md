# Proposal

## Why

Com as frotas posicionadas, falta o laço que dá sentido ao jogo: alternar turnos, resolver ataques e manter visível para o jogador o que aconteceu. Sem isso a partida não avança.

## What Changes

- Implementar o estado da partida com signals: turno atual, status do turno e histórico de ataques.
- Permitir ao jogador atacar uma coordenada do tabuleiro do computador, com um ataque por turno.
- Impedir ataques em coordenadas já atacadas, sem consumir o turno.
- Após um ataque válido do jogador, executar o ataque do computador escolhendo aleatoriamente entre as coordenadas que ele ainda não atacou.
- Exibir o resultado de cada ataque (água, acerto, embarcação destruída) em ambos os tabuleiros e no histórico.
- Informar explicitamente quando uma embarcação for destruída, com símbolo e texto além de cor.
- Indicar de quem é o turno e exibir estado de espera enquanto o computador responde, bloqueando ataques nesse intervalo.
- Manter o histórico legível e com rolagem própria, sem depender de cor.

## Capabilities

### New Capabilities

- Nenhuma.

### Modified Capabilities

- `combate`: acrescenta requisitos de turnos alternados, ataque do computador, histórico de ataques e sinalização de vez e de destruição.
- `tabuleiro`: passa a exibir, no modo `inimigo`, apenas resultados de ataque sem revelar embarcações remanescentes.

## Impact

- **Novos arquivos:** `src/app/componentes/batalha/`, painel de status/histórico, extensão do `PartidaStore`.
- **Dependências:** domínio de `combate`, componente `tabuleiro` e gerador aleatório injetado (mesmo usado na geração de frota).
- **Habilita:** `fim-de-partida`.
