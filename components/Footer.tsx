import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import { navLinks, site } from "@/lib/content";
import InstagramIcon from "./icons/InstagramIcon";

export default function Footer() {
  return (
    <footer className="bg-ink py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 border-b border-white/10 pb-10 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex flex-col items-center gap-3 sm:items-start">
            <a href="#top" className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="Hustle & Motivation Cleaning Co."
                width={731}
                height={359}
                className="h-11 w-auto"
              />
            </a>
            <p className="max-w-xs text-center text-sm text-white/50 sm:text-left">
              {site.tagline} Proudly serving {site.serviceArea}.
            </p>
          </div>

          <div className="flex flex-col items-center gap-3 sm:items-start">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
              Explore
            </p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 sm:justify-start">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/70 hover:text-gold-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center gap-3 sm:items-start">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
              Connect
            </p>
            <a href={site.phoneHref} className="flex items-center gap-2 text-sm text-white/70 hover:text-gold-300">
              <Phone className="h-4 w-4" /> {site.phoneDisplay}
            </a>
            <a href={`mailto:${site.email}`} className="flex items-center gap-2 text-sm text-white/70 hover:text-gold-300">
              <Mail className="h-4 w-4" /> {site.email}
            </a>
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-white/70 hover:text-gold-300"
            >
              <InstagramIcon className="h-4 w-4" /> @hustlemotivationcleaningco
            </a>
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-white/40">
          &copy; {new Date().getFullYear()} {site.legalName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
