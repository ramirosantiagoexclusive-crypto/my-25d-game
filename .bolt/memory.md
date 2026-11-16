# Project memory

## Product intent & audience

- Web application project named `voroniy-kamen` (v1.0.0).
- Currently in deployment phase; core functionality and audience not yet described.

## Brand personality & voice

- Not yet inferred from available context.

## Visual design & UX direction

- Not yet inferred from available context; no UI/design details provided.

## Decisions, constraints & rationale

- Build tool: **Vite**.
- Package manager: **npm**.
- Deployment environment (Bolt hosting) runs `npm run build` and serves the `dist/` folder.
- Deployment environment has **no network access**; `npm install` fails with "Failed to fetch".
- Deployment environment starts fresh without `node_modules`.
- Build script changed to a custom `build.mjs` that checks for `node_modules/vite`: if present, runs Vite build normally; if absent, falls back to the pre-built `dist/` folder already in the repo.
- Project maintains a pre-built `dist/` folder committed to the repo as a deployment fallback.

## Open questions & assumptions

- Deployment platform is Bolt hosting.
- Framework used alongside Vite (e.g., React, Vue, Vanilla) is not yet confirmed.
- Project purpose, content, and target audience remain unspecified.
- Whether the pre-built `dist/` fallback stays in sync with source changes is not verified.