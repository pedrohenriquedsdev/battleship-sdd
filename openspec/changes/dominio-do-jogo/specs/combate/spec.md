# Spec Delta

## Purpose

Define como um ataque é resolvido, quando uma embarcação é considerada destruída e como o sistema reconhece que a frota de um participante foi eliminada.

## ADDED Requirements

### Requirement: Ataque a célula não atacada
Um ataque SHALL ser resolvido apenas em célula ainda não atacada, produzindo água, acerto ou embarcação destruída.

#### Scenario: Ataque em água
- **WHEN** o ataque atinge uma célula vazia ainda não atacada
- **THEN** o resultado é água

#### Scenario: Ataque em embarcação com posições intactas
- **WHEN** o ataque atinge uma célula ocupada e a embarcação ainda tem posições não atingidas
- **THEN** o resultado é acerto

#### Scenario: Ataque que destrói embarcação
- **WHEN** o ataque atinge a última posição intacta de uma embarcação
- **THEN** o resultado é embarcação destruída, identificando qual embarcação foi destruída

### Requirement: Célula já atacada não pode ser atacada novamente
Um ataque SHALL ser rejeitado quando a célula já tiver sido atacada.

#### Scenario: Ataque repetido
- **WHEN** uma coordenada já atacada é selecionada novamente
- **THEN** o ataque é rejeitado, o tabuleiro não muda e o turno é mantido

### Requirement: Embarcação destruída
Uma embarcação SHALL ser considerada destruída quando todas as suas posições tiverem sido atingidas.

#### Scenario: Embarcação parcialmente atingida
- **WHEN** parte das posições de uma embarcação foi atingida
- **THEN** a embarcação é informada como atingida, mas não como destruída

#### Scenario: Última posição atingida
- **WHEN** todas as posições de uma embarcação foram atingidas
- **THEN** a embarcação é informada como destruída

### Requirement: Acerto não revela posições restantes
O resultado de um ataque SHALL NOT revelar as demais posições da embarcação atingida.

#### Scenario: Acerto em embarcação com posições intactas
- **WHEN** um ataque acerta uma embarcação que ainda tem posições não atingidas
- **THEN** apenas a célula atacada é revelada

### Requirement: Frota eliminada
O sistema SHALL reconhecer quando todas as embarcações de uma frota estiverem destruídas.

#### Scenario: Frota com embarcação restante
- **WHEN** ao menos uma embarcação da frota não foi destruída
- **THEN** a frota é informada como não eliminada

#### Scenario: Última embarcação destruída
- **WHEN** a última embarcação intacta da frota é destruída
- **THEN** a frota é informada como eliminada
