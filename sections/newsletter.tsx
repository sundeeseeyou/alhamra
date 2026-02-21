import SectionTitle from "@/components/section-title";
import { newsletterContent } from "@/data/content";

export default function Newsletter() {
  return (
    <section className="flex flex-col items-center justify-center mt-40">
      <SectionTitle
        title={newsletterContent.title}
        subtitle={newsletterContent.subtitle}
      />

      <div className="flex bg-slate-100 text-sm p-1 rounded-full w-full max-w-xl my-10 border-2 border-white ring ring-slate-200">
        <input
          className="flex-1 rounded-full pl-5 max-md:py-3 outline-none"
          type="text"
          placeholder={newsletterContent.placeholder}
        />
        <button className="font-medium hidden md:block btn text-white px-7 py-3 rounded-full hover:opacity-90 active:scale-95 transition">
          {newsletterContent.ctaButton}
        </button>
      </div>
      <button className="font-medium md:hidden btn text-white px-7 py-3 rounded-full hover:opacity-90 active:scale-95 transition">
        {newsletterContent.ctaButton}
      </button>
    </section>
  );
}
