import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  Clock,
  FileCheck2,
  Gauge,
  MapPinned,
  Phone,
  Radar,
  ShieldCheck,
  Truck,
  Wrench,
} from "lucide-react";
import heroImg from "@/assets/hero-highway.jpg";
import ftlImg from "@/assets/service-ftl.jpg";
import odcImg from "@/assets/service-odc.jpg";
import fleetImg from "@/assets/fleet-yard.jpg";
import { PageShell, FinalCTA } from "@/components/orl/page-shell";
import {
  ButtonLink,
  Counter,
  Reveal,
  SectionHeading,
} from "@/components/orl/primitives";
import { CoverageMap } from "@/components/orl/coverage-map";
import { QuoteForm } from "@/components/orl/quote-form";
import {
  clients,
  company,
  industries,
  lanes,
  services,
  stats,
  whyOrl,
} from "@/data/orl";
import { absoluteUrl, defaultSocialImage } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ORL — Trusted Freight Transportation Across India | Om Roadlines" },
      {
        name: "description",
        content:
          "Om Roadlines (ORL) moves B2B freight across India — full truck load, part load, ODC and dedicated fleet. 15+ years, 550+ vehicles, 97.6% on-time delivery.",
      },
      { property: "og:title", content: "ORL — Trusted Freight Transportation Across India" },
      {
        property: "og:description",
        content:
          "FTL, part load, ODC and dedicated fleet logistics for Indian manufacturers. Written rates within two hours.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: absoluteUrl() },
      { property: "og:image", content: defaultSocialImage },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: absoluteUrl() }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MovingCompany",
          name: "Om Roadlines",
          alternateName: "ORL",
          url: absoluteUrl(),
          logo: defaultSocialImage,
          telephone: company.phone,
          email: company.email,
          address: {
            "@type": "PostalAddress",
            streetAddress: "Tauru Road, Bilaspur Chowk",
            addressLocality: "Gurugram",
            addressRegion: "Haryana",
            postalCode: "122413",
            addressCountry: "IN",
          },
          areaServed: "IN",
          foundingDate: "2010",
        }),
      },
    ],
  }),
  component: Home,
});

const whyIcons = [BadgeCheck, ShieldCheck, Wrench, Radar, MapPinned, Gauge];
const serviceImages: Record<string, string> = {
  ftl: ftlImg,
  odc: odcImg,
  fleet: fleetImg,
};

