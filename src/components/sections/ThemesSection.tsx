import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import googleCalendar from "@/assets/google-calendar.webp";
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
  Clock,
  MapPin,
  Monitor,
  Home,
  Link,
  Archive,
  HardDrive,
  Earth,
  BrickWall,
  Database,
  TrainFrontTunnel,
  Cable,
  Bot,
  Dam,
  BarChart2,
  FileSearchIcon,
  Sheet,
  ChartArea,
  LucideGlasses,
  LucideSquareLibrary,
  StepBack
} from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Bar, Layer } from "recharts";

export const ThemesSection = () => {
  const [showAll, setShowAll] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [guidelinesOpen, setGuidelinesOpen] = useState(false);
  
  const themes = [
    { icon: <Activity className="h-5 w-5" />, title: "Engineering seismology and seismotectonics" },
    { icon: <AlertTriangle className="h-5 w-5" />, title: "Lessons from recent earthquakes and tsunamis" },
    { icon: <MapPin className="h-5 w-5" />, title: "Earthquake studies using GIS/GPS/SAR/remote sensing" },
    { icon: <Target className="h-5 w-5" />, title: "Seismic hazard assessment" },
    { icon: <Monitor className="h-5 w-5" />, title: "Seismic instrumentation" },
    { icon: <Earth className="h-5 w-5" />, title: "Strong ground motion and site characterization" },
    { icon: <Layers className="h-5 w-5" />, title: "Dynamic properties of soil and ground response" },
    { icon: <TrendingUp className="h-5 w-5" />, title: "Liquefaction and seismic ground improvement" },
    { icon: <Home className="h-5 w-5" />, title: "Seismic safety of foundations and machine foundations" },
    { icon: <Link className="h-5 w-5" />, title: "Seismic soil-structure interaction" },
    { icon: <Mountain className="h-5 w-5" />, title: "Slope stability under earthquakes & embankment design" },
    { icon: <Dam className="h-5 w-5" />, title: "Gravity and embankment dams" },
    { icon: <BrickWall className="h-5 w-5" />, title: "Earth pressure and retaining walls under earthquakes" },
    { icon: <Wrench className="h-5 w-5" />, title: "Seismic safety of pipelines, underground & buried structures" },
    { icon: <TrainFrontTunnel className="h-5 w-5" />, title: "Tunnels and rock mechanics" },
    { icon: <Building className="h-5 w-5" />, title: "Special materials, structures, and systems" },
    { icon: <FileText className="h-5 w-5" />, title: "Earthquake response analysis, design, and construction" },
    { icon: <BookOpen className="h-5 w-5" />, title: "Codal provisions on earthquake-resistant design" },
    { icon: <BarChart2 className="h-5 w-5" />, title: "Performance-based seismic design" },
    { icon: <FileSearchIcon className="h-5 w-5" />, title: "Seismic vulnerability, risk, and resilience assessment" },
    { icon: <Sheet className="h-5 w-5" />, title: "Structural response control" },
    { icon: <ChartArea className="h-5 w-5" />, title: "Seismic testing of structures and equipment" },
    { icon: <Hammer className="h-5 w-5" />, title: "Seismic evaluation and retrofitting of structures" },
    { icon: <Dam className="h-5 w-5" />, title: "Seismic safety of bridges and dams." },
    { icon: <Settings className="h-5 w-5" />, title: "Seismic safety of non-structural components, equipment, and services in buildings" },
    { icon: <Factory className="h-5 w-5" />, title: "Seismic safety of industrial structures, and thermal and nuclear power stations" },
    { icon: <Landmark className="h-5 w-5" />, title: "Seismic safety of historical structures and monuments" },
    { icon: <Waves className="h-5 w-5" />, title: "Seismic safety of offshore/onshore structures" },
    { icon: <Radar className="h-5 w-5" />, title: "Damage detection and system identification" },
    { icon: <Globe className="h-5 w-5" />, title: "Lifeline and urban systems" },
    { icon: <Map className="h-5 w-5" />, title: "Microzonation and urban planning" },
    { icon: <Shield className="h-5 w-5" />, title: "Earthquake disaster mitigation and management" },
    { icon: <Users className="h-5 w-5" />, title: "Human response and socio-economic issues" },
    { icon: <Stethoscope className="h-5 w-5" />, title: "Post-earthquake rehabilitation" },
    { icon: <School className="h-5 w-5" />, title: "Earthquake engineering education" },
    { icon: <Megaphone className="h-5 w-5" />, title: "Public awareness, participation, and enforcement of building safety laws" },
    { icon: <Clock className="h-5 w-5" />, title: "Earthquake prediction and early warning system" },
  { icon: <Bot className="h-5 w-5" />, title: "Applications of artificial intelligence and machine learning in earthquake engineering" }
  ];

  // Only these 8 themes should be visible in the collapsed (show less) section
  const collapsedTitles = [
    "Earthquake response analysis, design, and construction",
    "Codal provisions on earthquake-resistant design",
    "Seismic hazard assessment",
    "Strong ground motion and site characterization",
    "Seismic soil-structure interaction",
    "Liquefaction and seismic ground improvement",
    "Seismic vulnerability, risk, and resilience assessment",
    "Applications of artificial intelligence and machine learning in earthquake engineering"
  ];
  const displayedThemes = showAll ? themes : themes.filter(theme => collapsedTitles.includes(theme.title));

  return (
    <section id="themes" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 bg-secondary/10 text-secondary border-secondary/20 text-2xl px-4 py-2">
          Symposium Themes
        </Badge>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Dive deep into cutting-edge research areas that are shaping the next generation 
            of seismic engineering solutions and earthquake-resilient infrastructure.
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
                      {theme.title}
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
                We invite researchers, practitioners, innovators and students to share their original work 
                across these themes. Submit your abstracts (around 300 words) and contribute to advancing earthquake engineering.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                  href={`${import.meta.env.BASE_URL || '/'}Abstract_Template.docx`}
                  download
                  className="border-2 border-primary-foreground text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary-foreground/10 transition-colors text-center"
                  role="button"
                >
                  Download Template
                </a>
                <button className="bg-primary-foreground text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary-foreground/90 transition-colors">
                  Submit Abstract
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
  <div className="mt-12 max-w-7xl mx-auto">
          <div className="relative">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 rounded-2xl"></div>
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary/20 rounded-full"></div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-secondary/20 rounded-full"></div>
            <div className="absolute -bottom-3 left-1/4 w-4 h-4 bg-primary/15 rounded-full"></div>
            <Card className="relative border-2 border-primary/20 shadow-xl bg-gradient-to-br from-background via-background to-muted/30 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-18 h-18 bg-white rounded-xl mb-4 shadow-lg border border-gray-200">
                    <a
                      href="https://calendar.google.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Open Google Calendar"
                      className="cursor-pointer transition-transform hover:scale-110 active:scale-95"
                    >
                      
                      <svg className="w-16 h-16" viewBox="0 0 48 48" aria-hidden="true">
        {/* Main calendar body */}
        <rect x="8" y="10" width="32" height="32" rx="4" fill="#ffffff" stroke="#1a73e8" strokeWidth="2.5" />
        
        {/* Top header bar */}
        <rect x="8" y="10" width="32" height="10" rx="4" fill="#1a73e8" />
        <rect x="8" y="16" width="32" height="4" fill="#1a73e8" />
        
        {/* Binding rings */}
        <circle cx="16" cy="10" r="2.5" fill="#ffffff" />
        <circle cx="24" cy="10" r="2.5" fill="#ffffff" />
        <circle cx="32" cy="10" r="2.5" fill="#ffffff" />
        <rect x="14.5" y="6" width="3" height="5" rx="1.5" fill="#ea4335" />
        <rect x="22.5" y="6" width="3" height="5" rx="1.5" fill="#fbbc04" />
        <rect x="30.5" y="6" width="3" height="5" rx="1.5" fill="#34a853" />
        
        {/* Calendar grid dots (3 rows × 4 columns) */}
        {[0, 1, 2].map((row) =>
          [0, 1, 2, 3].map((col) => (
            <circle
              key={`${row}-${col}`}
              cx={15 + col * 6}
              cy={26 + row * 5}
              r="1.5"
              fill="#5f6368"
            />
          ))
        )}
      </svg>
                      
                    </a>
                  </div>
                 <h3 className="text-3xl md:text-4xl font-bold text-red-600 mb-2">
Important Dates !
</h3>

                </div>
                {/* Custom Dates Grid */}
                {(() => {
                  // Important Dates Data
                  const importantDates = [
                    {
                      date: new Date("2025-12-15T00:00:00"),
                      label: "Abstract submission closes",
                      display: "Dec. 15, 2025"
                    },
                    {
                      date: new Date("2026-01-15T00:00:00"),
                      label: "Confirmation of acceptance of abstract",
                      display: "Jan. 15, 2026"
                    },
                    {
                      date: new Date("2026-03-15T00:00:00"),
                      label: "Full-length manuscript submission closes",
                      display: "March 15, 2026"
                    },
                    {
                      date: new Date("2026-12-10T09:00:00"),
                      label: "Inauguration of 18SEE",
                      display: "Dec. 10, 2026"
                    }
                  ];
                  const now = new Date();
                  const nextIdx = importantDates.findIndex(d => d.date.getTime() > now.getTime());
                  // If all dates are past, highlight the last one
                  const highlightIdx = nextIdx === -1 ? importantDates.length - 1 : nextIdx;
                  return (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                      {importantDates.map((d, idx) => {
                        const isNext = idx === highlightIdx;
                        const cardBg = isNext ? "bg-red-600/10 border-red-600" : "bg-yellow-300/20 border-yellow-400";
                        const dotBg = isNext ? "bg-red-600 ring-2 ring-red-300 animate-[pulse_0.8s_ease-in-out_infinite]" : "bg-yellow-400";
                        const dateText = isNext ? "text-red-700" : "text-yellow-700";
                        const labelText = isNext ? "text-red-800" : "text-yellow-800";
                        return (
                          <div key={idx} className={`flex flex-col items-center py-8 px-4 border-2 rounded-xl shadow-md min-h-[180px] min-w-[260px] ${cardBg}`}>
                            <div className="flex flex-col items-center justify-start min-h-[80px]">
                              <div className={`w-4 h-4 rounded-full mb-6 ${dotBg}`}></div>
                              <p className={`text-xl font-bold mb-1 ${dateText}`}>{d.display}</p>
                            </div>
                            <p className={`text-lg font-semibold text-center mt-2 ${labelText}`}>{d.label}</p>
                          </div>
                        );
                      })}
                    </div>
                  );
                })()}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
