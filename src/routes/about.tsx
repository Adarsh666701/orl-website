import { createFileRoute } from "@tanstack/react-router";
import { BadgeCheck, ShieldCheck, Wrench } from "lucide-react";
import fleetImg from "@/assets/fleet-yard.jpg";
import { PageShell, PageHero, FinalCTA } from "@/components/orl/page-shell";
import { Counter, Reveal } from "@/components/orl/primitives";
import { company, stats } from "@/data/orl";
import { absoluteUrl } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Om Roadlines — 15 Years of Road Freight | ORL" },
      {
        name: "description",
        content:
          "Om Roadlines is a Gurugram-based 3PL moving B2B freight across India since 2010 — 50 owned trucks, 500+ attached vehicles and a 15-member operations team.",
      },
      { property: "og:title", content: "About Om Roadlines" },
      { property: "og:description", content: "Fifteen years of road freight, built on placement reliability." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: absoluteUrl("/about") },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/about") }],
  }),
  component: About,
});

const timeline = [
  { year: "2010", body: "Om Roadlines begins operations out of Gurugram with a handful of owned trucks on NCR lanes." },
  { year: "2014", body: "Attached fleet network expands to serve Delhi–Mumbai and the western industrial corridor." },
  { year: "2018", body: "Branch presence added at Bhiwadi, Hissar and Ghaziabad to shorten placement times." },
  { year: "2021", body: "Dedicated fleet contracts begin with manufacturing clients requiring daily capacity." },
  { year: "2026", body: "550+ owned and attached vehicles, 1.5 lakh+ tons moved annually, pan-India delivery." },
];


function About() {
  return (
    <PageShell>
      <PageHero
        eyebrow="About ORL"
        title={
          <>
            We don&rsquo;t just move freight.{" "}
            <span className="text-accent">We keep plans intact.</span>
          </>
        }
        body="Om Roadlines is a B2B logistics company specialising in end-to-end 3PL by road across India — from full truckload and part truckload shipments to time-sensitive, high-volume freight movement."
      />

      <section className="py-20 lg:py-28">
        <div className="container-orl grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <img
              src={fleetImg}
              alt="ORL fleet parked at a logistics yard"
              loading="lazy"
              width={1600}
              height={1000}
              className="aspect-4/3 w-full rounded-3xl object-cover"
            />
          </Reveal>
          <Reveal>
            <h2 className="text-3xl text-navy lg:text-4xl">Our story</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              We partner with businesses across industries to manage their
              transportation and supply chain needs. With a strong network of
              vehicles, experienced drivers and dedicated logistics coordinators,
              we make sure goods reach their destination safely, on time and at
              competitive rates.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Our commitment to reliability, transparency and customer-first
              service has made us a preferred logistics partner for businesses
              streamlining their supply chain operations. We build long-term
              partnerships rooted in trust, consistency and operational excellence.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-navy py-14">
        <div className="container-orl grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-5">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-display text-4xl font-extrabold text-navy-foreground">
                <Counter value={s.value} suffix={s.suffix} decimals={s.decimals} />
              </p>
              <p className="mt-2 text-[0.7rem] tracking-[0.16em] text-navy-foreground/55 uppercase">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container-orl grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <h2 className="text-3xl text-navy lg:text-4xl">Milestones</h2>
            <p className="mt-4 text-muted-foreground">
              Fifteen years of steady, unglamorous compounding.
            </p>
          </Reveal>
          <div className="space-y-6">
            {timeline.map((t, i) => (
              <Reveal key={t.year} delay={i * 70}>
                <div className="flex gap-6 border-l-2 border-border pl-6">
                  <span className="font-display text-2xl font-extrabold text-accent">
                    {t.year}
                  </span>
                  <p className="pt-1 text-muted-foreground">{t.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-20 lg:py-28">
        <div className="container-orl grid gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow text-primary">Leadership</p>
            <h2 className="mt-4 text-3xl text-navy lg:text-4xl">
              Sanjay Singal (Rajliwala)
            </h2>
            <p className="mt-1 text-sm font-medium text-muted-foreground">
              Founder &amp; Managing Director
            </p>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Our founder and Managing Director is a visionary leader whose
              foresight has consistently guided us to new heights. His hands-on
              approach and disciplined working style have shaped the way we
              operate every day, driving continuous improvement across the
              business. Drawing on deep industry experience, he continues to
              steer the organisation with clarity and purpose.
            </p>
            <p className="mt-6 text-sm text-muted-foreground">
              Team of 15+ employees across dispatch, coordination and accounts.
            </p>
          </Reveal>

          <div className="grid gap-4">
            {[
              { icon: BadgeCheck, h: "Driver vetting", b: "Licence, document and background verification before deployment, with trip-wise ratings kept on file." },
              { icon: Wrench, h: "Maintenance policy", b: "Scheduled servicing and pre-trip health checks — both vehicle condition and paperwork validity." },
              { icon: ShieldCheck, h: "Cargo insurance", b: "Transit cover arranged on every consignment, extendable to full declared value for high-value freight." },
            ].map((c, i) => (
              <Reveal key={c.h} delay={i * 70}>
                <div className="card-lift flex gap-4 rounded-2xl border border-border bg-card p-6">
                  <c.icon className="mt-0.5 size-5 shrink-0 text-primary" />
                  <div>
                    <p className="font-semibold text-navy">{c.h}</p>
                    <p className="mt-1.5 text-sm text-muted-foreground">{c.b}</p>
                  </div>
                </div>
              </Reveal>
            ))}
            <Reveal>
              <div className="rounded-2xl border border-border bg-card p-6 text-sm text-muted-foreground">
                <p className="font-semibold text-navy">Registered office</p>
                <p className="mt-2">{company.address}</p>
                <p className="mt-1">GSTIN {company.gst}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <FinalCTA />
    </PageShell>
  );
}
