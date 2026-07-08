# Datum Labs — website

The Datum Labs marketing site: **https://www.datumlab.xyz**

Next.js 15 (App Router) · React 19 · Tailwind v4 · Sanity (blog) · MDX (reports) · Vercel.

## How to publish

- **Report** → add an MDX file to `content/reports/`, commit, push. Full step-by-step (frontmatter, charts, components, gotchas): **[AGENTS.md](AGENTS.md)**
- **Blog / case study / research** → https://www.datumlab.xyz/studio (Sanity, no code)

## Deploy

`git push origin main` → Vercel auto-deploys (~90s). **Do not use the `vercel` CLI.**

## Docs

- **[AGENTS.md](AGENTS.md)** — canonical guide (written for humans AND coding agents)
- **[docs/HANDBOOK.md](docs/HANDBOOK.md)** — team handbook (newsletter, gate, SEO, design system)
- **[content/reports/README.md](content/reports/README.md)** — report authoring quick reference

## Run locally

```bash
pnpm install
pnpm dev   # http://localhost:3000 — needs .env.local, see AGENTS.md
```
