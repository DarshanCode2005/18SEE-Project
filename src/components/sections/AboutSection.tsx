import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Activity, 
  BookOpen, 
  Users, 
  Award, 
  Globe,
  TrendingUp
} from "lucide-react";

export const AboutSection = () => {
  const highlights = [
    {
      icon: <Activity className="h-6 w-6" />,
      title: "Cutting-edge Research",
      description: "Latest developments in seismic engineering and disaster resilience"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Global Network",
      description: "Connect with leading researchers and practitioners worldwide"
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Knowledge Exchange",
      description: "Technical sessions, workshops, and collaborative discussions"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Excellence",
      description: "Recognized platform for outstanding contributions in earthquake engineering"
    }
  ];

  const stats = [
    { number: "18", label: "Years of Excellence" },
    { number: "500+", label: "Expected Participants" },
    { number: "50+", label: "Technical Papers" },
    { number: "25+", label: "Countries Represented" }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 bg-primary/10 text-primary border-primary/20">
            About the Symposium
          </Badge>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Advancing Earthquake Engineering
            <span className="block text-primary">for a Safer Tomorrow</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            The 18th Symposium on Earthquake Engineering continues IIT Roorkee's legacy of pioneering 
            research and innovation in seismic engineering, bringing together global experts to shape 
            the future of earthquake-resistant infrastructure.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Card className="border-0 shadow-card bg-gradient-card">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <Globe className="h-8 w-8 text-primary" />
                  <h3 className="font-serif text-2xl font-semibold text-foreground">
                    Global Impact
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Since its inception, the Symposium on Earthquake Engineering has been at the forefront 
                  of seismic research, contributing to safer building practices and disaster preparedness 
                  strategies worldwide.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  IIT Roorkee's Department of Earthquake Engineering, established in the 1960s, has been 
                  instrumental in developing India's seismic codes and training generations of engineers 
                  who have made significant contributions to earthquake-resistant design globally.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card bg-gradient-card">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <TrendingUp className="h-8 w-8 text-secondary" />
                  <h3 className="font-serif text-2xl font-semibold text-foreground">
                    Innovation Focus
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  This year's symposium emphasizes emerging technologies, sustainable design practices, 
                  and multidisciplinary approaches to earthquake engineering, including AI-driven 
                  seismic monitoring, advanced materials, and smart structural systems.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Right Content - Highlights */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-8">
              Why Attend 18SEE?
            </h3>
            
            {highlights.map((highlight, index) => (
              <Card 
                key={index} 
                className="border-0 shadow-card bg-gradient-card hover:shadow-elegant transition-all duration-300 group"
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <div className="text-primary">
                        {highlight.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-2">
                        {highlight.title}
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Separator className="mb-12" />

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-gradient-primary bg-clip-text text-transparent">
                <span className="font-serif text-3xl sm:text-4xl font-bold">
                  {stat.number}
                </span>
              </div>
              <p className="text-muted-foreground font-medium mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};