import { useState, useEffect } from "react";
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
  const isLanding = window.location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Nav links: on landing page use section anchors, on other pages use /#section
  const navItems = [
    {
      name: "Home",
      href: isLanding ? "#home" : "/#home"
    },
    {
      name: "About",
      href: isLanding ? "#about" : "/#about"
    },
    {
      name: "Themes",
      href: isLanding ? "#themes" : "/#themes"
    },
    {
      name: "Schedule",
      href: "/schedule"
    },
    {
      name: "Committee",
      href: "/committee"
    },
    {
      name: "Gallery",
      href: isLanding ? "#gallery" : "/#gallery"
    },
    {
      name: "Registration",
      href: isLanding ? "#registration" : "/#registration"
    },
    {
      name: "Contact",
      href: isLanding ? "#contact" : "/#contact"
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

  return (
  <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg} ${className}`} style={{marginBottom: '6rem'}}>
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-around items-center py-4 my-0">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-28 h-28 flex items-center justify-center">
              <img 
                src={iitrLogo} 
                alt="IIT Roorkee Logo" 
                className={`w-full h-full object-cover rounded-full border-2 border-primary bg-white ${isLanding && !isScrolled ? 'brightness-110' : 'brightness-90'}`}
              />
            </div>
            <div className="hidden sm:block">
              <h1 className={`font-montserrat text-3xl font-bold tracking-tight ${navText}`}>18SEE</h1>
              <p className={`text-lg font-semibold ${isLanding && !isScrolled ? 'text-white/80' : 'text-muted-foreground'}`}>IIT Roorkee</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-3">
            {navItems.map(item => (
              <Button key={item.name} variant="ghost" className={`hover:bg-primary/10 ${navHover} transition-colors ${navText} text-lg px-5 py-3`} asChild>
                <a href={item.href}>{item.name}</a>
              </Button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden sm:flex items-center space-x-2"></div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="sm" className={`lg:hidden ${navText} text-lg px-4 py-2`} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-card border border-border rounded-lg mt-2 p-4 shadow-card animate-fade-in-scale">
            <div className="flex flex-col space-y-3">
              {navItems.map(item => (
                <Button key={item.name} variant="ghost" className="justify-start text-lg px-5 py-3" asChild onClick={() => setIsOpen(false)}>
                  <a href={item.href}>{item.name}</a>
                </Button>
              ))}
              <div className="pt-4 border-t border-border">
                <div className="flex flex-col space-y-3">
                  <Button variant="outline" size="lg" className="text-lg px-5 py-3" asChild>
                    <a href="/schedule.pdf" download>
                      Download Brochure
                    </a>
                  </Button>
                  <Button size="lg" className="bg-gradient-primary border-0 text-lg px-5 py-3" asChild>
                    <a href="/registration-soon">Register Now</a>
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