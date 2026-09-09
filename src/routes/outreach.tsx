import { createFileRoute } from '@tanstack/react-router'
import type { ReactNode } from "react";
import { site } from "@/lib/site";

export const Route = createFileRoute("/outreach")({
  head: () => ({
    meta: [
      { title: "Outreach brief — Bourke Construction (operator only)" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: OutreachPage,
});

function OutreachPage() {
  const captures = [
    {
      file: "before-original-desktop.png",
      label: "BEFORE — live original site, desktop",
    },
    { file: "after-desktop.png", label: "AFTER — redesign, desktop" },
    { file: "after-mobile.png", label: "AFTER — redesign, mobile" },
    { file: "after-scroll.gif", label: "AFTER — scrolling GIF" },
    { file: "after-scroll.mp4", label: "AFTER — scrolling MP4" },
  ];

  return (
    <main className="bg-cream">
      <article className="container-page max-w-4xl py-12 md:py-16">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
          Operator only · unlinked · noindex
        </p>
        <h1 className="mt-3 font-display text-4xl md:text-5xl">
          Bourke Construction — speculative outreach brief
        </h1>
        <p className="mt-4 text-ink-soft">
          Novenworks built this redesign unsolicited. The company is not a
          Novenworks client. Do not imply otherwise.
        </p>

        <Section title="Business snapshot">
          <ul className="grid gap-2 text-sm">
            <Li k="Legal name" v={site.legalName} />
            <Li k="Trade" v="Residential remodeling and general contracting" />
            <Li k="Area" v="Anaheim / Laguna Beach / Orange County" />
            <Li
              k="Original site"
              v={
                <a className="underline" href={site.originalUrl}>
                  {site.originalUrl}
                </a>
              }
            />
            <Li k="Phone" v={site.phoneDisplay} />
            <Li k="Email" v={site.email} />
            <Li k="Hours" v={site.hours} />
            <Li
              k="CSLB"
              v={`#${site.license.number} · ${site.license.classification} · ${site.license.status} (checked ${site.license.verifiedOn})`}
            />
            <Li k="Owner" v="Ed Bourke (Edmund James Bourke)" />
            <Li k="PM named on site" v="Patrick Bourke" />
            <Li k="GitHub" v={<a className="underline" href="https://github.com/Novenworks/Bourke-Construction-Demo">Novenworks/Bourke-Construction-Demo</a>} />
          </ul>
        </Section>

        <Section title="Agency sanity check">
          <p>
            Rechecked the live footer, contact page, and Weebly source on
            September 8, 2026. The current site is a Weebly build. No “designed
            by,” agency, or retained-studio credit is present. No disqualifying
            current agency relationship was identified. Do not claim “they have
            no web team” as a fact — only that no agency is credited.
          </p>
        </Section>

        <Section title="Original-site observations (real)">
          <ol className="list-decimal space-y-3 pl-5">
            <li>
              Longevity, Houzz streak, and the Laguna Beach / Azek deck are the
              strongest proof on the site, but they compete with a long
              undifferentiated service dump and Weebly chrome.
            </li>
            <li>
              Project photography exists in volume (kitchens, baths, ADUs,
              decks) and is better than the template around it. Galleries are
              hard to scan; images lack captions and hierarchy.
            </li>
            <li>
              The primary conversion path (free in-home estimate) is present,
              but the homepage hero does not hold a single clear job-to-be-done
              for a homeowner deciding between kitchen, addition, ADU, or deck.
            </li>
            <li>
              Trust assets are fragmented: Houzz badges, Angi marks, a GC
              Magazine blurb, ChatGPT chat prompt, and a prices page that still
              says “coming soon.”
            </li>
            <li>
              Mobile composition of the current Weebly layout is cramped, with
              stacked widgets rather than a designed reading path.
            </li>
          </ol>
        </Section>

        <Section title="What this redesign actually changed">
          <ol className="list-decimal space-y-3 pl-5">
            <li>
              <strong>Clarity:</strong> one homepage story — OC remodeling since
              1996 — with services grouped by homeowner decisions, not a
              40-item footer list in the hero.
            </li>
            <li>
              <strong>Visual credibility:</strong> first-party project photos at
              full width, led by the Laguna Beach deck and kitchen work.
            </li>
            <li>
              <strong>Trust:</strong> CSLB #717199 verified current/active,
              Houzz Service streak stated as the company states it, reviews
              only when traceable to Houzz.
            </li>
            <li>
              <strong>Conversion:</strong> persistent phone + Request an
              Estimate, with a form that honestly admits it is a demo.
            </li>
            <li>
              <strong>Mobile:</strong> 44px targets, no icon-grid clutter, photo
              cards that crop cleanly at ~390px.
            </li>
          </ol>
        </Section>

        <Section title="Three strongest talking points">
          <ol className="list-decimal space-y-3 pl-5">
            <li>
              The business already has the proof (1996, Houzz Service streak,
              Azek national deck, real kitchens/ADUs). The current site does
              not sequence that proof for a coastal OC homeowner.
            </li>
            <li>
              “You’ll pay what we pay” on materials is a rare, specific
              differentiator buried in a paragraph. It deserves a quiet, direct
              sentence — not a slogan overlay.
            </li>
            <li>
              Family ownership (Ed and Patrick) plus a documented process
              (dust control, daily clean, CSLB contract) is more persuasive
              than “#1 remodeling contractor” as a title tag.
            </li>
          </ol>
        </Section>

        <Section title="Personalization hooks">
          <ul className="list-disc space-y-2 pl-5">
            <li>
              The Laguna Beach Azek deck — still the most distinctive project
              on the site, including national campaign placement.
            </li>
            <li>
              Ed’s London years before 1996, which the about page already
              publishes and almost no competing OC remodeler can say.
            </li>
            <li>
              Dual offices (Anaheim + Laguna Beach) matching north/south OC
              work without pretending they are a regional chain.
            </li>
          </ul>
        </Section>

        <Section title="What not to say">
          <ul className="list-disc space-y-2 pl-5">
            <li>Do not insult the Weebly site, the designer, or any agency.</li>
            <li>Do not claim Novenworks was hired, retained, or partnered.</li>
            <li>
              Do not claim ownership of Bourke photography, Houzz badges, or
              the wordmark.
            </li>
            <li>
              Do not fabricate ROI, lead lift, SEO rankings, review counts
              beyond what Houzz/first-party publish, staff size, or warranty
              terms. A lifetime workmanship warranty appears on some
              third-party profiles, not as a first-party homepage claim — omit
              it unless they volunteer it.
            </li>
            <li>
              Do not repeat “Orange County’s #1 remodeling contractor” as if it
              were independently verified.
            </li>
            <li>
              Do not invent a Laguna Beach street address. First-party copy
              names the city; CSLB lists the Anaheim licensed address.
            </li>
            <li>
              Do not promise appointment availability or that the demo form
              emails the company.
            </li>
          </ul>
        </Section>

        <Section title="Subject lines">
          <ol className="list-decimal space-y-2 pl-5">
            <li>
              The Azek deck is better than the website around it
            </li>
            <li>
              A speculative homepage for Bourke Construction (since 1996)
            </li>
            <li>
              Ed — three decades of OC work, one clearer first screen
            </li>
          </ol>
        </Section>

        <Section title="Cold email">
          <pre className="whitespace-pre-wrap rounded-lg bg-paper p-5 text-sm leading-relaxed text-ink-soft">
            {`Hi Ed,

I spent time on bourkeconstructionoc.com this week. The thing that stuck was the gap between the work itself — the Laguna Beach deck that landed in Azek’s national campaign, the kitchens and ADUs, the eleven-year Houzz Service streak — and how hard that story is to see on the current site.

Novenworks built a speculative redesign. Nobody hired us. It uses your photography and your facts (including CSLB license 717199, checked current). The point was to show what the same company looks like when the first screen is the work and the conversion path, not the template.

If it’s useful as a conversation piece, I’m happy to walk through it. If not, no harm done — the live site stays yours.

Best`}
          </pre>
        </Section>

        <Section title="Follow-up">
          <pre className="whitespace-pre-wrap rounded-lg bg-paper p-5 text-sm leading-relaxed text-ink-soft">
            {`Hi Ed — short follow-up on the speculative Bourke Construction homepage. Still sitting here if you want a look; still not a pitch that you “need” a new site. Happy to send the link again or drop it.`}
          </pre>
        </Section>

        <Section title="Capture package">
          <p className="mb-4 text-sm text-muted">
            Files live at <code>/outreach/…</code> on this deployment.
          </p>
          <div className="grid gap-6">
            {captures.map((c) => (
              <figure key={c.file} className="rounded-lg bg-paper p-4">
                <figcaption className="mb-3 text-sm font-medium">
                  {c.label}{" "}
                  <a
                    className="ml-2 text-navy underline"
                    href={`/outreach/${c.file}`}
                  >
                    Open file
                  </a>
                </figcaption>
                {c.file.endsWith(".mp4") ? (
                  <video
                    src={`/outreach/${c.file}`}
                    controls
                    className="w-full rounded-md bg-ink"
                  />
                ) : c.file.endsWith(".gif") ? (
                  <img
                    src={`/outreach/${c.file}`}
                    alt={c.label}
                    className="w-full rounded-md"
                  />
                ) : (
                  <img
                    src={`/outreach/${c.file}`}
                    alt={c.label}
                    className="w-full rounded-md"
                  />
                )}
              </figure>
            ))}
          </div>
        </Section>
      </article>
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="mt-12 border-t border-border pt-8">
      <h2 className="font-display text-2xl">{title}</h2>
      <div className="mt-4 space-y-3 text-ink-soft">{children}</div>
    </section>
  );
}

function Li({ k, v }: { k: string; v: ReactNode }) {
  return (
    <li className="grid gap-1 sm:grid-cols-[12rem_1fr]">
      <span className="text-muted">{k}</span>
      <span>{v}</span>
    </li>
  );
}
