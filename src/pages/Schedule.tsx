
import React, { useRef, useEffect, useState } from "react";
import { Navigation } from "@/components/ui/navigation";
import { ScheduleSection } from "@/components/sections/ScheduleSection";
import { FooterSection } from "@/components/sections/FooterSection";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const Schedule = () => {
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
      <div className="mt-28">
        <ScheduleSection />
      </div>
      <div className="flex justify-center my-12">
        <Button
          asChild
          size="lg"
          className="bg-secondary hover:bg-secondary-dark text-secondary-foreground shadow-glow px-8 py-4 text-lg font-semibold gap-2"
        >
          <a href="/schedule.pdf" download>
            <Download className="h-5 w-5 mr-2" />
            Download Schedule
          </a>
        </Button>
      </div>
      <FooterSection />
    </div>
  );
};

export default Schedule;
