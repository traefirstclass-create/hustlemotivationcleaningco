"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Building2, CalendarClock, Home, KeyRound, MapPin, Phone } from "lucide-react";
import { site } from "@/lib/content";

const quickServices = [
  { label: "Residential Cleaning", icon: Home },
  { label: "Commercial Cleaning", icon: Building2 },
  { label: "Move In / Move Out", icon: KeyRound },
  { label: "Airbnb Turnovers", icon: CalendarClock },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-gradient-to-b from-ink via-navy-950 to-navy-900 pt-36 pb-24 sm:pt-44 sm:pb-32"
    >
      <Image
        src="/images/hero-photo.jpg"
        alt=""
        fill
        priority
        className="object-cover object-[80%_35%]"
      />
      <div className="pointer-events-none absolute inset-0 bg-navy-950/85 sm:hidden" />
      <div
        className="pointer-events-none absolute inset-0 hidden sm:block"
        style={{
          background:
            "linear-gradient(100deg, rgba(6,10,18,0.97) 15%, rgba(11,23,40,0.92) 40%, rgba(15,32,56,0.75) 65%, rgba(15,32,56,0.55) 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <div className="pointer-events-none absolute -left-24 top-10 h-96 w-96 rounded-full bg-gold-500/20 blur-[110px]" />
      <div className="pointer-events-none absolute -right-24 top-40 h-[28rem] w-[28rem] rounded-full bg-sky-500/20 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-gold-300">
              <MapPin className="h-3.5 w-3.5" />
              Serving {site.serviceArea}
            </span>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Clean spaces.
              <br />
              <span className="text-gradient-gold">Better places.</span>
            </h1>

            <p className="mt-3 font-script text-2xl text-sky-300 sm:text-3xl">
              {site.tagline}
            </p>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
              {site.description}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-300 to-gold-500 px-7 py-3.5 text-sm font-semibold text-navy-950 shadow-lg shadow-gold-500/25 transition hover:brightness-105"
              >
                Request a Free Quote
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
              >
                View Services
              </a>
            </div>

            <a
              href={site.phoneHref}
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white/60 hover:text-gold-300"
            >
              <Phone className="h-4 w-4" />
              Or call {site.phoneDisplay}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-3xl shadow-2xl shadow-black/30"
          >
            <Image
              src="/images/hero-photo.jpg"
              alt="Cleaning supplies staged in a bright, freshly cleaned living room"
              fill
              priority
              className="object-cover object-[70%_55%]"
            />
            <div className="absolute inset-0 bg-navy-950/20" />
            <div className="absolute inset-0 rounded-3xl border border-white/15 bg-white/[0.06] backdrop-blur-[3px]" />

            <div className="relative p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">
                What We Clean
              </p>
              <div className="mt-5 grid grid-cols-2 gap-4">
                {quickServices.map(({ label, icon: Icon }) => (
                  <div
                    key={label}
                    className="flex flex-col items-start gap-3 rounded-2xl border border-white/10 bg-navy-950/55 p-4 backdrop-blur-sm"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-navy-700 to-navy-900 text-gold-300 ring-1 ring-white/10">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="text-sm font-semibold text-white">{label}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex items-center justify-between rounded-2xl border border-white/10 bg-navy-950/55 px-4 py-3 backdrop-blur-sm">
                <span className="text-sm text-white/70">Free, no-obligation estimates</span>
                <span className="h-2 w-2 animate-pulse rounded-full bg-mustard-400" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
