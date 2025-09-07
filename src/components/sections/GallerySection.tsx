import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, Play, X, Grid, Image as ImageIcon, Video } from "lucide-react";
import GalleryImage1 from "@/assets/gallery_past_event_1.jpg";
import GalleryImage2 from "@/assets/gallery_past_event_2.jpg";
import GalleryImage3 from "@/assets/gallery_past_event_3.jpg";
import GalleryImage4 from "@/assets/gallery_past_event_4.jpg";
import GalleryImage5 from "@/assets/gallery_past_event_5.jpg";
import GalleryImage6 from "@/assets/gallery_past_event_6.jpg";
import GalleryImage7 from "@/assets/gallery_past_event_7.jpg";
import GalleryImage8 from "@/assets/gallery_past_event_8.jpg";
import VenueImage1 from "@/assets/gallery_venue_1.jpg";
import VenueImage2 from "@/assets/gallery_venue_3.jpg";
interface MediaItem {
  id: string;
  type: 'image' | 'video';
  src: string;
  thumbnail: string;
  title: string;
  category: 'past-events' | 'preparations' | 'venue' | 'key-moments';
  alt?: string;
}

// Sample gallery data - in a real app, this would come from a CMS or API
const galleryData: MediaItem[] = [
  {
    id: '2',
    type: 'image',
    src: GalleryImage1,
    thumbnail: GalleryImage1,
    title: '10th Symposium',
    category: 'past-events',
    alt: '10th Symposium Keynote speaker presentation'
  },
  {
    id: '3',
    type: 'image',
    src: GalleryImage2,
    thumbnail: GalleryImage2,
    title: '11th Symposium',
    category: 'past-events',
    alt: '11th Symposium Keynote speaker presentation'
  },
  {
    id: '4',
    type: 'image',
    src: GalleryImage3,
    thumbnail: GalleryImage3,
    title: '12th Symposium',
    category: 'past-events',
    alt: '12th Symposium Keynote speaker presentation'
  },
  {
    id: '5',
    type: 'image',
    src: GalleryImage4,
    thumbnail: GalleryImage4,
    title: '13th Symposium',
    category: 'past-events',
    alt: '13th Symposium Keynote speaker presentation'
  },
  {
    id: '6',
    type: 'image',
    src: GalleryImage5,
    thumbnail: GalleryImage5,
    title: '14th Symposium',
    category: 'past-events',
    alt: '14th Symposium Keynote speaker presentation'
  },
  {
    id: '7',
    type: 'image',
    src: GalleryImage6,
    thumbnail: GalleryImage6,
    title: '15th Symposium',
    category: 'past-events',
    alt: '15th Symposium Keynote speaker presentation'
  },
  {
    id: '8',
    type: 'image',
    src: GalleryImage7,
    thumbnail: GalleryImage7,
    title: '16th Symposium',
    category: 'past-events',
    alt: '16th Symposium Keynote speaker presentation'
  },
  {
    id: '9',
    type: 'image',
    src: '/placeholder.svg',
    thumbnail: '/placeholder.svg',
    title: 'Conference Hall Setup',
    category: 'preparations',
    alt: 'Main conference hall preparation'
  },
  {
    id: '11',
    type: 'image',
    src: '/placeholder.svg',
    thumbnail: '/placeholder.svg',
    title: 'Award Ceremony',
    category: 'key-moments',
    alt: 'Best paper award ceremony'
  },
  {
    id: '12',
    type: 'image',
    src: '/placeholder.svg',
    thumbnail: '/placeholder.svg',
    title: 'Panel Discussion',
    category: 'key-moments',
    alt: 'Expert panel discussion'
  },
  {
    id:'13',
    type: 'image',
    src: GalleryImage8,
    thumbnail: GalleryImage8,
    title: '17th Symposium',
    category: 'past-events',
    alt: '17th Symposium Keynote speaker presentation'
  },
  {
    id: '14',
    type: 'image',
    src: VenueImage1,
    thumbnail: VenueImage1,
    title: 'Department Building',
    category: 'venue',
    alt: 'Side view of Eathquake Engineering Department building at IIT Roorkee'
  },
  {
    id: '15',
    type: 'image',
    src: VenueImage2,
    thumbnail: VenueImage2,
    title: 'Entrance View',
    category: 'venue',
    alt: 'Main entrance of Eathquake Engineering Department at IIT Roorkee'
  },
];

const categories = [
  { id: 'past-events', label: 'Past Events', icon: ImageIcon },
  { id: 'venue', label: 'Venue', icon: ImageIcon },
  { id: 'preparations', label: 'Preparations', icon: ImageIcon },
  { id: 'key-moments', label: 'Key Moments', icon: Video }
];

export const GallerySection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('past-events');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filteredItems, setFilteredItems] = useState<MediaItem[]>(galleryData);

  useEffect(() => {
    setFilteredItems(galleryData.filter(item => item.category === selectedCategory));
  }, [selectedCategory]);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  const currentItem = filteredItems[currentIndex];

  return (
    <section id="gallery" className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-4">
            Gallery
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore moments from past symposia, venue preparations, and key highlights
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="flex items-center gap-2"
              >
                <IconComponent className="h-4 w-4" />
                {category.label}
              </Button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <Card 
              key={item.id} 
              className="group cursor-pointer overflow-hidden hover:shadow-elegant transition-all duration-300 hover-scale"
              onClick={() => openLightbox(index)}
            >
              <CardContent className="p-0 relative">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.thumbnail}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300" />
                  
                  {/* Media Type Indicator */}
                  <div className="absolute top-3 right-3">
                    <Badge variant="secondary" className="bg-background/90 text-foreground">
                      {item.type === 'video' ? (
                        <><Play className="h-3 w-3 mr-1" /> Video</>
                      ) : (
                        <><ImageIcon className="h-3 w-3 mr-1" /> Photo</>
                      )}
                    </Badge>
                  </div>
                  
                  {/* Overlay Content */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/80 to-transparent p-4 text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="font-semibold text-sm">{item.title}</h3>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Lightbox Dialog */}
        <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
          <DialogContent className="max-w-6xl w-full h-[90vh] p-0 bg-background/95 backdrop-blur-sm">
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Close Button */}
              <Button
                variant="outline"
                size="icon"
                className="absolute top-4 right-4 z-10 bg-background/80 backdrop-blur-sm"
                onClick={() => setLightboxOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>

              {/* Navigation Buttons */}
              {filteredItems.length > 1 && (
                <>
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm"
                    onClick={prevImage}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm"
                    onClick={nextImage}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </>
              )}

              {/* Media Content */}
              {currentItem && (
                <div className="w-full h-full flex items-center justify-center p-8">
                  {currentItem.type === 'image' ? (
                    <img
                      src={currentItem.src}
                      alt={currentItem.alt}
                      style={{ maxWidth: '100%', maxHeight: '80vh', width: 'auto', height: 'auto', objectFit: 'contain', borderRadius: '1rem' }}
                      className="shadow-lg"
                    />
                  ) : (
                    <div className="w-full h-full max-w-4xl">
                      <iframe
                        src={currentItem.src}
                        className="w-full h-full rounded-lg"
                        allowFullScreen
                        title={currentItem.title}
                      />
                    </div>
                  )}
                </div>
              )}

              {/* Image Info */}
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {currentItem?.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {currentIndex + 1} of {filteredItems.length}
                </p>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};