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
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

export const ThemesSection = () => {
  const [showAll, setShowAll] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [guidelinesOpen, setGuidelinesOpen] = useState(false);
  
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

  const initialCount = 8;
  const displayedThemes = showAll ? themes : themes.slice(0, initialCount);

  return (
    <section id="themes" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 bg-secondary/10 text-2xl border-secondary/20">
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
          {!showAll ? (
            <Button
              onClick={() => setModalOpen(true)}
              variant="outline"
              size="lg"
              className="group px-8 py-3 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <span className="mr-2">Show More</span>
              <ChevronDown className="h-4 w-4 group-hover:translate-y-0.5 transition-transform duration-300" />
            </Button>
          ) : (
            <Button
              onClick={() => { setShowAll(false); setModalOpen(false); }}
              variant="outline"
              size="lg"
              className="group px-8 py-3 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <span className="mr-2">Show Less</span>
              <ChevronUp className="h-4 w-4 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </Button>
          )}
        </div>

        {/* Modal for All Themes */}
        <Dialog open={modalOpen} onOpenChange={(open) => {
          setModalOpen(open);
          setShowAll(open);
        }}>
          <DialogContent className="max-w-3xl max-h-[calc(100vh-4rem)] sm:max-h[calc(100vh-6rem)] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>All Conference Themes</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {themes.map((theme, index) => (
                <Card key={index} className="group border border-border/50 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg animate-fade-in">
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
            <div className="text-center mt-8">
              <DialogClose asChild>
                <Button
                  onClick={() => { setShowAll(false); setModalOpen(false); }}
                  variant="outline"
                  size="lg"
                  className="group px-8 py-3 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 w-full sm:w-auto"
                >
                  <span className="mr-2">Show Less</span>
                  <ChevronUp className="h-4 w-4 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </Button>
              </DialogClose>
            </div>
          </DialogContent>
        </Dialog>

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
                <button
                  onClick={() => setGuidelinesOpen(true)}
                  className="border-2 border-primary-foreground text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary-foreground/10 transition-colors"
                >
                  View Guidelines
                </button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Guidelines Modal */}
        <Dialog open={guidelinesOpen} onOpenChange={setGuidelinesOpen}>
          <DialogContent className="max-w-3xl max-h-[calc(100vh-4rem)] sm:max-h-[calc(100vh-6rem)] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Submission & Presentation Guidelines</DialogTitle>
            </DialogHeader>
            <div className="text-sm text-foreground/90">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="abstract">
                  <AccordionTrigger>Abstract Submission</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Limit: 250–300 words, single paragraph.</li>
                      <li>Include title, authors, affiliations, and keywords (3–5).</li>
                      <li>Submit via email to <a href="mailto:18see@iitr.ac.in" className="text-primary hover:underline">18see@iitr.ac.in</a> or website <a href="https://www.iitr.ac.in/18see" target="_blank" rel="noreferrer" className="text-primary hover:underline">www.iitr.ac.in/18see</a>.</li>
                      <li>Deadline: Dec 15, 2025.</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="formatting">
                  <AccordionTrigger>Abstract Formatting</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Language: English; Font: Times New Roman, 11 pt; Line spacing: 1.15.</li>
                      <li>Title case for headings; author names with superscripted affiliations.</li>
                      <li>File format: PDF or DOCX; file name: FirstAuthor_LastName_Abstract.pdf/docx.</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="manuscript">
                  <AccordionTrigger>Full-length Manuscript</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Submission window: Upon abstract acceptance until Mar 15, 2026.</li>
                      <li>Length: 6–8 pages including figures and references (template will be provided).</li>
                      <li>Use SI units; ensure figures are at least 300 dpi.</li>
                      <li>Citations and references in a consistent style (e.g., APA/ASCE).</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="review">
                  <AccordionTrigger>Review & Acceptance</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Peer review results communicated by Apr 30, 2026.</li>
                      <li>Revised manuscripts due by May 15, 2026.</li>
                      <li>Final acceptance subject to timely revisions and registration.</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="registration">
                  <AccordionTrigger>Registration</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>At least one author must register for inclusion in the program.</li>
                      <li>Registration details and fee categories will be announced on the website.</li>
                      <li>Early registration is recommended to secure presentation slots.</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="presentation">
                  <AccordionTrigger>Presentation Guidelines</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Oral presentations: 12 minutes talk + 3 minutes Q&A.</li>
                      <li>Bring slides in PPTX or PDF on a USB; backup via email is advised.</li>
                      <li>Poster size (if applicable): A0 portrait; include title, authors, affiliations.</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="policies">
                  <AccordionTrigger>Policies</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Original work only; submissions will be screened for plagiarism.</li>
                      <li>By submitting, authors confirm all necessary permissions for figures/data.</li>
                      <li>At least one registered author must attend to present.</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="contact">
                  <AccordionTrigger>Contact</AccordionTrigger>
                  <AccordionContent>
                    <p>For queries, contact: <a href="mailto:18see@iitr.ac.in" className="text-primary hover:underline">18see@iitr.ac.in</a></p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <div className="mt-6 text-center">
                <DialogClose asChild>
                  <Button variant="outline" className="px-6">Close</Button>
                </DialogClose>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* Important Dates - Custom Responsive Grid */}
        <div className="mt-12 max-w-5xl mx-auto">
          <div className="relative">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 rounded-2xl"></div>
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary/20 rounded-full"></div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-secondary/20 rounded-full"></div>
            <div className="absolute -bottom-3 left-1/4 w-4 h-4 bg-primary/15 rounded-full"></div>
            <Card className="relative border-2 border-primary/20 shadow-xl bg-gradient-to-br from-background via-background to-muted/30 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full mb-4 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent mb-2">
                    ⚡ Important Dates
                  </h3>
                  <p className="text-muted-foreground text-lg">Mark your calendar for these critical deadlines</p>
                </div>
                {/* Custom Dates Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  {/* 1. Dec. 15 2025 - Abstract Submission Closes (Red color Card) */}
                  <div className="flex flex-col justify-between items-center p-6 bg-red-500/10 border-2 border-red-500 rounded-xl shadow-md min-h-[180px]">
                    <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse" style={{marginBottom: '0.5rem'}}></div>
                    <div className="flex-1 flex flex-col justify-center items-center">
                      <p className="text-xl font-bold text-red-600 mb-1">Dec. 15, 2025</p>
                      <p className="text-base text-red-700 font-semibold text-center">Abstract Submission Closes</p>
                    </div>
                  </div>
                  {/* 2. Jan. 15 2026 - Confirmation of acceptance of abstract (Yellow card) */}
                  <div className="flex flex-col justify-between items-center p-6 bg-yellow-300/20 border-2 border-yellow-400 rounded-xl shadow-md min-h-[180px]">
                    <div className="w-4 h-4 bg-yellow-400 rounded-full" style={{marginBottom: '0.5rem'}}></div>
                    <div className="flex-1 flex flex-col justify-center items-center">
                      <p className="text-xl font-bold text-yellow-700 mb-1">Jan. 15, 2026</p>
                      <p className="text-base text-yellow-800 font-semibold text-center">Confirmation of acceptance of abstract</p>
                    </div>
                  </div>
                  {/* 3. March 15 2026 - Full-length manuscript submission closes (Yellow card) */}
                  <div className="flex flex-col justify-between items-center p-6 bg-yellow-300/20 border-2 border-yellow-400 rounded-xl shadow-md min-h-[180px]">
                    <div className="w-4 h-4 bg-yellow-400 rounded-full" style={{marginBottom: '0.5rem'}}></div>
                    <div className="flex-1 flex flex-col justify-center items-center">
                      <p className="text-xl font-bold text-yellow-700 mb-1">March 15, 2026</p>
                      <p className="text-base text-yellow-800 font-semibold text-center">Full-length manuscript submission closes</p>
                    </div>
                  </div>
                  {/* 4. Dec. 10 2026 - Inauguration of 18SEE (Yellow card) */}
                  <div className="flex flex-col justify-between items-center p-6 bg-yellow-300/20 border-2 border-yellow-400 rounded-xl shadow-md min-h-[180px]">
                    <div className="w-4 h-4 bg-yellow-400 rounded-full" style={{marginBottom: '0.5rem'}}></div>
                    <div className="flex-1 flex flex-col justify-center items-center">
                      <p className="text-xl font-bold text-yellow-700 mb-1">Dec. 10, 2026</p>
                      <p className="text-base text-yellow-800 font-semibold text-center">Inauguration of 18SEE</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};