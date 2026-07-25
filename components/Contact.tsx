import { Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/lib/content";
import InstagramIcon from "./icons/InstagramIcon";
import ScrollReveal from "./ScrollReveal";
import ServiceRequestForm from "./ServiceRequestForm";

const contactDetails = [
  { icon: Phone, label: "Call or Text", value: site.phoneDisplay, href: site.phoneHref },
  { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
  { icon: MapPin, label: "Service Area", value: site.serviceArea, href: undefined },
  { icon: InstagramIcon, label: "Instagram", value: "@hustlemotivationcleaningco", href: site.instagram },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-b from-navy-950 to-ink py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-sky-500/15 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">
            Contact &amp; Booking
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Request your free estimate
          </h2>
          <p className="mt-4 text-lg text-white/60">
            Tell us about your space and we&apos;ll follow up with a custom quote —
            usually within one business day.
          </p>
        </ScrollReveal>

        <div className="mt-16 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          <ScrollReveal>
            <div className="glass-card sticky top-28 rounded-2xl p-7 sm:p-8">
              <h3 className="text-lg font-bold text-white">Get in touch directly</h3>
              <p className="mt-2 text-sm text-white/60">
                Prefer to talk it through first? Reach out any time.
              </p>
              <ul className="mt-6 space-y-5">
                {contactDetails.map(({ icon: Icon, label, value, href }) => (
                  <li key={label} className="flex items-start gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-gold-300 to-gold-600 text-navy-950">
                      <Icon className="h-4.5 w-4.5" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-white/50">
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          target={href.startsWith("http") ? "_blank" : undefined}
                          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-sm font-semibold text-white hover:text-gold-300"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-sm font-semibold text-white">{value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <ServiceRequestForm />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
