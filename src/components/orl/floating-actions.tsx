import { MessageCircle, Phone } from "lucide-react";
import { company } from "@/data/orl";

export function FloatingActions() {
  return (
    <div className="fixed right-4 bottom-4 z-40 flex flex-col gap-3 sm:right-6 sm:bottom-6">
      <a
        href={company.phoneHref}
        aria-label="Call ORL"
        className="grid size-12 place-items-center rounded-full bg-navy text-navy-foreground shadow-[var(--shadow-lift)] transition-transform duration-300 hover:-translate-y-1 sm:hidden"
      >
        <Phone className="size-5" />
      </a>
      <a
        href={company.whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with ORL on WhatsApp"
        className="grid size-13 place-items-center rounded-full bg-success text-navy shadow-[var(--shadow-lift)] transition-transform duration-300 hover:-translate-y-1"
      >
        <MessageCircle className="size-6" />
      </a>
    </div>
  );
}
