"use client";

import { MenuIcon, XIcon, ChevronDown, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "@/app/alhamra-logo.png";
import { navbarContent } from "@/data/content";

interface SubLink {
  name: string;
  href: string;
}

interface NavLink {
  name: string;
  href: string;
  subLinks?: SubLink[];
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const links: NavLink[] = navbarContent.links;

  return (
    <>
      <header className="sticky top-0 z-50 flex w-full items-center justify-between shadow-md  bg-white/90 px-4 py-3.5 backdrop-blur-md md:px-16 lg:px-8">
        <nav className="flex w-full items-center justify-between max-w-[1600px] mx-auto">
          <Link href="/">
            <Image src={logo} alt="logo" width={150} height={30} />
          </Link>

          <div className="hidden items-center gap-8 text-gray-900 md:flex">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="transition hover:text-primary font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <Link
            href="#hubungi"
            className="hidden md:flex flex-row items-center gap-2 rounded-full btn-primary px-8 py-2.5 text-lg font-bold text-white transition hover:opacity-90"
          >
            <Phone className="size-5" /> {navbarContent.ctaButton}
          </Link>

          {/* mobile menu toggle */}
          <button
            onClick={() => setIsOpen(true)}
            className="transition active:scale-90 md:hidden p-2"
          >
            <MenuIcon className="size-8" />
          </button>
        </nav>
      </header>

      {/* Mobile Off-canvas Menu */}
      <div
        className={`fixed inset-0 z-[60] flex flex-col bg-white transition-transform duration-500 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b">
          <Link href="/" onClick={() => setIsOpen(false)}>
            <Image src={logo} alt="logo" width={120} height={24} />
          </Link>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 text-slate-800"
          >
            <XIcon className="size-8" />
          </button>
        </div>

        <div className="flex flex-col gap-6 p-8 text-xl font-semibold">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-slate-800 transition hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          <Link
            href="#hubungi"
            className="mt-4 flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-white transition hover:opacity-90"
            onClick={() => setIsOpen(false)}
          >
            <Phone className="size-5" /> {navbarContent.ctaButton}
          </Link>
        </div>
      </div>
    </>
  );
}
