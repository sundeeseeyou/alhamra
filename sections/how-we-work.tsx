import { HowWeWorkContent } from "@/data/content";

export default function HowWeWork() {
  return (
    <section
      id="bekerja"
      className="relative flex flex-col justify-center items-center text-center bg-white w-full px-4 sm:px-6 md:px-12 lg:px-16 py-20 md:py-28"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-secondary/5 rounded-full blur-3xl opacity-50" />
      </div>

      {/* Inner Container restricted to 1440px */}
      <div className="relative z-10 mx-auto max-w-[1440px] w-full flex flex-col items-center gap-12 md:gap-16">
        {/* Header - Synchronized heading size */}
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] md:text-sm font-bold uppercase tracking-[0.2em] text-primary">
            {HowWeWorkContent.label}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 leading-tight">
            {HowWeWorkContent.title}
          </h2>
          <div className="mt-2 flex gap-1.5">
            <div className="w-12 h-[3px] rounded-full bg-primary" />
            <div className="w-6 h-[3px] rounded-full bg-secondary" />
          </div>
        </div>

        {/* Main Content Side-by-Side Area */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 w-full">
          {/* Left Side: Circular Diagram */}
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-center relative">
            <div className="relative aspect-square w-full max-w-[320px] sm:max-w-[450px] md:max-w-[500px] lg:max-w-[550px] flex items-center justify-center">
              {/* Orbit Path */}
              <div className="absolute inset-4 border border-slate-100 rounded-full" />
              <div className="absolute -inset-4 border-t border-primary/10 rounded-full animate-[spin_60s_linear_infinite]" />

              {/* Central Image */}
              <div className="relative z-10 w-[28%] aspect-square flex items-center justify-center transition-transform duration-500 hover:scale-105">
                <img
                  src={HowWeWorkContent.image}
                  alt={HowWeWorkContent.imageAlt}
                  className="w-full h-full object-contain drop-shadow-2xl"
                />
              </div>

              {/* Loop Items */}
              {HowWeWorkContent.loopItems.map((item, index) => {
                const angle =
                  index * (360 / HowWeWorkContent.loopItems.length) - 90;
                return (
                  <div
                    key={index}
                    className="absolute flex flex-col items-center gap-1 group text-center"
                    style={{
                      transform: `rotate(${angle}deg) translateX(clamp(110px, 24vw, 250px)) rotate(${-angle}deg)`,
                    }}
                  >
                    <div className="relative mb-1 transition-transform duration-300 group-hover:scale-110">
                      <item.icon className="w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9 text-primary" />
                    </div>

                    <div className="flex flex-col items-center max-w-[90px] sm:max-w-[120px] md:max-w-[160px] gap-0.5">
                      <h4 className="text-[14px] sm:text-[16px] md:text-lg font-bold text-slate-800 leading-tight">
                        {item.title}
                      </h4>
                      <span className="text-xs sm:text-sm text-slate-600 leading-snug">
                        {item.items}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Diagram Label */}
            <div className="mt-16 md:mt-20">
              <span className="text-slate-600 font-bold tracking-widest uppercase text-xs md:text-sm">
                Al-Hamra Loop
              </span>
            </div>
          </div>

          {/* Right Side: NGMC List Items */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center text-start gap-6 md:gap-8">
            <div className="flex flex-col gap-3">
              <h3 className="text-xl md:text-3xl font-bold text-slate-800">
                {HowWeWorkContent.listTitle}
              </h3>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-xl">
                {HowWeWorkContent.listDescription}
              </p>
            </div>

            <div className="grid gap-4 md:gap-5">
              {HowWeWorkContent.listItems.map((list, idx) => (
                <div
                  key={idx}
                  className="flex gap-4 p-5 rounded-2xl bg-white border border-slate-100 transition-all duration-500 group"
                >
                  <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-bold text-base md:text-lg transition-all duration-300">
                    {idx + 1}
                  </div>
                  <div className="flex flex-col gap-1">
                    <h5 className="text-base md:text-xl font-bold text-slate-800">
                      {list.title}
                    </h5>
                    <p className="text-sm md:text-sm text-slate-600 leading-relaxed">
                      {list.items}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Accent */}
        <div className="pt-6 text-center">
          <div className="inline-flex items-center gap-3 group cursor-pointer">
            <div className="h-[1px] w-10 bg-slate-200 group-hover:w-16 group-hover:bg-primary transition-all"></div>
            <span className="text-[10px] md:text-xs font-bold text-slate-400 group-hover:text-primary transition-colors tracking-[0.2em] uppercase">
              Al-Hamra Strategy Ecosystem
            </span>
            <div className="h-[1px] w-10 bg-slate-200 group-hover:w-16 group-hover:bg-primary transition-all"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
