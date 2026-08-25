import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, Phone } from "lucide-react";
import { PageShell } from "@/components/orl/page-shell";
import { ButtonLink, Reveal } from "@/components/orl/primitives";
import { company } from "@/data/orl";

export const Route = createFileRoute("/quote/thank-you")({
  head: () => ({
    meta: [
      { title: "Thank You — Your Freight Request Is In | ORL" },
      {
        name: "description",
        content: "Your quote request has reached the Om Roadlines logistics desk. Our team responds within two hours.",
      },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: "Thank you — request received" },
      { property: "og:description", content: "The ORL logistics team will contact you within two hours." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/quote/thank-you" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/quote/thank-you" }],
  }),
  component: ThankYou,
});

function ThankYou() {
  return (
    <PageShell>
      <section className="bg-[image:var(--gradient-navy)] pt-40 pb-32">
        <div className="container-orl">
          <Reveal className="max-w-2xl">
            <CheckCircle2 className="size-14 text-success" strokeWidth={1.6} />
            <h1 className="mt-8 text-5xl text-navy-foreground lg:text-6xl">Thank you!</h1>
            <p className="mt-6 text-lg text-navy-foreground/75">
              Our logistics team will contact you within 2 hours with a rate and a
              placement window. If it&rsquo;s urgent, call the dispatch desk now.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <ButtonLink href={company.phoneHref} size="lg">
                <Phone className="size-4" /> {company.phone}
              </ButtonLink>
              <ButtonLink to="/" variant="ghostLight" size="lg">
                Back to home
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
