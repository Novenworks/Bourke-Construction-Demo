import { Link } from "@tanstack/react-router";
import { nav, services, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-navy text-cream">
      <div className="container-page grid gap-10 py-14 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-4">
          <p className="font-display text-3xl tracking-tight">Bourke Construction</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-cream/75">
            Family-owned residential remodeling in Orange County since 1996.
            Offices in Anaheim and Laguna Beach.
          </p>
          <p className="mt-5 text-sm">
            <a href={site.phoneTel} className="font-medium hover:underline">
              {site.phoneDisplay}
            </a>
            <span className="mx-2 text-cream/40">·</span>
            <a href={`mailto:${site.email}`} className="hover:underline">
              {site.email}
            </a>
          </p>
          <p className="mt-2 text-xs text-cream/60">{site.hours}</p>
        </div>

        <div className="md:col-span-2">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-cream/55">
            Explore
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link to={item.href} className="hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-cream/55">
            Services
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  to="/services"
                  hash={s.slug}
                  className="hover:underline"
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-cream/55">
            License
          </p>
          <p className="mt-3 text-sm leading-relaxed text-cream/80">
            CA License #{site.license.number}
            <br />
            {site.license.classification}
            <br />
            {site.license.status} as of {site.license.verifiedOn}
          </p>
          <a
            href={site.cslbCheck}
            className="mt-3 inline-block text-sm underline underline-offset-4"
            rel="noreferrer"
            target="_blank"
          >
            Verify on CSLB
          </a>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="container-page flex flex-col gap-2 py-5 text-xs text-cream/55 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Bourke Construction Inc.</p>
          <p>Photography and marks remain property of their owners.</p>
        </div>
      </div>
    </footer>
  );
}
