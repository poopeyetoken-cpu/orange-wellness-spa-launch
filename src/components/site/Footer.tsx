import { useState } from "react";
import { Facebook, Instagram } from "lucide-react";
import { Logo } from "./Logo";
import { SEO } from "@/lib/seo";

export function Footer() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <footer className="bg-ink text-cream content-auto">
      <div className="container-luxe section-pad">
        <div className="grid gap-10 lg:grid-cols-12 pb-10 border-b border-cream/10">
          <div className="lg:col-span-5">
            <Logo className="text-gold" />
            <p className="mt-6 text-cream/70 max-w-sm leading-relaxed">
              A modern wellness atelier blending Ayurvedic heritage, European spa craft
              and science-led skincare for a city that needs to breathe.
            </p>
          </div>

          <nav aria-label="Footer" className="lg:col-span-4 grid gap-8 md:grid-cols-2">
            <div>
              <p className="text-fluid-xs tracking-[0.16em] uppercase text-gold-soft mb-4">
                Explore
              </p>
              <ul className="space-y-3 text-cream/80">
                <li>
                  <a
                    href="#services"
                    className="inline-flex min-h-11 items-center hover:text-gold active:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="inline-flex min-h-11 items-center hover:text-gold active:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
                  >
                    Philosophy
                  </a>
                </li>
                <li>
                  <a
                    href="#epilimo"
                    className="inline-flex min-h-11 items-center hover:text-gold active:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
                  >
                    Epilimo
                  </a>
                </li>
                <li>
                  <a
                    href="#yoga"
                    className="inline-flex min-h-11 items-center hover:text-gold active:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
                  >
                    Yoga
                  </a>
                </li>
                <li>
                  <a
                    href="#book"
                    className="inline-flex min-h-11 items-center hover:text-gold active:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
                  >
                    Book Now
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-fluid-xs tracking-[0.16em] uppercase text-gold-soft mb-4">
                Visit
              </p>
              <ul className="space-y-3 text-cream/80">
                <li>1st, Kulirani Arcade</li>
                <li>Ashokapura, Jawahar Nagar</li>
                <li>Sales Tax Office Road, Eranjipalam</li>
                <li>Kozhikode, Kerala - 673006</li>
                <li>+91 9169169109</li>
                <li>+91 7788994198</li>
              </ul>
            </div>
          </nav>

          <div className="lg:col-span-3">
            <p className="text-fluid-xs tracking-[0.16em] uppercase text-gold-soft mb-4">
              Journal
            </p>
            <p className="text-cream/70 text-fluid-sm mb-4">
              Quiet notes on rituals, seasonal care and member previews.
            </p>
            <form
              method="post"
              action={`mailto:${SEO.email}`}
              encType="text/plain"
              onSubmit={(e) => {
                e.preventDefault();
                const subject = encodeURIComponent("Newsletter signup");
                const body = encodeURIComponent(`Please subscribe this address: ${email}`);
                window.location.href = `mailto:${SEO.email}?subject=${subject}&body=${body}`;
                setDone(true);
              }}
              className="flex border-b border-cream/30 focus-within:border-gold transition-colors"
            >
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                className="flex-1 min-h-11 bg-transparent py-2 text-fluid-sm placeholder:text-cream/40 focus:outline-none"
              />
              <button
                type="submit"
                className="min-h-11 text-fluid-xs tracking-[0.16em] uppercase text-gold hover:text-cream active:text-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
              >
                {done ? "Thank you" : "Subscribe"}
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-fluid-xs text-cream/60">
          <p>&copy; {new Date().getFullYear()} Orange Wellness Spa. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-5">
            <a
              href="https://www.instagram.com/orange_wellness_spa_"
              aria-label="Instagram"
              className="inline-flex min-h-11 min-w-11 items-center justify-center hover:text-gold active:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://www.facebook.com/spaorangewellness"
              aria-label="Facebook"
              className="inline-flex min-h-11 min-w-11 items-center justify-center hover:text-gold active:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

