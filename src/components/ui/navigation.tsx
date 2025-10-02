import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import iitrLogo from "@/assets/iitr_logo.svg";
import { Menu, X } from "lucide-react";

interface NavigationProps {
  className?: string;
}

export const Navigation = ({
  className = ""
}: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scheduleOpen, setScheduleOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const rootUrl = import.meta.env.VITE_ROOT_URL || "";
  const homePath = rootUrl ? rootUrl + "/" : "/";
  const isLanding = window.location.pathname === homePath || window.location.pathname === homePath.slice(0, -1);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!dropdownRef.current) return;
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setScheduleOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Nav links: on landing page use section anchors, on other pages use rootUrl + /#section
  const toBase = (path: string) => rootUrl ? rootUrl + path : path;
  const navItems = [
    {
      name: "Home",
      href: isLanding ? "#home" : toBase("#home")
    },
    {
      name: "About",
      href: isLanding ? "#about" : toBase("#about")
    },
    {
      name: "Themes",
      href: isLanding ? "#themes" : toBase("#themes")
    },
    // Schedule handled as dropdown below
    {
      name: "Committee",
      href: toBase("/18see/committee")
    },
    {
      name: "Gallery",
      href: isLanding ? "#gallery" : toBase("#gallery")
    },
    {
      name: "Registration",
      href: isLanding ? "#registration" : toBase("#registration")
    },
    {
      name: "Contact",
      href: isLanding ? "#contact" : toBase("#contact")
    }
  ];

  // Navbar style: transparent/gradient on landing, solid bg on others
  const navBg = isLanding
    ? (isScrolled ? "bg-background/95 backdrop-blur-md shadow-elegant" : "bg-transparent")
    : "bg-background shadow-elegant";
  const navText = isLanding
    ? (isScrolled ? "text-foreground" : "text-white")
    : "text-foreground";

  // Determine hover color for nav links
  const navHover = isLanding && !isScrolled ? "hover:text-gold" : "hover:text-primary";

  // Dropdown destinations
  const importantDatesHref = isLanding ? "#important-dates" : toBase("#important-dates");
  const scheduleHref = toBase("/schedule");

  // Split items to place dropdown right after Themes
  const themesIndex = navItems.findIndex(i => i.name === "Themes");
  const beforeItems = themesIndex >= 0 ? navItems.slice(0, themesIndex + 1) : navItems;
  const afterItems = themesIndex >= 0 ? navItems.slice(themesIndex + 1) : [];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg} ${className}`} style={{ marginBottom: '8rem' }}>
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center py-2 sm:py-3 md:py-4 my-0">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center">
              <img
                src={iitrLogo}
                alt="IIT Roorkee Logo"
                className={`w-full h-full object-cover rounded-full border-2 border-primary bg-white ${isLanding && !isScrolled ? 'brightness-110' : 'brightness-90'}`}
              />
            </div>
            <div className="hidden sm:block">
              <h1 className={`font-montserrat text-2xl sm:text-3xl font-bold ${navText}`}>18SEE</h1>
              <p className={`${isLanding && !isScrolled ? 'text-white/80' : 'text-muted-foreground'} text-base sm:text-lg font-semibold`}>IIT Roorkee</p>
            </div>
          </div>

          <div className="flex-1" />

          {/* Desktop Navigation */}
          <div className="hidden min-[1200px]:flex items-center space-x-2 xl:space-x-3 justify-end">
            {beforeItems.map(item => (
              <Button key={item.name} variant="ghost" className={`hover:bg-primary/10 ${navHover} transition-colors ${navText} text-base xl:text-lg px-4 xl:px-5 py-2 xl:py-3`} asChild>
                <a href={item.href}>{item.name}</a>
              </Button>
            ))}
            {/* Schedule dropdown placed immediately after Themes */}
            <div ref={dropdownRef} className="relative">
              <Button onClick={() => setScheduleOpen(o => !o)} variant="ghost" aria-haspopup="menu" aria-expanded={scheduleOpen} className={`hover:bg-primary/10 ${navHover} transition-colors ${navText} text-base xl:text-lg px-4 xl:px-5 py-2 xl:py-3 flex items-center`}>
                <span>Schedule</span>
                <svg className={`ml-2 h-4 w-4 transition-transform ${scheduleOpen ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.08 1.04l-4.25 4.25a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
              </Button>
              <div className={`absolute right-0 mt-2 w-56 bg-card border border-border rounded-md shadow-card transition ${scheduleOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} role="menu">
                <a href={importantDatesHref} className={`block px-4 py-2 text-black ${navHover} hover:bg-primary/10`} onClick={() => setScheduleOpen(false)}>Important Dates</a>
                <a href={scheduleHref} className={`block px-4 py-2 text-black ${navHover} hover:bg-primary/10`} onClick={() => setScheduleOpen(false)}>Technical Program</a>
              </div>
            </div>
            {afterItems.map(item => (
              <Button key={item.name} variant="ghost" className={`hover:bg-primary/10 ${navHover} transition-colors ${navText} text-base xl:text-lg px-4 xl:px-5 py-2 xl:py-3`} asChild>
                <a href={item.href}>{item.name}</a>
              </Button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden sm:flex items-center space-x-2"></div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="sm" className={`min-[1200px]:hidden ${navText} text-lg px-3 py-2 ml-2`} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="min-[1200px]:hidden bg-card border border-border rounded-lg mt-2 p-4 shadow-card animate-fade-in-scale w-full max-h-[70vh] overflow-y-auto">
            <div className="flex flex-col space-y-2">
              {beforeItems.map(item => (
                <Button key={item.name} variant="ghost" className="justify-start text-base sm:text-lg px-4 sm:px-5 py-2 sm:py-3" asChild onClick={() => setIsOpen(false)}>
                  <a href={item.href}>{item.name}</a>
                </Button>
              ))}
              {/* Schedule group placed after Themes on mobile */}
              <div className="flex flex-col">
                <Button variant="ghost" className="justify-start text-base sm:text-lg px-4 sm:px-5 py-2 sm:py-3" asChild onClick={() => setIsOpen(false)}>
                  <a href={importantDatesHref}>Important Dates</a>
                </Button>
                <Button variant="ghost" className="justify-start text-base sm:text-lg px-4 sm:px-5 py-2 sm:py-3" asChild onClick={() => setIsOpen(false)}>
                  <a href={scheduleHref}>Schedule</a>
                </Button>
              </div>
              {afterItems.map(item => (
                <Button key={item.name} variant="ghost" className="justify-start text-base sm:text-lg px-4 sm:px-5 py-2 sm:py-3" asChild onClick={() => setIsOpen(false)}>
                  <a href={item.href}>{item.name}</a>
                </Button>
              ))}

              <div className="pt-4 border-t border-border">
                <div className="flex flex-col space-y-3">
                  <Button variant="outline" size="lg" className="text-base sm:text-lg px-4 sm:px-5 py-2 sm:py-3" asChild>
                    <a href={rootUrl ? rootUrl + "/schedule.pdf" : "/schedule.pdf"} download>
                      Download Brochure
                    </a>
                  </Button>
                  <Button size="lg" className="bg-gradient-primary border-0 text-base sm:text-lg px-4 sm:px-5 py-2 sm:py-3" asChild>
                    <a href={toBase("/registration-soon")}>Register Now</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};