import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import ftlImg from "@/assets/service-ftl.jpg";
import odcImg from "@/assets/service-odc.jpg";
import fleetImg from "@/assets/fleet-yard.jpg";
import { PageShell, PageHero, FinalCTA } from "@/components/orl/page-shell";
import { Reveal } from "@/components/orl/primitives";
import { QuoteForm } from "@/components/orl/quote-form";
import { industries, services } from "@/data/orl";
import { absoluteUrl } from "@/lib/seo";

const images: Record<string, string> = { ftl: ftlImg, odc: odcImg, fleet: fleetImg };

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = services.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return { meta: [{ title: "Service unavailable — ORL" }, { name: "robots", content: "noindex" }] };
    }
    const s = loaderData.service;
    const title = `${s.name} Transport Services Across India | ORL`;
    return {
      meta: [
        { title },
        { name: "description", content: `${s.summary} ${s.description.slice(0, 90)}…` },
        { property: "og:title", content: title },
        { property: "og:description", content: s.summary },
        { property: "og:type", content: "website" },
        { property: "og:url", content: absoluteUrl(`/services/${params.slug}`) },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: absoluteUrl(`/services/${params.slug}`) }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: s.name,
            serviceType: s.name,
            url: absoluteUrl(`/services/${params.slug}`),
            provider: { "@type": "Organization", name: "Om Roadlines" },
            areaServed: "India",
            description: s.summary,
          }),
        },
      ],
    };
  },
  component: ServiceDetail,
});

function ServiceDetail() {
  const { service: s } = Route.useLoaderData();

  return (
    <PageShell>
      <PageHero eyebrow={s.tag} title={s.name} body={s.summary} />

      <section className="py-20 lg:py-28">
        <div className="container-orl grid gap-14 lg:grid-cols-[1.25fr_0.75fr] lg:items-start">
          <div>
            <Reveal>
              <img
                src={images[s.image]}
                alt={s.name}
                loading="lazy"
                width={1200}
                height={900}
                className="aspect-16/10 w-full rounded-3xl object-cover"
              />
              <p className="mt-10 text-xl leading-relaxed text-navy">{s.description}</p>
            </Reveal>

            <Reveal className="mt-12">
              <h2 className="text-3xl text-navy">Key benefits</h2>
              <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                {s.benefits.map((b) => (
                  <li
                    key={b}
                    className="flex gap-3 rounded-2xl border border-border bg-card p-5 text-sm text-navy"
                  >
                    <Check className="mt-0.5 size-4 shrink-0 text-success" />
                    {b}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal className="mt-14">
              <h2 className="text-3xl text-navy">How it works</h2>
              <ol className="mt-6 grid gap-4 sm:grid-cols-2">
                {s.process.map((p, i) => (
                  <li key={p.step} className="rounded-2xl border border-border bg-card p-6">
                    <span className="font-display text-3xl font-extrabold text-secondary-foreground/20">
                      0{i + 1}
                    </span>
                    <p className="mt-3 font-semibold text-navy">{p.step}</p>
                    <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
                  </li>
                ))}
              </ol>
            </Reveal>

            <Reveal className="mt-14">
              <h2 className="text-3xl text-navy">Industries we serve with this</h2>
              <div className="mt-6 flex flex-wrap gap-3">
                {industries.map((ind) => (
                  <Link
                    key={ind.slug}
                    to="/industries/$slug"
                    params={{ slug: ind.slug }}
                    className="rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-navy transition-colors hover:border-accent"
                  >
                    {ind.name}
                  </Link>
                ))}
              </div>
            </Reveal>

            <Reveal className="mt-14">
              <h2 className="text-3xl text-navy">FAQs</h2>
              <div className="mt-6 divide-y divide-border rounded-3xl border border-border bg-card">
                {s.faqs.map((f) => (
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
            <QuoteForm compact title={`Quote for ${s.name}`} />
          </div>
        </div>
      </section>

      <FinalCTA />
    </PageShell>
  );
}
