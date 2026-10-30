# Proposal

## Why

Com as regras isoladas no domínio, falta o elemento central da experiência: uma grade 10×10 legível e operável que sirva tanto para o tabuleiro do jogador quanto para o do computador, sem duplicar código entre preparação e batalha.

## What Changes

- Criar um componente de tabuleiro standalone e reutilizável, com cabeçalhos de linha (`A`–`J`) e coluna (`1`–`10`).
- Suportar dois modos de exibição: `proprio` (mostra as embarcações e os ataques recebidos) e `inimigo` (oculta as embarcações e mostra apenas o resultado dos ataques).
- Representar cada célula por estado visual e **textual**: vazia, embarcação, água, acerto, embarcação destruída.
- Garantir que o estado de cada célula seja identificável sem depender apenas de cor (símbolo e rótulo acessível).
- Expor entradas por signals (estado do tabuleiro, modo, bloqueio de interação) e saídas por `output` (coordenada acionada).
- Oferecer navegação por teclado no grid e rótulos `aria` por coordenada e resultado.
- Manter o layout responsivo sem rolagem horizontal: células quadradas com tamanho fluido, tabuleiros empilhados no celular e lado a lado a partir de telas médias.
- Entregar uma legenda reutilizável dos símbolos de estado.

## Capabilities

### New Capabilities

- Nenhuma.

### Modified Capabilities

- `tabuleiro`: acrescenta requisitos de apresentação (cabeçalhos, modos de visibilidade, estados textuais, acessibilidade e responsividade) sobre a geometria já definida no domínio.

## Impact

- **Novos arquivos:** `src/app/componentes/tabuleiro/` (`tabuleiro.component.ts`, `.html`, `.css`, `celula`/`legenda` conforme necessidade) e testes de componente.
- **Consumido por:** `preparacao-da-frota` (modo `proprio` interativo) e `turnos-e-ataques` (modo `inimigo` no ataque e `proprio` na leitura).
- **Dependências:** Tailwind 4 e Lucide (já instalados na fase de fundação).
