import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { company, industries, services } from "@/data/orl";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="container-orl grid gap-12 py-20 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-2xl font-extrabold">ORL</p>
          <p className="mt-1 text-xs tracking-[0.24em] text-navy-foreground/60">
            OM ROADLINES
          </p>
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-navy-foreground/70">
            B2B road freight and 3PL across India. Full truck load, part load,
            ODC and dedicated fleet for manufacturers and distributors.
          </p>
          <p className="mt-6 text-xs text-navy-foreground/50">
            GSTIN {company.gst}
          </p>
        </div>

        <div>
          <p className="eyebrow text-accent">Services</p>
          <ul className="mt-5 space-y-3 text-sm text-navy-foreground/75">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="transition-colors hover:text-accent"
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow text-accent">Industries</p>
          <ul className="mt-5 space-y-3 text-sm text-navy-foreground/75">
            {industries.map((i) => (
              <li key={i.slug}>
                <Link
                  to="/industries/$slug"
                  params={{ slug: i.slug }}
                  className="transition-colors hover:text-accent"
                >
                  {i.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow text-accent">Contact</p>
          <ul className="mt-5 space-y-4 text-sm text-navy-foreground/75">
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-accent" />
              <a href={company.phoneHref} className="hover:text-accent">
                {company.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-accent" />
              <a href={`mailto:${company.email}`} className="hover:text-accent">
                {company.email}
              </a>
            </li>
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-accent" />
              <span>{company.address}</span>
            </li>
          </ul>
          <ul className="mt-6 space-y-3 text-sm text-navy-foreground/75">
            <li>
              <Link to="/careers" className="hover:text-accent">Careers</Link>
            </li>
            <li>
              <Link to="/faq" className="hover:text-accent">FAQ</Link>
            </li>
            <li>
              <Link to="/enterprise" className="hover:text-accent">Enterprise inquiry</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-navy-foreground/10">
        <div className="container-orl flex flex-col gap-3 py-6 text-xs text-navy-foreground/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {company.legalName}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-accent">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-accent">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
