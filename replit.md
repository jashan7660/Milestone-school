# The Milestone Sr. Sec. School

A React + Vite school website for The Milestone Sr. Sec. School with multiple pages covering academics, faculty, facilities, achievements, gallery, and more.

## Run & Operate

- **Dev server**: `pnpm --filter @workspace/milestone-school run dev` (port 23923)
- **Build**: `pnpm --filter @workspace/milestone-school run build`
- **Install all deps**: `pnpm install` (from workspace root)

Required env vars (set by artifact config):
- `PORT=23923`
- `BASE_PATH=/`

## Stack

- React 19, TypeScript, Vite 6
- Tailwind CSS v4 + tw-animate-css
- Wouter (routing), Framer Motion (animations)
- Radix UI (components), shadcn/ui patterns
- pnpm monorepo workspace

## Where things live

- Website: `artifacts/milestone-school/src/`
- Pages: `artifacts/milestone-school/src/pages/`
- Components: `artifacts/milestone-school/src/components/`
- Styles: `artifacts/milestone-school/src/index.css`
- Workspace config: `pnpm-workspace.yaml`, `tsconfig.base.json`

## Architecture decisions

- pnpm monorepo with catalog for shared dep versions
- Artifact-based project structure (milestone-school, api-server, mockup-sandbox)
- Vite dev server runs on port 23923 (set via PORT env var from artifact config)
- Google Fonts @import must come first in index.css before tailwind imports

## Product

Multi-page school website with: Home, About, Academics, Faculty, Facilities, Achievements, Gallery, Divisions, Directors, Our Story, Tie-ups pages.

## Gotchas

- `tsconfig.base.json` must exist at workspace root — all packages extend it
- Google Fonts `@import` must be the first line in `index.css` (PostCSS requirement)
- Cartographer plugin shows `traverse is not a function` warnings — non-critical, site still works
