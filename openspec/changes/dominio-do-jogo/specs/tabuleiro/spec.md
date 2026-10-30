# Spec Delta

## Purpose

Define o tabuleiro 10x10 do jogo, a identificação canônica de coordenadas e o estado de ocupação e de ataque de cada célula, servindo de base para posicionamento de frota e combate.

## ADDED Requirements

### Requirement: Tabuleiro com dez linhas e dez colunas
O tabuleiro SHALL possuir exatamente 10 linhas identificadas de `A` a `J` e 10 colunas identificadas de `1` a `10`, totalizando 100 células.

#### Scenario: Coordenada válida no tabuleiro
- **WHEN** uma coordenada como `A1`, `C7` ou `J10` é informada
- **THEN** o sistema a resolve para a célula correspondente do tabuleiro

#### Scenario: Coordenada fora dos limites
- **WHEN** uma coordenada como `K1`, `A0` ou `A11` é informada
- **THEN** o sistema a rejeita como fora do tabuleiro

### Requirement: Coordenada canônica
O sistema SHALL representar cada coordenada como uma letra de linha maiúscula seguida de número de coluna sem zeros à esquerda.

#### Scenario: Normalização de coordenada
- **WHEN** uma coordenada é recebida com letra minúscula, como `c7`
- **THEN** o sistema a normaliza para `C7` antes de qualquer validação

#### Scenario: Formato inválido
- **WHEN** um texto como `A-1` ou `1A` é informado como coordenada
- **THEN** o sistema o rejeita como coordenada inválida

### Requirement: Estado de ocupação da célula
Cada célula SHALL indicar se está vazia ou ocupada por uma embarcação, identificando qual embarcação a ocupa.

#### Scenario: Célula ocupada
- **WHEN** uma embarcação é posicionada sobre uma célula
- **THEN** a célula passa a informar a embarcação ocupante

#### Scenario: Célula vazia
- **WHEN** nenhuma embarcação ocupa a célula
- **THEN** a célula é informada como água

### Requirement: Estado de ataque da célula
Cada célula SHALL registrar se foi atacada e, em caso positivo, se o ataque resultou em água ou acerto.

#### Scenario: Célula ainda não atacada
- **WHEN** nenhum ataque foi realizado na célula
- **THEN** a célula é informada como não atacada

#### Scenario: Célula atacada sem embarcação
- **WHEN** um ataque atinge uma célula vazia
- **THEN** a célula passa a ser informada como água

#### Scenario: Célula atacada com embarcação
- **WHEN** um ataque atinge uma célula ocupada
- **THEN** a célula passa a ser informada como acerto
