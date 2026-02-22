import Image from "next/image";
import { heroContent } from "@/data/content";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[80vh] md:min-h-[45rem] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <Image
          src={heroContent.image}
          alt={heroContent.imageAlt}
          className="object-cover animate-zoom-out"
          fill
          priority
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/65"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1440px] w-full px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl flex flex-col gap-6">
          <h1 className="text-4xl/tight sm:text-5xl/tight md:text-[4rem]/tight text-start font-bold text-white">
            {heroContent.headline}{" "}
            <span className="inline-block bg-gradient-to-r from-secondary to-[#FFD700] bg-clip-text text-transparent">
              {heroContent.highlightedText}
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
}
