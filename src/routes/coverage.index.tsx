import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageShell, PageHero, FinalCTA } from "@/components/orl/page-shell";
import { Reveal } from "@/components/orl/primitives";
import { CoverageMap } from "@/components/orl/coverage-map";
import { company, lanes } from "@/data/orl";
import { absoluteUrl } from "@/lib/seo";

export const Route = createFileRoute("/coverage/")({
  head: () => ({
    meta: [
      { title: "Coverage & Freight Routes Across India | ORL" },
      {
        name: "description",
        content:
          "ORL coverage network: hubs in Gurugram, Bhiwadi, Hissar, Ghaziabad and Mumbai, with high-volume lanes including Delhi–Mumbai and Delhi–Bangalore.",
      },
      { property: "og:title", content: "Coverage & Freight Routes — ORL" },
      { property: "og:description", content: "Pan-India road freight lanes anchored in the NCR industrial belt." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: absoluteUrl("/coverage") },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/coverage") }],
  }),
  component: CoverageIndex,
});

function CoverageIndex() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Coverage"
        title={
          <>
            Five hubs. <span className="text-accent">Pan-India reach.</span>
          </>
        }
        body={`Branch offices in ${company.branches.join(", ")} anchor a network of 500+ attached vehicles.`}
      />

      <section className="bg-[image:var(--gradient-navy)] py-20 lg:py-28">
        <div className="container-orl">
          <CoverageMap />
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container-orl">
          <h2 className="text-3xl text-navy lg:text-4xl">High-volume lanes</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {lanes.map((l, i) => (
              <Reveal key={l.slug} delay={i * 60}>
                <Link
                  to="/coverage/$slug"
                  params={{ slug: l.slug }}
                  className="card-lift group flex h-full flex-col rounded-3xl border border-border bg-card p-7"
                >
                  <p className="eyebrow text-primary">{l.distanceKm} km</p>
                  <h3 className="mt-3 text-xl text-navy">
                    {l.from} → {l.to}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Transit {l.transit} · from ₹{l.priceFrom.toLocaleString("en-IN")}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-semibold text-navy">
                    Route details
                    <ArrowRight className="size-4 text-accent transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </PageShell>
  );
}
