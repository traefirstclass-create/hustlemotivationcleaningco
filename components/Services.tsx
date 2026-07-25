import { recurringOptions, services } from "@/lib/content";
import { iconMap } from "./icon-map";
import ScrollReveal from "./ScrollReveal";

export default function Services() {
  return (
    <section id="services" className="relative bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
            Services
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy-950 sm:text-4xl">
            Cleaning services built around your space
          </h2>
          <p className="mt-4 text-lg text-navy-800/70">
            Whatever you need cleaned, however often you need it — we&apos;ve got a plan
            for it.
          </p>
        </ScrollReveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <ScrollReveal key={service.title} delay={i * 0.06}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-navy-900/10 bg-cream-50 p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy-900/10">
                  <div className="pointer-events-none absolute -right-6 -top-6 h-28 w-28 rounded-full bg-gold-400/0 transition duration-300 group-hover:bg-gold-400/15" />
                  <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-navy-700 to-navy-950 text-gold-300 shadow-md shadow-navy-900/20">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="relative mt-5 text-lg font-bold text-navy-950">
                    {service.title}
                  </h3>
                  <p className="relative mt-2 text-sm leading-relaxed text-navy-800/70">
                    {service.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={0.2} className="mt-12 flex flex-wrap items-center justify-center gap-3">
          <span className="text-sm font-semibold text-navy-800/60">Available:</span>
          {recurringOptions.map((option) => (
            <span
              key={option}
              className="rounded-full border border-gold-500/30 bg-gold-400/10 px-4 py-1.5 text-sm font-semibold text-gold-700"
            >
              {option}
            </span>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
