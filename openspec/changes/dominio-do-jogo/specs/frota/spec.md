# Spec Delta

## Purpose

Define a composição fixa da frota, as regras que tornam um posicionamento válido e a distribuição automática das embarcações do computador.

## ADDED Requirements

### Requirement: Composição fixa da frota
Cada participante SHALL possuir exatamente uma frota com porta-aviões (5), encouraçado (4), cruzador (3), submarino (3) e destroyer (2).

#### Scenario: Frota completa
- **WHEN** a frota contém as cinco embarcações previstas, todas posicionadas
- **THEN** o sistema a considera completa para iniciar a batalha

#### Scenario: Frota incompleta
- **WHEN** alguma das cinco embarcações não foi posicionada
- **THEN** o sistema considera a frota incompleta e impede o início da batalha

### Requirement: Embarcação ocupa posições consecutivas em linha reta
Uma embarcação SHALL ocupar posições consecutivas na horizontal ou na vertical, em quantidade igual ao seu tamanho.

#### Scenario: Posicionamento em linha
- **WHEN** o cruzador (3) é posicionado em `B2`, `B3` e `B4`
- **THEN** o posicionamento é aceito

#### Scenario: Posicionamento em diagonal
- **WHEN** o cruzador (3) é posicionado em `B2`, `B3` e `C4`
- **THEN** o posicionamento é rejeitado

### Requirement: Posicionamento não pode ultrapassar o tabuleiro
Nenhuma posição de uma embarcação SHALL ficar fora do tabuleiro.

#### Scenario: Porta-aviões a partir de A8
- **WHEN** o porta-aviões (5) é posicionado horizontalmente a partir de `A8`
- **THEN** o posicionamento é rejeitado porque ultrapassa a borda direita

### Requirement: Posicionamento não pode sobrepor outra embarcação
Duas embarcações SHALL NOT ocupar a mesma célula.

#### Scenario: Sobreposição rejeitada
- **WHEN** a posição de uma embarcação coincide com uma célula já ocupada
- **THEN** o posicionamento é rejeitado sem alterar o posicionamento válido existente

### Requirement: Embarcações podem ficar encostadas
Embarcações SHALL poder ocupar células adjacentes, inclusive na diagonal, desde que não compartilhem célula alguma.

#### Scenario: Embarcações lado a lado
- **WHEN** duas embarcações ocupam células vizinhas sem compartilhar nenhuma célula
- **THEN** ambas permanecem posicionadas

#### Scenario: Embarcações em diagonal
- **WHEN** uma embarcação ocupa `B2` e outra ocupa `C3`
- **THEN** ambas permanecem posicionadas

### Requirement: Distribuição automática da frota
O sistema SHALL gerar a frota do computador automaticamente, respeitando as regras de posicionamento, sem intervenção do jogador.

#### Scenario: Frota gerada válida
- **WHEN** a batalha é iniciada
- **THEN** o computador recebe as cinco embarcações posicionadas dentro do tabuleiro e sem sobreposição

#### Scenario: Geração reproduzível
- **WHEN** a geração usa uma fonte de aleatoriedade determinística
- **THEN** a mesma fonte produz sempre a mesma frota
