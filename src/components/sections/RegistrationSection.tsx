
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
  <section id="registration" className="bg-gradient-card pb-12 sm:pb-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Section Header */}
    <div
      className="
        text-center mb-10 sm:mb-14
        animate-fade-in
        translate-y-6 sm:translate-y-10
      "
    >
      <Badge
        variant="outline"
        className="
          mb-4 bg-secondary/10 text-secondary
          border-secondary/20
          text-lg sm:text-xl lg:text-2xl
          px-3 sm:px-4 py-1.5 sm:py-2
        "
      >
        Registration
      </Badge>

      <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl mb-4 sm:mb-6">
        Secure Your Spot at
        <span className="block text-primary font-montserrat mt-1">
          18SEE-2026
        </span>
      </h2>

      <p
        className="
          text-base sm:text-lg lg:text-xl
          text-muted-foreground
          max-w-xl sm:max-w-2xl lg:max-w-3xl
          mx-auto
          leading-relaxed
          text-center sm:text-justify
        "
      >
        Join leading researchers, practitioners, and students from around the world.
        Early bird registration offers significant savings – register now!
      </p>
    </div>

    {/* Pricing Grid */}
    <div
      className="
 grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto py-12
      "
    >
      {plans.map((plan, idx) => (
        <Card
          key={idx}
          className={`
            relative border
            ${plan.highlight ? "border-yellow-400" : "border-gray-200"}
            shadow-lg rounded-2xl
            transition-transform duration-200
            hover:scale-[1.02]
            sm:hover:scale-[1.03]
          `}
        >
          <CardContent className="p-6">

            {plan.highlight && (
              <span className="
                absolute -top-3 left-1/2 -translate-x-1/2
                bg-yellow-400 text-xs font-semibold text-white
                px-3 py-1 rounded-full
              ">
                {plan.highlight}
              </span>
            )}

            {/* Header */}
            <div className="flex items-center space-x-3 mb-4">
              {plan.icon}
              <h3 className="font-semibold text-xl">{plan.title}</h3>
            </div>

            <p className="text-sm sm:text-md text-muted-foreground mb-6">
              Deadline:{" "}
              <span className="select-none">
                {plan.title === "Late Registration"
                  ? "On-site Registration"
                  : plan.deadline}
              </span>
            </p>

            {/* Prices */}
            <div className="space-y-3">
              {[
                { label: "SAARC Delegates", value: `₹${plan.Delegates_from_SAARC_fees}` },
                { label: "ISET Life Members/Fellows", value: `₹${plan.ISET_Members_Fees}` },
                { label: "Students / Research Scholars / Spouses", value: `₹${plan.Students_Fees}` },
                { label: "Foreign Delegates / Students", value: `$${plan.Foreign_Delegates_Fees}` },
                {
                  label: "Foreign Delegates / Students with ISET Membership",
                  value: `$${plan.Foreign_Delegates_ISET_Fees}`,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="
                    bg-slate-50 rounded-lg p-3
                    border border-slate-200
                    transition-colors duration-200
                    hover:bg-slate-100
                    hover:shadow-md
                  "
                >
                  <div className="text-xs font-medium text-slate-600 mb-1">
                    {item.label}
                  </div>
                  <div className="text-2xl font-bold text-slate-800">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Button */}
            {plan.highlight ? (
              <a
                href={`${import.meta.env.VITE_ROOT_URL || ""}/registration-soon`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className={`w-full mt-6 py-3 text-base ${plan.buttonColor}`}>
                  Register Now
                </Button>
              </a>
            ) : (
              <Button
                className={`w-full mt-6 py-3 text-base ${plan.buttonColor}`}
                disabled
              >
                Register Now
              </Button>
            )}

          </CardContent>
        </Card>
      ))}
    </div>

    {/* Footer Note */}
    <div
      className="
        text-sm sm:text-base
        mx-4 sm:mx-8
        mt-6 sm:mt-10
        text-gray-600
        text-center
        font-bold
        -translate-y-6 sm:-translate-y-10
      "
    >
      Participants who register for the symposium and apply for ISET membership
      together will receive a waiver of ₹1000 on the registration fee.
    </div>

  </div>
</section>

  )
}