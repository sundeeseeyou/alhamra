// ============================================================
// Al-Hamra — Website Content
// ============================================================
// Edit semua teks website di file ini.
// Setiap section punya object sendiri supaya mudah dicari.
// ============================================================

import {
  HeartHandshake,
  Users,
  Newspaper,
  ClockAlert,
  ChartColumnIncreasing,
  MessageCircleWarning,
  Scale,
  Package,
  SquareSigma,
} from "lucide-react";

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

// ----- ABOUT US SECTION -----
export const AboutUsContent = {
  label: "About",
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
  label: "Why Choose Us",
  title: "Perbedaan Kami",
  listItems: [
    {
      title: "Pendekatan Mendalam",
      items:
        "Kami telah mengembangkan pendekatan unik kami New-Generation of Market Centric untuk mencapai hasil signifikan bagi partner kami yang merepresentasikan setiap industri mereka.",
      icons: HeartHandshake,
    },
    {
      title: "Budaya Konektivitas",
      items:
        "Kami berorientasi pada ekosistem yang saling terintegrasi untuk pemenuhan kebutuhan setiap partner, dengan membangun jejaring dari tingkat bawah ke atas.",
      icons: Users,
    },
    {
      title: "Orientasi Bertumbuh",
      items:
        "Kami bekerja dengan para partner ambisius yang berani mengambil resiko dan meninggalkan ketidakpastian untuk bertumbuh.",
      icons: ChartColumnIncreasing,
    },
  ],
  ctaButton: "Pelajari Lebih",
  image:
    "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1200&auto=format&fit=crop",
  imageAlt: "Al-Hamra team collaboration",
};

// --------- HOW WE WORK -----
export const HowWeWorkContent = {
  label: "How We Work",
  title: "Cara Kami Bekerja",
  loopItems: [
    {
      title: "Urgency",
      items: "Kebutuhan yang harus dipenuhi",
      icon: ClockAlert,
    },
    {
      title: "Awareness",
      items: "Friksi yang kerap dirasakan dan terjadi",
      icon: MessageCircleWarning,
    },
    {
      title: "Berita terkini",
      items: "Analisis Snapshot dari NGMC",
      icon: Newspaper,
    },
    {
      title: "Consideration",
      items: "Menjadi tertarik dan kesepakatan",
      icon: Scale,
    },
    {
      title: "Conversion",
      items: "Proses transaksi → Mendapat produk",
      icon: Package,
    },
    {
      title: "Evaluate",
      items: "NGMC produk dan visual tahap perjalanan kerjasama",
      icon: SquareSigma,
    },
  ],
  listTitle: "New Generation of Market Centric (NGMC)",
  listItems: [
    {
      title: "Market Intelligence",
      items:
        "Kami telah mengembangkan pendekatan unik kami New-Generation of Market Centric untuk mencapai hasil signifikan bagi partner kami yang merepresentasikan setiap industri mereka.",
    },
    {
      title: "Market Outlook",
      items:
        "Kami berorientasi pada ekosistem yang saling terintegrasi untuk pemenuhan kebutuhan setiap partner, dengan membangun jejaring dari tingkat bawah ke atas.",
    },
    {
      title: "Market Shaping",
      items:
        "Kami bekerja dengan para partner ambisius yang berani mengambil resiko dan meninggalkan ketidakpastian untuk bertumbuh.",
    },
  ],
  listDescription:
    "Melalui 3 komponen utama dan indikator turunannya. Kami memberikan analisa mendalam yang membantu melihat visibilitas dan mematangkan keputusan tanpa intervensi keputusan",
  ctaButton: "Pelajari Lebih",
  image: "/assets/alhamra-loop.png",
  imageAlt: "Al-Hamra team collaboration",
};

// ----- VISION & MISSION SECTION -----
export const VisionMissionContent = {
  label: "Our Purpose",
  title: "Visi & Misi Kami",
  vision: {
    title: "Visi",
    content: "Terhubung secara lokal, berdampak secara global.",
  },
  mission: {
    title: "Misi",
    content:
      "Melakukan perdagangan B2B secara analitik dan membangun kepercayaan pada kekuatan lokal yang tidak hanya transaksional.",
  },
};

// ----- CTA SECTION -----
export const CTAContent = {
  title: "Siap untuk melangkah lebih jauh bersama Al-Hamra?",
  subtitle:
    "Hubungi kami sekarang untuk konsultasi mendalam mengenai strategi pertumbuhan usaha Anda.",
  ctaButton: "Hubungi Kami Sekarang",
  href: "#hubungi",
};

// ----- CONTACT SECTION -----
export const contactContent = {
  label: "Contact Us",
  title: "Hubungi Kami",
  subtitle:
    "Punya pertanyaan atau ingin bermitra? Silakan isi formulir di bawah ini dan tim kami akan segera menghubungi Anda.",
  fields: {
    fullName: {
      label: "Full Name",
      placeholder: "Masukkan nama lengkap Anda",
    },
    company: {
      label: "Company / Usaha",
      placeholder: "Nama perusahaan atau jenis usaha",
    },
    email: {
      label: "Email",
      placeholder: "alamat@email.com",
    },
    whatsapp: {
      label: "No WhatsApp",
      placeholder: "Contoh: 081234567890",
    },
    purpose: {
      label: "Jenis Keperluan",
      options: [
        { label: "Kemitraan", value: "kemitraan" },
        { label: "Pertanyaan Umum", value: "pertanyaan_umum" },
      ],
    },
    message: {
      label: "Isi Pesan",
      placeholder: "Ceritakan kebutuhan atau pertanyaan Anda...",
    },
  },
  submitButton: "Kirim Pesan",
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
  socials: {
    instagram: "#",
    linkedin: "#",
    youtube: "#",
  },
};
