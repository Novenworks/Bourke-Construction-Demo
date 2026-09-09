import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EstimateForm } from "@/components/estimate-form";
import {
  cities,
  processSteps,
  projects,
  secondaryServices,
  services,
  site,
  testimonials,
} from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Bourke Construction — Orange County Remodeling Since 1996",
      },
      {
        name: "description",
        content:
          "From kitchens and additions to decks, ADUs, roofing, and larger renovations, Bourke Construction has served Orange County homeowners since 1996.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const featured = projects.filter((p) =>
    ["laguna-deck", "kitchen-cream", "bath-marble", "adu-aerial", "addition-interior", "remodel-living"].includes(
      p.id,
    ),
  );

  return (
    <main>
      <Hero />
      <TrustStrip />
      <Services />
      <FeaturedWork featured={featured} />
      <Difference />
      <Process />
      <Secondary />
      <Reviews />
      <Areas />
      <FinalCta />
    </main>
  );
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy">
      <img
        src="/images/deck-laguna-ocean.jpg"
        alt="Laguna Beach deck built by Bourke Construction, looking out to the Pacific"
        className="absolute inset-0 size-full object-cover outline-none"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgb(27_42_65_/_0.82)_0%,rgb(27_42_65_/_0.45)_48%,rgb(27_42_65_/_0.15)_100%)]" />
      <div className="relative container-page flex min-h-[34rem] flex-col justify-end py-14 md:min-h-[40rem] md:py-20">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-cream/75">
          Anaheim · Laguna Beach · Orange County
        </p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl text-cream md:text-5xl lg:text-[3.5rem] lg:leading-[1.08]">
          Orange County remodeling with three decades of local experience
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-cream/85 md:text-lg">
          From kitchens and additions to decks, ADUs, roofing, and larger
          renovations, Bourke Construction has served Orange County homeowners
          since 1996.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Button asChild variant="invert" size="lg">
            <Link to="/contact">Request an Estimate</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-cream/25 bg-transparent text-cream hover:bg-cream/10"
          >
            <Link to="/work">View Our Work</Link>
          </Button>
          <a
            href={site.phoneTel}
            className="inline-flex h-12 items-center gap-2 px-2 text-sm font-medium text-cream"
          >
            <Phone className="size-4" aria-hidden />
            {site.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}

