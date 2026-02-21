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
          className="object-cover"
          fill
          priority
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Content */}
      <div className="flex flex-col w-[1440px] items-start justify-center z-10 px-4">
        <h1 className="text-4xl lg:text-6xl/tight text-start font-semibold max-w-[70%] text-white">
          {heroContent.headline}{" "}
          <span className="inline-block bg-gradient-to-r from-secondary to-[#887100] bg-clip-text text-transparent">
            {heroContent.highlightedText}
          </span>
        </h1>
      </div>
    </section>
  );
}
