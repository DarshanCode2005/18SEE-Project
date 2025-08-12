import { Navigation } from "@/components/ui/navigation";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ThemesSection } from "@/components/sections/ThemesSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { NewsletterSection } from "@/components/sections/NewsletterSection";
import { RegistrationSection } from "@/components/sections/RegistrationSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { FooterSection } from "@/components/sections/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ThemesSection />
      <GallerySection />
      <TestimonialsSection />
      <NewsletterSection />
      <RegistrationSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default Index;
