import { FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";
import { footerContent } from "@/data/content";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-4 md:px-16 lg:px-24 text-[13px] py-4 text-gray-500 bg-white">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-col md:flex-row py-8 border-gray-100 md:justify-between max-md:items-center border-t gap-6 items-center">
          <p className="text-center">
            © {currentYear} Al-Hamra | All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href={footerContent.socials.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn className="size-5 text-gray-400 hover:text-primary transition-colors" />
            </a>
            <a
              href={footerContent.socials.instagram}
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram className="size-5 text-gray-400 hover:text-primary transition-colors" />
            </a>
            <a
              href={footerContent.socials.youtube}
              target="_blank"
              rel="noreferrer"
            >
              <FaYoutube className="size-5 text-gray-400 hover:text-primary transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
