"use client";

import {
  MenuIcon,
  XIcon,
  ChevronDown,
  PhoneCall,
  FileTextIcon,
  ImageUpIcon,
  FileVideo,
  AudioLines,
  LightbulbIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "@/app/alhamra-logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const links = [
    { name: "Tentang Kami", href: "#tentang-kami" },
    { name: "Mengapa Kami Berbeda", href: "#berbeda" },
    { name: "Bagaimana Kami Bekerja", href: "#bekerja" },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 flex w-full items-center justify-between shadow-md  bg-white/90 px-4 py-3.5 backdrop-blur-md md:px-16 lg:px-8">
        <nav className="flex w-full items-center justify-between max-w-[1600px] mx-auto">
          <Link href="/">
            <Image src={logo} alt="logo" width={150} height={30} />
          </Link>

          <div className="hidden items-center gap-16 text-gray-900 md:flex">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="transition hover:text-black"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <Link
            href="/"
            className="hidden rounded-full btn-primary px-8 py-2.5 text-lg text-white transition hover:opacity-90 md:inline-block"
          >
            Hubungi
          </Link>

          {/* mobile menu */}
          <button
            onClick={() => setIsOpen(true)}
            className="transition active:scale-90 md:hidden"
          >
            <MenuIcon className="size-6.5" />
          </button>
        </nav>
      </header>

      <div
        className={`fixed inset-0 z-50 flex flex-col items-center justify-center gap-6 bg-white/20 text-lg font-medium backdrop-blur-2xl transition duration-300 md:hidden ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {links.map((link) => (
          <div key={link.name} className="text-center">
            {link.subLinks ? (
              <>
                <button
                  onClick={() =>
                    setOpenDropdown(
                      openDropdown === link.name ? null : link.name,
                    )
                  }
                  className="flex items-center justify-center gap-1 text-gray-800"
                >
                  {link.name}
                  <ChevronDown
                    className={`size-4 transition-transform ${openDropdown === link.name ? "rotate-180" : ""}`}
                  />
                </button>
                {openDropdown === link.name && (
                  <div className="mt-2 flex flex-col gap-2 text-left text-sm">
                    {link.subLinks.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        className="block text-gray-600 transition hover:text-black"
                        onClick={() => setIsOpen(false)}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <Link
                href={link.href}
                className="block text-gray-800 transition hover:text-black"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            )}
          </div>
        ))}

        <Link
          href="/"
          className="rounded-full btn px-8 py-2.5 font-medium text-white transition hover:opacity-90"
          onClick={() => setIsOpen(false)}
        >
          Hubungi
        </Link>

        <button
          onClick={() => setIsOpen(false)}
          className="rounded-md btn p-2 text-white ring-white active:ring-2"
        >
          <XIcon />
        </button>
      </div>
    </>
  );
}
