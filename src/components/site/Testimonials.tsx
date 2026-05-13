import { Star } from "lucide-react";

const REVIEWS = [
  {
    quote:
      "I have travelled to spas in Bali and Kyoto, and Orange Wellness Spa holds its own. The Abhyanga ritual was transcendent, and the therapist remembered every detail of my consultation.",
    name: "Aanya Mehra",
    role: "Returning guest - 3 years",
  },
  {
    quote:
      "The Epilimo consultation completely changed how I think about my skin. My facial protocol is now built around my actual biology. Results in six weeks were undeniable.",
    name: "Dr. Karthik Rao",
    role: "Cardiologist",
  },
  {
    quote:
      "From the moment you step in, the world goes quiet. Beautiful interiors, warm tea, and the most thoughtful massage I've had in years.",
    name: "Lea Hofmann",
    role: "Visiting from Berlin",
  },
];

export function Testimonials() {
  return (
    <section className="section-pad bg-card content-auto">
      <div className="container-luxe">
        <div className="max-w-2xl mb-12">
          <p className="eyebrow mb-5 reveal">In their words</p>
          <h2 className="font-display text-fluid-2xl leading-[1.05] reveal">
            A quiet kind of loyalty.
          </h2>
        </div>

        <div className="fluid-grid gap-px bg-border">
          {REVIEWS.map((r, i) => (
            <figure
              key={i}
              className="bg-card p-6 md:p-8 flex flex-col gap-6 reveal"
            >
              <div className="flex" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="w-3.5 h-3.5 fill-gold text-gold" />
                ))}
              </div>
              <blockquote className="font-display text-fluid-xl leading-snug text-foreground/90 italic">
                "{r.quote}"
              </blockquote>
              <figcaption className="mt-auto pt-6 border-t border-border">
                <p className="font-medium">{r.name}</p>
                <p className="text-fluid-xs tracking-[0.16em] uppercase text-muted-foreground mt-1">
                  {r.role}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

