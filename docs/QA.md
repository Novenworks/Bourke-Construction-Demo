# QA notes

Checked 2026-09-08 against the live preview and the production build (`npm run preview` on :8081). Production body hash matched the dev baseline. No console/page errors. No horizontal overflow at 1280 or 390.

| Check | Desktop ~1440 | Mobile ~390 |
| --- | --- | --- |
| Header / menu | Pass | Pass (sheet via hamburger) |
| Hero crop | Laguna deck readable | Pass |
| Headline wrap | Pass | Pass |
| CTA visibility | Estimate + View work + phone | Estimate in hero; phone in header |
| Service cards | 3-col | 1-col, no overflow |
| Image crops | Pass | Pass |
| Forms / 44px targets | Pass | Pass |
| Footer | Pass | Pass |
| `/outreach` unlinked + noindex | Pass | Pass |
| Broken images | None | None |
| Console | Clean | Clean |

Auth/db off. Estimate form remains a truthful demo (“This is a design demo”).
