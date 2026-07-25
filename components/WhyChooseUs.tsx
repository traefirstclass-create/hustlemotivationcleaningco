import { whyChooseUs } from "@/lib/content";
import { iconMap } from "./icon-map";
import ScrollReveal from "./ScrollReveal";

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="relative overflow-hidden bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-gold-500/10 blur-[110px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">
            Why Choose Us
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            The Hustle &amp; Motivation difference
          </h2>
          <p className="mt-4 text-lg text-white/60">
            Six reasons Wesley Chapel homes and businesses keep booking us back.
          </p>
        </ScrollReveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <ScrollReveal key={item.title} delay={i * 0.06}>
                <div className="glass-card h-full rounded-2xl p-7 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.08]">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-gold-300 to-gold-600 text-navy-950">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
