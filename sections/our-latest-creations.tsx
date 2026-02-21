import SectionTitle from "@/components/section-title";
import { latestCreationsContent } from "@/data/content";

export default function OurLatestCreations() {
  return (
    <section className="flex flex-col items-center justify-center mt-40">
      <SectionTitle
        title={latestCreationsContent.title}
        subtitle={latestCreationsContent.subtitle}
      />
      <div className="flex flex-wrap items-center justify-center gap-10 mt-16">
        {latestCreationsContent.items.map((item, index) => (
          <div
            key={index}
            className="max-w-80 hover:-translate-y-0.5 transition duration-300"
          >
            <img className="rounded-xl" src={item.image} alt={item.title} />
            <h3 className="text-base font-semibold text-slate-700 mt-4">
              {item.title}
            </h3>
            <p className="text-sm text-gray-500 mt-1">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
