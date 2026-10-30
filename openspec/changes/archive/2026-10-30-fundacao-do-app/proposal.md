# Proposal

## Why

O repositório tem apenas o enunciado, as diretrizes de agentes e a configuração do OpenSpec: não existe aplicação executável. Sem um workspace Angular instalado, compilando e testado, nenhuma fase seguinte pode ser implementada nem verificada.

## What Changes

- Criar o workspace Angular 22.2 na raiz do repositório, preservando `README.md`, `AGENTS.md`, `.opencode/` e `openspec/`.
- Configurar Tailwind CSS 4 via PostCSS (`.postcssrc.json` + `@import "tailwindcss"`) e integrar `@lucide/angular`.
- Configurar ESLint (`angular-eslint`), Prettier e os scripts npm descritos no README (`start`, `test`, `build`, `lint`, `format`, `format:check`).
- Manter detecção de mudanças **zoneless** (padrão no Angular 22) com componentes standalone e signals.
- Criar o shell da aplicação com layout base responsivo e um placeholder da tela inicial.
- Adicionar teste de fumaça com Vitest (runner padrão) cobrindo a criação do shell.
- Esta change é de infraestrutura: não altera comportamento de jogo e por isso declara `skip_specs: true`.

## Capabilities

### New Capabilities

- Nenhuma. Change de tooling/scaffold, sem requisito de comportamento observável.

### Modified Capabilities

- Nenhuma.

## Impact

- **Novos arquivos:** `package.json`, `package-lock.json`, `angular.json`, `tsconfig*.json`, `src/` (shell, estilos, assets), `.postcssrc.json`, `eslint.config.js`, `.prettierrc`, configuração do Vitest.
- **Arquivos existentes:** `.gitignore` pode ser mesclado com o gerado pelo CLI, sem perder as entradas atuais; `README.md` e `AGENTS.md` permanecem intactos.
- **Dependências:** `@angular/core@22.2.x`, `@angular/cli@22.2.x`, `tailwindcss@4`, `@tailwindcss/postcss`, `@lucide/angular`, `angular-eslint`, `prettier`, `vitest`.
- **Ambiente:** Node local 24.21.0 atende ao `engines` do CLI 22.2.5 (`^24.15.0`).
