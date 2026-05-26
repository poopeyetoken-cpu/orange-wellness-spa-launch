import aboutImg from "@/assets/about.jpg";

const STATS = [
  { value: "12+", label: "Years of practice" },
  { value: "24K", label: "Guests welcomed" },
  { value: "32", label: "Certified therapists" },
  { value: "60+", label: "Signature treatments" },
];

export function About() {
  return (
    <section id="about" className="section-pad bg-background">
      <div className="container-luxe grid gap-10 lg:grid-cols-12 lg:gap-16 items-center">
        <div className="lg:col-span-5 relative reveal order-2 lg:order-1">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src={aboutImg}
              alt="The cream-toned lounge of My Spa Ayurvedic Hub with brass and walnut details"
              loading="lazy"
              decoding="async"
              width={1080}
              height={1350}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-8 -right-4 md:-right-10 bg-forest-deep text-cream p-6 max-w-[280px] shadow-[var(--shadow-luxe)] hidden md:block">
            <p className="font-display text-fluid-xl leading-snug italic">
              "A place where time finally exhales."
            </p>
            <p className="mt-3 text-fluid-xs tracking-[0.16em] uppercase text-gold-soft">
              Vogue Wellness, 2024
            </p>
          </div>
        </div>

        <div className="lg:col-span-7 order-1 lg:order-2">
          <p className="eyebrow mb-5 reveal">Our philosophy</p>
          <h2 className="font-display text-fluid-2xl leading-[1.05] mb-6 reveal">
            Holistic care, written in the language of
            <span className="italic text-forest dark:text-gold-soft"> ritual</span>.
          </h2>
          <div className="space-y-5 text-foreground opacity-75 max-w-xl text-fluid-base leading-relaxed reveal">
            <p>
              My Spa Ayurvedic Hub is the work of therapists, naturopaths and
              skincare specialists who believe true beauty begins with stillness.
              Each treatment is composed from time-honoured Ayurvedic wisdom,
              European spa craft and contemporary science.
            </p>
            <p>
              From the bespoke consultation to the last sip of warm chamomile,
              every moment is intentional - natural products, private rooms,
              and care personalised to your body and the season you are in.
            </p>
          </div>

          <dl className="fluid-grid gap-6 mt-10 pt-8 border-t border-border reveal">
            {STATS.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-fluid-2xl text-forest-deep dark:text-gold-soft">
                  {s.value}
                </dd>
                <p className="mt-2 text-fluid-xs tracking-[0.16em] uppercase text-muted-foreground">
                  {s.label}
                </p>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

