# Bourke Construction — speculative redesign

Router for future agents. This is a **Novenworks speculative demo**, not a client engagement.

## Canonical docs

| Doc | What it is |
| --- | --- |
| [README.md](./README.md) | What this is, setup, disclosure |
| [CHANGELOG.md](./CHANGELOG.md) | Decisions and rule changes |
| [docs/RESEARCH.md](./docs/RESEARCH.md) | Authoritative facts, CSLB, agency check |
| [docs/ASSET-INVENTORY.md](./docs/ASSET-INVENTORY.md) | First-party assets acquired |
| [docs/ASSET-PLAN.md](./docs/ASSET-PLAN.md) | Asset-to-section mapping |
| [docs/QA.md](./docs/QA.md) | Responsive QA notes |
| [docs/OUTREACH.md](./docs/OUTREACH.md) | Pitch, email, what not to say |
| [docs/CAPTURE.md](./docs/CAPTURE.md) | Before/after capture package |
| `/outreach` | Unlinked operator brief (noindex) |

## Stack (this environment)

TanStack Start + Vite + React 19 + Tailwind v4. Preview must listen on `0.0.0.0:8080` via `npm run dev` / `startup.sh`. Auth and database are off.

Do not swap to Next.js in this sandbox. The original prospect brief asked for App Router; the live preview contract here is Vite/TanStack Start.

## Hard gates (do not regress)

1. **Facts:** first-party > CSLB > reputable third-party > omit. No invented reviews, ROI, ratings, warranties, staff counts, or addresses.
2. **Assets:** real Bourke photography only for completed-work claims. Inventory and plan live in `docs/`.
3. **CTA:** phone `(714) 488-8325` is live. The estimate form is demo-only and must say so.
4. **`/outreach`:** unlinked, `noindex`, not in nav/footer/sitemap.
5. **Identity:** keep the Bourke wordmark. This is a redesign, not a rebrand.

## Commands

```
npm run dev          # preview on :8080
npm run build
npm run typecheck
```
