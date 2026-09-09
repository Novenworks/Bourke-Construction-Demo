import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/layout/page-hero";
import { processSteps, site } from "@/lib/site";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Our Process — Bourke Construction" },
      {
        name: "description",
        content:
          "Free in-home consultation, detailed estimate, CSLB-approved contract, dust control on site, daily cleaning, and a completion walkthrough.",
      },
    ],
  }),
  component: ProcessPage,
});

function ProcessPage() {
  return (
    <main>
      <PageHero
        kicker="Process"
        title="A sequence you can follow before anyone opens a wall"
        lede="The company describes a process refined through four decades of multi-national construction experience. Questions go to owner Ed Bourke."
        image="/images/remodel-living.jpg"
        imageAlt="Finished living room from a Bourke Construction remodel"
      />
      <section className="container-page py-14">
        <ol className="grid gap-6">
          {processSteps.map((step) => (
            <li
              key={step.n}
              className="grid gap-4 rounded-lg bg-cream p-6 shadow-[var(--shadow-border)] md:grid-cols-[6rem_1fr] md:items-start"
            >
              <p className="font-display text-4xl text-navy">{step.n}</p>
              <div>
                <h2 className="font-display text-2xl">{step.title}</h2>
                <p className="mt-2 text-ink-soft">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl">On the job</h2>
            <p className="mt-3 text-ink-soft">
              Drop cloths and plastic coverings protect the work area. The
              company states it uses a BuildClean dust-elimination system so
              indoor air stays safer during construction, and that the home is
              cleaned every day before the crew leaves.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl">In print</h2>
            <p className="mt-3 text-ink-soft">
              Bourke Construction was featured in a Journal of Light
              Construction article describing a Laguna Beach attic-to-rooftop
              deck conversion with Pacific views — a process write-up, not a
              marketing claim invented for this redesign.
            </p>
          </div>
        </div>
        <Button asChild className="mt-10">
          <Link to="/contact">Schedule a consultation</Link>
        </Button>
        <p className="mt-4 text-sm text-muted">
          Or call {site.phoneDisplay}.
        </p>
      </section>
    </main>
  );
}
