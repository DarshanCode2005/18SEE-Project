import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SpeakerPortrait } from "@/components/ui/speaker-portrait";
import { speakers } from "@/data/keynote-speakers";

export const KeynoteSpeakersStrip = () => {
  const [paused, setPaused] = useState(false);
  const speakersUrl = `${import.meta.env.VITE_ROOT_URL || ""}/international-speakers`;

  return (
    <section aria-labelledby="keynote-strip-heading" className="mt-2 mb-8 rounded-2xl border border-white/20 bg-primary/70 py-5 text-primary-foreground">
      <div className="flex flex-wrap items-center justify-between gap-3 px-5 mb-5 text-left">
        <h2 id="keynote-strip-heading" className="font-serif text-xl sm:text-2xl font-bold">International Keynote Speakers</h2>
        <button
          type="button"
          onClick={() => setPaused(!paused)}
          aria-pressed={paused}
          aria-label={paused ? "Resume speaker scrolling" : "Pause speaker scrolling"}
          className="speaker-motion-toggle inline-flex items-center gap-2 rounded-lg border border-white/30 px-3 py-2 text-sm hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-secondary"
        >
          {paused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
          {paused ? "Resume" : "Pause"}
        </button>
      </div>
      <div className="speaker-marquee" data-paused={paused}>
        <div className="speaker-marquee-track">
          {[false, true].map((duplicate) => (
            <ul key={String(duplicate)} aria-hidden={duplicate || undefined} className={`speaker-marquee-group ${duplicate ? "speaker-marquee-copy" : ""}`}>
              {speakers.map((speaker) => (
                <li key={speaker.name} className="w-48 shrink-0 flex flex-col items-center text-center px-2">
                  <SpeakerPortrait speaker={{ ...speaker, name: duplicate ? "" : speaker.name }} className="w-24 h-28 mb-3" />
                  <p className="font-semibold text-sm leading-snug">{speaker.name}</p>
                  <p className="text-xs text-primary-foreground/80 mt-1 leading-relaxed">{speaker.affiliation}</p>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
      <div className="mt-5 px-5 text-center">
        <Button asChild className="bg-secondary text-secondary-foreground hover:bg-secondary-light">
          <Link to={speakersUrl}>View keynote talks & speakers <ArrowRight className="ml-2 h-4 w-4" /></Link>
        </Button>
      </div>
    </section>
  );
};
