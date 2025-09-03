import { Navigation } from "@/components/ui/navigation";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ThemesSection } from "@/components/sections/ThemesSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { NewsletterSection } from "@/components/sections/NewsletterSection";
import { RegistrationSection } from "@/components/sections/RegistrationSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { FooterSection } from "@/components/sections/FooterSection";
import { PostSymposiumTourSection } from "@/components/sections/PostSymposiumTourSection";
import { OrganisedBySection } from "@/components/sections/OrganisedBySection";
import { Accomodation } from "@/components/sections/Accomodation";
const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
  <HeroSection />
  <OrganisedBySection />
      <AboutSection />
      <ThemesSection />
      {/* <ScheduleSection /> Removed from landing page */}
      {/* Download/View Schedule buttons removed as per new instructions */}
      <RegistrationSection />
      <NewsletterSection />
      {/* How to Reach & Accommodation Section */}
      <Accomodation />
      <PostSymposiumTourSection />
      <GallerySection />
      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default Index;
