import { cn } from "@/lib/utils";

export function PageHero({
  kicker,
  title,
  lede,
  image,
  imageAlt,
  className,
}: {
  kicker?: string;
  title: string;
  lede?: string;
  image?: string;
  imageAlt?: string;
  className?: string;
}) {
  return (
    <section className={cn("border-b border-border bg-paper", className)}>
      <div className="container-page grid gap-8 py-12 md:grid-cols-12 md:items-end md:py-16">
        <div className="md:col-span-7">
          {kicker ? (
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
              {kicker}
            </p>
          ) : null}
          <h1 className="mt-3 font-display text-4xl text-ink md:text-5xl lg:text-6xl">
            {title}
          </h1>
          {lede ? (
            <p className="mt-5 max-w-xl text-lg text-ink-soft">{lede}</p>
          ) : null}
        </div>
        {image ? (
          <div className="md:col-span-5">
            <img
              src={image}
              alt={imageAlt ?? ""}
              className="aspect-[4/3] w-full rounded-lg object-cover"
            />
          </div>
        ) : null}
      </div>
    </section>
  );
}
