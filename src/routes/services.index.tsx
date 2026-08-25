import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageShell, PageHero, FinalCTA } from "@/components/orl/page-shell";
import { Reveal } from "@/components/orl/primitives";
import { services } from "@/data/orl";
import { absoluteUrl } from "@/lib/seo";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Freight Services — FTL, Part Load, ODC, Express | ORL" },
      {
        name: "description",
        content:
          "Om Roadlines freight services: full truck load, part load, ODC and heavy equipment, express freight and dedicated fleet 3PL across India.",
      },
      { property: "og:title", content: "Freight Services — ORL" },
      {
        property: "og:description",
        content: "FTL, part load, ODC, express and dedicated fleet logistics across India.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: absoluteUrl("/services") },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/services") }],
  }),
  component: ServicesIndex,
});

function ServicesIndex() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Services"
        title={
          <>
            Road freight, matched to <span className="text-accent">the load.</span>
          </>
        }
        body="Five service lines covering everything from a single pallet to an over-dimensional plant consignment."
      />
      <section className="py-20 lg:py-28">
        <div className="container-orl grid gap-6 md:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 70}>
              <Link
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="card-lift group flex h-full flex-col rounded-3xl border border-border bg-card p-8"
              >
                <p className="eyebrow text-primary">{s.tag}</p>
                <h2 className="mt-4 text-2xl text-navy">{s.name}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {s.summary}
                </p>
                <span className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-semibold text-navy">
                  View service
                  <ArrowRight className="size-4 text-accent transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
      <FinalCTA />
    </PageShell>
  );
}
