import { useState } from "react";
import { Phone, MessageCircle, Calendar } from "lucide-react";
import { SEO } from "@/lib/seo";

const SERVICES = [
  "Full Body Massage & Body Scrub",
  "Ayurvedic Treatments",
  "Facial & Skin Care",
  "Hair / Nail Care",
  "Wellness Consultation",
  "Epilimo (DNA Test)",
  "Yoga Class",
];

const TIMES = ["09:00", "11:30", "14:00", "16:30", "18:00", "20:00"];

export function Booking() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    service: SERVICES[0],
    date: "",
    time: TIMES[2],
    therapist: "any",
    notes: "",
    name: "",
    phone: "",
  });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = [
      "Booking request from Orange Wellness Spa website",
      `Service: ${form.service}`,
      `Date: ${form.date || "not set"}`,
      `Time: ${form.time}`,
      `Therapist: ${form.therapist}`,
      `Name: ${form.name || "not set"}`,
      `Phone: ${form.phone || "not set"}`,
      `Notes: ${form.notes || "none"}`,
    ].join("\n");

    // Clean up phone number from SEO to be URL safe
    const cleanPhone = SEO.phonePrimary.replace(/\D/g, "");
    const waUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  return (
    <section id="book" className="section-pad bg-forest-deep text-cream grain content-auto">
      <div className="container-luxe grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <p className="eyebrow !text-gold-soft mb-5 reveal">Reserve your ritual</p>
          <h2 className="font-display text-fluid-2xl leading-[1.05] mb-5 reveal">
            Booking, kept beautifully simple.
          </h2>
          <p className="text-cream/75 text-fluid-lg leading-relaxed mb-8 max-w-md reveal">
            Tell us a little about what you need. A concierge will confirm your
            appointment within the hour, every day from 8am to 10pm.
          </p>

          <ul className="space-y-5 reveal">
            <li className="flex items-center gap-4">
              <Phone className="w-5 h-5 text-gold" strokeWidth={1.4} />
              <a href="tel:+919169169109" className="inline-flex items-center hover:text-gold active:text-gold transition-colors">
                +91 9169169109
              </a>
            </li>
            <li className="flex items-center gap-4">
              <MessageCircle className="w-5 h-5 text-gold" strokeWidth={1.4} />
              <a
                href="https://wa.me/919169169109"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center hover:text-gold active:text-gold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-forest-deep"
              >
                Chat on WhatsApp
              </a>
            </li>
            <li className="flex items-center gap-4">
              <Calendar className="w-5 h-5 text-gold" strokeWidth={1.4} />
              <span className="text-cream/85">Open daily · 08:00 - 22:00</span>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-7 reveal">
          <div className="bg-cream text-ink p-5 md:p-8 shadow-[var(--shadow-luxe)]">
            {submitted ? (
              <div className="py-12 text-center">
                <p className="eyebrow !text-gold mb-5 justify-center">Reservation received</p>
                <h3 className="font-display text-fluid-xl mb-4">Thank you, {form.name || "guest"}.</h3>
                <p className="text-foreground/70 max-w-sm mx-auto">
                  A member of our concierge team will call you on {form.phone || "your number"} within the hour to confirm.
                </p>
              </div>
            ) : (
              <form
                onSubmit={onSubmit}
                className="space-y-6"
              >
                <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between mb-2">
                  <h3 className="font-display text-fluid-xl">Begin your booking</h3>
                  <span className="text-fluid-xs tracking-[0.16em] uppercase text-muted-foreground">
                    Step 1 of 2
                  </span>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <Field label="Service">
                    <select
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="input-luxe"
                    >
                      {SERVICES.map((s) => <option key={s}>{s}</option>)}
                    </select>
                  </Field>

                  <Field label="Preferred date">
                    <input
                      required
                      type="date"
                      value={form.date}
                      onChange={(e) => setForm({ ...form, date: e.target.value })}
                      className="input-luxe"
                    />
                  </Field>
                </div>

                <Field label="Preferred time">
                  <div className="flex flex-wrap gap-2">
                    {TIMES.map((t) => (
                      <button
                        type="button"
                        key={t}
                        onClick={() => setForm({ ...form, time: t })}
                        aria-pressed={form.time === t}
                        className={`min-h-11 px-4 py-2 text-fluid-sm border tracking-wider transition-colors active:bg-forest-deep active:text-cream ${
                          form.time === t
                            ? "bg-forest-deep text-cream border-forest-deep"
                            : "border-border hover:border-forest-deep"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </Field>

                <Field label="Therapist preference">
                  <div className="flex flex-wrap gap-2">
                    {[
                      { v: "any", l: "Any therapist" },
                      { v: "f", l: "Female" },
                      { v: "m", l: "Male" },
                      { v: "senior", l: "Senior specialist" },
                    ].map((o) => (
                      <button
                        key={o.v}
                        type="button"
                        onClick={() => setForm({ ...form, therapist: o.v })}
                        aria-pressed={form.therapist === o.v}
                        className={`min-h-11 px-4 py-2 text-fluid-sm border tracking-wider transition-colors active:bg-forest-deep active:text-cream ${
                          form.therapist === o.v
                            ? "bg-forest-deep text-cream border-forest-deep"
                            : "border-border hover:border-forest-deep"
                        }`}
                      >
                        {o.l}
                      </button>
                    ))}
                  </div>
                </Field>

                <div className="grid gap-5 md:grid-cols-2">
                  <Field label="Your name">
                    <input
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="input-luxe"
                      placeholder="Full name"
                    />
                  </Field>
                  <Field label="Phone">
                    <input
                      required
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="input-luxe"
                      placeholder="+91"
                    />
                  </Field>
                </div>

                <Field label="Special requests (optional)">
                    <textarea
                      value={form.notes}
                      onChange={(e) => setForm({ ...form, notes: e.target.value })}
                      rows={2}
                      className="input-luxe resize-none"
                    placeholder="Allergies, focus areas, occasion..."
                  />
                </Field>

                <button type="submit" className="btn-primary w-full">
                  Request Appointment
                </button>
                <p className="text-fluid-xs text-muted-foreground text-center">
                  Secure · No payment required to reserve
                </p>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .input-luxe {
          width: 100%;
          background: transparent;
          border: 0;
          border-bottom: 1px solid var(--border);
          min-height: var(--touch-target);
          padding: 0.6rem 0;
          font-size: var(--text-base);
          color: var(--ink);
          outline: none;
          transition: border-color 0.3s ease;
        }
        .input-luxe:focus { border-color: var(--forest-deep); }
        select.input-luxe { appearance: none; }
      `}</style>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-fluid-xs tracking-[0.16em] uppercase text-muted-foreground mb-2">
        {label}
      </span>
      {children}
    </label>
  );
}

