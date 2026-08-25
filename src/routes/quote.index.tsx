import { createFileRoute } from "@tanstack/react-router";
import { Clock, ShieldCheck, Truck } from "lucide-react";
import { PageShell, PageHero } from "@/components/orl/page-shell";
import { Reveal } from "@/components/orl/primitives";
import { QuoteForm } from "@/components/orl/quote-form";
import { absoluteUrl } from "@/lib/seo";

export const Route = createFileRoute("/quote/")({
  head: () => ({
    meta: [
      { title: "Get a Freight Quote in 2 Hours | Om Roadlines" },
      {
        name: "description",
        content:
          "Share origin, destination and load type. ORL returns a written freight rate within two hours on working days — FTL, part load, ODC and dedicated fleet.",
      },
      { property: "og:title", content: "Get a Freight Quote — ORL" },
      { property: "og:description", content: "Four fields. A written truck rate within two hours." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: absoluteUrl("/quote") },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/quote") }],
  }),
  component: QuotePage,
});

function QuotePage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Get quote"
        title={
          <>
            A written rate, <span className="text-accent">within two hours.</span>
          </>
        }
        body="No sales dance. Tell us what moves where, and we come back with a number and a placement window."
      />
      <section className="py-20 lg:py-28">
        <div className="container-orl grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal className="space-y-5">
            {[
              { icon: Clock, h: "Two-hour response", b: "Working-day quotes come back inside two hours, most within thirty minutes." },
              { icon: Truck, h: "Right vehicle first time", b: "We match body type and tonnage to your cargo instead of quoting a generic truck." },
              { icon: ShieldCheck, h: "Insured and documented", b: "Transit cover, LR, e-way bill compliance and signed POD on every consignment." },
            ].map((c) => (
              <div key={c.h} className="card-lift flex gap-4 rounded-2xl border border-border bg-card p-6">
                <c.icon className="mt-0.5 size-5 shrink-0 text-primary" />
                <div>
                  <p className="font-semibold text-navy">{c.h}</p>
                  <p className="mt-1.5 text-sm text-muted-foreground">{c.b}</p>
                </div>
              </div>
            ))}
          </Reveal>
          <Reveal delay={80}>
            <QuoteForm />
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
