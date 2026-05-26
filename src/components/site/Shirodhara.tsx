import shirodharaImg from "@/assets/shirodhara.jpg";
import { ArrowUpRight } from "lucide-react";

const POINTS = [
  "Deeply relaxing therapy with continuous rhythmic flow",
  "Pacifies the central nervous system and relieves stress",
  "Enhances mental clarity, sleep quality, and intuition",
  "Holistic ritual harmonizing mind, body, and spirit",
];

export function Shirodhara() {
  return (
    <section id="shirodhara" className="section-pad bg-background">
      <div className="container-luxe grid gap-10 lg:grid-cols-12 lg:gap-16 items-center">
        <div className="lg:col-span-6 relative reveal">
          <div className="aspect-[5/4] overflow-hidden">
            <img
              src={shirodharaImg}
              alt="A warm continuous flow of herbal oil over the forehead, representing Shirodhara therapy"
              loading="lazy"
              decoding="async"
              width={1600}
              height={1100}
              className="w-full h-full object-cover"
            />
          </div>
          <span className="absolute top-5 left-5 bg-cream text-ink text-fluid-xs tracking-[0.16em] uppercase px-4 py-2">
            Ancient Therapy
          </span>
        </div>

        <div className="lg:col-span-6">
          <p className="eyebrow mb-5 reveal">Shirodhara</p>
          <h2 className="font-display text-fluid-2xl leading-[1.05] mb-5 reveal">
            A state of deep,
            <span className="italic text-forest dark:text-gold-soft"> meditative rest</span>.
          </h2>
          <p className="text-foreground opacity-75 text-fluid-lg leading-relaxed mb-8 max-w-lg reveal">
            Shirodhara is a profoundly relaxing and ancient Ayurvedic therapy that involves gently and steadily pouring warm, medicated liquids over the forehead. This continuous, rhythmic stream is directed at the "third eye" to quiet the mind, pacify the central nervous system, and alleviate stress and anxiety.
          </p>

          <ul className="space-y-3 mb-8 reveal">
            {POINTS.map((p) => (
              <li key={p} className="flex items-start gap-3 text-foreground opacity-85">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                <span>{p}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-3 reveal">
            <a href="#book" className="btn-primary">
              Book Shirodhara <ArrowUpRight className="w-4 h-4" />
            </a>
            <a href="#contact" className="btn-link !text-forest-deep">Speak to a specialist</a>
          </div>
        </div>
      </div>
    </section>
  );
}
