"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const contactDetails = [
  {
    icon: <Mail className="text-primary h-5 w-5" />,
    title: "Email",
    value: "support@traydeck.app",
    action: "Email us",
  },
  {
    icon: <Phone className="h-5 w-5 text-green-500" />,
    title: "Phone",
    value: "+234 812 345 6789",
    action: "Call us",
  },
  {
    icon: <MapPin className="h-5 w-5 text-amber-400" />,
    title: "Office",
    value: "Lagos, Nigeria",
    action: "Get directions",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-white py-24">
      <div className="app_container text-center">
        <h2 className="text-primary mb-4 text-3xl font-bold">Get in Touch</h2>
        <p className="text-muted-foreground mx-auto mb-12 max-w-2xl">
          Reach out to us for support, collaborations, or general inquiries.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {contactDetails.map((detail, index) => (
            <Card
              key={detail.title}
              className="group relative overflow-hidden border bg-white/80 py-4 shadow-lg backdrop-blur-md transition-all duration-300 hover:shadow-xl"
            >
              {/* Subtle gradient border on hover */}
              <div
                className={`absolute inset-0 ${
                  index === 0
                    ? "from-primary/10 bg-linear-to-l to-transparent"
                    : index === 1
                      ? "from-success/10 bg-linear-to-l to-transparent"
                      : "from-warning/10 bg-linear-to-l to-transparent"
                }`}
              />

              <CardContent className="relative p-0">
                <div className="flex h-full">
                  {/* Left side with icon and title */}
                  <div
                    className={`flex w-24 flex-col items-center justify-center p-6 ${
                      index === 0
                        ? "bg-primary/10"
                        : index === 1
                          ? "bg-success/15"
                          : "bg-warning/15"
                    }`}
                  >
                    <div
                      className={`mb-3 flex h-10 w-10 items-center justify-center rounded-full ${
                        index === 0
                          ? "bg-primary/20"
                          : index === 1
                            ? "bg-success/35"
                            : "bg-warning/35"
                      }`}
                    >
                      {detail.icon}
                    </div>
                    <h3 className="text-foreground text-sm font-medium">{detail.title}</h3>
                  </div>

                  {/* Right side with value and action */}
                  <div className="flex flex-1 flex-col justify-center p-6 text-left">
                    <p className="text-muted-foreground font-medium">{detail.value}</p>
                    <p
                      className={`mt-2 text-sm font-medium transition-colors duration-300 ${
                        index === 0
                          ? "text-primary"
                          : index === 1
                            ? "text-green-400"
                            : "text-amber-400/90"
                      }`}
                    >
                      {detail.action}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
