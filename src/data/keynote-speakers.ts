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

export type KeynoteSpeaker = {
  name: string;
  title: string;
  affiliation: string;
  image: string;
  talkTitle?: string;
  abstract?: string;
  biography?: string;
};

export const speakers: KeynoteSpeaker[] = [
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
