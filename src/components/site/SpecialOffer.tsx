import { ArrowRight } from "lucide-react";

export function SpecialOffer() {
  return (
    <section className="px-4 py-8 md:py-12 bg-background">
      <div className="container-luxe">
        <div className="bg-forest-deep text-cream rounded-[var(--radius-2xl)] p-8 md:p-12 lg:p-16 text-center shadow-[var(--shadow-luxe)] flex flex-col items-center max-w-5xl mx-auto border border-gold/20">
          <span className="text-fluid-xs tracking-[0.16em] uppercase text-gold mb-4 font-medium">
            Limited Time Offer
          </span>
          
          <h2 className="font-display text-fluid-xl md:text-fluid-2xl mb-4 leading-tight">
            All Services, One Price
          </h2>
          
          <p className="text-cream opacity-80 text-fluid-sm max-w-lg mb-8 leading-relaxed">
            Treat yourself to our complete spa experience — every service, for just ₹999.
          </p>
          
          <div className="mb-10 flex flex-col items-center relative">
            <span className="text-cream opacity-50 line-through text-fluid-sm mb-1 decoration-gold/50">
              Was ₹2,500+
            </span>
            <span className="font-display text-fluid-2xl md:text-hero font-bold text-gold leading-none drop-shadow-md">
              ₹999
            </span>
          </div>

          <a
            href="#book"
            className="min-h-12 px-8 inline-flex items-center justify-center gap-2 bg-gold text-forest-deep font-medium tracking-wider uppercase text-fluid-xs transition-all hover:bg-cream hover:scale-[1.02] active:scale-[0.98] rounded-[var(--radius-md)] mb-8"
          >
            Book Your Session <ArrowRight className="w-4 h-4" />
          </a>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full text-fluid-xs text-cream opacity-70 border-t border-cream/20 pt-8">
            <div className="flex items-center justify-center gap-2">
              <span className="text-gold">✓</span> Full Body Massage
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="text-gold">✓</span> Deep Tissue Massage
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="text-gold">✓</span> Shirodhara
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="text-gold">✓</span> Ayurvedic Facials
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
