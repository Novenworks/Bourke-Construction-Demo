import { createFileRoute } from "@tanstack/react-router";
import { EstimateForm } from "@/components/estimate-form";
import { PageHero } from "@/components/layout/page-hero";
import { cities, site } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Request an Estimate — Bourke Construction" },
      {
        name: "description",
        content:
          "Call (714) 488-8325 or request a complimentary, no-obligation in-home consultation with Bourke Construction.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <main>
      <PageHero
        kicker="Contact"
        title="Request a complimentary in-home consultation"
        lede="The first-party conversion path is a free, no-obligation estimate. Call Ed Bourke directly, or use the demo form — it will not send a lead."
      />
      <section className="container-page grid gap-12 py-14 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <EstimateForm />
        </div>
        <aside className="lg:col-span-5 lg:col-start-8">
          <div className="rounded-lg bg-cream p-6 shadow-[var(--shadow-border)]">
            <h2 className="font-display text-2xl">Talk to the company</h2>
            <dl className="mt-5 space-y-4 text-sm">
              <div>
                <dt className="text-muted">Phone</dt>
                <dd>
                  <a href={site.phoneTel} className="text-lg font-medium text-navy">
                    {site.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-muted">Email</dt>
                <dd>
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </dd>
              </div>
              <div>
                <dt className="text-muted">Hours</dt>
                <dd>{site.hours}</dd>
              </div>
              <div>
                <dt className="text-muted">Offices</dt>
                <dd>Anaheim and Laguna Beach, Orange County</dd>
              </div>
              <div>
                <dt className="text-muted">Licensed address (CSLB)</dt>
                <dd>{site.license.address}</dd>
              </div>
            </dl>
          </div>
          <p className="mt-6 text-xs uppercase tracking-[0.16em] text-muted">
            Service area
          </p>
          <p className="mt-2 text-sm text-ink-soft">{cities.join(" · ")}</p>
        </aside>
      </section>
    </main>
  );
}
