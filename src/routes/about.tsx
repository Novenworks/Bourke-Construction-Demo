import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/layout/page-hero";
import { site } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Bourke Construction" },
      {
        name: "description",
        content:
          "Family-owned Orange County remodeling company led by Ed Bourke, serving homeowners from Anaheim and Laguna Beach since 1996.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <main>
      <PageHero
        kicker="About"
        title="A family company that has been on Orange County jobs since 1996"
        lede="Bourke Construction Inc. is family-owned. Owner Ed Bourke opened the company after fifteen years of construction work in London. Combined, the team reports 75 years of construction experience."
        image="/images/addition-exterior.jpg"
        imageAlt="Residential exterior work by Bourke Construction"
      />
      <section className="container-page grid gap-12 py-14 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <h2 className="font-display text-3xl">The people named on the site</h2>
          <div className="mt-8 grid gap-6">
            {site.team.map((person) => (
              <article
                key={person.name}
                className="rounded-lg bg-cream p-6 shadow-[var(--shadow-border)]"
              >
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
                  {person.title}
                </p>
                <h3 className="mt-1 font-display text-2xl">{person.name}</h3>
                <p className="mt-3 text-ink-soft">{person.bio}</p>
              </article>
            ))}
          </div>
          <p className="mt-6 text-sm text-muted">
            Team photographs are not published on the current first-party site,
            so this page does not invent portraits.
          </p>
        </div>
        <aside className="lg:col-span-5">
          <div className="rounded-lg bg-navy p-6 text-cream">
            <h2 className="font-display text-2xl">License & offices</h2>
            <dl className="mt-5 space-y-3 text-sm">
              <div>
                <dt className="text-cream/55">CSLB</dt>
                <dd>
                  License #{site.license.number} · {site.license.classification}
                </dd>
              </div>
              <div>
                <dt className="text-cream/55">Status</dt>
                <dd>
                  {site.license.status} (verified {site.license.verifiedOn})
                </dd>
              </div>
              <div>
                <dt className="text-cream/55">Issued</dt>
                <dd>{site.license.issued}</dd>
              </div>
              <div>
                <dt className="text-cream/55">Licensed address</dt>
                <dd>{site.license.address}</dd>
              </div>
              <div>
                <dt className="text-cream/55">Offices named on the company site</dt>
                <dd>Anaheim and Laguna Beach</dd>
              </div>
            </dl>
            <a
              href={site.cslbCheck}
              className="mt-6 inline-block text-sm underline underline-offset-4"
              rel="noreferrer"
              target="_blank"
            >
              Verify the license on CSLB
            </a>
          </div>
          <div className="mt-4 rounded-lg bg-cream p-6 shadow-[var(--shadow-border)]">
            <h2 className="font-display text-2xl">What the company states</h2>
            <ul className="mt-4 space-y-2 text-sm text-ink-soft">
              <li>Open communication and honesty with clients.</li>
              <li>Supplier discounts on materials — you’ll pay what we pay.</li>
              <li>Complimentary, no-obligation in-home consultations.</li>
              <li>
                First-party about page: bonded and licensed NARI membership.
              </li>
              <li>
                Best of Houzz Service Award in 2026, eleven-year streak.
              </li>
            </ul>
          </div>
        </aside>
      </section>
      <section className="border-t border-border bg-cream py-14">
        <div className="container-page flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <p className="max-w-xl font-display text-3xl">
            Talk with Ed about the job you actually have.
          </p>
          <Button asChild>
            <Link to="/contact">Request an Estimate</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
