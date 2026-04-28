import { Hero } from "@/components/home/Hero";
import { AboutSection } from "@/components/home/About";
import { ExperienceSection } from "@/components/home/Experience";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { SkillsSection } from "@/components/home/Skills";
import { CertificationsSection } from "@/components/home/Certifications";
import { ContactSection } from "@/components/home/Contact";
import { SectionDivider } from "@/components/layout/SectionDivider";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <SectionDivider />
      
      <AboutSection />
      <SectionDivider />

      <ExperienceSection />
      <SectionDivider />
      
      <FeaturedProjects />
      <SectionDivider />
      
      <SkillsSection />
      <SectionDivider />
      
      <CertificationsSection />
      <SectionDivider />
      
      <ContactSection />
    </div>
  );
}
