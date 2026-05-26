import { useRef, useState } from "react";
import { Phone, MessageCircle, Calendar, ChevronDown } from "lucide-react";

/* ────────────────────────────────────────────────────────── */
/*  Booking — UNCONTROLLED text inputs (ref-based)           */
/*  React never re-renders when the user types.              */
/*  State is only read on form submit.                       */
/* ────────────────────────────────────────────────────────── */

const SERVICES = [
  "Olive oil massage",
  "Scrub massage",
  "Deep tissue massage",
  "Full Body Massage & Body Scrub",
  "Cream massage",
  "Aroma massage",
  "Shirodhara",
  "Yoga Classes",
  "Butterfly massage",
  "Sweedish massage",
  "Spa with Ayurvedic Treatments",
];

const TIMES = [
  "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM",
  "12:30 PM", "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM",
  "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM", "05:00 PM",
  "05:30 PM", "06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM",
  "08:00 PM", "08:30 PM", "09:00 PM", "09:30 PM"
];

const THERAPISTS = [
  { value: "any", label: "Any therapist" },
  { value: "f", label: "Female" },
  { value: "m", label: "Male" },
  { value: "senior", label: "Senior specialist" },
];

const WA_NUMBER = "918921043599";

export function Booking() {
  /* Only button-group state triggers re-renders */
  const [therapist, setTherapist] = useState("any");
  const [submitted, setSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  /* Refs for text inputs — typing does NOT cause re-renders */
  const serviceRef = useRef<HTMLSelectElement>(null);
  const timeRef = useRef<HTMLSelectElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const notesRef = useRef<HTMLTextAreaElement>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrors({});

    const service = serviceRef.current?.value || SERVICES[0];
    const time = timeRef.current?.value || TIMES[0];
    const date = dateRef.current?.value || "";
    const name = nameRef.current?.value || "";
    const phone = phoneRef.current?.value || "";
    const notes = notesRef.current?.value || "";

    const newErrors: Record<string, string> = {};
    if (!date) newErrors.date = "Please select a preferred date.";
    if (!name.trim()) newErrors.name = "Please enter your name.";
    if (!phone.trim()) newErrors.phone = "Please enter your phone number.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    const therapistLabel =
      THERAPISTS.find((t) => t.value === therapist)?.label || "Any";

    const payload = { service, time, date, name, phone, notes, therapist: therapistLabel };

    try {
      const msg = `Hello! I'd like to book an appointment 🌿\n\nName: ${name}\nPhone: ${phone}\nService: ${service}\nDate: ${date}\nTime: ${time}\nTherapist: ${therapistLabel}${notes ? `\nNotes: ${notes}` : ""}`;
      
      window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');

      setSubmittedName(name);
      setSubmitted(true);
    } catch (error) {
      console.error("Booking failed:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  function resetForm() {
    setSubmitted(false);
    setErrors({});
    setTherapist("any");
    setSubmittedName("");
    if (serviceRef.current) serviceRef.current.value = SERVICES[0];
    if (timeRef.current) timeRef.current.value = TIMES[0];
    if (dateRef.current) dateRef.current.value = "";
    if (nameRef.current) nameRef.current.value = "";
    if (phoneRef.current) phoneRef.current.value = "";
    if (notesRef.current) notesRef.current.value = "";
  }

  return (
    <section id="book" className="section-pad bg-forest-deep text-cream grain">
      <div className="container-luxe grid gap-10 lg:grid-cols-12 lg:gap-16">
        {/* ── Left column ── */}
        <div className="lg:col-span-5">
          <p className="eyebrow !text-gold-soft mb-5 reveal">
            Reserve your ritual
          </p>
          <h2 className="font-display text-fluid-2xl leading-[1.05] mb-5 reveal">
            Booking, kept beautifully simple.
          </h2>
          <p className="text-cream/75 text-fluid-lg leading-relaxed mb-8 max-w-md reveal">
            Tell us a little about what you need. A concierge will confirm your
            appointment within the hour, every day from 10am to 9:30pm.
          </p>

          <ul className="space-y-5 reveal">
            <li className="flex items-center gap-4">
              <Phone className="w-5 h-5 text-gold" strokeWidth={1.4} />
              <a
                href="tel:+918137833588"
                className="inline-flex items-center hover:text-gold active:text-gold transition-colors"
              >
                +91 8137833588
              </a>
            </li>
            <li className="flex items-center gap-4">
              <MessageCircle className="w-5 h-5 text-gold" strokeWidth={1.4} />
              <a
                href="https://wa.me/918921043599"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center hover:text-gold active:text-gold transition-colors"
              >
                Chat on WhatsApp
              </a>
            </li>
            <li className="flex items-center gap-4">
              <Calendar className="w-5 h-5 text-gold" strokeWidth={1.4} />
              <span className="text-cream">
                Open daily · 10:00 AM - 9:30 PM
              </span>
            </li>
          </ul>
        </div>

        {/* ── Right column: form card ── */}
        <div className="lg:col-span-7 reveal">
          <div className="bg-cream text-ink p-5 md:p-8 shadow-[var(--shadow-luxe)]">
            {submitted ? (
              <div className="py-12 text-center animate-in fade-in duration-700">
                <p className="eyebrow !text-gold mb-5 justify-center">
                  Reservation received
                </p>
                <h3 className="font-display text-fluid-xl mb-4">
                  Thank you, {submittedName || "guest"}.
                </h3>
                <p className="text-muted-foreground max-w-sm mx-auto mb-6">
                  Your booking details have been sent via WhatsApp. A member of
                  our team will confirm your appointment shortly.
                </p>
                <button
                  type="button"
                  onClick={resetForm}
                  className="btn-primary"
                >
                  Book Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between mb-2">
                  <h3 className="font-display text-fluid-xl">
                    Begin your booking
                  </h3>
                  <span className="text-fluid-xs tracking-[0.16em] uppercase text-muted-foreground">
                    Step 1 of 2
                  </span>
                </div>

                {/* Service + Date */}
                <div className="grid gap-5 md:grid-cols-2">
                  {/* ── Service ── */}
                  <div>
                    <label htmlFor="booking-service" className="block text-fluid-xs tracking-[0.16em] uppercase text-muted-foreground mb-2">
                      Service
                    </label>
                    <div className="relative">
                      <select
                        ref={serviceRef}
                        id="booking-service"
                        defaultValue={SERVICES[0]}
                        className="w-full bg-transparent border-0 border-b border-border min-h-[2.75rem] py-2 pr-6 text-[length:var(--text-base)] text-ink outline-none focus:border-forest-deep transition-colors cursor-pointer"
                        style={{ appearance: "none", WebkitAppearance: "none", MozAppearance: "none" }}
                      >
                        {SERVICES.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                      <ChevronDown
                        aria-hidden="true"
                        strokeWidth={1.5}
                        className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-ink/40"
                      />
                    </div>
                  </div>

                  {/* ── Preferred Date ── */}
                  <div>
                    <label htmlFor="booking-date" className="block text-fluid-xs tracking-[0.16em] uppercase text-muted-foreground mb-2">
                      Preferred date
                    </label>
                    <div className="relative">
                      <input
                        ref={dateRef}
                        id="booking-date"
                        required
                        type="date"
                        className={`w-full bg-transparent border-0 border-b min-h-[2.75rem] py-2 pr-6 text-[length:var(--text-base)] text-ink outline-none transition-colors [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:inset-0 [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:cursor-pointer ${errors.date ? 'border-red-500' : 'border-border focus:border-forest-deep'}`}
                      />
                      <ChevronDown
                        aria-hidden="true"
                        strokeWidth={1.5}
                        className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-ink/40"
                      />
                    </div>
                    {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date}</p>}
                  </div>
                </div>

                {/* ── Preferred Time ── */}
                <div>
                  <label htmlFor="booking-time" className="block text-fluid-xs tracking-[0.16em] uppercase text-muted-foreground mb-2">
                    Preferred time
                  </label>
                  <div className="relative">
                    <select
                      ref={timeRef}
                      id="booking-time"
                      defaultValue={TIMES[0]}
                      className="w-full bg-transparent border-0 border-b border-border min-h-[2.75rem] py-2 pr-6 text-[length:var(--text-base)] text-ink outline-none focus:border-forest-deep transition-colors cursor-pointer"
                      style={{ appearance: "none", WebkitAppearance: "none", MozAppearance: "none" }}
                    >
                      {TIMES.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                    <ChevronDown
                      aria-hidden="true"
                      strokeWidth={1.5}
                      className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-ink/40"
                    />
                  </div>
                </div>

                {/* Therapist */}
                <fieldset>
                  <legend className="block text-fluid-xs tracking-[0.16em] uppercase text-muted-foreground mb-2">
                    Therapist preference
                  </legend>
                  <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2">
                    {THERAPISTS.map((o) => (
                      <button
                        type="button"
                        key={o.value}
                        onClick={() => setTherapist(o.value)}
                        aria-pressed={therapist === o.value}
                        className={`min-h-11 px-4 py-2 text-fluid-sm border tracking-wider transition-colors ${
                          therapist === o.value
                            ? "bg-forest-deep text-cream border-forest-deep"
                            : "border-border hover:border-forest-deep"
                        }`}
                      >
                        {o.label}
                      </button>
                    ))}
                  </div>
                </fieldset>

                {/* Name + Phone — UNCONTROLLED: no value, no onChange */}
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label htmlFor="booking-name" className="block text-fluid-xs tracking-[0.16em] uppercase text-muted-foreground mb-2">
                      Your name
                    </label>
                    <input
                      ref={nameRef}
                      id="booking-name"
                      required
                      type="text"
                      placeholder="Full name"
                      className={`w-full bg-transparent border-0 border-b min-h-[2.75rem] py-2 text-[length:var(--text-base)] text-ink outline-none transition-colors ${errors.name ? 'border-red-500' : 'border-border focus:border-forest-deep'}`}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="booking-phone" className="block text-fluid-xs tracking-[0.16em] uppercase text-muted-foreground mb-2">
                      Phone
                    </label>
                    <input
                      ref={phoneRef}
                      id="booking-phone"
                      required
                      type="tel"
                      placeholder="+91"
                      className={`w-full bg-transparent border-0 border-b min-h-[2.75rem] py-2 text-[length:var(--text-base)] text-ink outline-none transition-colors ${errors.phone ? 'border-red-500' : 'border-border focus:border-forest-deep'}`}
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                  </div>
                </div>

                {/* Special Requests — UNCONTROLLED */}
                <div>
                  <label htmlFor="booking-notes" className="block text-fluid-xs tracking-[0.16em] uppercase text-muted-foreground mb-2">
                    Special requests (optional)
                  </label>
                  <textarea
                    ref={notesRef}
                    id="booking-notes"
                    rows={2}
                    placeholder="Allergies, focus areas, occasion..."
                    className="w-full bg-transparent border-0 border-b border-border min-h-[2.75rem] py-2 text-[length:var(--text-base)] text-ink outline-none resize-none focus:border-forest-deep transition-colors"
                  />
                </div>

                {/* Submit */}
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="btn-primary w-full disabled:opacity-50"
                >
                  {isSubmitting ? "Requesting..." : "Request Appointment"}
                </button>
                <p className="text-fluid-xs text-muted-foreground text-center">
                  Secure · No payment required to reserve
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
