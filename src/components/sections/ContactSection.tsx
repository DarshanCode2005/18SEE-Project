import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  ExternalLink,
  Building
} from "lucide-react";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";

export const ContactSection = () => {
 const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const { submit } = useWeb3Forms({
    access_key: "ef31016c-6016-4107-b186-1501acd01a92",
    settings: {
      from_name: "Symposium Contact Form",
      subject: "New Contact Form Submission",
    },
    onSuccess: (msg, data) => {
      alert("Message sent successfully!");
      reset(); // clear form after success
    },
    onError: (msg, data) => {
      alert("Something went wrong. Please try again.");
    },
  });

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      content: "18see@iitr.ac.in",
      action: "mailto:18see@iitr.ac.in"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Phone",
      content: "+91-1332-285591\n+91-1332-285710\n+91-1332-285675",
      action: "tel:+911332285591"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Address",
      content: "Department of Earthquake Engineering\nIIT Roorkee, Uttarakhand 247667, India",
      action: "https://maps.app.goo.gl/vManw69NJhXoWeAo9"
    },
  ];

  const team = [
    {
      role: "Organizing Secretary",
      name: "Prof. Ravi S. Jakka",
      department: "Department of Earthquake Engineering\nIIT Roorkee",
      email: "ravi.jakka@eq.iitr.ac.in"
    },
    {
      role: "Joint Organizing Secretary",
      name: "Prof. Varun K. Singla",
      department: "Department of Earthquake Engineering\nIIT Roorkee",
      email: "singlav@eq.iitr.ac.in"
    },
    {
      role: "Joint Organizing Secretary",
      name: "Prof. Shiv Prakash",
      department: "Department of Earthquake Engineering\nIIT Roorkee",
      email: "shiv.prakash@eq.iitr.ac.in"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 bg-secondary/10 text-secondary border-secondary/20 text-2xl">
            Contact Us
          </Badge>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Have questions about the symposium? Need assistance with registration or submissions?
            Our organizing team is ready to assist you.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-12">

          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Card className="border-0 shadow-card bg-gradient-card">
              <CardHeader>
                <CardTitle className="font-serif text-xl flex items-center">
                  <Building className="h-5 w-5 text-primary mr-3" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <div className="text-primary">
                        {info.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground text-sm">
                        {info.title}
                      </h4>
                      {info.title === "Address" ? (
                        <div className="mt-1">
                          {info.action ? (
                            <a
                              href={info.action}
                              className="hover:text-primary transition-colors block"
                            >
                              <span className="block text-muted-foreground text-xs">Department of Earthquake Engineering</span>
                              <span className="block text-muted-foreground text-xs">IIT Roorkee, Uttarakhand 247667, India</span>
                              {/* <ExternalLink className="h-3 w-3 ml-1 align-middle" /> */}
                            </a>
                          ) : (
                            <>
                              <span className="block text-muted-foreground text-xs">Department of Earthquake Engineering</span>
                              <span className="block text-muted-foreground text-xs">IIT Roorkee, Uttarakhand 247667, India</span>
                            </>
                          )}
                        </div>
                      ) : (
                        <div className="text-muted-foreground text-sm mt-1 whitespace-pre-line">
                          {info.action ? (
                            <a
                              href={info.action}
                              className="hover:text-primary transition-colors flex items-center"
                            >
                              {info.content}
                              <ExternalLink className="h-3 w-3 ml-1" />
                            </a>
                          ) : (
                            info.content
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Key Contacts */}
            <Card className="border-0 shadow-card bg-gradient-card">
              <CardHeader>
                <CardTitle className="font-serif text-xl">
                  Key Contacts
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {team.map((member, index) => (
                  <div key={index} className="border-l-2 border-primary/20 pl-4">
                    <h4 className="font-semibold text-foreground text-sm">
                      {member.role}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {member.name}
                    </p>
                    <p className="text-muted-foreground text-xs">
                      {member.department}
                    </p>
                    <a
                      href={`mailto:${member.email}`}
                      className="text-primary text-xs hover:underline"
                    >
                      {member.email}
                    </a>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Card className="border-0 shadow-card bg-gradient-card">
            <CardHeader>
              <CardTitle className="font-serif text-2xl">
                Send us a Message
              </CardTitle>
              <p className="text-muted-foreground">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(submit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Full Name *
                    </label>
                    <Input
                      {...register("name", { required: "Name is required" })}
                      placeholder="Enter your full name"
                      className="border-border"
                    />
                    {errors.name?.message && <p className="text-red-500 text-xs">{String(errors.name.message)}</p>}
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      {...register("email", { required: "Email is required" })}
                      placeholder="Enter your email"
                      className="border-border"
                    />
                    {errors.email && <p className="text-red-500 text-xs">{String(errors.email.message)}</p>}
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Subject *
                  </label>
                  <Input
                    {...register("subject", { required: "Subject is required" })}
                    placeholder="What is this regarding?"
                    className="border-border"
                  />
                  {errors.subject && <p className="text-red-500 text-xs">{String(errors.subject.message)}</p>}
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Message *
                  </label>
                  <Textarea
                    rows={6}
                    {...register("message", { required: "Message is required" })}
                    placeholder="Please provide details about your inquiry..."
                    className="border-border resize-none"
                  />
                  {errors.message && <p className="text-red-500 text-xs">{String(errors.message.message)}</p>}
                </div>

                <Button
                  type="submit"
                  className="bg-gradient-primary border-0 w-full sm:w-auto"
                  size="lg"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <Card className="border-0 shadow-card bg-gradient-card overflow-hidden">
            <CardHeader>
              <CardTitle className="font-serif text-2xl text-center">
                Visit IIT Roorkee
              </CardTitle>
              <p className="text-muted-foreground text-center">
                Located in the foothills of the Himalayas, IIT Roorkee offers a scenic and inspiring venue for the symposium.
              </p>
            </CardHeader>
            <CardContent className="p-0">
              <div className="rounded-b-lg overflow-hidden">
                <div className="relative w-full h-96">
                  <iframe
                    title="IIT Roorkee Location Map"
                    src="https://www.google.com/maps?q=IIT%20Roorkee&output=embed"
                    className="absolute inset-0 w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>
                <div className="p-4 text-center">
                  <Button variant="outline" asChild>
                    <a
                      href="https://maps.app.goo.gl/vManw69NJhXoWeAo9"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Open in Google Maps
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};