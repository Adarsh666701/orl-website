import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Clock } from "lucide-react";
import { PageShell, PageHero, FinalCTA } from "@/components/orl/page-shell";
import { Reveal } from "@/components/orl/primitives";
import { articles } from "@/data/orl";

export const Route = createFileRoute("/resources/")({
  head: () => ({
    meta: [
      { title: "Freight Resources & Dispatch Guides | Om Roadlines" },
      { name: "description", content: "Practical guides on freight costs, compliance, capacity planning and loading-dock operations from the ORL team." },
      { property: "og:title", content: "Freight Resources — ORL" },
      { property: "og:description", content: "Practical dispatch guidance for Indian supply chains." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/resources" }],
  }),
  component: ResourcesIndex,
});

function ResourcesIndex() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Resources"
        title={<>Better dispatch decisions, <span className="text-accent">before the truck arrives.</span></>}
        body="Short, practical notes from the freight desk for transport, procurement and dispatch teams."
      />
      <section className="py-20 lg:py-28">
        <div className="container-orl grid gap-6 md:grid-cols-2">
          {articles.map((article, index) => (
            <Reveal key={article.slug} delay={index * 70}>
              <Link
                to="/resources/$slug"
                params={{ slug: article.slug }}
                className="card-lift group flex h-full flex-col rounded-3xl border border-border bg-card p-8"
              >
                <div className="flex items-center justify-between text-xs tracking-[0.14em] text-primary uppercase">
                  <span>{article.topic}</span>
                  <span className="flex items-center gap-1 normal-case tracking-normal text-muted-foreground"><Clock className="size-3.5" /> {article.readTime}</span>
                </div>
                <BookOpen className="mt-9 size-6 text-accent" />
                <h2 className="mt-5 text-2xl text-navy">{article.title}</h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{article.excerpt}</p>
                <span className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-semibold text-navy">
                  Read guide <ArrowRight className="size-4 text-accent transition-transform group-hover:translate-x-1" />
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