function TrustStrip() {
  const items = [
    { label: "Serving Orange County", value: "Since 1996" },
    { label: "CA contractor license", value: `#${site.license.number}` },
    { label: "Best of Houzz Service", value: "11-year streak, 2026" },
    { label: "Combined experience", value: "75 years" },
    { label: "Offices", value: "Anaheim & Laguna Beach" },
  ];
  return (
    <section className="border-b border-border bg-cream">
      <div className="container-page grid grid-cols-2 gap-6 py-8 md:grid-cols-5 md:gap-4">
        {items.map((item) => (
          <div key={item.label}>
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.16em] text-muted">
              {item.label}
            </p>
            <p className="mt-1 font-display text-xl text-navy md:text-2xl">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="section-y">
      <div className="container-page">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
              What we build
            </p>
            <h2 className="mt-3 font-display text-3xl text-ink md:text-5xl">
              Residential work grouped the way homeowners actually decide
            </h2>
          </div>
          <Button asChild variant="outline">
            <Link to="/services">
              All services <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.slug}
              to="/services"
              hash={s.slug}
              className="group overflow-hidden rounded-lg bg-cream shadow-[var(--shadow-border)]"
            >
              <img
                src={s.image}
                alt={s.imageAlt}
                className="aspect-[4/3] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
              />
              <div className="p-5">
                <h3 className="font-display text-2xl">{s.name}</h3>
                <p className="mt-1.5 text-sm text-ink-soft">{s.short}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedWork({
  featured,
}: {
  featured: typeof projects;
}) {
  return (
    <section className="section-y bg-navy text-cream">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-cream/60">
              Project spotlight
            </p>
            <h2 className="mt-3 font-display text-3xl md:text-5xl">
              A Laguna Beach deck that went national
            </h2>
            <p className="mt-5 max-w-xl text-cream/80">
              Bourke Construction’s Laguna Beach deck installation was featured
              in Azek’s nationwide “Smarter than Wood” campaign. The same crew
              builds kitchens, baths, additions, and ADUs for Orange County
              homeowners.
            </p>
          </div>
          <div className="lg:col-span-5 lg:text-right">
            <Button asChild variant="invert">
              <Link to="/work">
                View the gallery <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="mt-10 grid gap-3 md:grid-cols-12">
          <img
            src="/images/deck-laguna-wide.jpg"
            alt="Laguna Beach composite deck and planting"
            className="aspect-[16/10] w-full rounded-lg object-cover md:col-span-7 md:aspect-auto md:h-full"
          />
          <div className="grid gap-3 md:col-span-5">
            <img
              src="/images/hero-kitchen-island.jpg"
              alt="Kitchen island in an Orange County remodel"
              className="aspect-[16/10] w-full rounded-lg object-cover"
            />
            <img
              src="/images/bath-vanity.jpg"
              alt="Primary bathroom vanity"
              className="aspect-[16/10] w-full rounded-lg object-cover"
            />
          </div>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4">
          {featured.slice(0, 4).map((p) => (
            <figure key={p.id} className="overflow-hidden rounded-lg">
              <img
                src={p.image}
                alt={p.alt}
                className="aspect-[4/3] w-full object-cover"
              />
              <figcaption className="pt-2 text-xs text-cream/65">
                {p.title}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Difference() {
  return (
    <section className="section-y">
      <div className="container-page grid gap-10 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-6">
          <img
            src="/images/kitchen-open-plan.jpg"
            alt="Open-plan kitchen completed by Bourke Construction"
            className="aspect-[4/3] w-full rounded-lg object-cover"
          />
        </div>
        <div className="lg:col-span-6 lg:pl-6">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
            How this company actually works
          </p>
          <h2 className="mt-3 font-display text-3xl md:text-5xl">
            Family-owned, licensed, and unusually direct about money
          </h2>
          <ul className="mt-6 space-y-4 text-ink-soft">
            <li>
              <strong className="font-medium text-ink">Since 1996.</strong>{" "}
              Owner Ed Bourke has thirty-five years in construction, including
              fifteen years in London before opening the Orange County company.
            </li>
            <li>
              <strong className="font-medium text-ink">
                You’ll pay what we pay.
              </strong>{" "}
              First-party materials state the company passes supplier discounts
              on materials through to the homeowner.
            </li>
            <li>
              <strong className="font-medium text-ink">
                CSLB License #{site.license.number}.
              </strong>{" "}
              B — General Building. Current and active as of{" "}
              {site.license.verifiedOn}.
            </li>
            <li>
              <strong className="font-medium text-ink">
                Best of Houzz Service, 2026.
              </strong>{" "}
              The company reports an eleven-year streak for the Service award.
            </li>
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild>
              <Link to="/about">Meet the team</Link>
            </Button>
            <Button asChild variant="outline">
              <a href={site.houzz} rel="noreferrer" target="_blank">
                Houzz profile
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="section-y bg-cream">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
            Process
          </p>
          <h2 className="mt-3 font-display text-3xl md:text-5xl">
            From a free in-home visit to a finished walkthrough
          </h2>
          <p className="mt-4 text-ink-soft">
            Refined through four decades of multi-national construction
            experience, as described on the company’s process page.
          </p>
        </div>
        <ol className="mt-12 grid gap-px overflow-hidden rounded-lg bg-border shadow-[var(--shadow-border)] md:grid-cols-5">
          {processSteps.map((step) => (
            <li key={step.n} className="bg-paper p-5 md:p-6">
              <p className="font-display text-3xl text-navy">{step.n}</p>
              <h3 className="mt-3 font-display text-xl">{step.title}</h3>
              <p className="mt-2 text-sm text-ink-soft">{step.body}</p>
            </li>
          ))}
        </ol>
        <div className="mt-8">
          <Button asChild variant="outline">
            <Link to="/process">Read the full process</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function Secondary() {
  return (
    <section className="section-y">
      <div className="container-page grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
            Also on the truck
          </p>
          <h2 className="mt-3 font-display text-3xl md:text-4xl">
            Roofing, painting, windows, and the rest of a house
          </h2>
          <p className="mt-4 text-ink-soft">
            Bourke Construction lists a wide general-contracting range. These
            are the capabilities most often paired with a remodel — not a
            dump of every line item in the hero.
          </p>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2 lg:col-span-7">
          {secondaryServices.map((s) => (
            <li
              key={s.name}
              className="rounded-md bg-cream p-4 shadow-[var(--shadow-border)]"
            >
              <p className="font-medium">{s.name}</p>
              <p className="mt-1 text-sm text-muted">{s.note}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section className="section-y bg-paper-2">
      <div className="container-page">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
          From homeowners
        </p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl md:text-5xl">
          Reviews the company already publishes, traced back to Houzz
        </h2>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {testimonials.map((t) => (
            <blockquote
              key={t.href}
              className="flex flex-col justify-between rounded-lg bg-paper p-6 shadow-[var(--shadow-border)]"
            >
              <p className="font-display text-xl leading-snug text-ink">
                “{t.quote}”
              </p>
              <footer className="mt-6 text-xs text-muted">
                {t.source}
                {" · "}
                <a
                  href={t.href}
                  className="underline underline-offset-2"
                  rel="noreferrer"
                  target="_blank"
                >
                  Read on Houzz
                </a>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

function Areas() {
  return (
    <section className="section-y">
      <div className="container-page grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
            Service area
          </p>
          <h2 className="mt-3 font-display text-3xl md:text-4xl">
            Orange County, from Anaheim Hills to San Clemente
          </h2>
          <p className="mt-4 text-ink-soft">
            Offices in Anaheim and Laguna Beach. Licensed business address on
            file with CSLB: {site.license.address}.
          </p>
        </div>
        <ul className="columns-2 gap-x-8 text-sm text-ink-soft sm:columns-3 lg:col-span-8">
          {cities.map((c) => (
            <li key={c} className="break-inside-avoid py-1">
              {c}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="relative isolate overflow-hidden">
      <img
        src="/images/kitchen-cream.jpg"
        alt=""
        className="absolute inset-0 size-full object-cover outline-none"
      />
      <div className="absolute inset-0 bg-navy/80" />
      <div className="relative container-page grid gap-10 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-6">
          <h2 className="font-display text-3xl text-cream md:text-5xl">
            Start with a complimentary in-home consultation
          </h2>
          <p className="mt-4 max-w-md text-cream/80">
            Call owner Ed Bourke at {site.phoneDisplay}, or leave a note. The
            form on this demo does not send leads — it tells you how to reach
            the real company.
          </p>
          <a
            href={site.phoneTel}
            className="mt-6 inline-flex h-12 items-center gap-2 text-cream"
          >
            <Phone className="size-4" />
            <span className="font-medium">{site.phoneDisplay}</span>
          </a>
        </div>
        <div className="rounded-lg bg-paper p-6 md:col-span-6">
          <EstimateForm compact />
        </div>
      </div>
    </section>
  );
}
