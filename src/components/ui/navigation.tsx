import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
interface NavigationProps {
  className?: string;
}
export const Navigation = ({
  className = ""
}: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navItems = [{
    name: "Home",
    href: "#home"
  }, {
    name: "About",
    href: "#about"
  }, {
    name: "Themes",
    href: "#themes"
  }, {
    name: "Schedule",
    href: "#schedule"
  }, {
    name: "Gallery",
    href: "#gallery"
  }, {
    name: "Registration",
    href: "#registration"
  }, {
    name: "Contact",
    href: "#contact"
  }];
  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-md shadow-elegant" : "bg-transparent"} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 my-0">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 flex items-center justify-center">
              <img 
                src="src\assets\iitr_logo.png" 
                alt="IIT Roorkee Logo" 
                className={`w-full h-full object-contain ${isScrolled ? 'brightness-90' : 'brightness-110'}`}
              />
            </div>
            <div className="hidden sm:block">
              <h1 className={`font-serif text-xl font-bold ${isScrolled ? 'text-foreground' : 'text-white'}`}>18SEE</h1>
              <p className={`text-sm ${isScrolled ? 'text-muted-foreground' : 'text-white/80'}`}>IIT Roorkee</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map(item => <Button key={item.name} variant="ghost" className={`hover:bg-primary/10 hover:text-primary transition-colors ${isScrolled ? 'text-foreground' : 'text-white'}`} asChild>
                <a href={item.href}>{item.name}</a>
              </Button>)}
          </div>

          {/* CTA Button */}
          <div className="hidden sm:flex items-center space-x-2">
            
            
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="sm" className={`lg:hidden ${isScrolled ? 'text-foreground' : 'text-white'}`} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && <div className="lg:hidden bg-card border border-border rounded-lg mt-2 p-4 shadow-card animate-fade-in-scale">
            <div className="flex flex-col space-y-2">
              {navItems.map(item => <Button key={item.name} variant="ghost" className="justify-start" asChild onClick={() => setIsOpen(false)}>
                  <a href={item.href}>{item.name}</a>
                </Button>)}
              <div className="pt-4 border-t border-border">
                <div className="flex flex-col space-y-2">
                  <Button variant="outline" size="sm">
                    Download Brochure
                  </Button>
                  <Button size="sm" className="bg-gradient-primary border-0">
                    Register Now
                  </Button>
                </div>
              </div>
            </div>
          </div>}
      </div>
    </nav>;
};