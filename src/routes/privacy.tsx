import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { PageShell, PageHero } from "@/components/orl/page-shell";
import { Reveal } from "@/components/orl/primitives";
import { company } from "@/data/orl";

export const Route = createFileRoute("/privacy")({
  head: () => ({ meta: [{ title: "Privacy Policy | Om Roadlines" }, { name: "description", content: "How Om Roadlines handles information shared through this website." }], links: [{ rel: "canonical", href: "/privacy" }] }),
  component: Privacy,
});

function Privacy() {
  return <PageShell><PageHero eyebrow="Legal" title={<>Privacy <span className="text-accent">Policy</span></>} body="How we handle information you share with Om Roadlines." /><section className="py-20 lg:py-28"><Reveal className="container-orl max-w-3xl space-y-8 text-muted-foreground"><p>Last updated: August 25, 2026</p><PolicySection title="Information we collect">When you request a quote or contact us, we collect the details you provide, such as your name, phone number, email address, origin, destination and shipment requirements.</PolicySection><PolicySection title="How we use it">We use this information to prepare freight quotes, coordinate requested services, respond to enquiries and improve our operations. We do not sell personal information.</PolicySection><PolicySection title="Sharing and retention">We share information only with our employees, service providers and transport partners when necessary to arrange or deliver the service you request. We retain information only for as long as operational, legal or accounting requirements require.</PolicySection><PolicySection title="Your choices">You may ask to update or delete your contact information, subject to legal recordkeeping requirements, by contacting us at <a className="text-primary hover:text-accent" href={`mailto:${company.email}`}>{company.email}</a>.</PolicySection></Reveal></section></PageShell>;
}

function PolicySection({ title, children }: { title: string; children: ReactNode }) { return <section><h2 className="text-2xl text-navy">{title}</h2><p className="mt-3 leading-relaxed">{children}</p></section>; }
