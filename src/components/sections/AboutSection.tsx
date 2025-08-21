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
        <div className="space-y-16 mb-16">
          
          {/* About IIT Roorkee */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Card className="border-0 shadow-card bg-gradient-card">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <BookOpen className="h-8 w-8 text-primary" />
                  <h3 className="font-serif text-2xl font-semibold text-foreground">
                    About IIT Roorkee
                  </h3>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    The Indian Institute of Technology Roorkee, established in 1847, stands as one of India's 
                    oldest and most prestigious technical institutions. Originally founded as the Roorkee College, 
                    it has evolved into a world-class center of excellence in engineering, technology, and research.
                  </p>
                  <p>
                    Located in the foothills of the Himalayas in Uttarakhand, IIT Roorkee has been a pioneer 
                    in civil engineering education and research for over 175 years. The institute has contributed 
                    significantly to India's infrastructure development and continues to lead in cutting-edge 
                    research across multiple disciplines.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* About Department */}
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Card className="border-0 shadow-card bg-gradient-card">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <Activity className="h-8 w-8 text-secondary" />
                  <h3 className="font-serif text-2xl font-semibold text-foreground">
                    Department of Earthquake Engineering
                  </h3>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Established in 1960, the Department of Earthquake Engineering at IIT Roorkee was the 
                    first of its kind in India and among the earliest in the world. The department has been 
                    instrumental in developing India's seismic design codes and guidelines.
                  </p>
                  <p>
                    With state-of-the-art laboratories including the National Seismic Test Facility, shake tables, 
                    and advanced instrumentation, the department conducts cutting-edge research in seismic hazard 
                    assessment, structural dynamics, geotechnical earthquake engineering, and disaster risk management.
                  </p>
                  <p>
                    Our faculty and researchers have contributed to major projects worldwide, from earthquake-resistant 
                    design of critical infrastructure to post-earthquake damage assessment and rehabilitation strategies.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Message from HOD */}
          <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Card className="border-0 shadow-card bg-gradient-card border-l-4 border-l-primary">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <Award className="h-8 w-8 text-primary" />
                  <h3 className="font-serif text-2xl font-semibold text-foreground">
                    Message from Head of Department
                  </h3>
                </div>
                <div className="space-y-4">
                  <div className="text-4xl text-primary mb-4">"</div>
                  <p className="text-muted-foreground leading-relaxed text-lg italic">
                    It is with great pleasure that we welcome you to the 18th Symposium on Earthquake Engineering. 
                    This symposium represents our continued commitment to advancing the field of earthquake engineering 
                    and fostering collaboration among researchers, practitioners, and students from around the world.
                  </p>
                  <p className="text-muted-foreground leading-relaxed text-lg italic">
                    As we face increasing challenges from seismic hazards and climate change, the need for innovative 
                    solutions in earthquake-resistant design has never been more critical. This symposium provides 
                    a platform to share cutting-edge research, discuss emerging technologies, and build partnerships 
                    that will shape the future of our discipline.
                  </p>
                  <div className="mt-6 pt-4 border-t border-border">
                    <p className="font-semibold text-foreground">Prof. B.K. Maheshwari</p>
                    <p className="text-sm text-muted-foreground">Head, Department of Earthquake Engineering</p>
                    <p className="text-sm text-muted-foreground">Indian Institute of Technology Roorkee</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Existing Highlights Section */}
          <div className="grid lg:grid-cols-1 gap-12">
            <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.8s' }}>
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
                    Our symposium has facilitated knowledge transfer and collaboration that has directly 
                    influenced seismic design practices in earthquake-prone regions across the globe.
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