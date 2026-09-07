import { useEffect, useRef, useState } from "react";
import { Navigation } from "@/components/ui/navigation";
import { FooterSection } from "@/components/sections/FooterSection";

import pitilakis from "@/assets/keynote_speakers/pitilakis.png";
import makris from "@/assets/keynote_speakers/makris.png";
import kayen from "@/assets/keynote_speakers/kayen.png";
import towhata from "@/assets/keynote_speakers/towhata.png";
import asimaki from "@/assets/keynote_speakers/asimaki.jpeg";
import lang from "@/assets/keynote_speakers/lang.png";
import madabhushi from "@/assets/keynote_speakers/madabhushi.png";
import mebarki from "@/assets/keynote_speakers/mebarki.png";
import bagchi from "@/assets/keynote_speakers/bagchi.png";
import lubkowski from "@/assets/keynote_speakers/lubkowski.png";
import kuo from "@/assets/keynote_speakers/kuo.png";
import sritharan from "@/assets/keynote_speakers/sritharan.png";
import das from "@/assets/keynote_speakers/das.jpg";
import saeidi from "@/assets/keynote_speakers/saeidi.jpeg";
import athanasopoulosZekkos from "@/assets/keynote_speakers/athanasopoulos-zekkos.png";

const speakers = [
  {
    name: "Dr. Kyriazis Pitilakis",
    title: "Professor Emeritus",
    affiliation: "Aristotle University of Thessaloniki, Greece",
    image: pitilakis,
  },
  {
    name: "Dr. Nicos Makris",
    title: "Professor",
    affiliation: "Southern Methodist University (SMU), USA",
    image: makris,
  },
  {
    name: "Dr. Robert E. Kayen",
    title: "Professor, UC Berkeley, USA",
    affiliation: "Senior Scientist, U. S. Geological Survey (Retired)",
    image: kayen,
  },
  {
    name: "Dr. Ikuo Towhata",
    title: "Professor Emeritus",
    affiliation: "University of Tokyo, Japan",
    image: towhata,
  },
  {
    name: "Dr. Domniki Asimaki",
    title: "Professor",
    affiliation: "California Institute of Technology (Caltech), USA",
    image: asimaki,
  },
  {
    name: "Dr. Dominic H. Lang",
    title: "Director Natural Hazards",
    affiliation: "Norwegian Geotechnical Institute, Norway",
    image: lang,
  },
  {
    name: "Dr. Gopal Madabhushi",
    title: "Professor",
    affiliation: "University of Cambridge, UK",
    image: madabhushi,
  },
  {
    name: "Dr. Ahmed Mebarki",
    title: "Professor",
    affiliation: "University Gustave Eiffel, Paris, France",
    image: mebarki,
  },
  {
    name: "Dr. Ashutosh Bagchi",
    title: "Professor",
    affiliation: "Concordia University, Canada",
    image: bagchi,
  },
  {
    name: "Dr. Ziggy Lubkowski",
    title: "Associate Director & Global Geo-Seismic Skills Leader",
    affiliation: "Arup, UK",
    image: lubkowski,
  },
  {
    name: "Dr. Chun-Hsiang Kuo",
    title: "Associate Professor",
    affiliation: "National Central University, Taiwan",
    image: kuo,
  },
  {
    name: "Dr. Sri Sritharan",
    title: "Professor",
    affiliation: "Iowa State University, USA",
    image: sritharan,
  },
  {
    name: "Dr. Ranjit Das",
    title: "Assistant Professor",
    affiliation: "Universidad Católica del Norte, Chile",
    image: das,
  },
  {
    name: "Dr. Ali Saeidi",
    title: "Professor",
    affiliation: "Université du Québec à Chicoutimi (UQAC), Canada",
    image: saeidi,
  },
  {
    name: "Dr. Adda Athanasopoulos-Zekkos",
    title: "Associate Professor",
    affiliation: "UC Berkeley, USA",
    image: athanasopoulosZekkos,
  },
];

export const InternationalSpeakers = () => {
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

      <div className="max-w-6xl mx-auto px-4 pt-36 md:pt-40 pb-16 mt-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-primary mb-4">
          International Keynote Speakers
        </h1>
        <p className="text-center text-muted-foreground text-base md:text-lg max-w-3xl mx-auto mb-14">
          Distinguished researchers and practitioners from around the world will share their insights
          at the 18th Symposium on Earthquake Engineering.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14">
          {speakers.map((speaker) => (
            <div key={speaker.name} className="flex flex-col items-center text-center">
              <img
                src={speaker.image}
                alt={speaker.name}
                className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover object-top border-4 border-secondary shadow mb-3"
              />
              <div className="text-base font-semibold text-secondary mb-1">{speaker.title}</div>
              <div className="text-lg font-bold text-foreground">{speaker.name}</div>
              <div className="text-muted-foreground mt-1 leading-relaxed">{speaker.affiliation}</div>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground text-base md:text-lg mt-16 max-w-3xl mx-auto leading-relaxed">
          Several more international keynote speakers and the list of national keynote speakers
          will be announced soon.
        </p>
      </div>

      <FooterSection />
    </div>
  );
};

export default InternationalSpeakers;
