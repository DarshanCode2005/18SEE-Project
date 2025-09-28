import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import Tajmahal from "@/assets/Taj-Mahal-Agra-India.webp";
import Jaipur from "@/assets/Jaipur city.jpg";
import Garhwal from "@/assets/garhwal.jpg";
import Delhi from "@/assets/delhi.jpg";
import Rishikesh from "@/assets/rishikesh.jpg";

const tourDestinations = [
  {
    name: "Taj Mahal, Agra",
    image: Tajmahal,
    description: "Marvel at the iconic symbol of love and India's most famous monument."
  },
  {
    name: "Pink City, Jaipur",
    image: Jaipur,
    description: "Explore the vibrant culture, palaces, and forts of Rajasthan's capital."
  },
  {
    name: "Garhwal Lesser Himalayas",
    image: Garhwal,
    description: "Experience the serene beauty and adventure of the Himalayan foothills."
  },
  {
    name: "Delhi",
    image: Delhi,
    description: "Discover the rich history, bustling markets, and architectural wonders of India's capital city."
  },
  {
    name: "Rishikesh",
    image: Rishikesh,
    description: "Relax by the Ganges, visit ancient temples, and enjoy the spiritual atmosphere."
  }
];


export const PostSymposiumTourSection = () => (
  <section id="post-symposium-tour" className="py-20 bg-background">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-14 animate-fade-in">
        <Badge variant="outline" className="mb-4 bg-secondary/10 text-secondary border-secondary/20 text-2xl px-4 py-2">
          Post-Symposium Tour
        </Badge>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-bold">
          Extend your experience—discover the vibrant sights, sounds, and stories of India with fellow attendees after the Symposium!
        </p>
      </div>
      {/* Carousel */}
      <div className="relative">
        <Carousel className="w-full">
          <CarouselContent>
            {tourDestinations.map((dest, idx) => (
              <CarouselItem key={idx} className="max-w-xs w-full mx-auto">
                <Card className="border border-border bg-card shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in max-w-xs w-full mx-auto">
                  <CardContent className="p-0">
                    <div className="h-56 w-full overflow-hidden rounded-t-2xl">
                      <img src={dest.image} alt={dest.name} className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="p-6 text-center">
                      <h3 className="font-serif text-xl font-bold text-primary mb-2">{dest.name}</h3>
                      <p className="text-muted-foreground text-base mb-2">{dest.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  </section>
);
