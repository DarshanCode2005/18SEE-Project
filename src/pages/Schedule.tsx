import { Navigation } from "@/components/ui/navigation";
import { ScheduleSection } from "@/components/sections/ScheduleSection";
import { FooterSection } from "@/components/sections/FooterSection";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const Schedule = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="mt-24">
        <ScheduleSection />
      </div>
      <div className="flex justify-center my-12">
        <Button
          asChild
          size="lg"
          className="bg-secondary hover:bg-secondary-dark text-secondary-foreground shadow-glow px-8 py-4 text-lg font-semibold gap-2"
        >
          <a href="/schedule.pdf" download>
            <Download className="h-5 w-5 mr-2" />
            Download Schedule
          </a>
        </Button>
      </div>
      <FooterSection />
    </div>
  );
};

export default Schedule;
