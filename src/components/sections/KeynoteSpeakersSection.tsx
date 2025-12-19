import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mic2, Award, Building2, GraduationCap } from "lucide-react";
import headshotPlaceholder from "@/assets/headshot_placeholder.png";

interface KeynoteSpeaker {
  id: string;
  name: string;
  title: string;
  institution: string;
  image: string;
  bio: string;
  expertise: string[];
}

const keynoteSpeakers: KeynoteSpeaker[] = [
  {
    id: '1',
    name: 'Prof. Dr. James Anderson',
    title: 'Distinguished Professor of Seismic Engineering',
    institution: 'Stanford University, USA',
    image: headshotPlaceholder,
    bio: 'Leading researcher in performance-based seismic design with over 30 years of experience in earthquake engineering and structural dynamics.',
    expertise: ['Performance-Based Design', 'Structural Dynamics', 'Seismic Risk Assessment']
  },
  {
    id: '2',
    name: 'Prof. Dr. Yuki Tanaka',
    title: 'Director, Earthquake Research Institute',
    institution: 'University of Tokyo, Japan',
    image: headshotPlaceholder,
    bio: 'Renowned expert in seismic instrumentation and early warning systems, with significant contributions to Japan\'s earthquake preparedness.',
    expertise: ['Seismic Instrumentation', 'Early Warning Systems', 'Ground Motion Prediction']
  },
  {
    id: '3',
    name: 'Prof. Dr. Maria Rodriguez',
    title: 'Professor of Geotechnical Engineering',
    institution: 'University of California, Berkeley, USA',
    image: headshotPlaceholder,
    bio: 'Pioneering researcher in soil-structure interaction and liquefaction, with extensive work on seismic ground response analysis.',
    expertise: ['Soil-Structure Interaction', 'Liquefaction', 'Ground Response Analysis']
  },
  {
    id: '4',
    name: 'Prof. Dr. Ahmed Hassan',
    title: 'Head of Structural Engineering Department',
    institution: 'Cairo University, Egypt',
    image: headshotPlaceholder,
    bio: 'Expert in seismic retrofitting of historical structures and earthquake-resistant design of reinforced concrete buildings.',
    expertise: ['Seismic Retrofitting', 'Historical Structures', 'Reinforced Concrete Design']
  },
  {
    id: '5',
    name: 'Prof. Dr. Sarah Chen',
    title: 'Professor of Civil Engineering',
    institution: 'Tsinghua University, China',
    image: headshotPlaceholder,
    bio: 'Leading authority on seismic safety of high-rise buildings and advanced structural control systems for earthquake mitigation.',
    expertise: ['High-Rise Buildings', 'Structural Control', 'Seismic Safety']
  },
  {
    id: '6',
    name: 'Prof. Dr. Robert Williams',
    title: 'Emeritus Professor of Earthquake Engineering',
    institution: 'Imperial College London, UK',
    image: headshotPlaceholder,
    bio: 'Distinguished researcher with over 40 years of experience in seismic hazard assessment and earthquake engineering education.',
    expertise: ['Seismic Hazard Assessment', 'Engineering Education', 'Risk Management']
  }
];

export const KeynoteSpeakersSection = () => {
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

        {/* Speakers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {keynoteSpeakers.map((speaker, index) => (
            <Card
              key={speaker.id}
              className="group border border-border/50 hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-elegant animate-fade-in bg-gradient-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                {/* Speaker Image */}
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <img
                      src={speaker.image}
                      alt={speaker.name}
                      className="w-32 h-32 rounded-full object-cover border-4 border-primary/20 group-hover:border-primary/40 transition-all duration-300"
                    />
                    <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-lg">
                      <Award className="h-5 w-5 text-primary-foreground" />
                    </div>
                  </div>
                </div>

                {/* Speaker Info */}
                <div className="text-center space-y-3">
                  <h3 className="font-serif text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {speaker.name}
                  </h3>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-center gap-2 text-muted-foreground">
                      <GraduationCap className="h-4 w-4" />
                      <p className="text-sm font-medium">{speaker.title}</p>
                    </div>
                    
                    <div className="flex items-center justify-center gap-2 text-muted-foreground">
                      <Building2 className="h-4 w-4" />
                      <p className="text-sm">{speaker.institution}</p>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-sm text-muted-foreground leading-relaxed text-justify mt-4 line-clamp-4">
                    {speaker.bio}
                  </p>

                  {/* Expertise Tags */}
                  <div className="flex flex-wrap gap-2 justify-center mt-4 pt-4 border-t border-border/50">
                    {speaker.expertise.map((topic, idx) => (
                      <Badge
                        key={idx}
                        variant="secondary"
                        className="text-xs bg-secondary/10 text-secondary border-secondary/20"
                      >
                        {topic}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info Card */}
        <div className="mt-16 animate-fade-in" style={{ animationDelay: '0.7s' }}>
          <Card className="bg-gradient-primary border-0 text-primary-foreground max-w-4xl mx-auto shadow-glow">
            <CardContent className="p-8 sm:p-12 text-center">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-4">
                More Speakers Coming Soon
              </h3>
              <p className="text-primary-foreground/90 text-lg leading-relaxed">
                We are honored to host these distinguished keynote speakers and are continuously adding more experts to our lineup. 
                Stay tuned for updates on additional speakers and their presentation topics.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

