import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import moog from "@/assets/sponsors/moog.png";
import gauge from "@/assets/sponsors/gauge.svg";
import pyrodynamics from "@/assets/sponsors/pyrodynamics.png";
import spectrisHbk from "@/assets/sponsors/spectris-hbk.svg";

type Sponsor = {
  name: string;
  type: string;
  website: string;
  logo: string;
  logoOnDark?: boolean;
};

const diamondSponsors: Sponsor[] = [
  {
    name: "Moog Motion Controls Private Limited",
    type: "Diamond Sponsor",
    website: "https://www.moog.co.in/",
    logo: moog,
    logoOnDark: true,
  },
];

const exhibitionSponsors: Sponsor[] = [
  {
    name: "Gauge Geotechniques",
    type: "Standard Exhibition Stall (Small)",
    website: "https://www.gaugeindia.com/",
    logo: gauge,
  },
  {
    name: "Pyrodynamics",
    type: "Standard Exhibition Stall (Big)",
    website: "https://www.pyrodynamicsindia.com/",
    logo: pyrodynamics,
  },
  {
    name: "Spectris Technologies Pvt Ltd (HBK – Hottinger Brüel & Kjær)",
    type: "Standard Exhibition Stall (Big)",
    website: "https://www.spectris.com/",
    logo: spectrisHbk,
  },
];

const SponsorCard = ({
  sponsor,
  featured = false,
}: {
  sponsor: Sponsor;
  featured?: boolean;
}) => (
  <a
    href={sponsor.website}
    target="_blank"
    rel="noopener noreferrer"
    className={`group flex flex-col items-center text-center rounded-xl border border-slate-100 bg-white shadow-sm hover:shadow-md transition-all duration-300 ${
      featured ? "p-8 md:p-10 max-w-md w-full" : "p-6 w-full max-w-sm"
    }`}
  >
    <Badge
      variant="outline"
      className={`mb-4 ${
        featured
          ? "bg-secondary/15 text-secondary border-secondary/30 text-sm px-3 py-1"
          : "bg-primary/5 text-primary border-primary/20"
      }`}
    >
      {sponsor.type}
    </Badge>
    <div
      className={`w-full flex items-center justify-center rounded-lg mb-4 ${
        featured ? "h-36 md:h-40" : "h-28"
      } ${sponsor.logoOnDark ? "bg-slate-900 px-6" : "bg-slate-50 px-4"}`}
    >
      <img
        src={sponsor.logo}
        alt={`${sponsor.name} logo`}
        className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
      />
    </div>
    <h3 className={`font-semibold text-foreground mb-2 ${featured ? "text-xl" : "text-base"}`}>
      {sponsor.name}
    </h3>
    <span className="inline-flex items-center gap-1 text-sm text-primary group-hover:underline">
      Visit website
      <ExternalLink className="h-3.5 w-3.5" />
    </span>
  </a>
);

export const SponsorsSection = () => {
  return (
    <section id="sponsors" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-serif">
            Our Sponsors
          </h2>
          <div className="mt-4 h-1.5 w-24 bg-secondary mx-auto rounded-full" />
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            We gratefully acknowledge the support of our industry sponsors and exhibitors.
          </p>
        </div>

        <div className="mb-14">
          <h3 className="text-center text-xl font-semibold text-primary mb-8">Diamond Sponsor</h3>
          <div className="flex justify-center">
            {diamondSponsors.map((sponsor) => (
              <SponsorCard key={sponsor.name} sponsor={sponsor} featured />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-center text-xl font-semibold text-primary mb-8">
            Exhibition Stalls
          </h3>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-stretch gap-8">
            {exhibitionSponsors.map((sponsor) => (
              <SponsorCard key={sponsor.name} sponsor={sponsor} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
