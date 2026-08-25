import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Mail, MapPin, Users } from "lucide-react";
import { PageShell, PageHero } from "@/components/orl/page-shell";
import { Reveal } from "@/components/orl/primitives";
import { company } from "@/data/orl";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers at Om Roadlines | ORL" },
      { name: "description", content: "Explore operations, dispatch and logistics careers with Om Roadlines in Gurugram." },
      { property: "og:title", content: "Careers at Om Roadlines" },
      { property: "og:description", content: "Help keep India's supply chains moving." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/careers" }],
  }),
  component: Careers,
});

function Careers() {
  return (
    <PageShell>
      <PageHero eyebrow="Careers" title={<>Keep India moving. <span className="text-accent">Build your career with ORL.</span></>} body="We are a close operations team solving real freight problems, every day." />
      <section className="py-20 lg:py-28">
        <div className="container-orl grid gap-12 lg:grid-cols-[1fr_0.9fr]">
          <Reveal>
            <h2 className="text-3xl text-navy">Work where the plan matters</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">From a truck's placement to a signed POD, good logistics is built by people who communicate clearly, act early and own the outcome. That is the kind of team we are growing.</p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {[{ icon: Users, title: "Operations-first", body: "Learn alongside dispatch and coordination teams handling live freight." }, { icon: MapPin, title: "Gurugram base", body: "Roles are primarily based near Bilaspur Chowk, with work across our network." }].map((item) => <div key={item.title} className="rounded-2xl border border-border bg-card p-6"><item.icon className="size-5 text-primary" /><h3 className="mt-4 font-semibold text-navy">{item.title}</h3><p className="mt-2 text-sm text-muted-foreground">{item.body}</p></div>)}
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
              <p className="eyebrow text-primary">Open applications</p>
              <h2 className="mt-4 text-3xl text-navy">Introduce yourself</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">We welcome applications for dispatch, fleet coordination, accounts and operations support. Send your resume with the role you are interested in.</p>
              <a href={`mailto:${company.email}?subject=Career%20application%20for%20Om%20Roadlines`} className="mt-8 inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-brand)] px-6 py-3 text-sm font-semibold text-accent-foreground"><Mail className="size-4" /> Email your resume <ArrowRight className="size-4" /></a>
              <p className="mt-5 text-sm text-muted-foreground">Or call <a href={company.phoneHref} className="font-medium text-navy hover:text-accent">{company.phone}</a> to speak with our office.</p>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
