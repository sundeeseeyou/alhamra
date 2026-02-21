import { StarIcon } from "lucide-react";
import SectionTitle from "@/components/section-title";
import { testimonialsContent } from "@/data/content";

export default function OurTestimonialSection() {
  return (
    <section className="flex flex-col items-center justify-center mt-40">
      <SectionTitle
        title={testimonialsContent.title}
        subtitle={testimonialsContent.subtitle}
      />

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonialsContent.items.map((item, index) => (
          <div
            key={index}
            className="w-full max-w-88 space-y-4 rounded-md border border-gray-200 bg-white p-5 text-gray-500 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex gap-1">
              {Array(item.rating)
                .fill("")
                .map((_, index) => (
                  <StarIcon
                    key={index}
                    className="size-4 fill-gray-600 text-gray-600"
                  />
                ))}
            </div>
            <p className="line-clamp-3">"{item.review}"</p>
            <div className="flex items-center gap-2 pt-3">
              <img
                className="size-10 rounded-full"
                src={item.image}
                alt={item.name}
              />
              <div>
                <p className="font-medium text-gray-800">{item.name}</p>
                <p className="text-gray-500 text-xs">{item.about}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
