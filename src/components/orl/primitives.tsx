import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function useInView<T extends HTMLElement>(threshold = 0.18) {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            io.unobserve(e.target);
          }
        });
      },
      { threshold, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return { ref, visible };
}

export function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article" | "span";
}) {
  const { ref, visible } = useInView<HTMLDivElement>();
  return (
    <Tag
      ref={ref as never}
      data-visible={visible}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn("reveal", className)}
    >
      {children}
    </Tag>
  );
}

export function Counter({
  value,
  suffix = "",
  decimals = 0,
}: {
  value: number;
  suffix?: string;
  decimals?: number;
}) {
  const { ref, visible } = useInView<HTMLSpanElement>(0.4);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!visible) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(value);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const duration = 1600;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(value * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [visible, value]);

  const formatted =
    decimals > 0
      ? display.toFixed(decimals)
      : Math.round(display).toLocaleString("en-IN");

  return (
    <span ref={ref}>
      {formatted}
      {suffix}
    </span>
  );
}

type ButtonProps = {
  children: ReactNode;
  variant?: "brand" | "navy" | "outline" | "ghostLight";
  size?: "md" | "lg";
  className?: string;
};

const buttonBase =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";

const variantMap = {
  brand:
    "bg-[image:var(--gradient-brand)] text-accent-foreground shadow-[var(--shadow-glow)] hover:-translate-y-0.5 hover:brightness-105",
  navy: "bg-navy text-navy-foreground hover:-translate-y-0.5 hover:bg-navy-soft",
  outline:
    "border border-border bg-card text-foreground hover:-translate-y-0.5 hover:border-navy hover:shadow-[var(--shadow-card)]",
  ghostLight:
    "glass-dark text-navy-foreground hover:-translate-y-0.5 hover:bg-[color-mix(in_oklab,var(--navy-foreground)_16%,transparent)]",
} as const;

const sizeMap = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-[0.95rem]",
} as const;

export function ButtonLink({
  to,
  href,
  children,
  variant = "brand",
  size = "md",
  className,
}: ButtonProps & { to?: string; href?: string }) {
  const cls = cn(buttonBase, variantMap[variant], sizeMap[size], className);
  if (to) {
    return (
      <Link to={to as never} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={cls}>
      {children}
    </a>
  );
}

export function ButtonBase({
  children,
  variant = "brand",
  size = "md",
  className,
  ...rest
}: ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...rest}
      className={cn(buttonBase, variantMap[variant], sizeMap[size], className)}
    >
      {children}
    </button>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  accent,
  body,
  tone = "light",
  align = "left",
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  body?: string;
  tone?: "light" | "dark";
  align?: "left" | "center";
}) {
  return (
    <Reveal
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
      )}
    >
      <p
        className={cn(
          "eyebrow",
          tone === "dark" ? "text-accent" : "text-primary",
        )}
      >
        {eyebrow}
      </p>
      <h2
        className={cn(
          "mt-4 text-4xl sm:text-5xl lg:text-[3.4rem]",
          tone === "dark" ? "text-navy-foreground" : "text-navy",
        )}
      >
        {title}{" "}
        {accent ? (
          <span
            className={
              tone === "dark"
                ? "text-[color-mix(in_oklab,var(--navy-foreground)_55%,transparent)]"
                : "text-muted-foreground"
            }
          >
            {accent}
          </span>
        ) : null}
      </h2>
      {body ? (
        <p
          className={cn(
            "mt-5 text-lg leading-relaxed",
            tone === "dark"
              ? "text-[color-mix(in_oklab,var(--navy-foreground)_70%,transparent)]"
              : "text-muted-foreground",
          )}
        >
          {body}
        </p>
      ) : null}
    </Reveal>
  );
}
