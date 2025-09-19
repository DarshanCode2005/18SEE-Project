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
    { number: "65+", label: "Years of Excellence" },
    { number: "600+", label: "Expected Participants" },
    { number: "400+", label: "Technical Papers" },
    { number: "25+", label: "Countries Represented" }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          {/* <Badge variant="outline" className="mb-4 bg-primary/10 text-xl border-primary/20">
            About the Symposium
          </Badge> */}
         {/* <section className="max-w-8xl mx-auto text-center py-10"> */}
<div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
  <Card className="border-0 shadow-card bg-gradient-card">
    <CardContent className="p-8">
      <div className="flex items-center space-x-3 mb-6">
        <Globe className="h-8 w-8 text-primary" />
        <h3 className="font-montserrat text-2xl font-semibold text-foreground">
          About 18SEE
        </h3>
      </div>
  <ul className="text-lg text-muted-foreground space-y-4 leading-relaxed list-disc list-outside pl-6 text-left">
        <li>
          <span className="font-semibold">Legacy of Excellence:</span> Continuing IIT Roorkee’s tradition of pioneering research in earthquake engineering since 1962.
        </li>
        <li>
          <span className="font-semibold">Global Gathering:</span> Bringing together leading researchers, practitioners, and policymakers from around the world.
        </li>
        <li>
          <span className="font-semibold">Knowledge Exchange:</span> Showcasing breakthroughs in seismic analysis, design methodologies, and disaster resilience.
        </li>
        <li>
          <span className="font-semibold">Future Focus:</span> Shaping the next generation of earthquake-resistant infrastructure and safer communities.
        </li>
        <li>
          <span className="font-semibold">Hosted by IIT Roorkee:</span> Asia’s oldest technical institution, known for its leadership in engineering and innovation.
        </li>
      </ul>
    </CardContent>
  </Card>
</div>


  
{/* </section> */}

        </div>

        {/* Main Content - Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          {/* Left Column */}
          <div className="flex flex-col gap-10">
            {/* Department of Earthquake Engineering */}
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
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
            {/* About IIT Roorkee */}
            <div className="animate-fade-in flex flex-col h-full" style={{ animationDelay: '0.3s' }}>
              <Card className="border-0 shadow-card bg-gradient-card flex flex-col h-full">
                <CardContent className="p-8 flex flex-col h-full">
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
          </div>
          {/* Right Column */}
          <div className="flex flex-col gap-10">
            {/* About ISET */}
            <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Card className="border-0 shadow-card bg-gradient-card">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <TrendingUp className="h-8 w-8 text-secondary" />
                    <h3 className="font-serif text-2xl font-semibold text-foreground">
                      About ISET
                    </h3>
                  </div>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      The Indian Society of Earthquake Technology (ISET) was founded in November 1962 with Late Prof. Jai Krishna as the founding President. ISET is a founding member of the International Association for Earthquake Engineering (IAEE), and its President represents the society as a National Delegate.
                    </p>
                    <p>
                      With 2250+ members and 14 local chapters (Roorkee, New Delhi, Mumbai, Kolkata, Chennai, Bengaluru, Jorhat, Nagpur, Pune, Amravati, Guwahati, Vellore, Guntur, Dhanbad, and Varanasi), Its reach is nationwide. It conducts annual lectures, workshops, short-term training courses, and organizes SEE every four years.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
            {/* Message from HOD */}
            <div className="animate-fade-in flex flex-col h-full" style={{ animationDelay: '0.5s' }}>
              <Card className="border-0 shadow-card bg-gradient-card border-l-4 border-l-primary flex flex-col h-full">
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="flex items-center space-x-3 mb-6">
                    <Award className="h-8 w-8 text-primary" />
                    <h3 className="font-serif text-2xl font-semibold text-foreground">
                      Message from Head of Department
                    </h3>
                  </div>
                  <div className="space-y-4">
                    <div className="text-4xl text-primary mb-4">"</div>
                    <p className="text-muted-foreground leading-relaxed text-lg italic">
                      Welcome to the 18th Symposium on Earthquake Engineering. Together, we drive innovation and resilience for a safer tomorrow. Let’s build lasting solutions and global partnerships that protect lives and communities.
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