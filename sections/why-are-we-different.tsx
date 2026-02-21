import { Target, Network, TrendingUp } from "lucide-react";
import { WhyWeDifferentContent } from "@/data/content";
import { Decor4 } from "@/components/decorations";

const icons = [Target, Network, TrendingUp];

export default function WhyAreWeDifferent() {
  return (
    <section
      id="berbeda"
      className="w-full px-4 sm:px-6 md:px-12 lg:px-16 py-20 md:py-28"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-14 lg:gap-20">
          {/* Text Side (Left on Desktop) */}
          <div className="w-full md:w-1/2 mt-6 md:mt-0">
            <span className="text-[10px] md:text-sm font-bold uppercase tracking-[0.2em] text-primary">
              {WhyWeDifferentContent.label}
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 leading-tight">
              {WhyWeDifferentContent.title}
            </h2>
            <div className="mt-3 flex gap-1.5">
              <div className="w-12 h-[3px] rounded-full bg-primary" />
              <div className="w-6 h-[3px] rounded-full bg-secondary" />
            </div>

            <div className="flex flex-col mt-10 gap-6">
              {WhyWeDifferentContent.listItems.map((item, i) => {
                const Icon = icons[i] || Target;
                return (
                  <div key={i} className="group flex items-start gap-4">
                    {/* Icon Container */}
                    <div className="flex shrink-0 items-center justify-center rounded-full border-[3px] border-primary size-10 text-primary">
                      <Icon className="size-5 stroke-[2.5px]" />
                    </div>

                    <div>
                      <h4 className="text-sm md:text-base font-bold text-slate-800">
                        {item.title}
                      </h4>
                      <p className="mt-1.5 text-slate-600 leading-relaxed text-sm md:text-base">
                        {item.items}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Image Side (Right on Desktop) */}
          <div className="w-full md:w-1/2 relative">
            <div className="relative overflow-hidden shadow-2xl shadow-primary/20 aspect-[4/3]">
              <img
                src={WhyWeDifferentContent.image}
                alt={WhyWeDifferentContent.imageAlt}
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent" />
            </div>

            {/* Decorative accent - Menggunakan Decor Baru */}
            <Decor4 className="absolute -bottom-10 -right-10 w-32 h-32 text-secondary/30 -z-10 hidden md:block" />
          </div>
        </div>
      </div>
    </section>
  );
}
