import massageImg from "@/assets/service-massage.jpg";
import ayurvedaImg from "@/assets/service-ayurveda.jpg";
import facialImg from "@/assets/service-facial.jpg";
import { ArrowUpRight } from "lucide-react";

const FEATURED = [
  {
    n: "01",
    title: "Full Body Massage & Body Scrub",
    blurb:
      "Unhurried, deeply restorative bodywork paired with mineral-rich exfoliation. Skin emerges luminous; the nervous system, recalibrated.",
    img: massageImg,
    duration: "75 / 90 min",
    tag: "Signature",
  },
  {
    n: "02",
    title: "Spa with Ayurvedic Treatments",
    blurb:
      "Abhyanga, Shirodhara and dosha-balancing rituals delivered in the classical tradition by Kerala-trained therapists.",
    img: ayurvedaImg,
    duration: "60 / 120 min",
    tag: "Heritage",
  },
  {
    n: "03",
    title: "Facial & Skin Care Treatments",
    blurb:
      "Diagnostic-led facials with cold-pressed actives, jade gua sha and lymphatic sculpting for visibly elevated skin.",
    img: facialImg,
    duration: "60 / 90 min",
    tag: "Editorial Glow",
  },
];

const ALL = [
  "Full Body Massage & Body Scrub",
  "Spa with Ayurvedic Treatments",
  "Western Spa Therapies",
  "Unisex Spa & Salon",
  "Body Treatments",
  "Skin Care Treatments",
  "Hair Care Treatments",
  "Nail Care Treatments",
  "Facial Treatments",
  "Wellness Consultation",
  "Epilimo · DNA Genetic Testing",
  "Yoga Classes",
];

export function Services() {
  return (
    <section id="services" className="relative section-pad bg-card content-auto">
      <div className="container-luxe">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12">
          <div className="max-w-2xl">
            <p className="eyebrow mb-5 reveal">Signature menu</p>
            <h2 className="font-display text-fluid-2xl leading-[1.05] reveal">
              Treatments composed
              <span className="italic text-forest"> like a private symphony</span>.
            </h2>
          </div>
          <p className="md:max-w-sm text-fluid-base text-foreground/70 leading-relaxed reveal">
            A curated selection of our most-loved rituals. Each one is tailored
            after a brief consultation with your therapist.
          </p>
        </div>

        <div className="space-y-3">
          {FEATURED.map((s, i) => (
            <article
              key={s.n}
              className="group grid gap-6 md:grid-cols-12 md:gap-8 items-center border-t border-border py-8 reveal"
            >
              <div className="md:col-span-1 font-display text-fluid-xl text-gold">
                {s.n}
              </div>

              <div className="md:col-span-4 order-3 md:order-2 overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    decoding="async"
                    width={1024}
                    height={768}
                    className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                  />
                </div>
              </div>

              <div className="md:col-span-5 order-2 md:order-3">
                <p className="text-fluid-xs tracking-[0.16em] uppercase text-gold mb-3">
                  {s.tag} · {s.duration}
                </p>
                <h3 className="font-display text-fluid-xl leading-snug mb-3">
                  {s.title}
                </h3>
                <p className="text-fluid-base text-foreground/70 leading-relaxed max-w-md">
                  {s.blurb}
                </p>
              </div>

              <div className="md:col-span-2 order-4 md:order-4 md:text-right">
                  <a
                    href="#book"
                    aria-label={`Book ${s.title}`}
                    className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-border text-forest-deep hover:bg-forest-deep hover:text-cream hover:border-forest-deep transition-all duration-500 group-hover:rotate-45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-card"
                  >
                  <ArrowUpRight className="w-5 h-5" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 pt-10 border-t border-border reveal">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
            <h3 className="font-display text-fluid-xl max-w-md">
              The complete menu of care
            </h3>
            <a href="#book" className="btn-link">View full price list</a>
          </div>
          <ul className="fluid-grid gap-4">
            {ALL.map((t) => (
              <li
                key={t}
                className="flex items-baseline justify-between gap-4 border-b border-dashed border-border/70 pb-3 text-fluid-base"
              >
                <span className="text-foreground/85">{t}</span>
                <span className="text-fluid-xs tracking-[0.16em] uppercase text-muted-foreground">
                  on request
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

