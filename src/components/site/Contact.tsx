import { MapPin, Clock, Mail, Phone } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="section-pad bg-background content-auto">
      <div className="container-luxe grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="eyebrow mb-5 reveal">Visit Orange Wellness Spa</p>
          <h2 className="font-display text-fluid-2xl leading-[1.05] mb-6 reveal">
            Find us in the heart of Calicut, ready to welcome you in.
          </h2>

          <ul className="space-y-5 text-foreground/85 reveal">
            <li className="flex gap-4">
              <MapPin className="w-5 h-5 text-gold mt-1 shrink-0" strokeWidth={1.4} />
              <div>
                <p className="font-medium">Visit / Address</p>
                <p className="text-foreground/70">
                  1st, Kulirani Arcade, Ashokapura, Jawahar Nagar,<br />
                  Sales Tax Office Road, Eranjipalam,<br />
                  Kozhikode, Kerala - 673006
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <Clock className="w-5 h-5 text-gold mt-1 shrink-0" strokeWidth={1.4} />
              <div>
                <p className="font-medium">Hours</p>
                <p className="text-foreground/70">Open daily · 08:00 - 22:00</p>
              </div>
            </li>
            <li className="flex gap-4">
              <Phone className="w-5 h-5 text-gold mt-1 shrink-0" strokeWidth={1.4} />
              <a href="tel:+919169169109" className="inline-flex items-center hover:text-forest active:text-forest transition-colors">+91 9169169109</a>
            </li>
            <li className="flex gap-4">
              <Phone className="w-5 h-5 text-gold mt-1 shrink-0" strokeWidth={1.4} />
              <a href="tel:+917788994198" className="inline-flex items-center hover:text-forest active:text-forest transition-colors">+91 7788994198</a>
            </li>
            <li className="flex gap-4">
              <Mail className="w-5 h-5 text-gold mt-1 shrink-0" strokeWidth={1.4} />
              <a href="mailto:orange.wellness.spa.calicut@gmail.com" className="inline-flex min-w-0 items-center break-all hover:text-forest active:text-forest transition-colors">
                orange.wellness.spa.calicut@gmail.com
              </a>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-7 reveal">
          <div className="aspect-[4/3] lg:min-h-full overflow-hidden border border-border">
            <iframe
              title="Orange Wellness Spa & Salon Calicut location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.8623088891986!2d75.78351339999999!3d11.2715304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba6596647a0111f%3A0x9add63cac19da185!2sOrange%20Wellness%20Spa%20%26%20Salon%20Calicut!5e0!3m2!1sen!2sin!4v1778551956844!5m2!1sen!2sin"
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

