import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { PageShell, PageHero } from "@/components/orl/page-shell";
import { Reveal } from "@/components/orl/primitives";
import { company } from "@/data/orl";

export const Route = createFileRoute("/terms")({
  head: () => ({ meta: [{ title: "Terms & Conditions | Om Roadlines" }, { name: "description", content: "Terms for use of the Om Roadlines website and freight enquiries." }], links: [{ rel: "canonical", href: "/terms" }] }),
  component: Terms,
});

function Terms() {
  return <PageShell><PageHero eyebrow="Legal" title={<>Terms &amp; <span className="text-accent">Conditions</span></>} body="The terms governing use of the Om Roadlines website." /><section className="py-20 lg:py-28"><Reveal className="container-orl max-w-3xl space-y-8 text-muted-foreground"><p>Last updated: August 25, 2026</p><TermsSection title="Website information">Content on this website is provided for general information. Freight rates, transit times, availability and vehicle specifications shown here are indicative and may change based on lane conditions, cargo, permits and capacity.</TermsSection><TermsSection title="Quotes and bookings">A quote is not a confirmed booking. A transport contract is created only after Om Roadlines confirms the rate, vehicle, placement window and applicable terms in writing.</TermsSection><TermsSection title="User responsibilities">You are responsible for providing accurate cargo, weight, dimensional, documentation and contact details. Special handling, hazardous goods or over-dimensional cargo must be disclosed before a vehicle is allocated.</TermsSection><TermsSection title="Contact">Questions about these terms may be sent to <a className="text-primary hover:text-accent" href={`mailto:${company.email}`}>{company.email}</a>.</TermsSection></Reveal></section></PageShell>;
}

function TermsSection({ title, children }: { title: string; children: ReactNode }) { return <section><h2 className="text-2xl text-navy">{title}</h2><p className="mt-3 leading-relaxed">{children}</p></section>; }
