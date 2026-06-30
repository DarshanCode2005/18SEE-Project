import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Download, X, ZoomIn } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import iitrLogo from "@/assets/iitr_logo.svg";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Instagram,
  Youtube
} from "lucide-react";
import xLogo from "@/assets/x-logo.png";
import iitroorkee from "@/assets/iitr_logo_about.png";

import step1 from "@/assets/manuscript_instructions/manuscript-step-1.png";
import step2 from "@/assets/manuscript_instructions/manuscript-step-2.png";
import step3 from "@/assets/manuscript_instructions/manuscript-step-3.png";
import step4 from "@/assets/manuscript_instructions/manuscript-step-4.png";

const CMT_PORTAL_URL = "https://cmt3.research.microsoft.com/SEE2026";
const MANUSCRIPT_TEMPLATE_URL =
  "https://drive.google.com/drive/folders/1aVVO0jjXvpqjRjGyNxKDyYkGNZQLB7zw";

export const ManuscriptInstructions = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const rootUrl = import.meta.env.VITE_ROOT_URL || "";

  const ManuscriptFooter = () => {
    const quickLinks = [
      { name: "Home", href: rootUrl ? rootUrl + "/" : "/" },
      { name: "Brochure", href: rootUrl ? rootUrl + "/18SEE%20Brochure_V3.pdf" : "/18SEE%20Brochure_V3.pdf" },
      { name: "Manuscript Submission", href: rootUrl ? rootUrl + "/manuscript-instructions" : "/manuscript-instructions" },
      { name: "Registration", href: rootUrl ? rootUrl + "/registration-soon" : "/registration-soon" }
    ];

    const importantLinks = [
      { name: "IIT Roorkee", href: "https://www.iitr.ac.in", external: true },
      {
        name: "Earthquake Engineering Dept.",
        href: "https://iitr.ac.in/Departments/Earthquake%20Department/Home.html",
        external: true
      },
      { name: "ISET", href: "https://iset.org.in/", external: true },
      { name: "Travel Information", href: rootUrl ? rootUrl + "/#travel" : "/#travel" }
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
        href: "https://www.instagram.com/see_deq_iitr?igsh=MWJtNWVjdzUwOHZ3cQ=="
      },
      {
        name: "X",
        icon: <img src={xLogo} alt="X Logo" className="h-5 w-5" />,
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
          <div className="py-6 sm:py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-4 lg:gap-6">
              <div className="sm:col-span-2 lg:col-span-1">
                <h4 className="font-semibold text-base sm:text-lg mb-4 sm:hidden">Contact Information</h4>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-4 w-4 text-secondary flex-shrink-0" />
                    <a
                      href="mailto:18see@iitr.ac.in"
                      className="text-sm sm:text-base text-primary-foreground/90 hover:text-secondary transition-colors break-all"
                    >
                      18see@iitr.ac.in
                    </a>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Phone className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-primary-foreground/90 not-italic leading-relaxed">
                      +91-1332-285710 <br />+91-1332-285675<br />+91-1332-285591
                    </p>
                  </div>
                  <div className="flex items-start space-x-3 width-[300px]">
                    <MapPin className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                    <address className="text-[14px] text-primary-foreground/90 not-italic leading-relaxed">
                      Department of Earthquake Engineering<br />
                      IIT Roorkee, Uttarakhand 247667, India
                    </address>
                  </div>
                </div>
              </div>

              <div className="lg:ml-[50px] md:ml-0 sm:ml-0">
                <h4 className="font-semibold text-base sm:text-lg mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  {quickLinks.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href || undefined}
                        className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors block"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-base sm:text-lg mb-4">Resources</h4>
                <ul className="space-y-2">
                  {importantLinks.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors flex items-center"
                        target={link.external ? "_blank" : undefined}
                        rel={link.external ? "noopener noreferrer" : undefined}
                      >
                        <span className="break-words">{link.name}</span>
                        {link.external && <ExternalLink className="h-3 w-3 ml-1 flex-shrink-0" />}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="sm:col-span-2 lg:col-span-1">
                <div className="flex flex-col sm:flex-row items-center sm:items-center space-y-3 sm:space-y-0 sm:space-x-3 mt-6">
                  <div className="w-28 h-28 sm:w-24 sm:h-24 lg:w-32 lg:h-32 flex items-center justify-center">
                    <img
                      src={iitrLogo}
                      alt="IIT Roorkee Logo"
                      className="w-full h-full object-cover rounded-full border-2 border-primary bg-white"
                    />
                  </div>
                  <div className="text-center mt-2 sm:mt-0">
                    <h3 className="font-montserrat text-xl sm:text-2xl font-bold tracking-tight">
                      18SEE-2026
                    </h3>
                    <p className="text-primary-foreground/80 text-sm">IIT Roorkee</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Separator className="bg-primary-foreground/20" />

          <div className="py-4 sm:py-3">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <div className="text-primary-foreground/80 text-xs sm:text-xs text-justify sm:text-left leading-relaxed max-w-2xl">
                <p>© 2025 IIT Roorkee – 18th Symposium on Earthquake Engineering. All rights reserved.</p>
                <p>Organized by the Department of Earthquake Engineering, IIT Roorkee</p>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="bg-primary-foreground/10 hover:bg-secondary hover:text-secondary-foreground p-2 sm:p-2 rounded-md transition-colors"
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

  const renderImage = (src: string, alt: string) => (
    <div className="bg-muted/50 rounded-lg p-2 sm:p-4">
      <div
        className="relative group cursor-pointer overflow-hidden rounded border"
        onClick={() => setSelectedImage(src)}
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-auto rounded border transition-transform group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
          <ZoomIn className="h-6 w-6 sm:h-8 sm:w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </div>
    </div>
  );

  const steps = [
    {
      id: 1,
      title: "18SEE-2026 CMT Login",
      content: (
        <>
          Visit 18SEE CMT portal{" "}
          (<a
            href={CMT_PORTAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700 underline hover:no-underline transition-all duration-200"
          >
            {CMT_PORTAL_URL}
          </a>) and <span className="text-teal-600 font-medium">Log In</span> using the credentials used to upload the abstract.
        </>
      ),
      image: step1
    },
    {
      id: 2,
      title: "Edit Submission",
      content: (
        <>
          You should see a list of your submitted abstract(s) in the below interface. Click{" "}
          <span className="text-teal-600 font-medium">Edit Submission</span> against each entry to upload the
          corresponding manuscript file (see the next step).
        </>
      ),
      image: step2
    },
    {
      id: 3,
      title: "Upload Manuscript",
      content: (
        <div className="text-justify">
          Information on the <span className="text-black font-bold">title</span> and{" "}
          <span className="text-black font-bold">contributing author(s)</span> of your abstract should be visible.
          You may enter the (accepted) abstract in the space provided. Next,{" "}
          <span className="text-black font-bold">select one Primary Subject Area</span> (mandatory) and up to three
          Secondary Subject Areas (optional) that best describe your study. Finally, upload the{" "}
          <span className="text-black font-bold">PDF</span> file containing your full-length manuscript. If you are not
          the corresponding author, please also enter the particulars of the corresponding author in the space
          provided. Click <span className="text-teal-600 font-medium">Save Changes</span> after implementing these
          instructions and you will have successfully submitted the manuscript!
        </div>
      ),
      image: step3
    },
    {
      id: 4,
      title: "Submission Confirmation",
      content: (
        <>
          You and your co-authors shall be notified about this submission on your respective emails. Click{" "}
          <span className="text-teal-600 font-medium">Done</span> at the bottom of the page and you shall subsequently
          see a summary of your submission.
        </>
      ),
      image: step4
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-primary text-primary-foreground py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
          <div className="flex items-center justify-center gap-4 sm:gap-6 min-h-[120px]">
            <img
              src={iitroorkee}
              alt="IIT Roorkee Logo"
              className="h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32 w-auto flex-shrink-0"
            />
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center">
              Manuscript Submission
            </h1>
          </div>

          <div className="flex items-center gap-4 -mt-6 -ml-6">
            <Button variant="ghost" size="sm" asChild className="text-primary-foreground hover:bg-primary-foreground/10 hover:text-white">
              <Link to={rootUrl ? rootUrl + "/" : "/"}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-card border rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4 text-primary">Dear Authors,</h2>
          <p className="font-semibold mb-4 text-primary text-lg">
            Please prepare your full-length manuscript of 8-10 pages using the prescribed template. This is to be
            uploaded as a single PDF file through the Microsoft CMT portal of 18SEE-2026. Follow the simple steps
            given below to complete your submission.
          </p>
          <div className="mt-4 flex flex-col sm:flex-row gap-4">
            <Button asChild className="bg-primary hover:bg-primary/90">
              <a href={CMT_PORTAL_URL} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                18SEE CMT Portal
              </a>
            </Button>
            <Button variant="outline" asChild className="border-2 border-gray-600 hover:border-gray-700">
              <a href={MANUSCRIPT_TEMPLATE_URL} target="_blank" rel="noopener noreferrer">
                <Download className="h-4 w-4 mr-2" />
                Download Manuscript Template
              </a>
            </Button>
          </div>
        </div>

        <div className="space-y-6">
          {steps.map((step) => (
            <div key={step.id} className="bg-card border rounded-lg overflow-hidden">
              <div className="p-4 sm:p-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                      {step.id}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 text-primary">
                      {step.title}
                    </h3>
                    <div className="text-muted-foreground leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                      {step.content}
                    </div>
                    {step.image && renderImage(step.image, `Step ${step.id} illustration`)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-card border rounded-lg p-6">
          <h3 className="text-center text-3xl font-semibold mb-4 text-primary">Ready to Submit?</h3>
          <p className="text-muted-foreground mb-6 text-center">
            Follow the above steps to submit your manuscript. If you encounter any issues, do not hesitate to
            contact us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-primary hover:bg-primary/90">
              <a href={CMT_PORTAL_URL} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                18SEE CMT Portal
              </a>
            </Button>
            <Button variant="outline" asChild className="border-2 border-gray-600 hover:border-gray-700">
              <a href={MANUSCRIPT_TEMPLATE_URL} target="_blank" rel="noopener noreferrer">
                <Download className="h-4 w-4 mr-2" />
                Download Manuscript Template
              </a>
            </Button>
          </div>
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
            >
              <X className="h-8 w-8" />
            </button>
            <img
              src={selectedImage}
              alt="Enlarged instruction image"
              className="w-full h-auto max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      <ManuscriptFooter />
    </div>
  );
};
