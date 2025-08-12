import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Waves, 
  Building, 
  Activity, 
  Shield, 
  Mountain,
  Radar,
  ArrowRight 
} from "lucide-react";

export const ThemesSection = () => {
  const themes = [
    {
      icon: <Waves className="h-8 w-8" />,
      title: "Seismic Hazard Assessment",
      description: "Advanced methodologies for evaluating earthquake risks, probabilistic seismic hazard analysis, and ground motion prediction.",
      color: "text-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-950/30"
    },
    {
      icon: <Building className="h-8 w-8" />,
      title: "Earthquake Resistant Design & Retrofitting",
      description: "Innovative design approaches, structural retrofitting techniques, and performance-based seismic design methodologies.",
      color: "text-emerald-600",
      bgColor: "bg-emerald-50 dark:bg-emerald-950/30"
    },
    {
      icon: <Activity className="h-8 w-8" />,
      title: "Structural Dynamics",
      description: "Dynamic analysis of structures, vibration control systems, and advanced computational methods in structural engineering.",
      color: "text-purple-600",
      bgColor: "bg-purple-50 dark:bg-purple-950/30"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Disaster Risk Management",
      description: "Comprehensive risk assessment, emergency response planning, and community resilience building strategies.",
      color: "text-red-600",
      bgColor: "bg-red-50 dark:bg-red-950/30"
    },
    {
      icon: <Mountain className="h-8 w-8" />,
      title: "Geotechnical Earthquake Engineering",
      description: "Soil-structure interaction, liquefaction analysis, and foundation design for seismic conditions.",
      color: "text-amber-600",
      bgColor: "bg-amber-50 dark:bg-amber-950/30"
    },
    {
      icon: <Radar className="h-8 w-8" />,
      title: "Emerging Technologies in Seismic Monitoring",
      description: "AI-driven monitoring systems, IoT sensors, machine learning for earthquake prediction, and smart infrastructure.",
      color: "text-indigo-600",
      bgColor: "bg-indigo-50 dark:bg-indigo-950/30"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 bg-secondary/10 text-secondary border-secondary/20">
            Conference Themes
          </Badge>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Exploring the Future of
            <span className="block text-primary">Earthquake Engineering</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Dive deep into cutting-edge research areas that are shaping the next generation 
            of seismic engineering solutions and earthquake-resistant infrastructure.
          </p>
        </div>

        {/* Themes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {themes.map((theme, index) => (
            <Card 
              key={index}
              className="group border-0 shadow-card hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 bg-gradient-card cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className={`${theme.bgColor} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className={theme.color}>
                    {theme.icon}
                  </div>
                </div>
                
                <h3 className="font-serif text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {theme.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {theme.description}
                </p>

                <div className="flex items-center text-primary group-hover:translate-x-2 transition-transform duration-300">
                  <span className="text-sm font-medium mr-2">Learn More</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <Card className="bg-gradient-primary border-0 text-primary-foreground max-w-4xl mx-auto shadow-glow">
            <CardContent className="p-8 sm:p-12">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-4">
                Present Your Research
              </h3>
              <p className="text-primary-foreground/90 text-lg mb-6 leading-relaxed">
                We invite researchers, practitioners, and students to share their innovative work 
                across these themes. Submit your abstracts and contribute to advancing earthquake engineering.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-primary-foreground text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary-foreground/90 transition-colors">
                  Submit Abstract
                </button>
                <button className="border-2 border-primary-foreground text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary-foreground/10 transition-colors">
                  View Guidelines
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};