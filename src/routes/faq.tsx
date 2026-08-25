import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowRight, Search } from "lucide-react";
import { PageShell, PageHero, FinalCTA } from "@/components/orl/page-shell";
import { Reveal } from "@/components/orl/primitives";
import { faqs } from "@/data/orl";
import { absoluteUrl } from "@/lib/seo";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Freight FAQs — Pricing, Insurance, Transit Times | ORL" },
      {
        name: "description",
        content:
          "Answers on freight pricing, cargo insurance, transit times, fleet, driver safety and documentation from the Om Roadlines team.",
      },
      { property: "og:title", content: "Freight FAQs — ORL" },
      { property: "og:description", content: "Pricing, insurance, transit times, fleet and documentation, answered." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: absoluteUrl("/faq") },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/faq") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return faqs;
    return faqs.filter(
      (f) =>
        f.q.toLowerCase().includes(q) ||
        f.a.toLowerCase().includes(q) ||
        f.topic.toLowerCase().includes(q),
    );
  }, [query]);

  return (
    <PageShell>
      <PageHero
        eyebrow="FAQ"
        title={
          <>
            Straight answers, <span className="text-accent">no runaround.</span>
          </>
        }
      />
      <section className="py-20 lg:py-28">
        <div className="container-orl max-w-3xl">
          <Reveal>
            <div className="flex items-center gap-3 rounded-full border border-border bg-card px-5 py-3.5">
              <Search className="size-4 text-muted-foreground" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search pricing, insurance, transit…"
                aria-label="Search FAQs"
                className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
              />
            </div>
          </Reveal>

          <div className="mt-8 divide-y divide-border rounded-3xl border border-border bg-card">
            {filtered.map((f) => (
              <details key={f.q} className="group p-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-navy">
                  <span>
                    <span className="mr-3 text-[0.65rem] tracking-[0.16em] text-accent uppercase">
                      {f.topic}
                    </span>
                    {f.q}
                  </span>
                  <ArrowRight className="size-4 shrink-0 text-accent transition-transform group-open:rotate-90" />
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </details>
            ))}
            {filtered.length === 0 ? (
              <p className="p-6 text-sm text-muted-foreground">
                No match. Call us on the dispatch desk and we&rsquo;ll answer directly.
              </p>
            ) : null}
          </div>
        </div>
      </section>
      <FinalCTA />
    </PageShell>
  );
}
