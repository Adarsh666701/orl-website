import { createFileRoute, notFound } from "@tanstack/react-router";
import { AlertTriangle, Check, Truck } from "lucide-react";
import { PageShell, PageHero, FinalCTA } from "@/components/orl/page-shell";
import { Reveal } from "@/components/orl/primitives";
import { QuoteForm } from "@/components/orl/quote-form";
import { industries } from "@/data/orl";
import { absoluteUrl } from "@/lib/seo";

export const Route = createFileRoute("/industries/$slug")({
  loader: ({ params }) => {
    const industry = industries.find((i) => i.slug === params.slug);
    if (!industry) throw notFound();
    return { industry };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return { meta: [{ title: "Industry unavailable — ORL" }, { name: "robots", content: "noindex" }] };
    }
    const ind = loaderData.industry;
    const title = `${ind.name} Company in India | ORL`;
    return {
      meta: [
        { title },
        { name: "description", content: ind.summary },
        { property: "og:title", content: title },
        { property: "og:description", content: ind.summary },
        { property: "og:type", content: "website" },
        { property: "og:url", content: absoluteUrl(`/industries/${params.slug}`) },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: absoluteUrl(`/industries/${params.slug}`) }],
    };
  },
  component: IndustryDetail,
});

function IndustryDetail() {
  const { industry: ind } = Route.useLoaderData();

  return (
    <PageShell>
      <PageHero eyebrow="Industry solution" title={ind.name} body={ind.summary} />

      <section className="py-20 lg:py-28">
        <div className="container-orl grid gap-14 lg:grid-cols-[1.25fr_0.75fr] lg:items-start">
          <div className="space-y-12">
            <Reveal>
              <h2 className="text-3xl text-navy">Where it usually breaks</h2>
              <ul className="mt-6 space-y-3">
                {ind.challenges.map((c) => (
                  <li key={c} className="flex gap-3 rounded-2xl border border-border bg-card p-5 text-sm text-navy">
                    <AlertTriangle className="mt-0.5 size-4 shrink-0 text-accent" />
                    {c}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal>
              <h2 className="text-3xl text-navy">The ORL answer</h2>
              <ul className="mt-6 space-y-3">
                {ind.solution.map((c) => (
                  <li key={c} className="flex gap-3 rounded-2xl border border-border bg-card p-5 text-sm text-navy">
                    <Check className="mt-0.5 size-4 shrink-0 text-success" />
                    {c}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal>
              <div className="flex gap-4 rounded-3xl bg-[image:var(--gradient-navy)] p-8">
                <Truck className="mt-1 size-6 shrink-0 text-accent" />
                <div>
                  <p className="eyebrow text-accent">Relevant fleet</p>
                  <p className="mt-3 text-xl text-navy-foreground">{ind.fleet}</p>
                </div>
              </div>
            </Reveal>

            <Reveal>
              <h2 className="text-3xl text-navy">In practice</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                A typical {ind.name.replace(" Logistics", "").toLowerCase()} account
                starts with a lane and volume study, moves to a locked rate card, and
                settles into a placement schedule managed by a named coordinator. Peak
                weeks are absorbed by our 500+ attached vehicle network so your dispatch
                plan does not depend on the spot market.
              </p>
            </Reveal>
          </div>

          <div className="lg:sticky lg:top-28">
            <QuoteForm compact title="Talk to a coordinator" />
          </div>
        </div>
      </section>

      <FinalCTA />
    </PageShell>
  );
}
