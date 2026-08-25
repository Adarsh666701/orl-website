import { createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageShell, PageHero, FinalCTA } from "@/components/orl/page-shell";
import { Reveal } from "@/components/orl/primitives";
import { QuoteForm } from "@/components/orl/quote-form";
import { lanes } from "@/data/orl";
import { absoluteUrl } from "@/lib/seo";

export const Route = createFileRoute("/coverage/$slug")({
  loader: ({ params }) => {
    const lane = lanes.find((l) => l.slug === params.slug);
    if (!lane) throw notFound();
    return { lane };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return { meta: [{ title: "Route unavailable — ORL" }, { name: "robots", content: "noindex" }] };
    }
    const l = loaderData.lane;
    const title = `${l.from} to ${l.to} Transport Service — Trucks & Rates | ORL`;
    const description = `${l.from} to ${l.to} freight: ${l.distanceKm} km, ${l.transit} transit, FTL and part load trucks from ₹${l.priceFrom.toLocaleString("en-IN")}.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { property: "og:url", content: absoluteUrl(`/coverage/${params.slug}`) },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: absoluteUrl(`/coverage/${params.slug}`) }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: `${l.from} to ${l.to} truck transport`,
            url: absoluteUrl(`/coverage/${params.slug}`),
            provider: { "@type": "Organization", name: "Om Roadlines" },
            areaServed: [l.from, l.to],
            description,
          }),
        },
      ],
    };
  },
  component: LaneDetail,
});

function LaneDetail() {
  const { lane: l } = Route.useLoaderData();

  const faqs = [
    { q: `How long does ${l.from} to ${l.to} take?`, a: `Standard transit is ${l.transit} for the ${l.distanceKm} km run. Express double-driver operation is quicker on request.` },
    { q: "What does a truck cost on this lane?", a: `Indicative FTL rates start around ₹${l.priceFrom.toLocaleString("en-IN")} and vary with vehicle type, tonnage, diesel and season. We confirm a written rate before dispatch.` },
    { q: "Can you handle part loads here?", a: "Yes — part load bookings are consolidated at the nearest hub and moved on the next scheduled departure." },
  ];

  return (
    <PageShell>
      <PageHero
        eyebrow="Freight route"
        title={
          <>
            {l.from} <span className="text-accent">→</span> {l.to}
          </>
        }
        body={`${l.distanceKm} km corridor with ${l.transit} standard transit and dedicated capacity year round.`}
      />

      <section className="py-20 lg:py-28">
        <div className="container-orl grid gap-14 lg:grid-cols-[1.25fr_0.75fr] lg:items-start">
          <div className="space-y-12">
            <Reveal>
              <dl className="grid gap-5 sm:grid-cols-3">
                {[
                  ["Distance", `${l.distanceKm} km`],
                  ["Transit time", l.transit],
                  ["Rates from", `₹${l.priceFrom.toLocaleString("en-IN")}`],
                ].map(([k, v]) => (
                  <div key={k} className="rounded-2xl border border-border bg-card p-6">
                    <dt className="text-xs tracking-wide text-muted-foreground uppercase">{k}</dt>
                    <dd className="mt-2 font-display text-2xl font-bold text-navy">{v}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal>
              <h2 className="text-3xl text-navy">Available fleet</h2>
              <div className="mt-5 flex flex-wrap gap-3">
                {l.fleet.map((f) => (
                  <span key={f} className="rounded-full border border-border bg-card px-5 py-2.5 text-sm text-navy">
                    {f}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal>
              <h2 className="text-3xl text-navy">Popular cargo on this lane</h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {l.cargo.map((c) => (
                  <li key={c} className="rounded-2xl border border-border bg-card p-5 text-sm text-navy">
                    {c}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal>
              <h2 className="text-3xl text-navy">FAQs</h2>
              <div className="mt-6 divide-y divide-border rounded-3xl border border-border bg-card">
                {faqs.map((f) => (
                  <details key={f.q} className="group p-6">
                    <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-navy">
                      {f.q}
                      <ArrowRight className="size-4 text-accent transition-transform group-open:rotate-90" />
                    </summary>
                    <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
                  </details>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="lg:sticky lg:top-28">
            <QuoteForm compact title={`Quote: ${l.from} → ${l.to}`} />
          </div>
        </div>
      </section>

      <FinalCTA />
    </PageShell>
  );
}
