import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { site } from "@/lib/site";

export function EstimateForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className="rounded-lg bg-paper-2 p-6">
        <p className="font-display text-2xl text-ink">This is a design demo</p>
        <p className="mt-3 text-sm leading-relaxed text-ink-soft">
          Your note was not sent to Bourke Construction. This speculative
          redesign does not collect leads. To reach the company, call{" "}
          <a href={site.phoneTel} className="font-medium text-navy underline">
            {site.phoneDisplay}
          </a>{" "}
          or use the form on{" "}
          <a
            href="https://www.bourkeconstructionoc.com/free-estimates.html"
            className="underline"
            rel="noreferrer"
            target="_blank"
          >
            bourkeconstructionoc.com
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      {!compact ? (
        <p className="text-sm text-muted">
          Demo form — submissions stay on this page and are not delivered.
        </p>
      ) : null}
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="grid gap-1.5">
          <Label htmlFor="first">First name</Label>
          <Input id="first" name="first" autoComplete="given-name" required />
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="last">Last name</Label>
          <Input id="last" name="last" autoComplete="family-name" required />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="grid gap-1.5">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" name="phone" type="tel" autoComplete="tel" />
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
          />
        </div>
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="work">Brief description of work</Label>
        <Textarea
          id="work"
          name="work"
          placeholder="Kitchen, addition, deck, ADU…"
        />
      </div>
      <Button type="submit" size="lg" className="justify-self-start">
        Request an Estimate
      </Button>
    </form>
  );
}
