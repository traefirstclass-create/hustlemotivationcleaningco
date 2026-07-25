# Hustle & Motivation Cleaning Co.

Marketing landing page for Hustle & Motivation Cleaning Co., a cleaning
company serving Wesley Chapel, FL and the surrounding area. Built with
Next.js (App Router), TypeScript, and Tailwind CSS, deployed on Vercel.

Sections: Hero, About, Services, Why Choose Us, Testimonials, and a
Contact section with a full service request form.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Editing content

Nearly all site copy — services, testimonials, why-choose-us points,
phone/email, nav links, form dropdown options — lives in
[`lib/content.ts`](lib/content.ts). Edit that file instead of hunting
through components for text.

## Logo

`public/images/logo.png` is the real logo (cropped tight from the
transparent artwork) and is used in the Navbar, Footer, and About
section via `next/image`. The browser tab icon
([`app/icon.tsx`](app/icon.tsx)) is instead a generated "H&M"
monogram in brand colors — swap it for a static `app/icon.png` if
you'd rather use the full mark there.

## Service request form (Formspree)

The Contact section's form ([`components/ServiceRequestForm.tsx`](components/ServiceRequestForm.tsx))
submits via [Formspree](https://formspree.io) so there's no backend to
host or maintain — submissions arrive by email / in your Formspree
dashboard, replacing the old Google Form.

1. Create a free account at [formspree.io](https://formspree.io) and
   create a new form.
2. Copy its endpoint (`https://formspree.io/f/xxxxxxxx`).
3. Locally, copy `.env.example` to `.env.local` and set:
   ```
   NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/xxxxxxxx
   ```
4. On Vercel, add the same `NEXT_PUBLIC_FORMSPREE_ENDPOINT` variable
   under Project Settings → Environment Variables.

If this variable is left unset, the form falls back to opening the
visitor's email client with a prefilled message instead of failing
silently — useful for previewing, but Formspree is what you want in
production.

## Deploying to Vercel

1. Push this repo to GitHub.
2. Import it at [vercel.com/new](https://vercel.com/new) — Next.js
   projects need zero configuration.
3. Add the `NEXT_PUBLIC_FORMSPREE_ENDPOINT` environment variable
   (see above) before the first production deploy.
4. Every push to `main` redeploys automatically.

## Tech stack

- [Next.js 16](https://nextjs.org/) (App Router) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) for scroll reveals
- [Lucide](https://lucide.dev/) icons
