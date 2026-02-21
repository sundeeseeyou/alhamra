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

// ----- OUR LATEST CREATIONS -----
export const latestCreationsContent = {
  title: "Our Latest Creations",
  subtitle:
    "A visual collection of our most recent works - each piece crafted with intention, emotion, and style.",
  items: [
    {
      title: "Autumn Leaf Harmony",
      description:
        "Earthy seasonal tones with organic patterns, bringing coziness and natural charm into interiors.",
      image: "/assets/image-1.png",
    },
    {
      title: "Winter Frost Calm",
      description:
        "Crisp whites with frosted details, enhancing minimalist and contemporary spaces with sophistication.",
      image: "/assets/image-2.png",
    },
    {
      title: "Spring Canvas",
      description:
        "Pastel floral tones that uplift interiors with beauty, freshness, and vibrant seasonal energy.",
      image: "/assets/image-3.png",
    },
  ],
};

// ----- TESTIMONIALS -----
export const testimonialsContent = {
  title: "Our Testimonials",
  subtitle:
    "Hear from our satisfied customers about the benefits of using SlideX. We love hearing from our customers.",
  items: [
    {
      review:
        "Super clean and easy to use. These Tailwind + React components saved me hours of dev time and countless lines of extra code!",
      name: "Richard Nelson",
      about: "Founder & CEO",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
    },
    {
      review:
        "The design quality is top-notch. Perfect balance between simplicity and style. Highly recommend for any creative developer!",
      name: "Sophia Martinez",
      about: "Founder & CEO",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
    },
    {
      review:
        "Absolutely love the reusability of these components. My workflow feels 10x faster now with cleaner and more consistent layouts.",
      name: "Ethan Roberts",
      about: "Founder & CEO",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60",
    },
    {
      review:
        "Clean, elegant, and efficient. These components are a dream for any modern web developer who values beautiful code.",
      name: "Isabella Kim",
      about: "Founder & CEO",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60",
    },
    {
      review:
        "I've tried dozens of UI kits, but this one just feels right. Everything works seamlessly and looks incredibly polished.",
      name: "Liam Johnson",
      about: "Founder & CEO",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&h=100&auto=format&fit=crop",
    },
    {
      review:
        "Brilliantly structured components with clean, modern styling. Makes development a joy and design updates super quick.",
      name: "Ava Patel",
      about: "Founder & CEO",
      rating: 5,
      image:
        "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/userImage/userImage1.png",
    },
  ],
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
