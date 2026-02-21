import FaqSection from "@/sections/faq-section";
import HeroSection from "@/sections/hero-section";
import Newsletter from "@/sections/newsletter";
import OurLatestCreations from "@/sections/our-latest-creations";
import OurTestimonialSection from "@/sections/our-testimonials-section";
import AboutUs from "@/sections/about-us";
import WhyAreWeDifferent from "@/sections/why-are-we-different";

export default function Page() {
  return (
    <main className="w-full mx-auto">
      <HeroSection />
      <AboutUs />
      <WhyAreWeDifferent />
      <OurLatestCreations />
      <OurTestimonialSection />
      <FaqSection />
      <Newsletter />
    </main>
  );
}
