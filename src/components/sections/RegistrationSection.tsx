import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Check, 
  Users, 
  GraduationCap, 
  Globe, 
  Clock,
  CreditCard,
  Download
} from "lucide-react";

export const RegistrationSection = () => {
  const registrationTypes = [
    {
      type: "Early Bird",
      deadline: "November 15, 2025",
      icon: <Clock className="h-6 w-6" />,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50 dark:bg-emerald-950/30",
      fees: {
        indian: { academia: "₹8,000", industry: "₹12,000", student: "₹4,000" },
        international: { academia: "$150", industry: "$250", student: "$75" }
      },
      popular: true
    },
    {
      type: "Regular",
      deadline: "December 1, 2025",
      icon: <Users className="h-6 w-6" />,
      color: "text-primary",
      bgColor: "bg-primary/10",
      fees: {
        indian: { academia: "₹10,000", industry: "₹15,000", student: "₹5,000" },
        international: { academia: "$200", industry: "$300", student: "$100" }
      }
    },
    {
      type: "Late",
      deadline: "December 10, 2025",
      icon: <CreditCard className="h-6 w-6" />,
      color: "text-amber-600",
      bgColor: "bg-amber-50 dark:bg-amber-950/30",
      fees: {
        indian: { academia: "₹12,000", industry: "₹18,000", student: "₹6,000" },
        international: { academia: "$250", industry: "$350", student: "$125" }
      }
    }
  ];

  const benefits = [
    "Access to all technical sessions and keynote presentations",
    "Conference proceedings and digital materials",
    "Welcome reception and networking events",
    "Tea/coffee breaks and lunch during conference days",
    "Certificate of participation",
    "Access to exhibition area and sponsor booths",
    "Networking opportunities with global experts",
    "Digital badge for professional profiles"
  ];

  const paymentMethods = [
    "Credit/Debit Cards (Visa, MasterCard, RuPay)",
    "Net Banking (All major Indian banks)",
    "UPI Payments (GPay, PhonePe, Paytm)",
    "Bank Transfer/NEFT for institutional payments",
    "International wire transfer for overseas participants"
  ];

  return (
    <section id="registration" className="py-20 bg-gradient-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 bg-secondary/10 text-secondary border-secondary/20">
            Registration
          </Badge>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Secure Your Spot at
            <span className="block text-primary">18SEE 2025</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join leading researchers, practitioners, and students from around the world. 
            Early bird registration offers significant savings – register now!
          </p>
        </div>

        {/* Registration Types */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {registrationTypes.map((regType, index) => (
            <Card 
              key={index}
              className={`relative border-2 hover:shadow-elegant transition-all duration-300 animate-fade-in ${
                regType.popular 
                  ? 'border-secondary shadow-glow bg-gradient-secondary/5' 
                  : 'border-border bg-card'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {regType.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-secondary text-secondary-foreground">
                  Most Popular
                </Badge>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className={`${regType.bgColor} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <div className={regType.color}>
                    {regType.icon}
                  </div>
                </div>
                <CardTitle className="font-serif text-2xl">{regType.type} Registration</CardTitle>
                <p className="text-muted-foreground">Deadline: {regType.deadline}</p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Indian Participants */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3 flex items-center">
                    <span className="mr-2">🇮🇳</span> Indian Participants
                  </h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Academia</span>
                      <span className="font-semibold">{regType.fees.indian.academia}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Industry</span>
                      <span className="font-semibold">{regType.fees.indian.industry}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Student</span>
                      <span className="font-semibold">{regType.fees.indian.student}</span>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* International Participants */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3 flex items-center">
                    <Globe className="h-4 w-4 mr-2" /> International
                  </h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Academia</span>
                      <span className="font-semibold">{regType.fees.international.academia}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Industry</span>
                      <span className="font-semibold">{regType.fees.international.industry}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Student</span>
                      <span className="font-semibold">{regType.fees.international.student}</span>
                    </div>
                  </div>
                </div>

                <Button 
                  className={`w-full ${
                    regType.popular 
                      ? 'bg-secondary hover:bg-secondary-dark text-secondary-foreground' 
                      : 'bg-primary hover:bg-primary-dark'
                  }`}
                >
                  Register Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};