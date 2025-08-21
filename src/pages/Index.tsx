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
      {/* <ScheduleSection /> Removed from landing page */}
      {/* Download/View Schedule buttons removed as per new instructions */}
      <GallerySection />
      <TestimonialsSection />
      <NewsletterSection />
      <RegistrationSection />
      {/* How to Reach & Accommodation Section */}
      <section id="travel" className="py-20 bg-gradient-to-b from-background to-muted/40">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center flex items-center justify-center gap-3">
            <span>
              <svg className="inline-block w-8 h-8 text-primary mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 12.414a2 2 0 0 0-2.828 0l-4.243 4.243M15 11V7a4 4 0 1 0-8 0v4"/><circle cx="12" cy="19" r="2"/></svg>
            </span>
            How to Reach & Accommodation
          </h2>
          <ul className="space-y-6 text-lg text-foreground/90">
            <li className="flex items-start gap-4">
              <span className="mt-1"><svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 20l-5.447-2.724A2 2 0 0 1 2 15.382V6.618a2 2 0 0 1 1.553-1.894l8-2.105a2 2 0 0 1 1.894 0l8 2.105A2 2 0 0 1 22 6.618v8.764a2 2 0 0 1-1.553 1.894L15 20"/></svg></span>
              <span>The city lies on the Amritsar–Howrah main line of the Northern Railway and is well-connected by rail and road to major cities, including New Delhi, Dehradun, Haridwar, Rishikesh, Chandigarh, and Agra.</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="mt-1"><svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v4.5"/><path d="M3 10.5V18a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7.5"/><path d="M16 2v2"/><path d="M8 2v2"/></svg></span>
              <span>The nearest airports are Jolly Grant Airport (Dehradun, domestic), Shaheed Bhagat Singh International Airport (Chandigarh), and Indira Gandhi International Airport (New Delhi).</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="mt-1"><svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M8 21h8M12 17v4"/><circle cx="12" cy="7" r="4"/></svg></span>
              <span>Trains such as the Shatabdi and Vande Bharat Express offer convenient access to and from New Delhi.</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="mt-1"><svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 22v-2a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v2"/><circle cx="12" cy="7" r="4"/></svg></span>
              <span>In December, Roorkee experiences cold weather, with temperatures ranging between 8°C and 18°C. Participants are advised to carry woollen clothing for comfort.</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="mt-1"><svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 21V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v14"/><path d="M7 21h10"/></svg></span>
              <span className="text-black font-bold">Limited accommodation on a payment basis will be available in the institute's guesthouses and hostels. Hotel stay can also be arranged by the organizers upon request.</span>
            </li>
          </ul>
        </div>
      </section>
      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default Index;
