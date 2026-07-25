export const site = {
  name: "Hustle & Motivation",
  legalName: "Hustle & Motivation Cleaning Co. LLC",
  tagline: "A clean space creates peace of mind.",
  description:
    "Reliable, detail-focused residential, commercial, move-in/out, and Airbnb turnover cleaning throughout Wesley Chapel, FL and the surrounding area.",
  phoneDisplay: "(813) 528-7161",
  phoneHref: "tel:+18135287161",
  email: "hustlemotivationcleaning@gmail.com",
  serviceArea: "Wesley Chapel, FL & surrounding areas",
  instagram: "https://www.instagram.com/hustlemotivationcleaningco/",
  formspreeEndpoint:
    process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ?? "",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export const services = [
  {
    title: "Residential Cleaning",
    icon: "Home",
    description:
      "Recurring or one-time cleanings that keep every room of your home fresh, tidy, and welcoming.",
  },
  {
    title: "Apartment Cleaning",
    icon: "Building2",
    description:
      "Efficient, thorough cleanings sized for apartments and condos — perfect for busy schedules.",
  },
  {
    title: "Deep Cleaning",
    icon: "Sparkles",
    description:
      "A detailed, top-to-bottom clean that resets baseboards, fixtures, and every overlooked corner.",
  },
  {
    title: "Move-In / Move-Out",
    icon: "KeyRound",
    description:
      "Move in to a spotless space or leave your old one inspection-ready, stress-free.",
  },
  {
    title: "Office & Commercial",
    icon: "Briefcase",
    description:
      "Flexible cleaning schedules that keep your workplace sharp for clients and employees alike.",
  },
  {
    title: "Airbnb & Rental Turnovers",
    icon: "RefreshCcw",
    description:
      "Fast, reliable turnovers between guests so every check-in feels like a five-star arrival.",
  },
];

export const recurringOptions = ["Weekly", "Biweekly", "Monthly", "One-Time"];

export const whyChooseUs = [
  {
    title: "Reliable & Professional",
    icon: "ShieldCheck",
    description: "We show up on time, every time, and treat your space with respect.",
  },
  {
    title: "Affordable Pricing",
    icon: "BadgeDollarSign",
    description: "Straightforward, fair rates with free estimates — no surprise fees.",
  },
  {
    title: "Attention to Detail",
    icon: "Sparkles",
    description: "We don't cut corners — literally. Every surface gets the same care.",
  },
  {
    title: "Flexible Scheduling",
    icon: "CalendarClock",
    description: "Morning, afternoon, or evening — recurring or one-time, on your terms.",
  },
  {
    title: "Friendly Service",
    icon: "Heart",
    description: "A warm, easygoing team that makes booking a cleaning simple and pleasant.",
  },
  {
    title: "Locally Owned",
    icon: "MapPin",
    description: "Proudly based in Wesley Chapel, FL and invested in this community.",
  },
];

export const testimonials = [
  {
    quote:
      "My house looked amazing after the cleaning. Super professional and easy to work with.",
    author: "Homeowner",
    context: "Wesley Chapel, FL",
  },
  {
    quote: "Very dependable and affordable. Definitely booking again.",
    author: "Repeat Client",
    context: "Residential Cleaning",
  },
  {
    quote: "Fast response, showed up on time, and did an excellent job.",
    author: "Airbnb Host",
    context: "Rental Turnover",
  },
];

export const serviceOptions = [
  "Standard Cleaning",
  "Deep Cleaning",
  "Move-In Cleaning",
  "Move-Out Cleaning",
  "Airbnb / Rental Turnover",
  "One-Time Cleaning",
  "Recurring Cleaning",
  "Apartment Cleaning",
  "Other",
];

export const hearAboutOptions = [
  "Social Media",
  "Friends or Family",
  "Business Card",
  "Other",
];
