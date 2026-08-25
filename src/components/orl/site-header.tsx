import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const nav = [
  { label: "Services", to: "/services" },
  { label: "Industries", to: "/industries" },
  { label: "Coverage", to: "/coverage" },
  { label: "About", to: "/about" },
  { label: "Resources", to: "/resources" },
  { label: "Contact", to: "/contact" },
];

export function SiteHeader({ transparent = false }: { transparent?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = !transparent || scrolled;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        solid ? "glass-nav py-2.5" : "py-5",
      )}
    >
      <div className="container-orl grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 lg:flex lg:justify-between">
        <Link to="/" className="flex shrink-0 items-center" aria-label="Om Roadlines home">
          <img
            src="/orl-logo.png"
            alt="Om Roadlines"
            width={1835}
            height={855}
            className={cn(
              "h-10 w-auto max-w-32 object-contain transition-[filter] sm:h-11 sm:max-w-36",
              !solid && "brightness-0 invert",
            )}
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeProps={{ "data-active": "true" }}
              className={cn(
                "relative text-sm font-medium transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-full after:origin-bottom-right after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100",
                solid
                  ? "text-navy/80 hover:text-navy"
                  : "text-navy-foreground/85 hover:text-navy-foreground",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/quote"
            className="inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-brand)] px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow-[var(--shadow-glow)] transition-transform duration-300 hover:-translate-y-0.5"
          >
            Get Quote
            <ArrowRight className="size-4" />
          </Link>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className={cn(
              "grid size-10 shrink-0 place-items-center rounded-full border lg:hidden",
              solid
                ? "border-border bg-card text-navy"
                : "border-navy-foreground/20 text-navy-foreground",
            )}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="container-orl lg:hidden">
          <nav className="mt-3 grid gap-1 rounded-2xl border border-border bg-card p-3 shadow-[var(--shadow-card)]">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-navy transition-colors hover:bg-secondary"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
