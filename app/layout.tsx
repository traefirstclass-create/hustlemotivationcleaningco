import type { Metadata } from "next";
import { Geist, Geist_Mono, Kaushan_Script } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const brandScript = Kaushan_Script({
  variable: "--font-brand-script",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hustle & Motivation Cleaning Co. | Wesley Chapel, FL",
  description:
    "Reliable, detail-focused residential, commercial, move-in/out, and Airbnb turnover cleaning in Wesley Chapel, FL. Request a free estimate today.",
  keywords: [
    "cleaning service Wesley Chapel",
    "house cleaning Florida",
    "Airbnb turnover cleaning",
    "move out cleaning Wesley Chapel",
    "Hustle & Motivation Cleaning",
  ],
  openGraph: {
    title: "Hustle & Motivation Cleaning Co.",
    description: "A clean space creates peace of mind. Serving Wesley Chapel, FL & surrounding areas.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${brandScript.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream-50 text-navy-950">{children}</body>
    </html>
  );
}
