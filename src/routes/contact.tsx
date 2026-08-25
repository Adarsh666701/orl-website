import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { PageShell, PageHero } from "@/components/orl/page-shell";
import { Reveal } from "@/components/orl/primitives";
import { QuoteForm } from "@/components/orl/quote-form";
import { company } from "@/data/orl";
import { absoluteUrl } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Om Roadlines — Gurugram Freight Desk | ORL" },
      {
        name: "description",
        content: `Talk to the ORL freight desk: ${company.phone}, ${company.email}. Registered office at ${company.address}.`,
      },
      { property: "og:title", content: "Contact Om Roadlines" },
      { property: "og:description", content: "Call, WhatsApp or send your lane details for a written rate." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: absoluteUrl("/contact") },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/contact") }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Tell us the lane. <span className="text-accent">We&rsquo;ll quote it.</span>
          </>
        }
        body="Urgent requirement? Call or WhatsApp — the dispatch desk answers around the clock."
      />

      <section className="py-20 lg:py-28">
        <div className="container-orl grid gap-12 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <QuoteForm title="Send us your requirement" />
          </Reveal>

          <Reveal delay={100} className="space-y-6">
            <div className="overflow-hidden rounded-3xl border border-border">
              <iframe
                title="Om Roadlines office location on Google Maps"
                src="https://www.google.com/maps?q=Bilaspur%20Chowk%2C%20Tauru%20Road%2C%20Gurugram%2C%20Haryana%20122413&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-72 w-full border-0"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { icon: Phone, h: "Phone", b: company.phone, href: company.phoneHref },
                { icon: MessageCircle, h: "WhatsApp", b: company.phone, href: company.whatsapp },
                { icon: Mail, h: "Email", b: company.email, href: `mailto:${company.email}` },
                { icon: Clock, h: "Office hours", b: company.hours },
              ].map((c) => (
                <div key={c.h} className="rounded-2xl border border-border bg-card p-6">
                  <c.icon className="size-5 text-primary" />
                  <p className="mt-4 font-semibold text-navy">{c.h}</p>
                  {c.href ? (
                    <a href={c.href} className="mt-1 block text-sm text-muted-foreground hover:text-accent">
                      {c.b}
                    </a>
                  ) : (
                    <p className="mt-1 text-sm text-muted-foreground">{c.b}</p>
                  )}
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <MapPin className="size-5 text-primary" />
              <p className="mt-4 font-semibold text-navy">Registered office</p>
              <p className="mt-1 text-sm text-muted-foreground">{company.address}</p>
              <p className="mt-4 text-sm font-semibold text-navy">Branches</p>
              <p className="mt-1 text-sm text-muted-foreground">{company.branches.join(" · ")}</p>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
