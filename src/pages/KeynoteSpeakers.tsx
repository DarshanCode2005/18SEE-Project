import { Navigation } from "@/components/ui/navigation";
import { FooterSection } from "@/components/sections/FooterSection";
import { KeynoteSpeakersSection } from "@/components/sections/KeynoteSpeakersSection";

const KeynoteSpeakers = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="fixed top-0 left-0 w-full z-50">
        <Navigation />
      </div>

      <div className="pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">18SEE 2025</p>
            <h1 className="mt-4 text-3xl font-bold text-foreground font-serif md:text-4xl">Keynote Speakers</h1>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
              Distinguished researchers and practitioners from leading institutions across the world are joining the symposium to share insights on the future of earthquake engineering, geotechnical hazard mitigation, and resilient infrastructure.
            </p>
          </div>
        </div>

        <KeynoteSpeakersSection />
      </div>

      <FooterSection />
    </div>
  );
};

export default KeynoteSpeakers;
