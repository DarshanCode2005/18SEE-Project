export type Sponsor = {
  name: string;
  website: string;
  logo: string;
};

export const industrialSponsors: Sponsor[] = [
  {
    name: "Moog Motion Controls Private Limited",
    website: "https://www.moog.co.in/",
    logo: "/sponsors/moog-logo.svg",
  },
  {
    name: "Gauge Geotechniques",
    website: "https://www.gaugeindia.com/",
    logo: "/sponsors/gauge-logo.svg",
  },
  {
    name: "Pyrodynamics",
    website: "https://www.pyrodynamicsindia.com/",
    logo: "https://static.wixstatic.com/media/f21be3_bfa8788289c74aa89042814da87ae077~mv2.png/v1/fill/w_358,h_56,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/pd%20logo_PNG.png",
  },
  {
    name: "Spectris Technologies Pvt. Ltd. (HBK – Hottinger Brüel & Kjær)",
    website: "https://www.spectris.com/",
    logo: "https://www.spectris.com/favicon.svg",
  },
];

export const IndustrialSponsorsSection = () => {
  return (
    <section id="industrial-sponsors" className="py-16 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-serif">Industrial Sponsors</h2>
          <div className="mt-4 h-1.5 w-24 bg-secondary mx-auto rounded-full" />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {industrialSponsors.map((sponsor) => (
            <a
              key={sponsor.name}
              href={sponsor.website}
              target="_blank"
              rel="noreferrer"
              className="group flex h-40 w-56 items-center justify-center rounded-xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              aria-label={sponsor.name}
            >
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
