import { Hero } from "@/components/home/Hero";
import { TechMarquee } from "@/components/home/TechMarquee";
import { Services } from "@/components/home/Services";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { Testimonials } from "@/components/home/Testimonials";
import { CTASection } from "@/components/home/CTASection";

export function Home() {
  return (
    <>
      <Hero />
      <TechMarquee />
      <Services />
      <FeaturedProjects />
      <Testimonials />
      <CTASection />
    </>
  );
}
