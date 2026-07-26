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

## Service request form (Google Sheet via Apps Script)

The Contact section's form ([`components/ServiceRequestForm.tsx`](components/ServiceRequestForm.tsx))
submits straight into a Google Sheet — no separate backend service —
using a small Apps Script Web App
([`google-apps-script/Code.gs`](google-apps-script/Code.gs)) bound to
that spreadsheet. Each submission becomes a new row in a **"Website
Requests"** tab (kept separate from the legacy Google Form's own "Form
Responses" tab so nothing there gets disturbed), and optionally emails
a copy to the business inbox.

**One-time setup, in the Google account that owns the spreadsheet:**

1. Open the spreadsheet the old Google Form feeds into.
2. **Extensions → Apps Script.**
3. Delete the placeholder code and paste in the contents of
   [`google-apps-script/Code.gs`](google-apps-script/Code.gs). Adjust
   `NOTIFY_EMAIL` at the top if needed (set to `""` to disable the
   email notification).
4. Save the project (any name is fine).
5. **Deploy → New deployment →** gear icon → **Web app.**
   - Execute as: **Me**
   - Who has access: **Anyone**
6. Click **Deploy**, then click through the "Google hasn't verified
   this app" prompt (Advanced → Go to \[project name] (unsafe)) — this
   is expected for a script you wrote yourself, and it only asks once.
7. Copy the deployment's **Web app URL** (ends in `/exec`).
8. Locally, copy `.env.example` to `.env.local` and set:
   ```
   NEXT_PUBLIC_FORM_ENDPOINT=https://script.google.com/macros/s/xxxxx/exec
   ```
9. On Vercel, add the same `NEXT_PUBLIC_FORM_ENDPOINT` variable under
   Project Settings → Environment Variables.

If you edit `Code.gs` later, you have to **Deploy → Manage deployments
→ edit (pencil) → New version** for the change to actually take
effect — saving the script alone doesn't update the live endpoint.

If `NEXT_PUBLIC_FORM_ENDPOINT` is left unset, the form falls back to
opening the visitor's email client with a prefilled message instead of
failing silently — useful for local preview, but the Apps Script
endpoint is what you want in production.

## Deploying to Vercel

1. Push this repo to GitHub.
2. Import it at [vercel.com/new](https://vercel.com/new) — Next.js
   projects need zero configuration.
3. Add the `NEXT_PUBLIC_FORM_ENDPOINT` environment variable
   (see above) before the first production deploy.
4. Every push to `main` redeploys automatically.

## Tech stack

- [Next.js 16](https://nextjs.org/) (App Router) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) for scroll reveals
- [Lucide](https://lucide.dev/) icons
