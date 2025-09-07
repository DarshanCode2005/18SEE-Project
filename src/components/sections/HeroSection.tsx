import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Download } from "lucide-react";
import heroCampus from "@/assets/hero-campus.webp";
import ISETLogo from "@/assets/ISET_logo.png";
import IITRLogo from "@/assets/IITR_organiser_logo.png";

const milestones = [
  { label: "Abstract submission ends in", date: "2025-12-15T00:00:00" },
  { label: "Acceptance of abstracts", date: "2026-01-15T00:00:00" },
  { label: "Full-length manuscript submission", date: "2026-03-15T00:00:00" },
  { label: "Intimation of acceptance / Reviewer comments", date: "2026-04-30T00:00:00" },
  { label: "Submission of final revised manuscripts", date: "2026-05-15T00:00:00" },
  { label: "Symposium Start", date: "2026-12-10T09:00:00" },
];


export const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [currentMilestoneIdx, setCurrentMilestoneIdx] = useState<number>(() => {
    const now = new Date();
    return milestones.findIndex(m => new Date(m.date).getTime() > now.getTime());
  });

  useEffect(() => {
    const updateMilestoneAndCountdown = () => {
      const now = new Date();
      let idx = milestones.findIndex(m => new Date(m.date).getTime() > now.getTime());
      if (idx === -1) idx = milestones.length - 1; // If all milestones passed, stay at last
      setCurrentMilestoneIdx(idx);
      const targetDate = new Date(milestones[idx].date);
      const distance = targetDate.getTime() - now.getTime();
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
    updateMilestoneAndCountdown();
    const interval = setInterval(updateMilestoneAndCountdown, 1000);
    return () => clearInterval(interval);
  }, []);


  const headingText =
    currentMilestoneIdx >= 0 && currentMilestoneIdx < milestones.length
      ? milestones[currentMilestoneIdx].label
      : "Event Starts In";

  return <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${heroCampus})`
    }}>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50"></div>
      </div>

      {/* Content */}
  <div className="relative z-10 max-w-7xl mt-8 mx-auto px-4 sm:px-6 lg:px-8 text-center pt-[70px]">
        <div className="animate-fade-in mx-0 my-[80px]">
          <div className="flex items-center justify-center gap-4 mb-6">
            {/* ISET logo left */}
            <img src={ISETLogo} alt="International Society of Earthquake Technology" className="hidden sm:block h-[150px] w-auto object-contain" />
            <div>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl font-bold text-primary-foreground">
                18th Symposium on
                <span className="block bg-gradient-secondary bg-clip-text text-transparent">
                  Earthquake Engineering
                </span>
              </h1>
            </div>
            {/* IITR logo right */}
            <img src={IITRLogo} alt="Indian Institute of Technology Roorkee" className="hidden sm:block h-[150px] w-auto object-contain" />
          </div>
          
          <p className="text-xl sm:text-2xl text-primary-foreground/90 mb-4 font-bold">
            Department of Earthquake Engineering
          </p>
          <p className="text-xl sm:text-2xl text-primary-foreground/90 mb-8 font-bold">
            Indian Institute of Technology Roorkee
          </p>

          {/* Event Details */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-primary-foreground/90">
            <div className="flex items-center space-x-2 animate-fade-in" style={{
            animationDelay: '0.2s'
          }}>
              <Calendar className="h-5 w-5" />
              <span>December 10–12, 2026</span>
            </div>
            <div className="flex items-center space-x-2 animate-fade-in" style={{
            animationDelay: '0.4s'
          }}>
              <MapPin className="h-5 w-5" />
              <span>IIT Roorkee, Uttarakhand</span>
            </div>
            <div className="flex items-center space-x-2 animate-fade-in" style={{
            animationDelay: '0.6s'
          }}>
              <Users className="h-5 w-5" />
              <span>500+ Participants Expected</span>
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="bg-card/10 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-primary-foreground/20 max-w-2xl mx-auto animate-fade-in-scale" style={{
          animationDelay: '0.8s'
        }}>
            <h3 className="text-lg font-semibold text-primary-foreground mb-5">{headingText}</h3>
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
            {/* Show Last Date after countdown (current milestone's date) */}
            <p className="text-xs text-primary-foreground/70 mt-4">
              Last Date: {currentMilestoneIdx >= 0 && currentMilestoneIdx < milestones.length
                ? new Date(milestones[currentMilestoneIdx].date).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })
                : "-"}
            </p>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{
          animationDelay: '1s'
        }}>
            <Button size="lg" className="bg-secondary hover:bg-secondary-dark text-secondary-foreground shadow-glow" asChild>
              <a href="/registration-soon">Register Now</a>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground bg-slate-100 text-slate-700" asChild>
              <a href="/schedule.pdf" download>
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