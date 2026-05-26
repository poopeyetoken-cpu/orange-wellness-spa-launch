import { useState } from "react";

import { Logo } from "./Logo";
import { SEO } from "@/lib/seo";

export function Footer() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <footer className="bg-ink text-cream">
      <div className="container-luxe section-pad">
        <div className="grid gap-10 lg:grid-cols-12 pb-10 border-b border-cream/10">
          <div className="lg:col-span-5">
            <Logo className="text-gold" />
            <p className="mt-6 text-cream opacity-70 max-w-sm leading-relaxed">
              A modern wellness atelier blending Ayurvedic heritage, European spa craft
              and science-led skincare for a city that needs to breathe.
            </p>
          </div>

          <nav aria-label="Footer" className="lg:col-span-4 grid gap-8 md:grid-cols-2">
            <div>
              <p className="text-fluid-xs tracking-[0.16em] uppercase text-gold-soft mb-4">
                Explore
              </p>
              <ul className="space-y-3 text-cream opacity-80">
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
                    href="#shirodhara"
                    className="inline-flex min-h-11 items-center hover:text-gold active:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
                  >
                    Shirodhara
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
              <ul className="space-y-3 text-cream opacity-80">
                <li>1st Floor, Sky Tower</li>
                <li>Ashokapura, Jawahar Nagar</li>
                <li>Mavoor Road Junction</li>
                <li>Kozhikode, Kerala - 673001</li>
                <li>+91 8137833588</li>
                <li>+91 8921043599</li>
              </ul>
            </div>
          </nav>

          <div className="lg:col-span-3">
            <p className="text-fluid-xs tracking-[0.16em] uppercase text-gold-soft mb-4">
              Journal
            </p>
            <p className="text-cream opacity-70 text-fluid-sm mb-4">
              Quiet notes on rituals, seasonal care and member previews.
            </p>
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                // Simulate network delay for newsletter API
                await new Promise((resolve) => setTimeout(resolve, 600));
                setDone(true);
                setEmail(""); // Clear on success
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
                className="flex-1 min-h-11 bg-transparent py-2 text-fluid-sm placeholder:text-cream opacity-40 focus:outline-none"
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

        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-fluid-xs text-cream opacity-60">
          <p>&copy; {new Date().getFullYear()} My Spa Ayurvedic Hub. All rights reserved.</p>

        </div>
      </div>
    </footer>
  );
}

