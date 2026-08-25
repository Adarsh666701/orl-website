import type { ReactNode } from "react";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";
import { FloatingActions } from "./floating-actions";
import { Reveal, ButtonLink } from "./primitives";
import { company } from "@/data/orl";
import { ArrowRight, Phone } from "lucide-react";

export function PageShell({
  children,
  transparentHeader = false,
}: {
  children: ReactNode;
  transparentHeader?: boolean;
}) {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader transparent={transparentHeader} />
      <main>{children}</main>
      <SiteFooter />
      <FloatingActions />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  body,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  body?: string;
  children?: ReactNode;
}) {
  return (
    <section className="bg-[image:var(--gradient-navy)] pt-36 pb-20 lg:pt-44 lg:pb-28">
      <div className="container-orl">
        <Reveal className="max-w-4xl">
          <p className="eyebrow text-accent">{eyebrow}</p>
          <h1 className="mt-5 text-4xl text-navy-foreground sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {body ? (
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy-foreground/70">
              {body}
            </p>
          ) : null}
          {children ? <div className="mt-9">{children}</div> : null}
        </Reveal>
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="container-orl">
        <Reveal className="relative overflow-hidden rounded-3xl bg-[image:var(--gradient-navy)] px-8 py-16 lg:px-16 lg:py-20">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 -right-16 size-80 rounded-full bg-[color-mix(in_oklab,var(--brand)_28%,transparent)] blur-3xl"
          />
          <div className="relative grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-end">
            <div>
              <p className="eyebrow text-accent">Need reliable freight?</p>
              <h2 className="mt-5 text-4xl text-navy-foreground sm:text-5xl lg:text-[3.5rem]">
                Let&rsquo;s move your cargo.
              </h2>
              <p className="mt-5 max-w-xl text-lg text-navy-foreground/70">
                Share your lane and load. Our team responds with a written rate
                within two hours on working days.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <ButtonLink to="/quote" size="lg">
                Request a Quote <ArrowRight className="size-4" />
              </ButtonLink>
              <ButtonLink href={company.phoneHref} variant="ghostLight" size="lg">
                <Phone className="size-4" /> {company.phone}
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
