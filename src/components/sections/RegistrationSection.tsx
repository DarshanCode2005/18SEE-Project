
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Crown, Clock } from "lucide-react";

export const RegistrationSection = () => {
  const plans = [
    {
      title: "Early Bird Registration",
      deadline: "November 15, 2025",
      icon: <Crown className="h-6 w-6 text-primary" />,
      highlight: "Most Popular",
      buttonColor: "bg-yellow-500 hover:bg-yellow-600 text-white",
    },
    {
      title: "Regular Registration",
      deadline: "December 1, 2025",
      icon: <Calendar className="h-6 w-6 text-primary" />,
      buttonColor: "bg-blue-600 hover:bg-blue-700 text-white",
    },
    {
      title: "Late Registration",
      deadline: "December 10, 2025",
      icon: <Clock className="h-6 w-6 text-primary" />,
      buttonColor: "bg-blue-600 hover:bg-blue-700 text-white",
    },
  ];

  return (
    <section id="registration" className="py-20 bg-gradient-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="mb-4 inline-block bg-secondary/10 text-secondary border border-secondary/20 rounded-full px-4 py-2 font-semibold">Registration</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Secure Your Spot at
            <span className="block text-primary">18SEE 2025</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join leading researchers, practitioners, and students from around the world. 
            Early bird registration offers significant savings – register now!
          </p>
        </div>
        {/* Pricing Widget */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto py-12">
          {plans.map((plan, idx) => (
            <Card
              key={idx}
              className={`relative border ${plan.highlight ? "border-yellow-400" : "border-gray-200"} shadow-lg rounded-2xl`}
            >
              <CardContent className="p-6">
                {/* Highlight Badge */}
                {plan.highlight && (
                  <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-xs font-semibold text-white px-3 py-1 rounded-full">
                    {plan.highlight}
                  </span>
                )}

                {/* Header */}
                <div className="flex items-center space-x-3 mb-4">
                  {plan.icon}
                  <h3 className="font-semibold text-xl">{plan.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-6">
                  Deadline: {plan.deadline}
                </p>

                {/* Price Section (Blurred/Disabled for now) */}
                <div className="relative bg-gray-100 rounded-lg p-4 h-40 flex flex-col justify-center items-center">
                  <div className="absolute inset-0 bg-gray-300/70 backdrop-blur-sm flex items-center justify-center rounded-lg">
                    <span className="text-gray-700 font-semibold">
                      Prices Coming Soon
                    </span>
                  </div>
                  <div className="opacity-0">
                    <p>Indian Participants</p>
                    <p>International Participants</p>
                  </div>
                </div>

                {/* Button */}
                <Button
                  className={`w-full mt-6 ${plan.buttonColor}`}
                  disabled
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