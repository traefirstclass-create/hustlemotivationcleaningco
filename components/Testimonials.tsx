import { Quote, Star } from "lucide-react";
import { testimonials } from "@/lib/content";
import ScrollReveal from "./ScrollReveal";

export default function Testimonials() {
  return (
    <section id="reviews" className="relative bg-cream-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
            What Clients Say
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy-950 sm:text-4xl">
            Trusted by homeowners &amp; hosts
          </h2>
        </ScrollReveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.quote} delay={i * 0.08}>
              <figure className="relative flex h-full flex-col rounded-2xl border border-navy-900/10 bg-white p-8 shadow-sm">
                <Quote className="h-8 w-8 text-gold-400" />
                <div className="mt-4 flex gap-1">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} className="h-4 w-4 fill-gold-400 text-gold-400" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-base leading-relaxed text-navy-800/85">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 border-t border-navy-900/10 pt-4">
                  <p className="text-sm font-bold text-navy-950">{t.author}</p>
                  <p className="text-xs text-navy-800/60">{t.context}</p>
                </figcaption>
              </figure>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
