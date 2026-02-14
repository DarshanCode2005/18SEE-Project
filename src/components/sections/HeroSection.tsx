import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Download } from "lucide-react";
import heroCampus from "@/assets/hero-campus.webp";
import Image1 from "@/assets/ISET.svg";
import Image2 from "@/assets/IITR_organiser_logo.png";

const milestones = [
  { label: "Abstract submission ends on", date: "2026-01-15T00:00:00" },
  { label: "Confirmation of acceptance of abstracts", date: "2026-01-15T00:00:00" },
  { label: "Abstract submission closes on", date: "2026-02-15T23:59:59" },
  { label: "Symposium Starts on", date: "2026-12-10T09:00:00" },
];

export const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [nextEvent, setNextEvent] = useState<{ label: string; date: Date } | null>(null);

  useEffect(() => {
    const now = new Date();
    const upcoming = milestones
      .map(m => ({ label: m.label, date: new Date(m.date) }))
      .filter(m => m.date.getTime() > now.getTime())
      .sort((a, b) => a.date.getTime() - b.date.getTime())[0] || null;

    setNextEvent(upcoming);

    if (!upcoming) return;

    const targetDate = upcoming.date;
    const updateCountdown = () => {
      const current = new Date().getTime();
      const distance = targetDate.getTime() - current;
      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)),
          minutes: Math.floor(distance % (1000 * 60 * 60) / (1000 * 60)),
          seconds: Math.floor(distance % (1000 * 60) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const symposiumStart = milestones.find(m => m.label === "Symposium Start");
  const symposiumStartDate = symposiumStart ? new Date(symposiumStart.date) : null;
  const symposiumStartText = symposiumStartDate
    ? symposiumStartDate.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })
    : "Dec 10, 2026";

  const headingText = nextEvent
    ? (nextEvent.label === "Symposium Start" ? "Conference Starts In" : `${nextEvent.label}`)
    : "Event Starts In";

  return <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background Image */}
    <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${heroCampus})`
    }}>
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50"></div>
    </div>

    {/* Content */}
    <div className="relative z-10 max-w-7xl mt-20 mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="animate-fade-in mx-0 my-[80px]">
        <div className="flex items-center justify-center gap-6 mb-6">
          <div className="max-[889px]:hidden relative items-center justify-center flex" style={{ height: '8rem', width: '8rem' }}>
            <span className="absolute inset-0 rounded-full bg-white/80 shadow-lg" style={{ height: '100%', width: '100%' }}></span>
            <div className="absolute inset-0 flex items-center justify-center">
              <img src={Image1} alt="ISET Logo" className="h-30 w-auto sm:h-32 z-10" />
            </div>
          </div>
          <div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl font-bold text-primary-foreground">
              18th Symposium on
              <span className="block bg-gradient-secondary bg-clip-text text-transparent">
                Earthquake Engineering
              </span>
            </h1>
          </div>
          <img src={Image2} alt="IITR Logo" className="max-[889px]:hidden block h-28 w-auto sm:h-32" />
        </div>
        {/* Event Details */}
        <div className="flex flex-wrap justify-center gap-6 mb-8 text-primary-foreground/90">
          <div className="flex items-center space-x-2">
            <span className="font-bold text-xl sm:text-2xl lg:text-3xl text-secondary bg-clip-text tracking-wide">
              December 10–12, 2026
            </span>
          </div>
        </div>
        <p className="text-2xl sm:text-3xl text-primary-foreground/90 mb-4 font-bold">
          Department of Earthquake Engineering
        </p>

        <p className="text-2xl sm:text-3xl text-primary-foreground/80 mb-8 font-bold">
          Indian Institute of Technology Roorkee
        </p>

        {/* Countdown Timer */}
        <div className="bg-card/10 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-primary-foreground/20 max-w-2xl mx-auto">
          <h3 className="text-2xl font-semibold text-primary-foreground mb-1">{headingText}</h3>
          {nextEvent && (
            <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground mb-4 animate-blink mx-auto w-auto">
              {nextEvent.date.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}
            </p>
          )}
          <style>
            {`
                @keyframes blinkGlow {
                  0%, 100% {
                    opacity: 1;
                    filter: drop-shadow(0 0 6px rgba(255, 215, 0, 0.6));
                  }
                  50% {
                    opacity: 0.35;
                    filter: drop-shadow(0 0 14px rgba(255, 215, 0, 1));
                  }
                }

                @keyframes popPulse {
                  0%, 100% { transform: scale(1); }
                  50% { transform: scale(1.03); }
                }

                .animate-blink {
                  animation: blinkGlow 1.6s ease-in-out infinite, popPulse 3.2s ease-in-out infinite;
                }
              `}
          </style>
          <div className="grid grid-cols-4 gap-4">
            {Object.entries(timeLeft).map(([unit, value]) => <div key={unit} className="text-center">
              <div className="bg-primary-foreground/20 rounded-lg p-3 mb-2">
                <span className="text-2xl sm:text-3xl font-bold text-primary-foreground">
                  {value.toString().padStart(2, '0')}
                </span>
              </div>
              <span className="text-sm text-primary-foreground/80 capitalize">{unit}</span>
            </div>)}
          </div>
        </div>

        {/* Call to Action */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" className="bg-secondary hover:bg-secondary-dark text-secondary-foreground shadow-glow" asChild>
            <a href={`${import.meta.env.VITE_ROOT_URL || ''}/cmt-instructions`}>Submit Abstract</a>
          </Button>
          <Button size="lg" variant="outline" className="border-primary-foreground bg-slate-100 text-slate-700" asChild>
            <a href={`${import.meta.env.VITE_ROOT_URL || ''}${import.meta.env.VITE_ROOT_URL ? '/18SEE%20Brochure_V2.pdf' : '/18SEE%20Brochure_V2.pdf'}`} download>
              <Download className="h-4 w-4 mr-2" />
              Download Brochure
            </a>
          </Button>
        </div>
      </div>
    </div>

    {/* Floating Animation Elements */}
    <div className="absolute top-20 left-10 w-4 h-4 bg-secondary/30 rounded-full animate-float"></div>
    <div className="absolute bottom-32 right-16 w-6 h-6 bg-secondary/20 rounded-full animate-float" style={{
      animationDelay: '2s'
    }}></div>
    <div className="absolute top-1/2 left-20 w-3 h-3 bg-secondary/40 rounded-full animate-float" style={{
      animationDelay: '1s'
    }}></div>
  </section>;
};