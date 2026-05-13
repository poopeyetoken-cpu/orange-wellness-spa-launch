import heroImg from "@/assets/hero-spa.jpg";
import { Star } from "lucide-react";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100dvh] flex items-end overflow-hidden text-cream"
    >
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="A serene candlelit treatment room at Orange Wellness Spa with white orchids and warm stone walls"
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover ken-burns"
          width={1920}
          height={1080}
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-deep/70 via-forest-deep/40 to-forest-deep/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-deep/60 via-transparent to-transparent" />
      </div>

      <div className="container-luxe relative z-10 pb-[clamp(6rem,10vw,7rem)] pt-[clamp(7rem,16vw,9rem)]">
        <div className="max-w-3xl">
          <p className="eyebrow !text-gold-soft mb-6 reveal is-visible">
            Est. A sanctuary for modern souls
          </p>
          <h1 className="font-display text-hero leading-[1.02] mb-6 reveal is-visible">
            Massage Spa in
            <span className="italic text-gold-soft"> Calicut, Kozhikode </span>
            at Orange Wellness Spa.
          </h1>
          <p className="max-w-xl text-fluid-lg leading-relaxed text-cream/85 mb-8 reveal is-visible">
            Step inside a quiet world of warm stone, golden light and unhurried
            ritual. Bespoke massage, Ayurveda, skincare and holistic wellness -
            crafted by certified therapists for the way you live now.
          </p>

          <div className="flex flex-wrap items-center gap-3 mb-8 reveal is-visible">
            <a
              href="#book"
              className="btn-primary !bg-gold !text-ink !border-gold hover:!bg-cream hover:!border-cream"
            >
              Book Appointment
            </a>
            <a href="#services" className="btn-ghost">
              Explore Services
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-fluid-sm text-cream/80 reveal is-visible">
            <div className="flex items-center gap-2">
              <div className="flex" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
                ))}
              </div>
              <span className="tracking-wide">4.9 - 1,200+ guest reviews</span>
            </div>
            <span className="hidden md:inline w-px h-4 bg-cream/25" aria-hidden="true" />
            <span className="w-full md:w-auto tracking-[0.08em] md:tracking-[0.16em] uppercase text-fluid-xs leading-relaxed">
              Certified - Natural - Private rooms
            </span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 right-6 hidden md:flex flex-col items-center gap-2 text-fluid-xs tracking-[0.2em] uppercase text-cream/70">
        <span>Scroll</span>
        <span className="w-px h-12 bg-cream/40 relative overflow-hidden">
          <span className="absolute inset-x-0 top-0 h-4 bg-gold animate-[scrollcue_2.4s_ease-in-out_infinite]" />
        </span>
      </div>

      <style>{`
        @keyframes scrollcue {
          0% { transform: translateY(-100%); }
          60% { transform: translateY(300%); }
          100% { transform: translateY(300%); }
        }
      `}</style>
    </section>
  );
}

