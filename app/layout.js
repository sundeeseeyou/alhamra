import { Inter, Arimo } from "next/font/google";
import "./globals.css";
import LenisScroll from "@/components/lenis-scroll";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const arimo = Arimo({
  subsets: ["latin"],
  variable: "--font-arimo",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${arimo.variable}`}>
      <LenisScroll />
      <body>{children}</body>
    </html>
  );
}
