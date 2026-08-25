import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { PageShell, PageHero } from "@/components/orl/page-shell";
import { ButtonBase, Reveal } from "@/components/orl/primitives";
import { submitEnterpriseLead } from "@/server/lead-submission";

export const Route = createFileRoute("/enterprise")({
  head: () => ({
    meta: [
      { title: "Enterprise Freight Inquiry — Contract Logistics | ORL" },
      {
        name: "description",
        content:
          "For shippers with recurring volume: share your routes, monthly tonnage and fleet requirement for a contracted rate card from Om Roadlines.",
      },
      { property: "og:title", content: "Enterprise Freight Inquiry — ORL" },
      { property: "og:description", content: "Contract rates and dedicated fleet planning for high-volume shippers." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/enterprise" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/enterprise" }],
  }),
  component: Enterprise,
});

const fieldCls =
  "w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary";

function Enterprise() {
  const navigate = useNavigate();
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  return (
    <PageShell>
      <PageHero
        eyebrow="Enterprise"
        title={
          <>
            Recurring volume deserves{" "}
            <span className="text-accent">a contracted plan.</span>
          </>
        }
        body="Tell us how much moves each month and where. We come back with a rate card, a fleet plan and a named coordinator."
      />
      <section className="py-20 lg:py-28">
        <div className="container-orl max-w-3xl">
          <Reveal>
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                setSending(true);
                setError("");
                const values = new FormData(e.currentTarget);
                try {
                  await submitEnterpriseLead({
                    data: {
                      company: String(values.get("company") ?? ""),
                      volume: String(values.get("volume") ?? ""),
                      fleet: String(values.get("fleet") ?? ""),
                      routes: String(values.get("routes") ?? ""),
                      email: String(values.get("email") ?? ""),
                      phone: String(values.get("phone") ?? ""),
                      message: String(values.get("message") ?? ""),
                      website: String(values.get("website") ?? ""),
                    },
                  });
                  navigate({ to: "/quote/thank-you" });
                } catch (cause) {
                  setError(cause instanceof Error ? cause.message : "We couldn't send your inquiry. Please try again.");
                  setSending(false);
                }
              }}
              className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)]"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="sr-only" aria-hidden="true">
                  Website
                  <input name="website" tabIndex={-1} autoComplete="off" />
                </label>
                <label className="grid gap-2 text-sm font-medium text-navy sm:col-span-2">
                  Company name
                  <input required name="company" className={fieldCls} placeholder="Company Pvt. Ltd." />
                </label>
                <label className="grid gap-2 text-sm font-medium text-navy">
                  Monthly shipment volume
                  <input required name="volume" className={fieldCls} placeholder="e.g. 400 MT / 60 trucks" />
                </label>
                <label className="grid gap-2 text-sm font-medium text-navy">
                  Fleet requirement
                  <input name="fleet" className={fieldCls} placeholder="e.g. 6 × 32 ft SXL dedicated" />
                </label>
                <label className="grid gap-2 text-sm font-medium text-navy sm:col-span-2">
                  Preferred routes
                  <input required name="routes" className={fieldCls} placeholder="Gurugram → Mumbai, Bhiwadi → Pune" />
                </label>
                <label className="grid gap-2 text-sm font-medium text-navy">
                  Email
                  <input required type="email" name="email" className={fieldCls} placeholder="procurement@company.com" />
                </label>
                <label className="grid gap-2 text-sm font-medium text-navy">
                  Phone
                  <input required type="tel" name="phone" className={fieldCls} placeholder="+91 90000 00000" />
                </label>
                <label className="grid gap-2 text-sm font-medium text-navy sm:col-span-2">
                  Message
                  <textarea name="message" rows={4} className={fieldCls} placeholder="Anything we should know about your dispatch pattern?" />
                </label>
              </div>
              <ButtonBase type="submit" size="lg" className="mt-6 w-full" disabled={sending}>
                {sending ? "Sending…" : "Submit enterprise inquiry"} <ArrowRight className="size-4" />
              </ButtonBase>
              {error ? <p role="alert" className="mt-3 text-center text-sm text-destructive">{error}</p> : null}
            </form>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
