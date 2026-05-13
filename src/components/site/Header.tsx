import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";

const NAV = [
  { label: "Home", href: "#top" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Epilimo", href: "#epilimo" },
  { label: "Yoga", href: "#yoga" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (!open) return;
    const firstLink = document.querySelector<HTMLAnchorElement>(
      'nav[aria-label="Mobile"] a',
    );
    firstLink?.focus();
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream/90 backdrop-blur-md border-b border-border text-ink"
          : "bg-transparent text-cream"
      }`}
    >
      <div className="container-luxe flex items-center justify-between min-h-20 gap-3">
        <div className="flex items-center gap-2">
          <a href="#top" aria-label="Orange Wellness Spa home" className="flex items-center">
            <Logo />
          </a>
          <ThemeToggle />
        </div>

        <nav aria-label="Primary" className="hidden md:flex items-center gap-1 lg:gap-6">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="inline-flex min-h-11 items-center px-2 text-fluid-xs tracking-[0.16em] uppercase font-medium hover:text-gold active:text-gold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a href="#book" className="btn-primary">
            Book Now
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 -mr-2 min-h-11 min-w-11 active:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile sheet */}
      <div
        role="dialog"
        aria-modal="true"
        className={`md:hidden fixed inset-x-0 top-20 z-50 h-[calc(100dvh-5rem)] overflow-y-auto bg-[oklch(0.22_0.035_155)] text-cream shadow-[var(--shadow-luxe)] transition-transform duration-500 ${
          open ? "visible translate-y-0" : "invisible -translate-y-4 pointer-events-none"
        }`}
      >
        <nav aria-label="Mobile" className="container-luxe flex flex-col gap-2 py-8">
          {NAV.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="font-display text-fluid-xl min-h-11 py-3 border-b border-cream/10 hover:text-gold active:text-gold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-forest-deep"
              style={{ transitionDelay: `${i * 30}ms` }}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#book"
            onClick={() => setOpen(false)}
            className="btn-primary !bg-gold !text-ink !border-gold mt-6 self-start"
          >
            Book Appointment
          </a>
        </nav>
      </div>
    </header>
  );
}

