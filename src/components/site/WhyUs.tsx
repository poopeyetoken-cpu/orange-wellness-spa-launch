import { Award, Leaf, ShieldCheck, HeartHandshake, CalendarClock, Sparkles } from "lucide-react";

const ITEMS = [
  { icon: Award, title: "Certified therapists", text: "Trained in Kerala, Bali and London - vetted for craft and care." },
  { icon: ShieldCheck, title: "Hygiene-first private rooms", text: "Hospital-grade sanitisation and acoustically calm suites." },
  { icon: Leaf, title: "Botanical, natural products", text: "Cold-pressed oils, organic actives, zero parabens or sulphates." },
  { icon: HeartHandshake, title: "Personalised consultation", text: "Every visit begins with a quiet conversation about you." },
  { icon: CalendarClock, title: "Flexible appointments", text: "Open from 8am to 10pm, with same-day and late slots." },
  { icon: Sparkles, title: "Quietly elevated experience", text: "From slippers to tea - the small details, beautifully handled." },
];

export function WhyUs() {
  return (
    <section className="section-pad bg-forest-deep text-cream grain content-auto">
      <div className="container-luxe">
        <div className="grid gap-10 lg:grid-cols-12 mb-12">
          <div className="lg:col-span-5">
            <p className="eyebrow !text-gold-soft mb-5 reveal">Why Orange Wellness Spa</p>
            <h2 className="font-display text-fluid-2xl leading-[1.05] reveal">
              Six quiet promises behind every appointment.
            </h2>
          </div>
          <p className="lg:col-span-6 lg:col-start-7 text-cream/75 text-fluid-lg leading-relaxed self-end reveal">
            Luxury, for us, is not gold leaf or grand atriums. It is the
            certainty that every hand on you is skilled, every product is clean
            and every minute belongs to you alone.
          </p>
        </div>

        <ul className="fluid-grid gap-px bg-cream/10">
          {ITEMS.map(({ icon: Icon, title, text }) => (
            <li
              key={title}
              className="bg-forest-deep p-6 md:p-8 transition-colors hover:bg-[oklch(0.26_0.035_155)] reveal"
            >
              <Icon className="w-6 h-6 text-gold mb-6" strokeWidth={1.4} />
              <h3 className="font-display text-fluid-xl mb-3">{title}</h3>
              <p className="text-cream/70 leading-relaxed text-fluid-base">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

