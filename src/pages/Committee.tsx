import { Navigation } from "@/components/ui/navigation";
import { FooterSection } from "@/components/sections/FooterSection";
import headshot from "@/assets/headshot_placeholder.png";
import Image1 from "@/assets/Prof_Pant.png";
import Image2 from "@/assets/Prof_Maheshwari.jpg";
import Image3 from "@/assets/Prof_Jakka.png";
import Image4 from "@/assets/Prof_Singla.png";
import Image5 from "@/assets/Prof_Prakash.jpg";

const committee = [
  {
    level: 1,
    title: "Patron",
    name: "Prof. Kamal Kishore Pant",
    position: "Director, IIT Roorkee",
  },
  {
    level: 2,
    title: "Chairman",
    name: "Prof. B. K. Maheshwari",
    position: "Professor & Head\nDEQ, IIT Roorkee",
  },
  {
    level: 2,
    title: "Organising Secretary",
    name: "Prof. Ravi Sankar Jakka",
    position: "Professor\nDEQ, IIT Roorkee",
  },
  {
    level: 3,
    title: "Joint Organising Secretary",
    name: "Prof. Varun Kumar Singla",
    position: "Assistant Professor\nDEQ, IIT Roorkee",
  },
  {
    level: 3,
    title: "Joint Organising Secretary",
    name: "Prof. Shiv Prakash",
    position: "Assistant Professor\nDEQ, IIT Roorkee",
  },
];

const levelStyles = [
  "mt-0", // Level 1
  "mt-16", // Level 2
  "mt-10", // Level 3
];

import React, { useRef, useEffect, useState } from "react";

const Committee = () => {
  // Navbar hide on scroll logic
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
    <div className="min-h-screen bg-background">
      <div
        ref={navRef}
        className={`fixed top-0 left-0 w-full z-50 transition-opacity duration-500 ${navHidden ? "opacity-0 pointer-events-none" : "opacity-100"}`}
      >
        <Navigation />
      </div>
      <div className="max-w-4xl mx-auto px-4 pt-36 md:pt-40 pb-16">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">Core Organising Committee</h1>
        {/* Level 1 */}
        <div className="flex justify-center w-full">
          <div className="flex flex-col items-center max-w-xs">
            <div className="w-32 h-32 rounded-full border-4 border-primary shadow mb-4 overflow-hidden flex items-center justify-center">
              <img src={Image1} alt="Patron" className="w-full h-full object-center"/>
            </div>
            <div className="text-center w-full">
              <div className="text-lg font-semibold text-gold mb-1">Patron</div>
              <div className="text-xl font-bold text-foreground">Prof. Kamal Kishore Pant</div>
              <div className="text-muted-foreground mt-1">Director, IIT Roorkee</div>
            </div>
          </div>
        </div>
        {/* Level 2 */}
        <div className="flex flex-col md:flex-row justify-center gap-12 mt-16">
          <div className="flex flex-col items-center">
            <img src={Image2} alt={committee[1].title} className="w-28 h-28 rounded-full object-cover object-center border-4 border-secondary shadow mb-3 block mx-auto" style={{objectFit: 'cover', objectPosition: 'center'}} />
            <div className="text-center">
              <div className="text-base font-semibold text-secondary mb-1">{committee[1].title}</div>
              <div className="text-lg font-bold text-foreground">{committee[1].name}</div>
              <div className="text-muted-foreground mt-1 whitespace-pre-line">{committee[1].position}</div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img src={Image3} alt={committee[2].title} className="w-28 h-28 rounded-full object-cover object-center border-4 border-secondary shadow mb-3 block mx-auto" style={{objectFit: 'cover', objectPosition: 'center'}} />
            <div className="text-center">
              <div className="text-base font-semibold text-secondary mb-1">{committee[2].title}</div>
              <div className="text-lg font-bold text-foreground">{committee[2].name}</div>
              <div className="text-muted-foreground mt-1 whitespace-pre-line">{committee[2].position}</div>
            </div>
          </div>
        </div>
        {/* Level 3 */}
        <div className="flex flex-col md:flex-row justify-center gap-12 mt-10">
          <div className="flex flex-col items-center">
            <span className="w-28 h-28 rounded-full border-4 border-accent shadow mb-2 mx-auto bg-gray-200 overflow-hidden flex items-center justify-center">
              <img 
                src={Image4} 
                alt={committee[3].title} 
                className="w-full h-full object-cover object-center" 
                style={{objectFit: 'cover', objectPosition: 'center', minWidth: '100%', minHeight: '100%'}} 
              />
            </span>
            <div className="text-center">
              <div className="text-base font-semibold text-secondary mb-1">{committee[3].title}</div>
              <div className="text-lg font-bold text-foreground">{committee[3].name}</div>
              <div className="text-muted-foreground mt-1 whitespace-pre-line">{committee[3].position}</div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img src={Image5} alt={committee[4].title} className="w-28 h-28 rounded-full object-cover object-center border-4 border-accent shadow mb-2 block mx-auto" style={{objectFit: 'cover', objectPosition: 'center'}} />
            <div className="text-center">
              <div className="text-base font-semibold text-secondary mb-1">{committee[4].title}</div>
              <div className="text-lg font-bold text-foreground">{committee[4].name}</div>
              <div className="text-muted-foreground mt-1 whitespace-pre-line">{committee[4].position}</div>
            </div>
          </div>
        </div>
      </div>
      <FooterSection />
    </div>
  );
};

export default Committee;
