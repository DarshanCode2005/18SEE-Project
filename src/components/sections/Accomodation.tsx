import React from "react";
import { Train, Plane, Thermometer, Bed, MapPin, CloudSnow, Hotel, CalendarDays } from "lucide-react";

export const Accomodation = () => {
    return (
        <section id="travel" className="py-20 bg-gradient-to-b from-background to-muted/40">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center flex items-center justify-center gap-3">
            
            How to Reach & Accommodation
          </h2>
          <ul className="space-y-6 text-lg text-foreground/90">
            <li className="flex items-start gap-4">
              <span className="mt-1"><MapPin className="w-6 h-6 text-secondary" /></span>
              <span>The city lies on the Amritsar–Howrah main line of the Northern Railway and is well-connected by rail and road to major cities, including New Delhi, Dehradun, Haridwar, Rishikesh, Chandigarh, and Agra.</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="mt-1"><Plane className="w-6 h-6 text-secondary" /></span>
              <span>The nearest airports are Jolly Grant Airport (Dehradun, domestic), Shaheed Bhagat Singh International Airport (Chandigarh), and Indira Gandhi International Airport (New Delhi).</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="mt-1"><Train className="w-6 h-6 text-primary" /></span>
              <span>Trains such as the Shatabdi and Vande Bharat Express offer convenient access to and from New Delhi.</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="mt-1"><CloudSnow className="w-6 h-6 text-secondary" /></span>
              <span>In December, Roorkee experiences cold weather, with temperatures ranging between 8°C and 18°C. Participants are advised to carry woollen clothing for comfort.</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="mt-1"><Hotel className="w-6 h-6 text-secondary" /></span>
              <span className="text-black font-bold">Limited accommodation on a payment basis will be available in the institute's guesthouses and hostels. Hotel stay can also be arranged by the organizers upon request.</span>
            </li>
          </ul>
        </div>
      </section>
    );
}