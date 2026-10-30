# Proposal

## Why

O jogo só começa quando a frota do jogador está completa e válida. Hoje não existe forma de posicionar embarcações, então a partida não pode nem ser iniciada.

## What Changes

- Criar a tela de preparação com a lista da frota (porta-aviões, encouraçado, cruzador, submarino, destroyer), indicando quais já foram posicionadas.
- Permitir escolher a embarcação a posicionar e alternar a orientação entre horizontal e vertical.
- Posicionar por seleção de célula no tabuleiro próprio, com pré-visualização das posições que serão ocupadas.
- Rejeitar posicionamentos inválidos (fora do tabuleiro ou sobrepostos) com mensagem clara, preservando o posicionamento válido existente.
- Permitir remover e reposicionar embarcações enquanto a batalha não tiver começado.
- Manter o botão "Iniciar batalha" desabilitado até a frota estar completa e válida.
- Gerar a frota do computador no momento do início da batalha, respeitando as regras de posicionamento.

## Capabilities

### New Capabilities

- Nenhuma.

### Modified Capabilities

- `frota`: acrescenta requisitos de interação (escolha de embarcação e orientação, pré-visualização, feedback de rejeição, recolocação e condição de início da partida).

## Impact

- **Novos arquivos:** `src/app/componentes/preparacao-frota/` e o serviço/estado que orquestra a preparação (`PartidaStore`).
- **Dependências:** componente `tabuleiro` (modo `proprio`, emissão de coordenada) e funções do domínio (`calcularPosicoes`, `validarPosicionamento`, `gerarFrotaAleatoria`).
- **Habilita:** `turnos-e-ataques`, que só pode começar com as duas frotas válidas.
