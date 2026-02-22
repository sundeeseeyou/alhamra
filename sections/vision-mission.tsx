import { VisionMissionContent } from "@/data/content";
import { Telescope, Target } from "lucide-react";

export default function VisionMission() {
  return (
    <section
      id="visi-misi"
      className="relative w-full px-4 sm:px-6 md:px-12 lg:px-16 py-20 md:py-28 bg-background"
    >
      {/* Subtle decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 -right-24 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -left-24 w-64 h-64 bg-secondary/5 rounded-full blur-3xl opacity-60" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1280px]">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-2 mb-16 md:mb-20">
          <span className="text-[10px] md:text-sm font-bold uppercase tracking-[0.2em] text-primary">
            {VisionMissionContent.label}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 leading-tight">
            {VisionMissionContent.title}
          </h2>
          <div className="mt-2 flex gap-1.5">
            <div className="w-12 h-[3px] rounded-full bg-primary" />
            <div className="w-6 h-[3px] rounded-full bg-secondary" />
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Vision Card */}
          <div className="group relative flex flex-col p-8 md:p-12 bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-secondary/5 transition-all duration-500 overflow-hidden">
            {/* Decorative Number/Background Icon */}
            <div className="absolute -top-10 -right-10 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-500">
              <Telescope className="size-48 -rotate-12" />
            </div>

            <div className="relative z-10 flex flex-col items-start gap-6">
              <div className="flex items-center justify-center size-14 md:size-16 rounded-full text-white bg-primary">
                <Telescope className="size-7 md:size-8" />
              </div>

              <div className="flex flex-col gap-3">
                <h3 className="text-2xl md:text-3xl font-bold text-slate-800">
                  {VisionMissionContent.vision.title}
                </h3>
                <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                  {VisionMissionContent.vision.content}
                </p>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-secondary/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
          </div>
          {/* Mission Card */}
          <div className="group relative flex flex-col p-8 md:p-12 bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 overflow-hidden">
            {/* Decorative Number/Background Icon */}
            <div className="absolute -top-10 -right-10 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-500">
              <Target className="size-48 rotate-12" />
            </div>

            <div className="relative z-10 flex flex-col items-start gap-6">
              <div className="flex items-center justify-center size-14 md:size-16 rounded-full text-white bg-primary">
                <Target className="size-7 md:size-8" />
              </div>

              <div className="flex flex-col gap-3">
                <h3 className="text-2xl md:text-3xl font-bold text-slate-800">
                  {VisionMissionContent.mission.title}
                </h3>
                <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                  {VisionMissionContent.mission.content}
                </p>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
          </div>
        </div>
      </div>
    </section>
  );
}
