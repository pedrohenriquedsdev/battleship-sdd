# Tasks

## 1. Scaffold do workspace

- [x] 1.1 Gerar o workspace Angular 22.2 em diretório temporário (`npx @angular/cli@22.2 new batalha-naval --style=css --routing=false --ssr=false --package-manager=npm`) e verificar que o projeto compila no diretório temporário
- [x] 1.2 Promover os arquivos gerados para a raiz do repositório e verificar com `git status` que `README.md`, `AGENTS.md`, `.opencode/` e `openspec/` permanecem inalterados
- [x] 1.3 Mesclar as entradas ausentes do `.gitignore` gerado no `.gitignore` existente e verificar que `*.key` e `__screenshots__/` continuam presentes
- [x] 1.4 Fixar `@angular/*` em `~22.2.0` no `package.json` e confirmar com `npm ls @angular/core` a versão instalada
- [x] 1.5 Confirmar que o `polyfills` do `angular.json` não inclui `zone.js` e registrar a decisão de zoneless em uma nota no `README.md`

## 2. Estilização e ícones

- [x] 2.1 Instalar `tailwindcss`, `@tailwindcss/postcss` e `postcss`, criar `.postcssrc.json` e adicionar `@import "tailwindcss";` em `src/styles.css`, verificando que o build aplica uma classe utilitária visível no shell
- [x] 2.2 Instalar `@lucide/angular` e renderizar um ícone no shell, verificando na tela que o SVG aparece e que o bundle não importa o pacote inteiro
- [x] 2.3 Definir tokens visuais base (cores de água, acerto, erro, embarcação, foco) em `src/styles.css` e verificar que são consumíveis por classes utilitárias

## 3. Shell da aplicação

- [x] 3.1 Substituir o template gerado por um shell com cabeçalho, área principal e rodapé responsivos, verificando o layout em 360 px e 1280 px
- [x] 3.2 Criar o placeholder da tela inicial com textos em português e verificar que nenhum texto de exemplo do CLI permanece na interface
- [x] 3.3 Ajustar `index.html` (título, `lang="pt-BR"`, meta viewport) e verificar no navegador que a página não rola horizontalmente no celular

## 4. Qualidade de código

- [x] 4.1 Configurar ESLint com `angular-eslint` e o script `lint`, verificando que `npm run lint` passa sem avisos no código gerado
- [x] 4.2 Configurar Prettier (`.prettierrc`, `.prettierignore`) e os scripts `format` e `format:check`, verificando que `npm run format:check` passa
- [x] 4.3 Escrever um teste de fumaça do shell com Vitest e verificar que `npm test` executa e passa
- [x] 4.4 Ajustar os scripts do `package.json` para corresponder exatamente ao README (`start`, `test`, `build`, `lint`, `format`, `format:check`) e verificar cada comando listado em `npm run`

## 5. Verificação de integração

- [x] 5.1 Executar `npm run build` e verificar que o artefato é gerado em `dist/` sem erros
- [x] 5.2 Executar `npm start` e verificar no navegador (Playwright em modo headless) que a aplicação carrega sem erros no console
- [x] 5.3 Executar `npm run lint`, `npm run format:check` e `npm test` em sequência e verificar que todos terminam com código de saída 0

## Workflow follow-up

- Arquivar a change quando as quatro verificações acima estiverem verdes.
