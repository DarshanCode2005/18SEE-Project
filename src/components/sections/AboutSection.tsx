import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Activity,
  BookOpen,
  Users,
  Award,
  Globe,
  TrendingUp,
  ExternalLink,
  Waves,
  Building,
  Earth
} from "lucide-react";
import iitrlogo from "@/assets/iitr_logo_about.png";

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
    <section id="about" className="pt-20 pb-12 bg-gradient-card">
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
                  <img src={iitrlogo} alt="IITR Logo" className="h-16 w-21" style={{ marginLeft: '-1rem' }} />
                  <h3 className="font-montserrat text-2xl font-semibold text-foreground" style={{ marginLeft: '0rem' }}>
                    About 18SEE
                  </h3>
                </div>
                <ul className="text-lg text-muted-foreground space-y-4 leading-relaxed list-disc list-outside pl-6 text-left ml-4">
                  <li>
                    <span className="font-semibold">Legacy of Excellence:</span> Continuing IIT Roorkee’s tradition of pioneering research in earthquake engineering since 1960s.
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
                </ul>
              </CardContent>
            </Card>
          </div>



          {/* </section> */}

        </div>

        {/* Main Content - Responsive Grid with Vertical Separator and Equal Height Columns */}
        <div className="grid grid-cols-1 md:[grid-template-columns:1fr_auto_1fr] gap-10 md:gap-12 items-stretch mb-12">
          {/* Left Column */}
          <div className="flex flex-col gap-10 md:gap-12 h-full">
            {/* Department of Earthquake Engineering */}
            <div className="animate-fade-in flex-1 flex flex-col" style={{ animationDelay: '0.2s' }}>
              <Card className="border-0 shadow-card bg-gradient-card h-full flex flex-col">
                <CardContent className="p-8 flex-1 flex flex-col">
                  <div className="flex items-center space-x-3 mb-6">
                    <Activity className="h-8 w-8 text-secondary" />
                    <h3 className="font-serif text-2xl  font-semibold text-foreground">
                      <a
                        href="https://iitr.ac.in/Departments/Earthquake%20Department/Home.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline flex items-center gap-2"
                      >
                        Department of Earthquake Engineering , IIT Roorkee
                        <ExternalLink className="h-5 w-5 inline text-muted-foreground" />
                      </a>
                    </h3>
                  </div>
                  <div className="space-y-4 text-muted-foreground leading-relaxed text-justify flex-1">
                  <p className="line-height-2">Established in 1960 (as the School for Research and Training in Earthquake Engineering at the erstwhile University of Roorkee), the Department of Earthquake Engineering at IIT Roorkee was among the earliest departments of its kind worldwide and the very first in India.</p>

                  <p className="line-height-2">Equipped with state-of-the-art facilities such as the shake table laboratory, pseudo-dynamic testing laboratory, soil dynamics laboratory, foundation testing laboratory, and seismological observatory, the department spearheads advanced research in structural dynamics, geotechnical earthquake engineering, seismic hazard assessment, and seismic instrumentation.</p>

                  <p className="line-height-2">It has also played a pioneering role in developing India's seismic design codes and guidelines. In addition, through its rigorous postgraduate programmes (M. Tech. and Ph.D.), the department nurtures and empowers the next generation of earthquake engineers, researchers, and educators.</p>

                  <p className="line-height-2">The Indian Institute of Technology Roorkee, one of India's oldest and most esteemed technical institutions, serves as the proud home to this distinguished department. Established in 1847 as Thomason College of Civil Engineering, IIT Roorkee has grown into a globally recognized hub for excellence in engineering, science, technology, and research.</p>  

                  </div>
                </CardContent>
              </Card>
            </div>
            {/* About IIT Roorkee */}
            {/* <div className="animate-fade-in flex flex-col h-full" style={{ animationDelay: '0.3s' }}>
              <Card className="border-0 shadow-card bg-gradient-card flex flex-col h-full">
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="flex items-center space-x-3 mb-6">
                    <BookOpen className="h-8 w-8 text-primary" />
                    <h3 className="font-serif text-2xl font-semibold text-foreground">
                      <a
                        href="https://www.iitr.ac.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline flex items-center gap-2"
                      >
                        About IIT Roorkee
                        <ExternalLink className="h-5 w-5 inline text-muted-foreground" />
                      </a>
                    </h3>
                  </div> */}
            {/* <div className="space-y-4 text-muted-foreground leading-relaxed">
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
                  </div> */}
            {/* </CardContent>
              </Card>
            </div> */}
          </div>

          {/* Vertical Separator (visible on md and up) */}
          <div className="hidden md:block">
            <Separator orientation="vertical" className="h-full w-px bg-border" />
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6 md:gap-8 h-full">
            {/* About ISET */}
            <div className="animate-fade-in flex-1 flex flex-col" style={{ animationDelay: '0.4s' }}>
              <Card className="border-0 shadow-card bg-gradient-card h-full">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <Earth className="h-8 w-8 text-secondary" />
                    <h3 className="font-serif text-2xl font-semibold text-foreground">
                      <a
                        href="https://iset.org.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline flex items-center gap-2"
                      >
                        About ISET
                        <ExternalLink className="h-4 w-4 inline text-muted-foreground" />
                      </a>
                    </h3>
                  </div>
                  <div className="space-y-4 text-muted-foreground leading-relaxed text-justify">
                  <p>The Indian Society of Earthquake Technology (ISET) was established in November 1962 with Late Prof. Jai Krishna as its founding President. ISET is a founding member of the International Association for Earthquake Engineering (IAEE). With over 2,300 members and 14 local chapters across India, the society organizes annual lectures, workshops and short-term training courses on earthquake technology, and co-hosts the Symposium on Earthquake Engineering (SEE) every four years. Additionally, ISET publishes the quarterly ISET Journal of Earthquake Technology, which features research across a wide range of earthquake engineering topics.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            {/* Message from HOD */}
            <div className="animate-fade-in flex flex-col h-full mt-auto" style={{ animationDelay: '0.5s' ,marginTop:'-1rem'}}>
              <Card className="border-0 shadow-card bg-gradient-card flex flex-col h-full">
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="flex items-center space-x-3 mb-6">
                    <Award className="h-8 w-8 text-primary" />
                    <h3 className="font-serif text-2xl font-semibold text-foreground">
                      Message from Conference Chair
                    </h3>
                  </div>
                  <div className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed italic text-justify">
                    "It gives me immense pleasure to invite you to join us at the 18th Symposium on Earthquake Engineering. This symposium represents our continued commitment to advancing the field of earthquake engineering and fostering collaboration among researchers, practitioners, and students from around the world. Let us drive scientific innovation and build lasting engineering solutions that prevent an earthquake hazard from turning into a disaster!"
                    </p>
                    <div className="mt-6 pt-4 border-t border-border">
                      <p className="font-semibold text-foreground">Prof. B.K. Maheshwari</p>
                      <p className="text-sm text-muted-foreground">Head, Department of Earthquake Engineering, IIT Roorkee</p>
                      <p className="text-sm text-muted-foreground">President, Indian Society of Earthquake Technology</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* <Separator className="mb-12" /> */}

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