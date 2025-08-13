import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Quote, Play, Pause } from "lucide-react";
import headshotPlaceholder from "@/assets/headshot_placeholder.png";

interface Testimonial {
  id: string;
  name: string;
  designation: string;
  institution: string;
  image: string;
  quote: string;
  year?: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Dr. Rajesh Kumar',
    designation: 'Professor',
    institution: 'IIT Delhi',
    image: headshotPlaceholder,
    quote: 'The 17th SEE was an extraordinary platform for knowledge exchange. The quality of research presentations and networking opportunities were exceptional.',
    year: '2023'
  },
  {
    id: '2',
    name: 'Prof. Sarah Williams',
    designation: 'Director, Earthquake Research Center',
    institution: 'Stanford University',
    image: headshotPlaceholder,
    quote: 'IIT Roorkee consistently hosts one of the finest earthquake engineering symposiums globally. The 18th edition promises to be even more impactful.',
    year: '2023'
  },
  {
    id: '3',
    name: 'Dr. Hiroshi Tanaka',
    designation: 'Senior Researcher',
    institution: 'University of Tokyo',
    image: headshotPlaceholder,
    quote: 'The symposium provides invaluable insights into cutting-edge seismic research. The collaboration opportunities are unmatched.',
    year: '2021'
  },
  {
    id: '4',
    name: 'Dr. Maria Rodriguez',
    designation: 'Principal Engineer',
    institution: 'Seismic Solutions International',
    image: headshotPlaceholder,
    quote: 'As a practicing engineer, this symposium bridges the gap between academic research and real-world applications beautifully.',
    year: '2023'
  },
  {
    id: '5',
    name: 'Prof. Anil Chopra',
    designation: 'Emeritus Professor',
    institution: 'UC Berkeley',
    image: headshotPlaceholder,
    quote: 'The symposium at IIT Roorkee has been instrumental in advancing earthquake engineering research for decades. A must-attend event.',
    year: '2021'
  }
];

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-4">
            What Participants Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from distinguished researchers, academics, and professionals who have participated in our symposiums
          </p>
        </div>

        <div className="relative">
          {/* Main Testimonial Card */}
          <Card className="max-w-4xl mx-auto shadow-elegant">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Profile Image */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-primary/20"
                    />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <Quote className="h-4 w-4 text-primary-foreground" />
                    </div>
                  </div>
                </div>

                {/* Testimonial Content */}
                <div className="flex-1 text-center md:text-left">
                  <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
                    "{testimonials[currentIndex].quote}"
                  </blockquote>
                  
                  <div className="space-y-1">
                    <h3 className="font-semibold text-lg text-primary">
                      {testimonials[currentIndex].name}
                    </h3>
                    <p className="text-muted-foreground">
                      {testimonials[currentIndex].designation}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonials[currentIndex].institution}
                    </p>
                    {testimonials[currentIndex].year && (
                      <p className="text-xs text-muted-foreground">
                        Participant - {testimonials[currentIndex].year}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center mt-8 gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-primary scale-125'
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>

            {/* Auto-play toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleAutoPlay}
              className="ml-4"
              title={isAutoPlaying ? "Pause auto-play" : "Resume auto-play"}
            >
              {isAutoPlaying ? (
                <Pause className="h-4 w-4" />
              ) : (
                <Play className="h-4 w-4" />
              )}
            </Button>
          </div>

          {/* Progress Bar */}
          {isAutoPlaying && (
            <div className="mt-4 max-w-xs mx-auto">
              <div className="h-1 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-primary animate-testimonial-progress" />
              </div>
            </div>
          )}
        </div>

        {/* All Testimonials Preview (Hidden on mobile) */}
        <div className="hidden lg:grid lg:grid-cols-5 gap-4 mt-16">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              onClick={() => goToTestimonial(index)}
              className={`group p-4 rounded-lg transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-background hover:bg-muted'
              }`}
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full mx-auto mb-2 object-cover"
              />
              <h4 className="font-medium text-sm mb-1">{testimonial.name}</h4>
              <p className="text-xs opacity-75">{testimonial.institution}</p>
            </button>
          ))}
        </div>
      </div>

    </section>
  );
};