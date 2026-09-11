import { useEffect, useRef, useState } from "react";
import { Navigation } from "@/components/ui/navigation";
import { FooterSection } from "@/components/sections/FooterSection";
import { SpeakerPortrait } from "@/components/ui/speaker-portrait";
import { speakers } from "@/data/keynote-speakers";

export const InternationalSpeakers = () => {
  const [navHidden, setNavHidden] = useState(false);
  const lastScroll = useRef(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setNavHidden(currentScroll > lastScroll.current && currentScroll > 80);
      lastScroll.current = currentScroll;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <div className={`fixed top-0 left-0 w-full z-50 transition-opacity duration-500 ${navHidden ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
        <Navigation />
      </div>
      <main className="max-w-6xl mx-auto px-4 sm:px-6 pt-44 md:pt-48 pb-20">
        <header className="text-center mb-12">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-3">18SEE 2026 · December 10–12</p>
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-primary">International Keynote Speakers</h1>
          <div className="h-1 w-20 bg-secondary mx-auto my-6 rounded-full" />
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Meet the researchers and practitioners joining us from around the world.
            Talk titles, abstracts and speaker biographies will be announced soon.
          </p>
        </header>
        <div className="divide-y divide-border">
          {speakers.map((speaker) => (
            <article key={speaker.name} className="grid md:grid-cols-[220px_minmax(0,1fr)] gap-8 md:gap-12 py-12">
              <div className="flex flex-col items-center md:items-start">
                <SpeakerPortrait speaker={speaker} className="w-44 h-52 md:w-48 md:h-56" />
              </div>
              <div className="min-w-0">
                <h2 className="text-2xl md:text-3xl font-bold text-primary">{speaker.name}</h2>
                <p className="font-medium mt-2">{speaker.title}</p>
                <p className="text-muted-foreground mt-1">{speaker.affiliation}</p>
                <div className="bg-muted/50 border-l-4 border-secondary p-5 mt-6">
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-primary">Keynote talk</h3>
                  <p className="text-lg font-semibold mt-2">{speaker.talkTitle || "Talk title to be announced"}</p>
                </div>
                <div className="mt-6 space-y-6 leading-relaxed">
                  <section>
                    <h3 className="font-semibold text-primary mb-2">Abstract</h3>
                    <p className="text-muted-foreground whitespace-pre-line">{speaker.abstract || "The talk abstract will be shared soon."}</p>
                  </section>
                  <section>
                    <h3 className="font-semibold text-primary mb-2">Speaker biography</h3>
                    <p className="text-muted-foreground whitespace-pre-line">{speaker.biography || "The speaker’s biography will be shared soon."}</p>
                  </section>
                </div>
              </div>
            </article>
          ))}
        </div>
        <p className="text-center text-muted-foreground mt-12">
          More international keynote speakers and the list of national keynote speakers will be announced soon.
        </p>
      </main>
      <FooterSection />
    </div>
  );
};

export default InternationalSpeakers;