function Home() {
  return (
    <PageShell transparentHeader>
      {/* Hero */}
      <section className="relative min-h-[92vh] overflow-hidden">
        <img
          src={heroImg}
          alt="ORL freight trucks moving on an Indian highway at dusk"
          width={1920}
          height={1088}
          fetchPriority="high"
          className="absolute inset-0 size-full object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-[image:var(--gradient-hero)]"
        />
        <div className="relative container-orl flex min-h-[92vh] flex-col justify-center pt-32 pb-24">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-2 text-xs font-medium text-navy-foreground">
              <span className="size-2 rounded-full bg-success" />
              550+ owned &amp; attached trucks on the road
            </span>
          </Reveal>
          <h1 className="mt-8 max-w-4xl text-5xl leading-[0.98] text-navy-foreground sm:text-6xl lg:text-[5.2rem]">
            {["Trusted Freight", "Transportation", "Across India."].map((line, i) => (
              <Reveal key={line} as="span" delay={120 * i} className="block">
                {line}
              </Reveal>
            ))}
          </h1>
          <Reveal delay={420} className="mt-8 max-w-xl">
            <p className="text-lg text-navy-foreground/80">
              <span className="font-semibold text-accent">Moving business.</span>{" "}
              Not just goods. Full truck load, part load, ODC, dedicated fleet
              and pan-India 3PL built for enterprise supply chains.
            </p>
          </Reveal>
          <Reveal delay={540} className="mt-10 flex flex-wrap gap-3">
            <ButtonLink to="/quote" size="lg">
              Get Quote <ArrowRight className="size-4" />
            </ButtonLink>
            <ButtonLink href={company.phoneHref} variant="ghostLight" size="lg">
              <Phone className="size-4" /> Call Now
            </ButtonLink>
          </Reveal>
        </div>
        <div className="absolute inset-x-0 bottom-8 flex flex-col items-center gap-3">
          <span className="text-[0.6rem] tracking-[0.4em] text-navy-foreground/50">
            SCROLL
          </span>
          <span className="h-10 w-px bg-gradient-to-b from-navy-foreground/60 to-transparent" />
        </div>
      </section>

      {/* Stats */}
      <section className="bg-navy py-14">
        <div className="container-orl grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-5">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 90}>
              <p className="font-display text-4xl font-extrabold text-navy-foreground lg:text-5xl">
                <Counter value={s.value} suffix={s.suffix} decimals={s.decimals} />
              </p>
              <p className="mt-2 text-[0.7rem] tracking-[0.16em] text-navy-foreground/55 uppercase">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Why ORL */}
      <section className="py-24 lg:py-32">
        <div className="container-orl">
          <SectionHeading
            eyebrow="Why choose ORL"
            title="Enterprise-grade freight."
            accent="Zero drama."
            body="Six reasons procurement teams at Indian manufacturers ship with us — and stay."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {whyOrl.map((item, i) => {
              const Icon = whyIcons[i];
              return (
                <Reveal key={item.title} delay={i * 70}>
                  <article className="card-lift h-full rounded-3xl border border-border bg-card p-8">
                    <span className="grid size-12 place-items-center rounded-2xl bg-secondary text-primary">
                      <Icon className="size-5.5" strokeWidth={2} />
                    </span>
                    <h3 className="mt-6 text-xl text-navy">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {item.body}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-surface py-24 lg:py-32">
        <div className="container-orl">
          <SectionHeading
            eyebrow="What we move"
            title="Five ways to put"
            accent="your freight on the road."
          />
          <div className="mt-16 space-y-20">
            {services.map((s, i) => (
              <Reveal key={s.slug}>
                <article
                  className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                    i % 2 === 1 ? "lg:[&>figure]:order-2" : ""
                  }`}
                >
                  <figure className="overflow-hidden rounded-3xl">
                    <img
                      src={serviceImages[s.image]}
                      alt={s.name}
                      loading="lazy"
                      width={1200}
                      height={900}
                      className="aspect-4/3 w-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </figure>
                  <div>
                    <p className="eyebrow text-accent">{s.tag}</p>
                    <h3 className="mt-4 text-3xl text-navy lg:text-4xl">{s.name}</h3>
                    <p className="mt-4 text-lg text-muted-foreground">{s.summary}</p>
                    <ul className="mt-6 space-y-3">
                      {s.benefits.slice(0, 3).map((b) => (
                        <li key={b} className="flex gap-3 text-sm text-navy">
                          <FileCheck2 className="mt-0.5 size-4 shrink-0 text-primary" />
                          {b}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8">
                      <ButtonLink
                        to={`/services/${s.slug}`}
                        variant="outline"
                        size="lg"
                      >
                        Explore {s.name} <ArrowRight className="size-4" />
                      </ButtonLink>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="relative overflow-hidden bg-navy py-24 lg:py-32">
        <img
          src={fleetImg}
          alt=""
          aria-hidden
          loading="lazy"
          className="absolute inset-0 size-full object-cover opacity-15"
        />
        <div className="relative container-orl">
          <SectionHeading
            eyebrow="Industries served"
            title="Built for India's"
            accent="supply chains."
            tone="dark"
          />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind, i) => (
              <Reveal key={ind.slug} delay={i * 60}>
                <Link
                  to="/industries/$slug"
                  params={{ slug: ind.slug }}
                  className="group block h-full rounded-3xl glass-dark p-7 transition-all duration-500 hover:-translate-y-1.5 hover:bg-[color-mix(in_oklab,var(--navy-foreground)_14%,transparent)]"
                >
                  <Truck className="size-6 text-accent" strokeWidth={1.8} />
                  <h3 className="mt-6 text-xl text-navy-foreground">{ind.name}</h3>
                  <p className="mt-3 text-sm text-navy-foreground/65">{ind.summary}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent">
                    View solution
                    <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="bg-[image:var(--gradient-navy)] py-24 lg:py-32">
        <div className="container-orl">
          <SectionHeading
            eyebrow="Coverage network"
            title="NCR-anchored."
            accent="Pan-India delivered."
            tone="dark"
            body="Five branch hubs, 500+ attached vehicles and lane depth on the corridors that matter to Indian manufacturing."
          />
          <div className="mt-14">
            <CoverageMap />
          </div>
          <Reveal className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {lanes.slice(0, 6).map((l) => (
              <Link
                key={l.slug}
                to="/coverage/$slug"
                params={{ slug: l.slug }}
                className="group flex items-center justify-between rounded-2xl glass-dark px-5 py-4 transition-colors hover:bg-[color-mix(in_oklab,var(--navy-foreground)_14%,transparent)]"
              >
                <span className="text-sm font-medium text-navy-foreground">
                  {l.from} → {l.to}
                </span>
                <span className="flex items-center gap-2 text-xs text-navy-foreground/60">
                  {l.transit}
                  <ArrowRight className="size-3.5 text-accent transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Case study */}
      <section className="py-24 lg:py-32">
        <div className="container-orl">
          <SectionHeading
            eyebrow="Case study"
            title="Steel dispatch, month-end,"
            accent="zero missed windows."
          />
          <Reveal className="mt-12 grid gap-6 lg:grid-cols-4">
            {[
              { h: "Challenge", b: "A stainless steel producer was losing month-end dispatch slots when spot-market trucks failed to report on peak days." },
              { h: "Solution", b: "A dedicated fleet of vehicles reserved for the plant, backed by attached capacity for surge days." },
              { h: "Implementation", b: "Placement schedule agreed weekly, coordinator embedded with the dispatch desk, escalation path defined." },
              { h: "Result", b: "Placement reliability held through peak weeks and month-end dispatch backlog was cleared inside the billing cycle." },
            ].map((c, i) => (
              <article
                key={c.h}
                className="card-lift rounded-3xl border border-border bg-card p-7"
              >
                <span className="font-display text-4xl font-extrabold text-secondary-foreground/20">
                  0{i + 1}
                </span>
                <h3 className="mt-4 text-lg text-navy">{c.h}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.b}</p>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Client marquee */}
      <section className="border-y border-border bg-surface py-14">
        <p className="container-orl eyebrow text-muted-foreground">
          Trusted by shippers including
        </p>
        <div className="mt-8 overflow-hidden">
          <div className="marquee-track gap-16 px-8">
            {[...clients, ...clients, ...clients, ...clients].map((c, i) => (
              <span
                key={`${c}-${i}`}
                className="font-display text-xl font-bold whitespace-nowrap text-navy/35"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications + quote */}
      <section className="py-24 lg:py-32">
        <div className="container-orl grid gap-14 lg:grid-cols-[1fr_0.85fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Compliance"
              title="Registered, insured,"
              accent="audit-ready."
            />
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {[
                { icon: FileCheck2, h: "GST registered", b: `GSTIN ${company.gst}` },
                { icon: ShieldCheck, h: "Cargo insurance", b: "Transit cover arranged on every consignment" },
                { icon: BadgeCheck, h: "Driver vetting", b: "Licence and background verification on file" },
                { icon: Clock, h: "Documentation", b: "LR, e-way bill and signed POD on every trip" },
              ].map((c, i) => (
                <Reveal key={c.h} delay={i * 70}>
                  <div className="card-lift flex h-full gap-4 rounded-2xl border border-border bg-card p-6">
                    <c.icon className="mt-0.5 size-5 shrink-0 text-primary" />
                    <div>
                      <p className="font-semibold text-navy">{c.h}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{c.b}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal>
            <QuoteForm compact />
          </Reveal>
        </div>
      </section>

      <FinalCTA />
    </PageShell>
  );
}
