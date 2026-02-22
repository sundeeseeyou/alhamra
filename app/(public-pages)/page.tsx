import HeroSection from "@/sections/hero-section";
import AboutUs from "@/sections/about-us";
import WhyAreWeDifferent from "@/sections/why-are-we-different";
import HowWeWork from "@/sections/how-we-work";
import VisionMission from "@/sections/vision-mission";
import CTASection from "@/sections/cta-section";
import ContactSection from "@/sections/contact-section";

export default function Page() {
  return (
    <main className="w-full mx-auto">
      <HeroSection />
      <AboutUs />
      <WhyAreWeDifferent />
      <HowWeWork />
      <CTASection />
      <VisionMission />
      <ContactSection />
    </main>
  );
}
