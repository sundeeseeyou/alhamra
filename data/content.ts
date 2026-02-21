// ============================================================
// Al-Hamra — Website Content
// ============================================================
// Edit semua teks website di file ini.
// Setiap section punya object sendiri supaya mudah dicari.
// ============================================================

import image from "next/image";

// ----- NAVBAR -----
export const navbarContent = {
  links: [
    { name: "Tentang Kami", href: "#tentang-kami" },
    { name: "Perbedaan Kami", href: "#berbeda" },
    { name: "Cara Kami Bekerja", href: "#bekerja" },
  ],
  ctaButton: "Hubungi Kami",
  mobileCtaButton: "Hubungi",
};

// ----- HERO SECTION -----
export const heroContent = {
  headline: "Melangkah lebih percaya melalui",
  highlightedText: "New-Generation of Market Centric",
  image:
    "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074&auto=format&fit=crop",
  imageAlt: "Business background",
};

// ----- WHAT WE DO SECTION -----
export const AboutUsContent = {
  label: "Tentang Kami",
  title: "Tentang Kami",
  paragraphs: [
    "Kami adalah layanan perdagangan B2B yang menyediakan produk dan jasa dalam satu ekosistem pertumbuhan usaha yang membangun nilai lebih dari setiap transaksi, kemudian menciptakan hingga memperkuat pertumbuhan usaha bagi setiap partner.",
  ],
  ctaButton: "Pelajari Lebih",
  image:
    "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1200&auto=format&fit=crop",
  imageAlt: "Al-Hamra team collaboration",
};

// ----- WHY WE DIFFERENT SECTION -----
export const WhyWeDifferentContent = {
  label: "Perbedaan Kami",
  title: "Perbedaan Kami",
  listItems: [
    {
      title: "Pendekatan Mendalam",
      items:
        "Kami telah mengembangkan pendekatan unik kami New-Generation of Market Centric untuk mencapai hasil signifikan bagi partner kami yang merepresentasikan setiap industri mereka.",
    },
    {
      title: "Budaya Konektivitas",
      items:
        "Kami berorientasi pada ekosistem yang saling terintegrasi untuk pemenuhan kebutuhan setiap partner, dengan membangun jejaring dari tingkat bawah ke atas.",
    },
    {
      title: "Orientasi Bertumbuh",
      items:
        "Kami bekerja dengan para partner ambisius yang berani mengambil resiko dan meninggalkan ketidakpastian untuk bertumbuh.",
    },
  ],
  ctaButton: "Pelajari Lebih",
  image:
    "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1200&auto=format&fit=crop",
  imageAlt: "Al-Hamra team collaboration",
};

// ----- FAQ -----
export const faqContent = {
  title: "FAQ's",
  subtitle:
    "Looking for answers to your frequently asked questions? Check out our FAQ's section below to find.",
  items: [
    {
      question: "Do I need coding or design experience to use PrebuiltUI?",
      answer:
        "Basic coding knowledge (HTML/CSS, Tailwind) helps, but advanced design skills aren't required. You can use components as-is or customize them.",
    },
    {
      question:
        "What is PrebuiltUI and how does it help developers and designers?",
      answer:
        "PrebuiltUI provides ready-to-use, customizable UI components and templates, saving time for developers and designers.",
    },
    {
      question: "Can I use PrebuiltUI components in my existing project?",
      answer:
        "Yes, components can be integrated into HTML, React, Next.js, Vue, and other projects using Tailwind CSS.",
    },
    {
      question: "How customizable are the generated components?",
      answer:
        "Components are highly customizable with Tailwind utility classes, theming, and structural adjustments.",
    },
    {
      question: "Does PrebuiltUI support team collaboration?",
      answer:
        "There's no clear documentation on built-in collaboration features. Check their support for team options.",
    },
    {
      question: "Can I try PrebuiltUI before purchasing a plan?",
      answer: "Yes, you can try PrebuiltUI with full access to features.",
    },
  ],
};

// ----- NEWSLETTER -----
export const newsletterContent = {
  title: "Join Newsletter",
  subtitle:
    "A visual collection of our most recent works - each piece crafted with intention, emotion and style.",
  placeholder: "Enter your email address",
  ctaButton: "Get Updates",
};

// ----- FOOTER -----
export const footerContent = {
  columns: [
    {
      title: "Company",
      links: [
        { title: "About us", href: "#about-us" },
        { title: "Our vision", href: "#our-vision" },
        { title: "Community", href: "#community" },
        { title: "Careers", href: "#careers" },
        { title: "Term & conditions", href: "#term-and-conditions" },
        { title: "Privacy", href: "#privacy" },
      ],
    },
    {
      title: "Account",
      links: [
        { title: "Settings", href: "#settings" },
        { title: "Refund policy", href: "#refund-policy" },
        { title: "Affiliates", href: "#affiliates" },
        { title: "Gift cards", href: "#gift-cards" },
      ],
    },
    {
      title: "Contact",
      links: [
        { title: "Contact us", href: "#contact-us" },
        { title: "Instagram", href: "#instagram" },
        { title: "Linkedin", href: "#linkedin" },
        { title: "Github", href: "#github" },
      ],
    },
  ],
  copyright: "© 2025 Al-Hamra, All rights reserved.",
  socials: {
    dribbble: "#",
    linkedin: "#",
    twitter: "#",
    youtube: "#",
  },
};
