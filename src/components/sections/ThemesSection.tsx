import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Waves, 
  Building, 
  Activity, 
  Shield, 
  Mountain,
  Radar,
  ChevronDown,
  ChevronUp,
  Zap,
  Map,
  Gauge,
  Target,
  Settings,
  TrendingUp,
  Layers,
  Wrench,
  FileText,
  BarChart3,
  Play,
  Search,
  Hammer,
  Factory,
  Construction,
  Landmark,
  Ship,
  AlertTriangle,
  Globe,
  School,
  Users,
  Stethoscope,
  BookOpen,
  Megaphone,
  Clock
} from "lucide-react";

export const ThemesSection = () => {
  const [showAll, setShowAll] = useState(false);
  
  const themes = [
    { icon: <Waves className="h-5 w-5" />, title: "Engineering Seismology and Seismotectonics" },
    { icon: <Activity className="h-5 w-5" />, title: "Experience Derived from Recent Earthquakes and Tsunamis" },
    { icon: <Map className="h-5 w-5" />, title: "Earthquake studies using GIS/GPS/SAR/Remote Sensing" },
    { icon: <Target className="h-5 w-5" />, title: "Earthquake Hazard Assessment" },
    { icon: <Gauge className="h-5 w-5" />, title: "Seismic Instrumentation" },
    { icon: <TrendingUp className="h-5 w-5" />, title: "Strong Ground Motion, Site Characterization and its Effects" },
    { icon: <Layers className="h-5 w-5" />, title: "Dynamic Properties of Soils and Ground Response" },
    { icon: <Zap className="h-5 w-5" />, title: "Liquefaction and Seismic Ground Improvement" },
    { icon: <Mountain className="h-5 w-5" />, title: "Seismic Safety of Foundations and Machine Foundations" },
    { icon: <Settings className="h-5 w-5" />, title: "Seismic Soil Structure Interaction" },
    { icon: <Shield className="h-5 w-5" />, title: "Slope Stability under Seismic Conditions and Design of Embankments" },
    { icon: <Wrench className="h-5 w-5" />, title: "Earth Pressure and Retaining Walls under Seismic Conditions" },
    { icon: <Radar className="h-5 w-5" />, title: "Seismic Safety of underground and Buried Structures and Pipelines" },
    { icon: <Building className="h-5 w-5" />, title: "Special Materials, Structures and Systems" },
    { icon: <FileText className="h-5 w-5" />, title: "Earthquake Response Analysis, Design and Construction" },
    { icon: <BookOpen className="h-5 w-5" />, title: "Codal Provisions on Earthquake Resistant Design" },
    { icon: <BarChart3 className="h-5 w-5" />, title: "Seismic Vulnerability, Risk and Resilience Assessment" },
    { icon: <Play className="h-5 w-5" />, title: "Structural Response Control" },
    { icon: <Search className="h-5 w-5" />, title: "Seismic Testing of Structures and Equipment" },
    { icon: <Hammer className="h-5 w-5" />, title: "Seismic Evaluation and Retrofitting of Structures" },
    { icon: <Settings className="h-5 w-5" />, title: "Seismic Safety of non-structural Components, Equipment and Services in Buildings" },
    { icon: <Factory className="h-5 w-5" />, title: "Seismic Safety of Industrial Structures and Thermal and Nuclear Power Stations" },
    { icon: <Construction className="h-5 w-5" />, title: "Seismic Safety of Bridges and Dams" },
    { icon: <Landmark className="h-5 w-5" />, title: "Seismic Safety of Historical structures and Monuments" },
    { icon: <Ship className="h-5 w-5" />, title: "Seismic Safety of Offshore and Onshore Structures, including Effects of Tsunami" },
    { icon: <AlertTriangle className="h-5 w-5" />, title: "Damage Detection and System Identification" },
    { icon: <Globe className="h-5 w-5" />, title: "Life Line and Urban Systems" },
    { icon: <Map className="h-5 w-5" />, title: "Microzonation and Urban Planning" },
    { icon: <Shield className="h-5 w-5" />, title: "Earthquake Disaster Mitigation and Management" },
    { icon: <Users className="h-5 w-5" />, title: "Human Response and Socio-Economic issues" },
    { icon: <Stethoscope className="h-5 w-5" />, title: "Post-earthquake Rehabilitation" },
    { icon: <School className="h-5 w-5" />, title: "Earthquake Engineering Education" },
    { icon: <Megaphone className="h-5 w-5" />, title: "Public Awareness, Participation and Enforcement of Building Safety Laws" },
    { icon: <Clock className="h-5 w-5" />, title: "Earthquake Prediction and Early warning System" }
  ];

  const initialCount = 6;
  const displayedThemes = showAll ? themes : themes.slice(0, initialCount);

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
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {displayedThemes.map((theme, index) => (
            <Card 
              key={index}
              className="group border border-border/50 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 text-primary p-2 rounded-lg flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                    {theme.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-sm text-foreground leading-tight group-hover:text-primary transition-colors duration-300">
                      {index + 1}. {theme.title}
                    </h3>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Show More/Less Button */}
        <div className="text-center mt-12">
          <Button
            onClick={() => setShowAll(!showAll)}
            variant="outline"
            size="lg"
            className="group px-8 py-3 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            <span className="mr-2">
              {showAll ? 'Show Less' : 'Show More'}
            </span>
            {showAll ? (
              <ChevronUp className="h-4 w-4 group-hover:-translate-y-0.5 transition-transform duration-300" />
            ) : (
              <ChevronDown className="h-4 w-4 group-hover:translate-y-0.5 transition-transform duration-300" />
            )}
          </Button>
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