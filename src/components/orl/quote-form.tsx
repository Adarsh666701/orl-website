import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { ButtonBase } from "./primitives";
import { cn } from "@/lib/utils";
import { submitQuoteLead } from "@/server/lead-submission";

const loadTypes = [
  "Full Truck Load (FTL)",
  "Part Load / PTL",
  "ODC / Heavy equipment",
  "Express freight",
  "Dedicated fleet",
];

const fieldCls =
  "w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary";

export function QuoteForm({
  compact = false,
  title = "Get a freight quote",
}: {
  compact?: boolean;
  title?: string;
}) {
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        setSubmitting(true);
        setError("");
        const values = new FormData(e.currentTarget);
        try {
          await submitQuoteLead({
            data: {
              origin: String(values.get("origin") ?? ""),
              destination: String(values.get("destination") ?? ""),
              loadType: String(values.get("loadType") ?? ""),
              name: String(values.get("name") ?? ""),
              phone: String(values.get("phone") ?? ""),
              website: String(values.get("website") ?? ""),
            },
          });
          navigate({ to: "/quote/thank-you" });
        } catch (cause) {
          setError(cause instanceof Error ? cause.message : "We couldn't send your request. Please try again.");
          setSubmitting(false);
        }
      }}
      className={cn(
        "rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)] sm:p-8",
      )}
    >
      <h3 className="text-2xl text-navy">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">
        Four fields. A written rate back within two hours.
      </p>

      <div className={cn("mt-6 grid gap-4", !compact && "sm:grid-cols-2")}>
        <label className="sr-only" aria-hidden="true">
          Website
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
        <label className="grid gap-2 text-sm font-medium text-navy">
          Origin
          <input required name="origin" placeholder="Gurugram" className={fieldCls} />
        </label>
        <label className="grid gap-2 text-sm font-medium text-navy">
          Destination
          <input required name="destination" placeholder="Mumbai" className={fieldCls} />
        </label>
        <label className="grid gap-2 text-sm font-medium text-navy sm:col-span-2">
          Load type
          <select required name="loadType" defaultValue="" className={fieldCls}>
            <option value="" disabled>
              Select load type
            </option>
            {loadTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-medium text-navy">
          Name
          <input required name="name" placeholder="Your name" className={fieldCls} />
        </label>
        <label className="grid gap-2 text-sm font-medium text-navy">
          Phone
          <input
            required
            name="phone"
            type="tel"
            inputMode="tel"
            placeholder="+91 90000 00000"
            className={fieldCls}
          />
        </label>
      </div>

      <ButtonBase type="submit" size="lg" className="mt-6 w-full" disabled={submitting}>
        {submitting ? "Sending…" : "Get Quote"} <ArrowRight className="size-4" />
      </ButtonBase>
      {error ? <p role="alert" className="mt-3 text-center text-sm text-destructive">{error}</p> : null}
      <p className="mt-3 text-center text-xs text-muted-foreground">
        No spam. Your details are used only to prepare your freight rate.
      </p>
    </form>
  );
}
