import epilimoImg from "@/assets/epilimo.jpg";
import { ArrowUpRight } from "lucide-react";

const POINTS = [
  "Personalised skincare, nutrition and stress-resilience plans",
  "Identifies sensitivities, recovery rate and ageing pathways",
  "Pairs with Ayurveda and our signature treatments",
  "Single-sample, results in 21 days, fully confidential",
];

export function Epilimo() {
  return (
    <section id="epilimo" className="section-pad bg-background content-auto">
      <div className="container-luxe grid gap-10 lg:grid-cols-12 lg:gap-16 items-center">
        <div className="lg:col-span-6 relative reveal">
          <div className="aspect-[5/4] overflow-hidden">
            <img
              src={epilimoImg}
              alt="A golden DNA helix on a deep forest green background, representing Epilimo genetic testing"
              loading="lazy"
              decoding="async"
              width={1600}
              height={1100}
              className="w-full h-full object-cover"
            />
          </div>
          <span className="absolute top-5 left-5 bg-cream text-ink text-fluid-xs tracking-[0.16em] uppercase px-4 py-2">
            New · Science-led
          </span>
        </div>

        <div className="lg:col-span-6">
          <p className="eyebrow mb-5 reveal">Epilimo</p>
          <h2 className="font-display text-fluid-2xl leading-[1.05] mb-5 reveal">
            Wellness, written in
            <span className="italic text-forest"> your own DNA</span>.
          </h2>
          <p className="text-foreground/75 text-fluid-lg leading-relaxed mb-8 max-w-lg reveal">
            Epilimo is our DNA-based genetic test that translates 250+ markers
            into a precise blueprint for skin, recovery and longevity - guiding
            every treatment we craft for you.
          </p>

          <ul className="space-y-3 mb-8 reveal">
            {POINTS.map((p) => (
              <li key={p} className="flex items-start gap-3 text-foreground/85">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                <span>{p}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-3 reveal">
            <a href="#book" className="btn-primary">
              Book Epilimo Consultation <ArrowUpRight className="w-4 h-4" />
            </a>
            <a href="#contact" className="btn-link !text-forest-deep">Speak to a specialist</a>
          </div>
        </div>
      </div>
    </section>
  );
}

