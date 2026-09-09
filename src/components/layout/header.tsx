import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { nav, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-paper/95 backdrop-blur-sm">
      <div className="container-page flex h-16 items-center justify-between gap-4 md:h-[4.5rem]">
        <Link
          to="/"
          className="flex min-w-0 items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <img
            src="/images/logo.png"
            alt="Bourke Construction"
            width={214}
            height={58}
            className="h-9 w-auto outline-none md:h-10"
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="text-[0.9375rem] font-medium text-ink-soft transition-colors duration-150 hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={site.phoneTel}
            className="inline-flex items-center gap-2 text-sm font-medium text-navy"
          >
            <Phone className="size-4" aria-hidden />
            {site.phoneDisplay}
          </a>
          <Button asChild size="sm">
            <Link to="/contact">Request an Estimate</Link>
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={site.phoneTel}
            className="inline-flex size-11 items-center justify-center rounded-md text-navy"
            aria-label={`Call ${site.phoneDisplay}`}
          >
            <Phone className="size-5" />
          </a>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-md text-ink"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          "border-t border-border bg-paper lg:hidden",
          open ? "block" : "hidden",
        )}
      >
        <nav className="container-page flex flex-col py-3" aria-label="Mobile">
          {nav.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="flex min-h-11 items-center py-2 text-base font-medium text-ink"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Button asChild className="mt-2 w-full">
            <Link to="/contact" onClick={() => setOpen(false)}>
              Request an Estimate
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
