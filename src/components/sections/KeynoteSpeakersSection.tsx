export type KeynoteSpeaker = {
  name: string;
  title: string;
  institution: string;
  image: string;
};

export const keynoteSpeakers: KeynoteSpeaker[] = [
  {
    name: "Dr. Kyriazis Pitilakis",
    title: "Professor Emeritus",
    institution: "Aristotle University of Thessaloniki, Greece",
    image: "/keynote-speakers/image4.png",
  },
  {
    name: "Dr. Nicos Makris",
    title: "Professor",
    institution: "Southern Methodist University (SMU), USA",
    image: "/keynote-speakers/image5.png",
  },
  {
    name: "Dr. Robert E. Kayen",
    title: "Professor",
    institution: "UC Berkeley, USA; Senior Scientist, U.S. Geological Survey (Retired)",
    image: "/keynote-speakers/image7.png",
  },
  {
    name: "Dr. Ikuo Towhata",
    title: "Professor Emeritus",
    institution: "University of Tokyo, Japan",
    image: "/keynote-speakers/image8.png",
  },
  {
    name: "Dr. Domniki Asimaki",
    title: "Professor",
    institution: "California Institute of Technology (Caltech), USA",
    image: "/keynote-speakers/image9.jpeg",
  },
  {
    name: "Dr. Dominic H. Lang",
    title: "Director, Natural Hazards",
    institution: "Norwegian Geotechnical Institute, Norway",
    image: "/keynote-speakers/image10.png",
  },
  {
    name: "Dr. Gopal Madabhushi",
    title: "Professor",
    institution: "University of Cambridge, UK",
    image: "/keynote-speakers/image11.png",
  },
  {
    name: "Dr. Ahmed Mebarki",
    title: "Professor",
    institution: "University Gustave Eiffel, Paris, France",
    image: "/keynote-speakers/image12.png",
  },
  {
    name: "Dr. Ashutosh Bagchi",
    title: "Professor",
    institution: "Concordia University, Canada",
    image: "/keynote-speakers/image13.png",
  },
  {
    name: "Dr. Ziggy Lubkowski",
    title: "Associate Director & Global Geo-Seismic Skills Leader",
    institution: "Arup, UK",
    image: "/keynote-speakers/image14.png",
  },
  {
    name: "Dr. Chun-Hsiang Kuo",
    title: "Associate Professor",
    institution: "National Central University, Taiwan",
    image: "/keynote-speakers/image15.png",
  },
  {
    name: "Dr. Sri Sritharan",
    title: "Professor",
    institution: "Iowa State University, USA",
    image: "/keynote-speakers/image16.png",
  },
  {
    name: "Dr. Ranjit Das",
    title: "Assistant Professor",
    institution: "Universidad Católica del Norte, Chile",
    image: "/keynote-speakers/image17.jpg",
  },
  {
    name: "Dr. Ali Saeidi",
    title: "Professor",
    institution: "Université du Québec à Chicoutimi (UQAC), Canada",
    image: "/keynote-speakers/image18.jpeg",
  },
  {
    name: "Dr. Adda Athanasopoulos-Zekkos",
    title: "Associate Professor",
    institution: "UC Berkeley, USA",
    image: "/keynote-speakers/image19.png",
  },
];

export const KeynoteSpeakersSection = ({ featuredLimit = keynoteSpeakers.length }: { featuredLimit?: number }) => {
  const speakers = keynoteSpeakers.slice(0, featuredLimit);

  return (
    <section id="keynote-speakers" className="py-20 bg-gradient-to-b from-white to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">18SEE 2025</p>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground font-serif">International Keynote Speakers</h2>
          <div className="mt-4 h-1.5 w-24 bg-secondary mx-auto rounded-full" />
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {speakers.map((speaker) => (
            <article key={speaker.name} className="group overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-transform duration-300 hover:-translate-y-1 hover:shadow-elegant">
              <div className="relative h-80 overflow-hidden bg-slate-200">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="space-y-3 p-6">
                <span className="inline-flex rounded-full border border-primary/20 bg-primary/5 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
                  Keynote Speaker
                </span>

                <div>
                  <h3 className="text-xl font-bold text-foreground font-serif">{speaker.name}</h3>
                  <p className="mt-2 text-sm font-semibold text-primary">{speaker.title}</p>
                </div>

                <p className="text-sm leading-6 text-muted-foreground">{speaker.institution}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center text-base text-muted-foreground">
          Several more international keynote speakers and the list of national keynote speakers will be announced soon.
        </div>
      </div>
    </section>
  );
};
