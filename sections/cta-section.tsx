import { CTAContent } from "@/data/content";
import { Phone } from "lucide-react";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="relative w-full bg-primary py-8 md:py-16 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1280px] px-6 md:px-12 lg:px-16 text-center">
        <div className="flex flex-col items-center gap-6 md:gap-8">
          <h4 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            {CTAContent.title}
          </h4>
          <p className="text-white/80 text-lg md:text-xl">
            {CTAContent.subtitle}
          </p>
          <Link
            href={CTAContent.href}
            className="flex flex-row items-center gap-2 rounded-full bg-secondary px-8 py-2.5 text-lg font-bold text-slate-900 transition hover:opacity-90"
          >
            <Phone className="size-5" /> {CTAContent.ctaButton}
          </Link>
        </div>
      </div>
    </section>
  );
}
