
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Crown, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const RegistrationSection = () => {
  const plans = [
    {
      title: "Early Bird Registration",
      deadline: "June 30, 2026",
      icon: <Crown className="h-6 w-6 text-primary" />,
      highlight: "Most Popular",
      buttonColor: "bg-yellow-500 hover:bg-yellow-600 text-white",
      Delegates_from_SAARC_fees : "12,000",
      ISET_Members_Fees : "11,000",
      Students_Fees: "5,500",
      Foreign_Delegates_Fees: "300",
      Foreign_Delegates_ISET_Fees: "250"
    },
    {
      title: "Regular Registration",
      deadline: "October 31, 2026",
      icon: <Calendar className="h-6 w-6 text-primary" />,
      buttonColor: "bg-blue-600 hover:bg-blue-700 text-white",
      Delegates_from_SAARC_fees : "14,000",
      ISET_Members_Fees : "13,000",
      Students_Fees: "6,000",
      Foreign_Delegates_Fees: "350",
      Foreign_Delegates_ISET_Fees: "300"
    },
    {
      title: "Late Registration",
      deadline: "November 10, 2026",
      icon: <Clock className="h-6 w-6 text-primary" />,
      buttonColor: "bg-blue-600 hover:bg-blue-700 text-white",
      Delegates_from_SAARC_fees : "16,000",
      ISET_Members_Fees : "15,000",
      Students_Fees: "7,000",
      Foreign_Delegates_Fees: "400",
      Foreign_Delegates_ISET_Fees: "350"
    },
  ];

  return (
    <section id="registration" className="py-20 bg-gradient-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 animate-fade-in">
          <Badge variant="outline" className="mb-4 bg-secondary/10 text-secondary border-secondary/20 text-2xl px-4 py-2">
            Registration
          </Badge>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Secure Your Spot at
            <span className="block text-primary font-montserrat">18SEE-2026</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-justify sm:text-center">
            Join leading researchers, practitioners, and students from around the world.
            Early bird registration offers significant savings – <a href={`${import.meta.env.VITE_ROOT_URL || ''}${import.meta.env.VITE_ROOT_URL ? '/registration-soon' : '/registration-soon'}`} className="text-primary font-bold">register</a> now!
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
                {plan.highlight && (
                  <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-xs font-semibold text-white px-3 py-1 rounded-full" >
                    {plan.highlight}
                  </span>
                )} 

                {/* Header */}
                <div className="flex items-center space-x-3 mb-4">
                  {plan.icon}
                  <h3 className="font-semibold text-xl">{plan.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-6">
                  Deadline: <span className="select-none">{plan.deadline}</span>
                </p> 

{/* Price Section */}
                <div className="space-y-2 mb-2">
                  <div className="bg-slate-50 rounded-lg p-3 border border-slate-200 transition-all duration-200 hover:bg-slate-100 hover:scale-[1.02] hover:shadow-md">
                    <div className="text-xs font-medium text-slate-600 mb-1">SAARC Delegates</div>
                    <div className="text-2xl font-bold text-slate-800">₹{plan.Delegates_from_SAARC_fees}</div>
                  </div>
                  
                  <div className="bg-slate-50 rounded-lg p-3 border border-slate-200 transition-all duration-200 hover:bg-slate-100 hover:scale-[1.02] hover:shadow-md">
                    <div className="text-xs font-medium text-slate-600 mb-1">ISET Life Members/Fellows</div>
                    <div className="text-2xl font-bold text-slate-800">₹{plan.ISET_Members_Fees}</div>
                  </div>
                  
                  <div className="bg-slate-50 rounded-lg p-3 border border-slate-200 transition-all duration-200 hover:bg-slate-100 hover:scale-[1.02] hover:shadow-md">
                    <div className="text-xs font-medium text-slate-600 mb-1">Students/Research Scholars/Spouses</div>
                    <div className="text-2xl font-bold text-slate-800">₹{plan.Students_Fees}</div>
                  </div>
                  
                  <div className="bg-slate-50 rounded-lg p-3 border border-slate-200 transition-all duration-200 hover:bg-slate-100 hover:scale-[1.02] hover:shadow-md">
                    <div className="text-xs font-medium text-slate-600 mb-1">Foreign Delegates</div>
                    <div className="text-2xl font-bold text-slate-800">${plan.Foreign_Delegates_Fees}</div>
                  </div>
                  
                  <div className="bg-slate-50 rounded-lg p-3 border border-slate-200 transition-all duration-200 hover:bg-slate-100 hover:scale-[1.02] hover:shadow-md">
                    <div className="text-xs font-medium text-slate-600 mb-1">Foreign Delegates with ISET Membership</div>
                    <div className="text-2xl font-bold text-slate-800">${plan.Foreign_Delegates_ISET_Fees}</div>
                  </div>
                </div>

                <Button
                  className={`w-full mt-6 ${plan.buttonColor}`}
                >
                  Register Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-md mt-2 mx-8 text-gray-600 text-center">
          *Participants who register for the symposium and apply for ISET membership together are eligible for a ₹1,000 waiver on the membership fee.
        </div>

      </div>
    </section>
  )
}