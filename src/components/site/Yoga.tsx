import yogaImg from "@/assets/yoga.jpg";

const CLASSES = [
  { day: "Mon � Wed � Fri", name: "Sunrise Hatha", time: "06:30 - 07:45" },
  { day: "Tue � Thu", name: "Restorative Yin", time: "18:00 - 19:15" },
  { day: "Saturday", name: "Vinyasa Flow", time: "08:00 - 09:30" },
  { day: "Sunday", name: "Pranayama & Meditation", time: "09:00 - 10:00" },
];

export function Yoga() {
  return (
    <section id="yoga" className="relative overflow-hidden">
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[clamp(18rem,70vw,34rem)] lg:min-h-[42rem]">
          <img
            src={yogaImg}
            alt="A woman in white linen practicing tree pose in a sunlit yoga studio"
            loading="lazy"
            decoding="async"
            width={1280}
            height={1280}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="bg-forest text-cream section-pad section-pad-x grain flex flex-col justify-center">
          <p className="eyebrow !text-gold-soft mb-5 reveal">Movement studio</p>
          <h2 className="font-display text-fluid-2xl leading-[1.05] mb-5 reveal">
            Yoga that returns you to
            <span className="italic"> yourself</span>.
          </h2>
          <p className="text-cream opacity-80 text-fluid-lg leading-relaxed mb-8 max-w-md reveal">
            Small classes (max 8) with senior teachers. Whether you are
            beginning or deepening a practice, you will be met with patience,
            breath and quiet attention.
          </p>

          <ul className="divide-y divide-cream/15 border-y border-cream/15 mb-8 reveal">
            {CLASSES.map((c) => (
              <li key={c.name} className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 py-4">
                <div>
                  <p className="font-display text-fluid-xl">{c.name}</p>
                  <p className="text-fluid-xs tracking-[0.16em] uppercase text-cream opacity-60 mt-1">
                    {c.day}
                  </p>
                </div>
                <span className="text-gold-soft tracking-wider text-fluid-sm">{c.time}</span>
              </li>
            ))}
          </ul>

          <a href="#book" className="btn-primary !bg-gold !text-ink !border-gold self-start">
            Reserve a class
          </a>
        </div>
      </div>
    </section>
  );
}

