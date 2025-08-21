import { Navigation } from "@/components/ui/navigation";
import { FooterSection } from "@/components/sections/FooterSection";
import headshot from "@/assets/headshot_placeholder.png";

const committee = [
  {
    level: 1,
    title: "Patron",
    name: "Prof. Kamal Kishore Pant",
    position: "Director, IIT Roorkee",
  },
  {
    level: 2,
    title: "Chairman",
    name: "Prof. B. K. Maheshwari",
    position: "Professor & Head\nDEQ, IIT Roorkee",
  },
  {
    level: 2,
    title: "Organising Secretary",
    name: "Prof. Ravi Sankar Jakka",
    position: "Professor\nDEQ, IIT Roorkee",
  },
  {
    level: 3,
    title: "Joint Organising Secretary",
    name: "Prof. Varun Kumar Singla",
    position: "Assistant Professor\nDEQ, IIT Roorkee",
  },
  {
    level: 3,
    title: "Joint Organising Secretary",
    name: "Prof. Shiv Prakash",
    position: "Assistant Professor\nDEQ, IIT Roorkee",
  },
];

const levelStyles = [
  "mt-0", // Level 1
  "mt-16", // Level 2
  "mt-10", // Level 3
];

const Committee = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="max-w-4xl mx-auto px-4 pt-32 pb-16">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">Organizing Committee</h1>
        {/* Level 1 */}
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center">
            <img src={headshot} alt="Patron" className="w-32 h-32 rounded-full object-cover border-4 border-primary shadow mb-4" />
            <div className="text-center">
              <div className="text-lg font-semibold text-gold mb-1">Patron</div>
              <div className="text-xl font-bold text-foreground">Prof. Kamal Kishore Pant</div>
              <div className="text-muted-foreground mt-1">Director, IIT Roorkee</div>
            </div>
          </div>
        </div>
        {/* Level 2 */}
        <div className="flex flex-col md:flex-row justify-center gap-12 mt-16">
          {[committee[1], committee[2]].map((member, idx) => (
            <div key={member.name} className="flex flex-col items-center">
              <img src={headshot} alt={member.title} className="w-28 h-28 rounded-full object-cover border-4 border-secondary shadow mb-3" />
              <div className="text-center">
                <div className="text-base font-semibold text-secondary mb-1">{member.title}</div>
                <div className="text-lg font-bold text-foreground">{member.name}</div>
                <div className="text-muted-foreground mt-1 whitespace-pre-line">{member.position}</div>
              </div>
            </div>
          ))}
        </div>
        {/* Level 3 */}
        <div className="flex flex-col md:flex-row justify-center gap-12 mt-10">
          {[committee[3], committee[4]].map((member, idx) => (
            <div key={member.name} className="flex flex-col items-center">
              <img src={headshot} alt={member.title} className="w-28 h-28 rounded-full object-cover border-4 border-accent shadow mb-2" />
              <div className="text-center">
                <div className="text-base font-semibold text-secondary mb-1">{member.title}</div>
                <div className="text-lg font-bold text-foreground">{member.name}</div>
                <div className="text-muted-foreground mt-1 whitespace-pre-line">{member.position}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <FooterSection />
    </div>
  );
};

export default Committee;
