# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```sh
pnpm dev          # start dev server
pnpm build        # type-check + production build
pnpm type-check   # run vue-tsc only
pnpm format       # prettier --write src/
```

There are no tests. The `lint` script (`run-s lint:*`) has no matching sub-scripts configured yet.

## Architecture

Personal portfolio for Aissam-Salman. Two routes, no backend — all project data is static JSON.

**Routing** (`src/router/index.ts`):
- `/` → `HomeView` — hero intro with the two most recent projects as cards
- `/work` → `WorkView` — full project list with a contact email copy action

**Data** (`src/data/projects.json`): Single source of truth for project entries. `HomeView` shows only the first two via `projects.json.slice(0, 2)`; `WorkView` renders all of them.

**Component conventions**:
- `src/components/Animations/Enter.vue` — wraps any element with a fade/scale-in entry animation (motion-v). Use it as a wrapper, not a layout element.
- `src/components/ProjectCard.vue` — card used on HomeView; WorkView has its own inline card markup.
- Radix-vue is used for accessible primitives (Toast in WorkView). Follow the same provider/root/viewport pattern when adding new ones.
- Pinia is installed but has no stores. Add stores under `src/stores/` if state is needed.

**Styling**: Tailwind CSS v4 via `@tailwindcss/vite` plugin. Import is `@import 'tailwindcss'` (no config file). The design is dark-only (`#0a0a0a` base), low-contrast whites (`white/5`, `white/10`) for borders and surfaces. Keep that aesthetic when adding UI.

**Deployment**: Vercel. `@vercel/speed-insights` is wired in `App.vue`.

**Path alias**: `@` → `src/`.

**Prettier config**: no semicolons, single quotes, 100-char print width.
