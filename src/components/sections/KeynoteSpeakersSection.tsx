import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mic2, Award, Building2, GraduationCap, Calendar, Clock, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import headshotPlaceholder from "@/assets/headshot_placeholder.png";

interface KeynoteSpeaker {
  id: string;
  name: string;
  title: string;
  institution: string;
  image: string;
  bio: string;
  expertise: string[];
  eventDetails?: {
    date: string;
    time: string;
    venue: string;
    topic: string;
  };
}

const keynoteSpeakers: KeynoteSpeaker[] = [
  {
    id: '1',
    name: 'Prof. Dr. James Anderson',
    title: 'Distinguished Professor of Seismic Engineering',
    institution: 'Stanford University, USA',
    image: headshotPlaceholder,
    bio: 'Leading researcher in performance-based seismic design with over 30 years of experience in earthquake engineering and structural dynamics.',
    expertise: ['Performance-Based Design', 'Structural Dynamics', 'Seismic Risk Assessment'],
    eventDetails: {
      date: 'December 20, 2025',
      time: '10:00 AM - 11:30 AM',
      venue: 'Main Auditorium',
      topic: 'Advances in Performance-Based Seismic Design'
    }
  },
  {
    id: '2',
    name: 'Prof. Dr. Yuki Tanaka',
    title: 'Director, Earthquake Research Institute',
    institution: 'University of Tokyo, Japan',
    image: headshotPlaceholder,
    bio: 'Renowned expert in seismic instrumentation and early warning systems, with significant contributions to Japan\'s earthquake preparedness.',
    expertise: ['Seismic Instrumentation', 'Early Warning Systems', 'Ground Motion Prediction'],
    eventDetails: {
      date: 'December 21, 2025',
      time: '2:00 PM - 3:30 PM',
      venue: 'Conference Hall A',
      topic: 'Earthquake Early Warning Systems: Global Perspectives'
    }
  },
  {
    id: '3',
    name: 'Prof. Dr. Maria Rodriguez',
    title: 'Professor of Geotechnical Engineering',
    institution: 'University of California, Berkeley, USA',
    image: headshotPlaceholder,
    bio: 'Pioneering researcher in soil-structure interaction and liquefaction, with extensive work on seismic ground response analysis.',
    expertise: ['Soil-Structure Interaction', 'Liquefaction', 'Ground Response Analysis'],
    eventDetails: {
      date: 'December 22, 2025',
      time: '10:00 AM - 11:30 AM',
      venue: 'Main Auditorium',
      topic: 'Soil-Structure Interaction in Seismic Design'
    }
  },
  {
    id: '4',
    name: 'Prof. Dr. Ahmed Hassan',
    title: 'Head of Structural Engineering Department',
    institution: 'Cairo University, Egypt',
    image: headshotPlaceholder,
    bio: 'Expert in seismic retrofitting of historical structures and earthquake-resistant design of reinforced concrete buildings.',
    expertise: ['Seismic Retrofitting', 'Historical Structures', 'Reinforced Concrete Design'],
    eventDetails: {
      date: 'December 23, 2025',
      time: '2:00 PM - 3:30 PM',
      venue: 'Conference Hall B',
      topic: 'Preserving Heritage: Seismic Retrofitting of Historical Monuments'
    }
  },
  {
    id: '5',
    name: 'Prof. Dr. Sarah Chen',
    title: 'Professor of Civil Engineering',
    institution: 'Tsinghua University, China',
    image: headshotPlaceholder,
    bio: 'Leading authority on seismic safety of high-rise buildings and advanced structural control systems for earthquake mitigation.',
    expertise: ['High-Rise Buildings', 'Structural Control', 'Seismic Safety'],
    eventDetails: {
      date: 'December 24, 2025',
      time: '10:00 AM - 11:30 AM',
      venue: 'Main Auditorium',
      topic: 'Seismic Safety of Modern High-Rise Structures'
    }
  },
  {
    id: '6',
    name: 'Prof. Dr. Robert Williams',
    title: 'Emeritus Professor of Earthquake Engineering',
    institution: 'Imperial College London, UK',
    image: headshotPlaceholder,
    bio: 'Distinguished researcher with over 40 years of experience in seismic hazard assessment and earthquake engineering education.',
    expertise: ['Seismic Hazard Assessment', 'Engineering Education', 'Risk Management'],
    eventDetails: {
      date: 'December 25, 2025',
      time: '2:00 PM - 3:30 PM',
      venue: 'Conference Hall A',
      topic: 'Four Decades of Earthquake Engineering: Lessons and Future Directions'
    }
  }
];

const STORY_DURATION = 5000; // 5 seconds per speaker

