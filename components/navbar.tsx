"use client";

import { MenuIcon, XIcon, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
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
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  const links: NavLink[] = navbarContent.links;

  useEffect(() => {
    const threshold = 10;
    let lastScrollY = window.scrollY;

    const updateNavbar = (scrolled: number, direction: number) => {
      if (scrolled < 50) {
        setIsVisible(true);
      } else {
        if (direction > 0) {
          setIsVisible(false);
          setIsOpen(false);
        } else if (direction < 0) {
          setIsVisible(true);
        }
      }
    };

    const handleScroll = (e: any) => {
      // If the event is from Lenis, it will have 'scroll' and 'direction' properties
      if (e && e.scroll !== undefined && e.direction !== undefined) {
        updateNavbar(e.scroll, e.direction);
      } else {
        // Native scroll event fallback
        const currentScrollY = window.scrollY;
        const delta = currentScrollY - lastScrollY;

        if (Math.abs(delta) > threshold) {
          updateNavbar(currentScrollY, delta);
          lastScrollY = currentScrollY;
        }
      }
    };

    // @ts-ignore
    const lenis = window.lenis;

    if (lenis) {
      lenis.on("scroll", handleScroll);
    } else {
      window.addEventListener("scroll", handleScroll, { passive: true });
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (lenis) lenis.off("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex w-full items-center justify-between shadow-md bg-white/90 px-4 py-3.5 backdrop-blur-md md:px-16 lg:px-8 transition-transform duration-300 ease-in-out ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
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
        <div className="flex items-center justify-between p-6">
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
