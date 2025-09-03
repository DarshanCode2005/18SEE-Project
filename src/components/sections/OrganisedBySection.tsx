import React from "react";
import ISETLogo from "@/assets/ISET_logo.png";
import IITRLogo from "@/assets/IITR_organiser_logo.png";

export const OrganisedBySection = () => (
  <section id="organised-by" className="py-12 bg-background">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8 font-serif">Organised By</h2>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
        <div className="flex flex-col items-center">
          <img src={ISETLogo} alt="International Society of Earthquake Technology" className="h-24 w-auto mb-2 object-contain" />
          <span className="text-base text-muted-foreground">International Society of Earthquake Technology</span>
        </div>
        <div className="flex flex-col items-center">
          <img src={IITRLogo} alt="IIT Roorkee Organiser Logo" className="h-24 w-auto mb-2 object-contain" />
          <span className="text-base text-muted-foreground">Indian Institute of Technology Roorkee</span>
        </div>
      </div>
    </div>
  </section>
);
