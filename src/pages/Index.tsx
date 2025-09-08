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

import React, { useRef, useEffect, useState } from "react";

const Index = () => {
  // Navbar hide on scroll logic (fade)
  const navRef = useRef<HTMLDivElement>(null);
  const [navHidden, setNavHidden] = useState(false);
  const lastScroll = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScroll.current && currentScroll > 80) {
        setNavHidden(true);
      } else {
        setNavHidden(false);
      }
      lastScroll.current = currentScroll;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <div
        ref={navRef}
        className={`fixed top-0 left-0 w-full z-50 transition-opacity duration-500 ${navHidden ? "opacity-0 pointer-events-none" : "opacity-100"}`}
      >
        <Navigation />
      </div>
      <div className="pt-0">
        <HeroSection />
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
    </div>
  );
};

export default Index;
