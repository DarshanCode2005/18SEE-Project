import { Separator } from "@/components/ui/separator";
import { NewsletterForm } from "@/components/sections/NewsletterSection";
import iitrLogo from "@/assets/iitr_logo.svg";
import {
  Mail,
  Phone,
  MapPin,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  ExternalLink
} from "lucide-react";

export const FooterSection = () => {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Brochure", href: "/schedule.pdf" },
    { name: "Abstract Submission", href: "#papers" },
    { name: "Registration", href: "/registration-soon" }
  ];

  const importantLinks = [
    { name: "IIT Roorkee", href: "https://www.iitr.ac.in", external: true },
    {
      name: "Earthquake Engineering Dept.",
      href: "https://iitr.ac.in/Departments/Earthquake%20Department/Home.html",
      external: true
    },
    { name: "ISET", href: "https://iset.org.in/", external: true },
    { name: "Travel Information", href: "#travel" }
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://www.linkedin.com/in/deqiitr/"
    },
    {
      name: "Instagram",
      icon: <Instagram className="h-5 w-5" />,
      href: "https://www.instagram.com/see_deq_iitr"
    },
    {
      name: "X",
      icon: <Twitter className="h-5 w-5" />,
      href: "https://x.com/deq_iitr"
    },
    {
      name: "YouTube",
      icon: <Youtube className="h-5 w-5" />,
      href: "https://www.youtube.com/@depatmentofearthquakeengin8468"
    }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Footer Content */}
        <div className="py-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* Contact Info */}
            <div className="lg:col-span-1">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-secondary" />
                  <a
                    href="mailto:18see@iitr.ac.in"
                    className="text-primary-foreground/90 hover:text-secondary transition-colors"
                  >
                    18see@iitr.ac.in
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-secondary" />
                  <a
                    href="tel:+911332285591"
                    className="text-primary-foreground/90 hover:text-secondary transition-colors"
                  >
                    +91-1332-285591<br />+91-1332-285710 <br />+91-1332-285675
                  </a>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-4 w-4 text-secondary mt-1" />
                  <address className="text-xs text-primary-foreground/90 not-italic leading-relaxed">
                    Department of Earthquake Engineering<br />
                    Indian Institute of Technology Roorkee,<br />
                    Uttarakhand 247667, India
                  </address>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Important Links */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Resources</h4>
              <ul className="space-y-2">
                {importantLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm flex items-center"
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                    >
                      {link.name}
                      {link.external && <ExternalLink className="h-3 w-3 ml-1" />}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Logo + Newsletter */}
            <div>
              <NewsletterForm variant="footer" />
              <div className="flex items-center space-x-3 mt-6">
                <div className="w-20 h-20 flex items-center justify-center">
                  <img
                    src={iitrLogo}
                    alt="IIT Roorkee Logo"
                    className="w-full h-full object-cover rounded-full border-2 border-primary bg-white"
                  />
                </div>
                <div>
                  <h3 className="font-montserrat text-xl font-bold tracking-tight">
                    18SEE-2026
                  </h3>
                  <p className="text-primary-foreground/80 text-sm">IIT Roorkee</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-primary-foreground/20" />

        {/* Bottom Footer */}
        <div className="py-3">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
            <div className="text-primary-foreground/80 text-xs text-center md:text-left leading-snug">
              <p>© 2025 IIT Roorkee – 18th Symposium on Earthquake Engineering. All rights reserved.</p>
              <p>Organized by the Department of Earthquake Engineering, IIT Roorkee</p>
            </div>
            <div className="flex items-center space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="bg-primary-foreground/10 hover:bg-secondary hover:text-secondary-foreground p-2 rounded-md transition-colors"
                  aria-label={social.name}
                  target="_blank"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
