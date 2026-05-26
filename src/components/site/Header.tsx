import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";

const NAV = [
  { label: "Home", href: "#top" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Shirodhara", href: "#shirodhara" },
  { label: "Yoga", href: "#yoga" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [showBanner, setShowBanner] = useState(true);

  /* ── NO useEffect hooks at all ── */
  /* Scroll detection removed: header always uses solid background */
  /* Global keydown removed: no event listeners on window */

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 transition-all duration-500 flex flex-col"
    >
      {/* Announcement Banner */}
      {showBanner && (
        <div className="bg-forest-deep text-cream min-h-[40px] px-4 py-2 flex items-center justify-between text-[13px] sm:text-fluid-xs border-b border-gold/20 shadow-sm transition-all duration-300">
          <div className="flex-1 text-center font-medium flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
            <span className="text-gold">🌿 Special Offer:</span> 
            <span>All Services for just ₹999</span>
            <a href="#book" className="inline-flex items-center gap-1 text-gold hover:text-cream transition-colors underline underline-offset-4 decoration-gold/40 hover:decoration-cream font-semibold">
              Book Now <ArrowRight className="w-3 h-3" />
            </a>
          </div>
          <button
            onClick={() => setShowBanner(false)}
            className="ml-3 sm:ml-4 text-cream/70 hover:text-gold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-full p-1 -mr-2"
            aria-label="Dismiss offer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Main Nav Container */}
      <div className="bg-cream/90 backdrop-blur-md border-b border-border text-ink w-full">
        <div className="container-luxe flex items-center justify-between min-h-20 gap-3">
        <div className="flex items-center gap-2">
          <a href="#top" aria-label="My Spa Ayurvedic Hub home" className="flex items-center">
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
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          className="md:hidden fixed inset-x-0 top-20 z-50 h-[calc(100dvh-5rem)] overflow-y-auto bg-[oklch(0.22_0.035_155)] text-cream shadow-[var(--shadow-luxe)]"
        >
          <nav aria-label="Mobile" className="container-luxe flex flex-col gap-2 py-8">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-display text-fluid-xl min-h-11 py-3 border-b border-cream/10 hover:text-gold active:text-gold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-forest-deep"
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
      )}
      </div>
    </header>
  );
}
