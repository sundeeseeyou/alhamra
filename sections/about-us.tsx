import { ArrowUpRight } from "lucide-react";
import { AboutUsContent } from "@/data/content";

export default function AboutUs() {
  return (
    <section
      id="tentang-kami"
      className="w-full px-4 sm:px-6 md:px-12 lg:px-16 py-12 md:py-28"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-14 lg:gap-20">
          {/* Image Side */}
          <div className="w-full md:w-1/2 relative">
            <div className="relative overflow-hidden shadow-xl shadow-primary/15 aspect-[4/3]">
              <img
                src={AboutUsContent.image}
                alt={AboutUsContent.imageAlt}
                className="w-full h-full object-cover"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
            </div>

            {/* Decorative accent */}
            <div className="absolute -top-3 -left-3 w-16 h-16 rounded-xl border-[3px] border-secondary/40 -z-10 hidden md:block" />
          </div>

          {/* Text Side */}
          <div className="w-full md:w-1/2 mt-6 md:mt-0">
            <span className="text-[10px] md:text-sm font-bold uppercase tracking-[0.2em] text-primary">
              {AboutUsContent.label}
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 leading-tight">
              {AboutUsContent.title}
            </h2>
            <div className="mt-3 flex gap-1.5">
              <div className="w-12 h-[3px] rounded-full bg-primary" />
              <div className="w-6 h-[3px] rounded-full bg-secondary" />
            </div>

            {AboutUsContent.paragraphs.map((text, i) => (
              <p
                key={i}
                className={`${i === 0 ? "mt-6" : "mt-4"} text-slate-600 leading-relaxed`}
              >
                {text}
              </p>
            ))}

            <button className="mt-8 inline-flex items-center gap-2 rounded-full btn-primary py-3 px-8 text-white font-medium hover:opacity-90 hover:gap-3 hover:cursor-pointer active:scale-[0.98] transition-all duration-100 ease-in-out">
              <ArrowUpRight className="size-6" />
              <span>{AboutUsContent.ctaButton}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
