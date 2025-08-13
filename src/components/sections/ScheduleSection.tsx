import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, MapPin, User } from "lucide-react";

interface ScheduleItem {
  time: string;
  title: string;
  speaker?: string;
  location: string;
  type: "keynote" | "session" | "break" | "workshop" | "ceremony";
}

const day1Schedule: ScheduleItem[] = [
  {
    time: "09:00 - 09:30",
    title: "Registration & Welcome Coffee",
    location: "Main Auditorium Foyer",
    type: "ceremony"
  },
  {
    time: "09:30 - 10:00",
    title: "Inauguration Ceremony",
    location: "Main Auditorium",
    type: "ceremony"
  },
  {
    time: "10:00 - 11:00",
    title: "Keynote: Recent Advances in Seismic Hazard Assessment",
    speaker: "Prof. Rajesh Kumar, IIT Delhi",
    location: "Main Auditorium",
    type: "keynote"
  },
  {
    time: "11:00 - 11:30",
    title: "Tea Break",
    location: "Main Auditorium Foyer",
    type: "break"
  },
  {
    time: "11:30 - 12:30",
    title: "Technical Session 1: Earthquake Resistant Design",
    location: "Hall A",
    type: "session"
  },
  {
    time: "12:30 - 13:30",
    title: "Lunch Break",
    location: "Conference Hall",
    type: "break"
  },
  {
    time: "13:30 - 15:00",
    title: "Technical Session 2: Structural Dynamics",
    location: "Hall A",
    type: "session"
  },
  {
    time: "15:00 - 15:30",
    title: "Poster Session & Tea",
    location: "Exhibition Hall",
    type: "break"
  },
  {
    time: "15:30 - 17:00",
    title: "Workshop: Seismic Analysis Software",
    location: "Computer Lab",
    type: "workshop"
  }
];

const day2Schedule: ScheduleItem[] = [
  {
    time: "09:00 - 10:00",
    title: "Keynote: Geotechnical Earthquake Engineering",
    speaker: "Dr. Sarah Chen, Stanford University",
    location: "Main Auditorium",
    type: "keynote"
  },
  {
    time: "10:00 - 10:30",
    title: "Tea Break",
    location: "Main Auditorium Foyer",
    type: "break"
  },
  {
    time: "10:30 - 12:00",
    title: "Parallel Session 1A: Seismic Retrofitting",
    location: "Hall A",
    type: "session"
  },
  {
    time: "10:30 - 12:00",
    title: "Parallel Session 1B: Ground Motion Studies",
    location: "Hall B",
    type: "session"
  },
  {
    time: "12:00 - 13:00",
    title: "Lunch Break",
    location: "Conference Hall",
    type: "break"
  },
  {
    time: "13:00 - 14:30",
    title: "Parallel Session 2A: Disaster Risk Management",
    location: "Hall A",
    type: "session"
  },
  {
    time: "13:00 - 14:30",
    title: "Parallel Session 2B: Emerging Technologies",
    location: "Hall B",
    type: "session"
  },
  {
    time: "14:30 - 15:00",
    title: "Tea Break",
    location: "Main Auditorium Foyer",
    type: "break"
  },
  {
    time: "15:00 - 16:30",
    title: "Industry Panel Discussion",
    location: "Main Auditorium",
    type: "session"
  },
  {
    time: "19:00 - 21:00",
    title: "Conference Dinner",
    location: "Hotel Radisson Blue",
    type: "ceremony"
  }
];

const day3Schedule: ScheduleItem[] = [
  {
    time: "09:00 - 10:00",
    title: "Keynote: Future of Earthquake Engineering",
    speaker: "Prof. Hiroshi Yamamoto, University of Tokyo",
    location: "Main Auditorium",
    type: "keynote"
  },
  {
    time: "10:00 - 10:30",
    title: "Tea Break",
    location: "Main Auditorium Foyer",
    type: "break"
  },
  {
    time: "10:30 - 12:00",
    title: "Technical Session 3: Smart Monitoring Systems",
    location: "Hall A",
    type: "session"
  },
  {
    time: "12:00 - 13:00",
    title: "Lunch Break",
    location: "Conference Hall",
    type: "break"
  },
  {
    time: "13:00 - 14:00",
    title: "Best Paper Awards & Recognition",
    location: "Main Auditorium",
    type: "ceremony"
  },
  {
    time: "14:00 - 14:30",
    title: "Closing Ceremony",
    location: "Main Auditorium",
    type: "ceremony"
  },
  {
    time: "14:30 - 15:00",
    title: "Farewell Tea",
    location: "Main Auditorium Foyer",
    type: "break"
  }
];

const getTypeColor = (type: string) => {
  switch (type) {
    case "keynote":
      return "border-l-primary bg-primary/5";
    case "session":
      return "border-l-secondary bg-secondary/5";
    case "workshop":
      return "border-l-accent bg-accent/5";
    case "ceremony":
      return "border-l-gold bg-gold/5";
    default:
      return "border-l-muted bg-muted/5";
  }
};

const ScheduleItem = ({ item }: { item: ScheduleItem }) => (
  <Card className={`mb-4 border-l-4 ${getTypeColor(item.type)} hover:shadow-md transition-shadow`}>
    <CardContent className="p-4">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
        <div className="flex-1">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
            <Clock className="w-4 h-4" />
            <span className="font-medium">{item.time}</span>
          </div>
          <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
          {item.speaker && (
            <div className="flex items-center gap-2 text-sm text-secondary-foreground mb-1">
              <User className="w-4 h-4" />
              <span>{item.speaker}</span>
            </div>
          )}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span>{item.location}</span>
          </div>
        </div>
        <div className="flex-shrink-0">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
            item.type === 'keynote' ? 'bg-primary text-primary-foreground' :
            item.type === 'session' ? 'bg-secondary text-secondary-foreground' :
            item.type === 'workshop' ? 'bg-accent text-accent-foreground' :
            item.type === 'ceremony' ? 'bg-gold text-gold-foreground' :
            'bg-muted text-muted-foreground'
          }`}>
            {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
          </span>
        </div>
      </div>
    </CardContent>
  </Card>
);

export const ScheduleSection = () => {
  return (
    <section id="schedule" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Conference Schedule
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three days packed with keynotes, technical sessions, workshops, and networking opportunities
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="day1" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="day1" className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <div className="text-center">
                  <div className="font-semibold">Day 1</div>
                  <div className="text-xs">Dec 15, 2025</div>
                </div>
              </TabsTrigger>
              <TabsTrigger value="day2" className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <div className="text-center">
                  <div className="font-semibold">Day 2</div>
                  <div className="text-xs">Dec 16, 2025</div>
                </div>
              </TabsTrigger>
              <TabsTrigger value="day3" className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <div className="text-center">
                  <div className="font-semibold">Day 3</div>
                  <div className="text-xs">Dec 17, 2025</div>
                </div>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="day1" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-primary" />
                    Day 1 - December 15, 2025
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {day1Schedule.map((item, index) => (
                    <ScheduleItem key={index} item={item} />
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="day2" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-primary" />
                    Day 2 - December 16, 2025
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {day2Schedule.map((item, index) => (
                    <ScheduleItem key={index} item={item} />
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="day3" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-primary" />
                    Day 3 - December 17, 2025
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {day3Schedule.map((item, index) => (
                    <ScheduleItem key={index} item={item} />
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};