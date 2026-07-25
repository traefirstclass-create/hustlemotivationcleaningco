import Image from "next/image";
import { Heart, MapPin, ShieldCheck } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const badges = [
  { label: "Locally Owned", icon: MapPin, className: "left-[-1rem] top-8 lg:left-[-2rem]" },
  { label: "Fully Insured Care", icon: ShieldCheck, className: "right-[-0.5rem] bottom-24 lg:right-[-2rem]" },
  { label: "Made With Heart", icon: Heart, className: "bottom-[-1rem] left-1/2 -translate-x-1/2" },
];

export default function About() {
  return (
    <section id="about" className="relative bg-cream-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <ScrollReveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
              About Us
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy-950 sm:text-4xl">
              Cleaning driven by hustle, delivered with heart.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-navy-800/80">
              Hustle &amp; Motivation Cleaning Co. is a locally owned cleaning company
              built on one simple belief: a clean space creates peace of mind. We
              provide dependable, detail-focused cleaning for homes, apartments,
              offices, and rental properties throughout Wesley Chapel, FL and the
              surrounding area.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-navy-800/80">
              From a single deep clean to a recurring schedule that keeps your space
              guest-ready every week, our team shows up on time, works with
              intention, and treats every home like our own.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {["Punctual", "Detail-Focused", "Flexible", "Affordable", "Friendly", "Trusted"].map(
                (trait) => (
                  <div
                    key={trait}
                    className="rounded-xl border border-navy-900/10 bg-white px-4 py-3 text-center text-sm font-semibold text-navy-900 shadow-sm"
                  >
                    {trait}
                  </div>
                )
              )}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15} className="relative mx-auto w-full max-w-md">
            <div className="relative aspect-square w-full overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-navy-900 via-navy-800 to-navy-950 p-10 shadow-2xl shadow-navy-950/20">
              <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-gold-500/25 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-10 -left-10 h-56 w-56 rounded-full bg-sky-500/25 blur-3xl" />
              <div className="relative flex h-full flex-col items-center justify-center gap-5 text-center">
                <Image
                  src="/images/logo.png"
                  alt="Hustle & Motivation Cleaning Co."
                  width={731}
                  height={359}
                  className="w-full max-w-[18rem]"
                />
                <p className="max-w-[16rem] text-sm text-white/70">
                  Reliable. Professional. Motivated. Proudly serving Wesley Chapel &amp; beyond.
                </p>
              </div>
            </div>

            {badges.map(({ label, icon: Icon, className }) => (
              <div
                key={label}
                className={`glass-card-light absolute hidden items-center gap-2 rounded-full px-4 py-2.5 shadow-lg sm:flex ${className}`}
              >
                <Icon className="h-4 w-4 text-gold-600" />
                <span className="text-xs font-semibold text-navy-900">{label}</span>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
