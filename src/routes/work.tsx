import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHero } from "@/components/layout/page-hero";
import { Button } from "@/components/ui/button";
import { projects, services } from "@/lib/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Our Work — Bourke Construction" },
      {
        name: "description",
        content:
          "Project photography from Bourke Construction: kitchens, bathrooms, decks, ADUs, additions, and remodels across Orange County.",
      },
    ],
  }),
  component: WorkPage,
});

const filters = [
  { id: "all", label: "All work" },
  ...services.map((s) => ({ id: s.slug, label: s.name })),
] as const;

function WorkPage() {
  const [filter, setFilter] = useState<string>("all");
  const list = useMemo(
    () =>
      filter === "all"
        ? projects
        : projects.filter((p) => p.category === filter),
    [filter],
  );

  return (
    <main>
      <PageHero
        kicker="Gallery"
        title="Real projects, photographed as they stand"
        lede="Every image on this site comes from Bourke Construction’s own pages — kitchens, baths, the Laguna Beach deck, ADUs, and additions. Nothing here is stock."
        image="/images/kitchen-white-classic.jpg"
        imageAlt="White kitchen completed by Bourke Construction"
      />
      <section className="container-page py-10 md:py-14">
        <div className="flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setFilter(f.id)}
              className={cn(
                "inline-flex h-10 items-center rounded-full px-4 text-sm font-medium transition-colors duration-150",
                filter === f.id
                  ? "bg-navy text-cream"
                  : "bg-cream text-ink-soft hover:bg-paper-2",
              )}
            >
              {f.label}
            </button>
          ))}
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => (
            <figure
              key={p.id}
              className="overflow-hidden rounded-lg bg-cream shadow-[var(--shadow-border)]"
            >
              <img
                src={p.image}
                alt={p.alt}
                className="aspect-[4/3] w-full object-cover"
              />
              <figcaption className="p-4">
                <p className="font-display text-xl">{p.title}</p>
                <p className="mt-1 text-sm text-muted">
                  {p.place}
                  {p.note ? ` · ${p.note}` : ""}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-12 rounded-lg bg-navy p-8 text-cream md:flex md:items-center md:justify-between">
          <p className="font-display text-2xl md:text-3xl">
            Planning something similar in Orange County?
          </p>
          <Button asChild variant="invert" className="mt-4 md:mt-0">
            <Link to="/contact">Request an Estimate</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
