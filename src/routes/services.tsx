import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/layout/page-hero";
import { secondaryServices, services, site } from "@/lib/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Bourke Construction" },
      {
        name: "description",
        content:
          "Kitchens, bathrooms, additions, ADUs, decks, remodeling, roofing, and painting for Orange County homeowners.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <main>
      <PageHero
        kicker="Services"
        title="Remodeling, additions, and the work around them"
        lede="Bourke Construction is a general contractor for residential work in Orange County — interiors, exteriors, and the outdoor rooms in between."
        image="/images/kitchen-dark-cabinets.jpg"
        imageAlt="Kitchen with dark cabinetry completed by Bourke Construction"
      />
      <section className="container-page py-12 md:py-16">
        <div className="grid gap-16">
          {services.map((s, i) => (
            <article
              id={s.slug}
              key={s.slug}
              className="scroll-mt-24 grid gap-8 lg:grid-cols-12 lg:items-center"
            >
              <div
                className={
                  i % 2 === 1
                    ? "lg:col-span-6 lg:order-2"
                    : "lg:col-span-6"
                }
              >
                <img
                  src={s.image}
                  alt={s.imageAlt}
                  className="aspect-[4/3] w-full rounded-lg object-cover"
                />
              </div>
              <div className="lg:col-span-6">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
                  0{i + 1}
                </p>
                <h2 className="mt-2 font-display text-3xl md:text-4xl">
                  {s.name}
                </h2>
                <p className="mt-4 text-ink-soft">{s.body}</p>
                <Button asChild className="mt-6" variant="outline">
                  <Link to="/work">See related work</Link>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="border-t border-border bg-cream py-16">
        <div className="container-page">
          <h2 className="font-display text-3xl">Related capabilities</h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {secondaryServices.map((s) => (
              <li
                key={s.name}
                className="rounded-md bg-paper p-5 shadow-[var(--shadow-border)]"
              >
                <p className="font-medium">{s.name}</p>
                <p className="mt-1 text-sm text-muted">{s.note}</p>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-muted">
            Ready to talk through a project? Call{" "}
            <a href={site.phoneTel} className="text-navy underline">
              {site.phoneDisplay}
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
