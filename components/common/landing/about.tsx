"use client";

import { Code, Layout, Shield } from "lucide-react";

const aboutFeatures = [
  {
    icon: <Code className="text-primary h-6 w-6" />,
    title: "Multi-Framework",
    desc: "Experience the same powerful functionality across React, Vue.js, and Twig implementations with identical user experiences.",
  },
  {
    icon: <Layout className="h-6 w-6 text-green-500" />,
    title: "Consistent Design",
    desc: "Enjoy a seamless, beautiful interface that feels familiar and intuitive no matter which framework you're using.",
  },
  {
    icon: <Shield className="h-6 w-6 text-amber-400/90" />,
    title: "Secure Sessions",
    desc: "Rest easy knowing your data is protected with secure authentication and session management across all platforms.",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-card text-card-foreground py-24">
      <div className="app_container text-center">
        <h2 className="text-primary mb-4 text-3xl font-bold">About TrayDeck</h2>
        <p className="text-muted-foreground mx-auto max-w-3xl leading-relaxed">
          TrayDeck demonstrates the power of modern web development by implementing identical ticket
          management systems across multiple frameworks. Each version maintains the same
          functionality, design language, and user experience while showcasing framework-specific
          implementation approaches — proving that great user experience transcends technology
          choices.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {aboutFeatures.map((feature, index) => (
            <div
              key={feature.title}
              className="group bg-background relative overflow-hidden rounded-xl border p-0 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              {/* Accent line that grows on hover */}
              <div
                className={`absolute top-0 left-0 h-1 w-full transition-all duration-500 ${
                  index === 0 ? "bg-primary" : index === 1 ? "bg-success" : "bg-warning"
                }`}
                style={{ transform: "scaleX(0.8)", transformOrigin: "left" }}
              />

              <div className="flex h-full flex-col p-8">
                <div className="mb-4 flex items-center gap-4">
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg ${
                      index === 0
                        ? "bg-primary/15"
                        : index === 1
                          ? "bg-success/25"
                          : "bg-warning/25"
                    }`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-primary text-lg font-semibold">{feature.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
