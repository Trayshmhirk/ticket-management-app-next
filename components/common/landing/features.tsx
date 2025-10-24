"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Lock, BarChart3, Edit } from "lucide-react";

const features = [
  {
    title: "Secure Authentication",
    desc: "Login and signup with form validation, protected routes, and session-based access control.",
    icon: <Lock className="text-primary h-6 w-6" />,
    detail:
      "Your data stays safe with encrypted sessions that automatically log you out when inactive.",
  },
  {
    title: "Dashboard Analytics",
    desc: "View ticket statistics including total, open, and resolved tickets at a glance.",
    icon: <BarChart3 className="h-6 w-6 text-green-500" />,
    detail: "Get instant insights into your team's performance with color-coded status indicators.",
  },
  {
    title: "Complete Ticket Management",
    desc: "Create, view, edit, and delete tickets with real-time validation and status management.",
    icon: <Edit className="h-6 w-6 text-amber-400" />,
    detail:
      "Stay organized with intuitive forms that guide you through creating and updating tickets.",
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-background py-24">
      <div className="app_container text-center">
        <h2 className="text-primary mb-12 text-3xl font-bold">Powerful Features for Your Team</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, _idx) => (
            <Card
              key={_idx}
              className="group bg-card relative h-fit overflow-hidden border shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Gradient overlay that appears on hover */}
              <div className="from-primary/5 to-accent/5 absolute inset-0 bg-linear-to-br via-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Decorative circle in background */}
              <div className="bg-primary/5 absolute -top-8 -right-8 h-24 w-24 rounded-full transition-all duration-500 group-hover:scale-150" />

              <CardHeader className="relative">
                <div className="bg-primary/10 group-hover:bg-primary/20 mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110">
                  {f.icon}
                </div>
                <CardTitle className="group-hover:text-primary text-lg font-semibold transition-colors duration-300">
                  {f.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="relative pt-0">
                <p className="text-muted-foreground">{f.desc}</p>

                {/* Additional detail that appears on hover */}

                <div className="mt-3 max-h-0 overflow-hidden transition-all duration-500 group-hover:max-h-20">
                  <p className="text-muted-foreground/80 pt-2 text-sm">{f.detail}</p>
                </div>

                {/* Learn more link that appears on hover */}

                <div className="mt-2 max-h-0 overflow-hidden transition-all duration-500 group-hover:max-h-6">
                  <a href="#" className="text-primary text-sm font-medium">
                    Learn more →
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
