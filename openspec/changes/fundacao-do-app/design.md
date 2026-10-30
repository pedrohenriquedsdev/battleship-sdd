# Design

## Context

O repositório está com `README.md`, `AGENTS.md`, `.gitignore`, `.opencode/` e `openspec/` versionados e sem `package.json`. O scaffold precisa conviver com esses arquivos já existentes, e o Angular 22.2 já vem com detecção de mudanças zoneless e Vitest como runner padrão. Ver `proposal.md` — Why para a motivação.

## Goals / Non-Goals

**Goals:**

- Workspace Angular 22.2 executável, com build, teste e lint verdes, na raiz do repositório.
- Tailwind 4 funcionando por PostCSS, sem `tailwind.config.js`.
- Shell com layout base responsivo pronto para receber as telas das próximas fases.
- Ferramental (lint/format/test) configurado antes de qualquer regra de jogo.

**Non-Goals:**

- Nenhuma regra de jogo, tabuleiro ou estado de partida.
- Nenhum teste E2E; a verificação de ponta a ponta acontece por smoke manual com Playwright.
- Deploy, CI e Docker ficam fora desta change.

## Decisions

**1. Scaffold em diretório temporário e cópia controlada, em vez de `ng new` na raiz.**
O CLI em diretório não vazio pode sobrescrever `README.md`, `.gitignore` e criar conflitos com `AGENTS.md`. Alternativa descartada: `ng new` direto na raiz com merge manual, mais sujeito a perda de conteúdo.

**2. Pacote gerado em subpasta e promovido para a raiz na mesma tarefa.**
Mantém histórico legível e evita que arquivos do projeto fiquem espalhados. Alternativa descartada: manter o app em `app/` e ajustar todas as ferramentas, o que contraria os scripts do README (`npm start` na raiz).

**3. `.gitignore` mesclado, nunca substituído.**
O arquivo atual já cobre `.key`, `__screenshots__/` e caches do Angular; o gerado pelo CLI é um subconjunto. A tarefa compara e adiciona apenas linhas ausentes.

**4. Tailwind 4 por PostCSS.**
`npm i tailwindcss @tailwindcss/postcss postcss`, `.postcssrc.json` com `@tailwindcss/postcss` e `@import "tailwindcss";` no `styles.css`. Sem arquivo de configuração JS. Alternativa descartada: Tailwind 3 com `tailwind.config.js` e diretivas `@tailwind`, incompatível com a versão exigida.

**5. Zoneless explícito na documentação, não no código.**
Angular 21+ já é zoneless por padrão; a única ação é não incluir Zone.js em `polyfills` e registrar a decisão no README. Alternativa descartada: chamar `provideZonelessChangeDetection()` manualmente, redundante.

**6. Estado e ícones isolados no shell.**
`AppComponent` apenas compõe layout e um placeholder; `PartidaStore` e componentes de jogo entram nas fases seguintes. `lucide-angular` é instalado agora, mas ícones são importados por componente (tree-shaking).

**7. Testes de fumaça com Vitest + jsdom.**
Um spec do shell garante que a cadeia de build/teste funciona antes das regras. Alternativa descartada: Karma/Jasmine, mais lento e fora do padrão do Angular 22.

## Risks / Trade-offs

- **CLI sobrescrever arquivos versionados** → scaffold fora da raiz e cópia seletiva, revisando `git status` antes de concluir a tarefa.
- **Tailwind 4 sem classes aplicadas por falta de content detection** → validar no shell com uma classe utilitária visível e um teste manual no navegador.
- **Versões flutuantes** → fixar `@angular/*` em `~22.2.0` no `package.json` e registrar a versão do CLI usada.
- **Lint bloqueando a fase seguinte** → rodar `npm run lint` e `npm run format:check` como critério de aceite desta change.
- **Node local 24.21.0** → atende ao `engines` do CLI 22.2.5 (`^24.15.0`); nenhuma ação necessária, apenas registrar.

## Migration Plan

1. Gerar o workspace, promover para a raiz e confirmar que os arquivos versionados permanecem intactos.
2. Instalar e configurar Tailwind, Lucide, ESLint e Prettier.
3. Validar `npm start`, `npm test`, `npm run lint` e `npm run build`.
4. Rollback: remover os arquivos gerados e restaurar `.gitignore` do histórico, já que nada de fases anteriores depende desta change.
