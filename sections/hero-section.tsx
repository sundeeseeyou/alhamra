import Image from "next/image";
import { heroContent } from "@/data/content";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[45rem] overflow-hidden">
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
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Content */}
      <div className="flex flex-col lg:max-w-[1600px] w-full items-start justify-center z-10 px-6">
        <h1 className="text-6xl/tight md:text-[4rem]/tight w-5xl text-start font-bold text-white">
          {heroContent.headline}{" "}
          <span className="inline-block bg-gradient-to-r from-secondary to-[#887100] bg-clip-text text-transparent">
            {heroContent.highlightedText}
          </span>
        </h1>
      </div>
    </section>
  );
}
