import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[45rem] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <Image
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074&auto=format&fit=crop"
          alt="Business background"
          className="object-cover"
          fill
          priority
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Content */}
      <div className="flex flex-col w-[1440px] items-start justify-center z-10 mb-12">
        <h1 className="text-4xl lg:text-6xl/tight text-start font-semibold max-w-[50%] text-white">
          Melangkah lebih percaya melalui{" "}
          <span className="inline-block bg-gradient-to-r from-secondary to-[#887100] bg-clip-text text-transparent">
            New-Generation of Market Centric
          </span>
        </h1>
        <p className="text-slate-50 md:text-xl max-md:px-2 text-start max-w-2xl mt-3">
          A high-performance, serverless Postgres database that helps you ship
          fast and scale without limits.
        </p>
      </div>
    </section>
  );
}
