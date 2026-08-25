import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import { PageShell, FinalCTA } from "@/components/orl/page-shell";
import { Reveal } from "@/components/orl/primitives";
import { articles } from "@/data/orl";
import { absoluteUrl } from "@/lib/seo";

const guideContent: Record<string, string[]> = {
  "freight-cost-guide": ["Freight rates are set by the lane, vehicle body, payload and the balance of vehicles returning from the destination. Diesel, tolls, seasonal capacity and loading delays can all move a rate.", "Ask for the vehicle type, payload assumption, toll treatment and detention terms in writing. Comparing a like-for-like truck plan is the fastest way to make two quotes meaningful."],
  "e-way-bill-guide": ["Before loading, confirm the invoice, consignee GST details, vehicle requirement and e-way bill validity. Keep the Part B vehicle update aligned with the vehicle that actually departs.", "A simple dispatch checklist prevents most checkpoint delays: invoice, e-way bill, LR details, driver identity and delivery contact should all be verified before the gate-out time."],
  "seasonal-capacity": ["Capacity tightens before festive peaks, harvest movement and month-end billing cycles. Spot availability disappears first on high-volume industrial corridors.", "Share your expected dispatch calendar early, reserve the core fleet and keep a pre-agreed surge plan for the days when daily volume doubles."],
  "reducing-detention": ["A truck held at a dock affects the next placement, the driver's hours and your transport cost. The cause is often avoidable: a missing document, a late loading crew or no confirmed bay.", "Set a loading slot, stage cargo before the vehicle reports and nominate one decision-maker at the dock. Record arrival, loading and departure times so recurring bottlenecks are visible."],
};

export const Route = createFileRoute("/resources/$slug")({
  loader: ({ params }) => {
    const article = articles.find((item) => item.slug === params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [{ title: "Resource unavailable — ORL" }, { name: "robots", content: "noindex" }] };
    const { article } = loaderData;
    return {
      meta: [
        { title: `${article.title} | Om Roadlines` },
        { name: "description", content: article.excerpt },
        { property: "og:title", content: article.title },
        { property: "og:description", content: article.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: absoluteUrl(`/resources/${params.slug}`) },
      ],
      links: [{ rel: "canonical", href: absoluteUrl(`/resources/${params.slug}`) }],
      scripts: [{
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: article.title,
          description: article.excerpt,
          author: { "@type": "Organization", name: article.author },
          publisher: { "@type": "Organization", name: "Om Roadlines" },
          mainEntityOfPage: absoluteUrl(`/resources/${params.slug}`),
        }),
      }],
    };
  },
  component: ResourceArticle,
});

function ResourceArticle() {
  const { article } = Route.useLoaderData();
  const paragraphs = guideContent[article.slug] ?? [article.excerpt];

  return (
    <PageShell>
      <article>
        <header className="bg-[image:var(--gradient-navy)] pt-36 pb-20 lg:pt-44 lg:pb-28">
          <div className="container-orl max-w-3xl">
            <Link to="/resources" className="inline-flex items-center gap-2 text-sm text-navy-foreground/70 hover:text-accent"><ArrowLeft className="size-4" /> All resources</Link>
            <Reveal className="mt-10">
              <p className="eyebrow text-accent">{article.topic}</p>
              <h1 className="mt-5 text-4xl text-navy-foreground sm:text-5xl lg:text-6xl">{article.title}</h1>
              <div className="mt-6 flex items-center gap-3 text-sm text-navy-foreground/65"><span>{article.author}</span><span>·</span><span className="flex items-center gap-1"><Clock className="size-3.5" /> {article.readTime}</span></div>
            </Reveal>
          </div>
        </header>
        <section className="py-20 lg:py-28">
          <Reveal className="container-orl max-w-3xl">
            <p className="text-xl leading-relaxed text-navy">{article.excerpt}</p>
            <div className="mt-10 space-y-6 text-lg leading-relaxed text-muted-foreground">
              {paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <div className="mt-12 rounded-3xl border border-border bg-surface p-8">
              <p className="font-semibold text-navy">Need help planning a live dispatch?</p>
              <p className="mt-2 text-sm text-muted-foreground">Share the lane, load and deadline. The ORL desk will help choose the appropriate vehicle and placement window.</p>
              <Link to="/quote" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent">Request a quote <ArrowRight className="size-4" /></Link>
            </div>
          </Reveal>
        </section>
      </article>
      <FinalCTA />
    </PageShell>
  );
}
