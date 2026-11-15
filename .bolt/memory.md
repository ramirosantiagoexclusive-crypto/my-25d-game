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
- Build script changed from `vite build` to `npx vite build` because the deployment shell could not resolve the locally installed `vite` binary directly.
- Deployment environment runs `npm run build` to produce the production bundle.

## Open questions & assumptions

- Deployment platform/provider is unknown.
- Framework used alongside Vite (e.g., React, Vue, Vanilla) is not yet confirmed.
- Project purpose, content, and target audience remain unspecified.