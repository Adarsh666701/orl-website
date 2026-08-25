import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageShell, PageHero, FinalCTA } from "@/components/orl/page-shell";
import { Reveal } from "@/components/orl/primitives";
import { industries } from "@/data/orl";
import { absoluteUrl } from "@/lib/seo";

export const Route = createFileRoute("/industries/")({
  head: () => ({
    meta: [
      { title: "Industry Logistics — Manufacturing, FMCG, Pharma | ORL" },
      {
        name: "description",
        content:
          "Freight solutions built per industry: manufacturing, FMCG, pharma, automotive, agriculture and e-commerce logistics across India.",
      },
      { property: "og:title", content: "Industry Logistics Solutions — ORL" },
      { property: "og:description", content: "Sector-specific road freight for Indian supply chains." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: absoluteUrl("/industries") },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/industries") }],
  }),
  component: IndustriesIndex,
});

function IndustriesIndex() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Industries"
        title={
          <>
            Freight shaped by <span className="text-accent">your sector.</span>
          </>
        }
        body="Every industry breaks differently under freight pressure. Here is how we plan for yours."
      />
      <section className="py-20 lg:py-28">
        <div className="container-orl grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind, i) => (
            <Reveal key={ind.slug} delay={i * 60}>
              <Link
                to="/industries/$slug"
                params={{ slug: ind.slug }}
                className="card-lift group flex h-full flex-col rounded-3xl border border-border bg-card p-8"
              >
                <h2 className="text-xl text-navy">{ind.name}</h2>
                <p className="mt-3 text-sm text-muted-foreground">{ind.summary}</p>
                <span className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-semibold text-navy">
                  Read more
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