export const KeynoteSpeakersSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const currentSpeaker = keynoteSpeakers[currentIndex];

  // Auto-advance stories
  useEffect(() => {
    if (isPaused || isHovered) return;

    // Progress bar animation
    progressIntervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 0;
        }
        return prev + (100 / (STORY_DURATION / 100));
      });
    }, 100);

    // Story advancement
    intervalRef.current = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % keynoteSpeakers.length);
      setProgress(0);
    }, STORY_DURATION);

    return () => {
      if (intervalRef.current) clearTimeout(intervalRef.current);
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    };
  }, [currentIndex, isPaused, isHovered]);

  // Reset progress when speaker changes
  useEffect(() => {
    setProgress(0);
  }, [currentIndex]);

  const goToStory = (index: number) => {
    setCurrentIndex(index);
    setProgress(0);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % keynoteSpeakers.length);
    setProgress(0);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + keynoteSpeakers.length) % keynoteSpeakers.length);
    setProgress(0);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsPaused(false);
  };

  return (
    <section id="keynote-speakers" className="py-20 bg-gradient-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 bg-primary/10 text-primary border-primary/20 text-2xl px-4 py-2">
            <Mic2 className="h-5 w-5 inline mr-2" />
            Keynote Speakers
          </Badge>
          <h2 className="text-4xl font-serif font-bold text-foreground mb-4">
            Distinguished Experts
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join us in welcoming world-renowned experts who will share their insights and groundbreaking research in earthquake engineering
          </p>
        </div>

        {/* Stories-Style Carousel */}
        <div className="max-w-2xl mx-auto">
          <Card
            className="relative overflow-hidden border border-border/50 shadow-elegant bg-gradient-card"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            key={currentIndex}
          >
            {/* Progress Bar Segments */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-muted z-10 flex gap-1 p-1">
              {keynoteSpeakers.map((_, index) => (
                <div
                  key={index}
                  className="flex-1 h-full bg-muted-foreground/20 rounded-full overflow-hidden"
                >
                  <div
                    className={`h-full transition-all duration-100 ${
                      index === currentIndex
                        ? 'bg-primary'
                        : index < currentIndex
                        ? 'bg-primary/60'
                        : 'bg-transparent'
                    }`}
                    style={{
                      width: index === currentIndex ? `${progress}%` : index < currentIndex ? '100%' : '0%',
                    }}
                  />
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-background/90 hover:bg-background rounded-full shadow-lg h-10 w-10"
              onClick={goToPrevious}
              aria-label="Previous speaker"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-background/90 hover:bg-background rounded-full shadow-lg h-10 w-10"
              onClick={goToNext}
              aria-label="Next speaker"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>

            <CardContent className="p-6 sm:p-8">
              {/* Small Photo at Top */}
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <img
                    src={currentSpeaker.image}
                    alt={currentSpeaker.name}
                    className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-primary"
                  />
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-full flex items-center justify-center shadow-lg">
                    <Award className="h-5 w-5 sm:h-6 sm:w-6 text-primary-foreground" />
                  </div>
                </div>
              </div>

              {/* Event Details - Always Visible */}
              {currentSpeaker.eventDetails && (
                <div className="mb-6 space-y-3">
                  <div className="flex items-center justify-center gap-2 text-foreground mb-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm sm:text-base">{currentSpeaker.eventDetails.venue}</span>
                  </div>
                  
                  <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                    <h4 className="font-semibold text-primary mb-2 text-sm sm:text-base">Keynote Topic</h4>
                    <p className="text-foreground text-sm sm:text-base">{currentSpeaker.eventDetails.topic}</p>
                  </div>
                </div>
              )}

              {/* Speaker Information */}
              <div className="text-center space-y-3">
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-foreground">
                  {currentSpeaker.name}
                </h3>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-center gap-2 text-foreground">
                    <GraduationCap className="h-4 w-4 sm:h-5 sm:w-5" />
                    <p className="text-sm sm:text-base font-medium">{currentSpeaker.title}</p>
                  </div>
                  
                  <div className="flex items-center justify-center gap-2 text-muted-foreground">
                    <Building2 className="h-4 w-4 sm:h-5 sm:w-5" />
                    <p className="text-xs sm:text-sm">{currentSpeaker.institution}</p>
                  </div>
                </div>

                {/* Hover Details */}
                <div
                  className={`transition-all duration-500 overflow-hidden ${
                    isHovered ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'
                  }`}
                >
                  {/* Event Details on Hover */}
                  {currentSpeaker.eventDetails && (
                    <div className="mb-4 space-y-2 pt-4 border-t border-border/50">
                      <div className="flex items-center justify-center gap-2 text-primary">
                        <Calendar className="h-4 w-4" />
                        <span className="font-semibold text-sm sm:text-base">{currentSpeaker.eventDetails.date}</span>
                      </div>
                      
                      <div className="flex items-center justify-center gap-2 text-foreground">
                        <Clock className="h-4 w-4" />
                        <span className="text-xs sm:text-sm">{currentSpeaker.eventDetails.time}</span>
                      </div>
                    </div>
                  )}

                  {/* Bio */}
                  <p className="text-muted-foreground leading-relaxed text-xs sm:text-sm text-justify mb-4">
                    {currentSpeaker.bio}
                  </p>

                  {/* Expertise Tags */}
                  <div className="flex flex-wrap gap-2 justify-center">
                    {currentSpeaker.expertise.map((topic, idx) => (
                      <Badge
                        key={idx}
                        variant="outline"
                        className="text-xs sm:text-sm bg-primary/10 text-primary border-primary/20 px-2 sm:px-3 py-1"
                      >
                        {topic}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Story Indicators (Clickable dots) */}
          <div className="flex justify-center gap-2 mt-6">
            {keynoteSpeakers.map((speaker, index) => (
              <button
                key={speaker.id}
                onClick={() => goToStory(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-primary scale-125 w-8'
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
                aria-label={`View ${speaker.name}`}
              />
            ))}
          </div>

          {/* Speaker Count */}
          <div className="text-center mt-4 text-muted-foreground">
            <span className="font-medium text-foreground">{currentIndex + 1}</span>
            <span className="mx-2">/</span>
            <span>{keynoteSpeakers.length}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
