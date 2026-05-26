import { useState, useEffect, useRef } from "react";
import { X, ChevronDown } from "lucide-react";

export function LeadPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  const overlayRef = useRef<HTMLDivElement>(null);
  const popupRef = useRef<HTMLDivElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (isDismissed) return;
    const timer = setTimeout(() => {
      previousFocusRef.current = document.activeElement as HTMLElement;
      setIsOpen(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, [isDismissed]);

  useEffect(() => {
    if (isOpen && firstInputRef.current) {
      // Small delay to ensure render is complete
      setTimeout(() => firstInputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        closePopup();
      }
      
      // Simple focus trap
      if (e.key === "Tab" && isOpen && popupRef.current) {
        const focusableElements = popupRef.current.querySelectorAll(
          'a[href], button, textarea, input[type="text"], input[type="tel"], input[type="datetime-local"], select'
        );
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
          }
        }
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  function closePopup() {
    setIsAnimatingOut(true);
    // Wait for animation to finish
    setTimeout(() => {
      setIsOpen(false);
      setIsDismissed(true);
      setIsAnimatingOut(false);
      // Return focus to previously focused element
      if (previousFocusRef.current) {
        previousFocusRef.current.focus();
      }
    }, 300);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name")?.toString().trim() || "";
    const phone = formData.get("phone")?.toString().trim() || "";
    const service = formData.get("service")?.toString() || "";
    const datetime = formData.get("datetime")?.toString() || "";
    
    const msg = `Hello! I'd like to book a spa session 🌿\n\nName: ${name}\nPhone: ${phone}\nService: ${service}\nDate & Time: ${datetime}\n\nSpecial Offer: All Services for ₹999`;
    
    /* REPLACE WITH YOUR WHATSAPP NUMBER */
    const waNumber = '918921043599'; 
    window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');
    
    closePopup();
  }

  if (!isOpen && !isDismissed && !isAnimatingOut) return null;
  if (isDismissed) return null;

  return (
    <div
      ref={overlayRef}
      id="lead-popup-overlay"
      className={`fixed inset-0 z-[9999] flex justify-center items-center p-4 bg-[oklch(0_0_0/0.65)] backdrop-blur-sm transition-opacity duration-300 ease-out ${
        isAnimatingOut ? "opacity-0" : "opacity-100"
      }`}
      onClick={(e) => {
        if (e.target === overlayRef.current) closePopup();
      }}
    >
      <div
        ref={popupRef}
        id="lead-popup"
        role="dialog"
        aria-modal="true"
        aria-labelledby="lead-popup-title"
        className={`relative max-w-md w-full bg-cream text-ink rounded-[var(--radius-xl)] shadow-[var(--shadow-luxe)] p-6 md:p-8 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] transform ${
          isAnimatingOut
            ? "translate-y-4 scale-95 opacity-0"
            : "translate-y-0 scale-100 opacity-100 animate-in zoom-in-95 slide-in-from-bottom-4"
        }`}
      >
        <button
          id="lead-popup-close"
          onClick={closePopup}
          className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-ink transition-colors rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6 mt-2">
          <span className="inline-block bg-forest-deep text-cream text-[10px] md:text-xs uppercase tracking-widest px-3 py-1 rounded-full mb-4 font-medium">
            Limited Time Offer
          </span>
          <h2 id="lead-popup-title" className="font-display text-fluid-xl mb-2 text-forest-deep leading-tight">
            All Services for ₹999
          </h2>
          <p className="text-muted-foreground text-sm">
            Claim this exclusive offer before it expires.
          </p>
        </div>

        <form id="lead-popup-form" onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="popup-name" className="block text-[10px] uppercase tracking-[0.16em] font-medium text-muted-foreground mb-1">Name</label>
            <input
              ref={firstInputRef}
              id="popup-name"
              name="name"
              type="text"
              required
              className="w-full bg-transparent border-0 border-b border-border min-h-[2.5rem] py-2 text-ink outline-none focus:border-forest-deep transition-colors text-fluid-sm"
              placeholder="Your full name"
            />
          </div>
          <div>
            <label htmlFor="popup-phone" className="block text-[10px] uppercase tracking-[0.16em] font-medium text-muted-foreground mb-1">Phone</label>
            <input
              id="popup-phone"
              name="phone"
              type="tel"
              required
              className="w-full bg-transparent border-0 border-b border-border min-h-[2.5rem] py-2 text-ink outline-none focus:border-forest-deep transition-colors text-fluid-sm"
              placeholder="+91"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            {/* ── Service ── */}
            <div>
              <label htmlFor="popup-service" className="block text-[10px] uppercase tracking-[0.16em] font-medium text-muted-foreground mb-1">Service</label>
              <div className="relative">
                <select
                  id="popup-service"
                  name="service"
                  required
                  className="w-full bg-transparent border-0 border-b border-border min-h-[2.5rem] py-2 pr-6 text-ink outline-none focus:border-forest-deep transition-colors text-fluid-sm cursor-pointer"
                  style={{ appearance: "none", WebkitAppearance: "none", MozAppearance: "none" }}
                >
                  <option value="Any Service">Any Service</option>
                  <option value="Full Body Massage">Full Body</option>
                  <option value="Deep Tissue Massage">Deep Tissue</option>
                  <option value="Shirodhara">Shirodhara</option>
                  <option value="Olive Oil Massage">Olive Oil</option>
                  <option value="Aroma Massage">Aroma</option>
                  <option value="Yoga Classes">Yoga</option>
                </select>
                <ChevronDown
                  aria-hidden="true"
                  className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground opacity-60"
                />
              </div>
            </div>

            {/* ── Date & Time ── */}
            <div>
              <label htmlFor="popup-datetime" className="block text-[10px] uppercase tracking-[0.16em] font-medium text-muted-foreground mb-1">Date & Time</label>
              <div className="relative">
                <input
                  id="popup-datetime"
                  name="datetime"
                  type="datetime-local"
                  required
                  className="w-full bg-transparent border-0 border-b border-border min-h-[2.5rem] py-2 pr-6 text-ink outline-none focus:border-forest-deep transition-colors text-fluid-sm [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:inset-0 [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:cursor-pointer"
                />
                <ChevronDown
                  aria-hidden="true"
                  className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground opacity-60"
                />
              </div>
            </div>
          </div>
          
          <button
            type="submit"
            className="w-full min-h-12 mt-8 inline-flex items-center justify-center bg-gold text-forest-deep font-medium tracking-wider uppercase text-fluid-xs transition-all hover:bg-forest-deep hover:text-cream rounded-[var(--radius-md)] border-none"
          >
            Claim ₹999 Offer
          </button>
          <p className="text-center text-xs text-muted-foreground mt-2 opacity-80">
            No credit card required. Pay at the spa.
          </p>
        </form>
      </div>
    </div>
  );
}
