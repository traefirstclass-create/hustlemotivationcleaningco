import {
  addOnServices,
  deepCleaningPricing,
  movePricing,
  premiumPricing,
  recurringOptions,
  residentialPricing,
  services,
} from "@/lib/content";
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

        <ScrollReveal delay={0.25} className="mt-20">
          <div className="rounded-3xl bg-navy-950 p-6 text-white shadow-xl shadow-navy-900/20 sm:p-10">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">
                  Clear starting prices
                </p>
                <h3 className="mt-2 text-2xl font-bold sm:text-3xl">Choose the clean that fits your space</h3>
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-white/60">
                Prices are based on size and condition. Request a free estimate for your exact quote.
              </p>
            </div>

            <div className="mt-8 grid gap-5 lg:grid-cols-[1fr_1fr_0.9fr]">
              <PriceTable title="Residential Cleaning" prices={residentialPricing} />
              <PriceTable title="Deep Cleaning" prices={deepCleaningPricing} />
              <div className="space-y-5">
                <PriceHighlight {...premiumPricing} />
                <PriceHighlight {...movePricing} />
              </div>
            </div>

            <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.06] p-5">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h4 className="font-bold text-gold-200">Add-on services</h4>
                  <p className="mt-1 text-sm text-white/55">Build the clean around what your home needs.</p>
                </div>
                <a
                  href="#contact"
                  className="shrink-0 rounded-full bg-gold-400 px-4 py-2 text-center text-sm font-bold text-navy-950 transition hover:bg-gold-300"
                >
                  Inquire about services
                </a>
              </div>
              <div className="mt-4 grid gap-x-6 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
                {addOnServices.map((addOn) => (
                  <div key={addOn.name} className="flex items-center justify-between gap-3 border-b border-white/10 py-1.5 text-sm">
                    <span className="text-white/75">{addOn.name}</span>
                    <span className="font-semibold text-gold-200">{addOn.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function PriceTable({ title, prices }: { title: string; prices: { size: string; price: string }[] }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-5">
      <h4 className="font-bold text-gold-200">{title}</h4>
      <div className="mt-3 divide-y divide-white/10">
        {prices.map((item) => (
          <div key={item.size} className="flex items-center justify-between gap-3 py-2 text-sm">
            <span className="text-white/75">{item.size}</span>
            <span className="font-bold text-gold-200">{item.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function PriceHighlight({ title, description, price }: { title: string; description: string; price: string }) {
  return (
    <div className="rounded-2xl border border-gold-400/40 bg-gold-400/10 p-5">
      <h4 className="font-bold text-gold-200">{title}</h4>
      <p className="mt-2 text-sm leading-relaxed text-white/65">{description}</p>
      <p className="mt-3 text-3xl font-bold tracking-tight text-gold-200">{price}</p>
      <a href="#contact" className="mt-3 inline-block text-sm font-semibold text-white underline decoration-gold-400 underline-offset-4 hover:text-gold-200">
        Request this service
      </a>
    </div>
  );
}
