import { MapPin, Clock, Mail, Phone } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="section-pad bg-background">
      <div className="container-luxe grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="eyebrow mb-5 reveal">Visit My Spa Ayurvedic Hub</p>
          <h2 className="font-display text-fluid-2xl leading-[1.05] mb-6 reveal">
            Find us in the heart of Calicut, ready to welcome you in.
          </h2>

          <ul className="space-y-5 text-foreground opacity-85 reveal">
            <li className="flex gap-4">
              <MapPin className="w-5 h-5 text-gold mt-1 shrink-0" strokeWidth={1.4} />
              <div>
                <p className="font-medium">Visit / Address</p>
                <p className="text-foreground opacity-70">
                  1st Floor, Sky Tower Mavoor Road Junction<br />Kozhikode ( Calicut ) 673001
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <Clock className="w-5 h-5 text-gold mt-1 shrink-0" strokeWidth={1.4} />
              <div>
                <p className="font-medium">Hours</p>
                <p className="text-foreground opacity-70">Open daily · 10:00 AM - 9:30 PM</p>
              </div>
            </li>
            <li className="flex gap-4">
              <Phone className="w-5 h-5 text-gold mt-1 shrink-0" strokeWidth={1.4} />
              <a href="tel:+918137833588" className="inline-flex items-center hover:text-forest active:text-forest transition-colors">+91 8137833588</a>
            </li>
            <li className="flex gap-4">
              <Phone className="w-5 h-5 text-gold mt-1 shrink-0" strokeWidth={1.4} />
              <a href="tel:+918921043599" className="inline-flex items-center hover:text-forest active:text-forest transition-colors">+91 8921043599</a>
            </li>
            <li className="flex gap-4">
              <Mail className="w-5 h-5 text-gold mt-1 shrink-0" strokeWidth={1.4} />
              <a href="mailto:myspagr8@gmail.com" className="inline-flex min-w-0 items-center break-all hover:text-forest active:text-forest transition-colors">
                myspagr8@gmail.com
              </a>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-7 reveal">
          <div className="aspect-[4/3] lg:min-h-full overflow-hidden border border-border">
            <iframe
              title="My Spa Ayurvedic Hub location"
              src="https://maps.google.com/maps?q=Sky+Tower+Mavoor+Road+Junction+Kozhikode&t=&z=15&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
              className="w-full h-full grayscale-[40%] contrast-[0.95]"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

