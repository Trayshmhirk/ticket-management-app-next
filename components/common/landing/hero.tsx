"use client";

import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden py-32 text-center">
      {/* Decorative Circles */}
      <div className="bg-primary/25 absolute -top-16 -left-20 z-10 h-64 w-64 rounded-full blur-2xl"></div>
      <div className="bg-accent/60 absolute right-24 bottom-0 z-0 h-72 w-72 rounded-full blur-2xl"></div>

      {/* Hero Content */}
      <div className="app_container z-20 space-y-6">
        <h1 className="text-primary text-5xl font-bold tracking-tight">
          Streamline Your Support Workflow
        </h1>

        <p className="text-muted-foreground mx-auto max-w-xl">
          TrayDeck helps teams track, prioritize, and resolve issues seamlessly across multiple
          frameworks — all with a consistent, intuitive interface.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Button size="lg">Get Started</Button>
          <Button variant="secondary" size="lg">
            Learn More
          </Button>
        </div>
      </div>

      {/* Wave Background */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="absolute bottom-0 left-0 z-10 w-full"
      >
        <path
          fill="#8BB8ED"
          fillOpacity="0.4"
          d="M0,64L18.5,80C36.9,96,74,128,111,165.3C147.7,203,185,245,222,250.7C258.5,256,295,224,332,218.7C369.2,213,406,235,443,218.7C480,203,517,149,554,138.7C590.8,128,628,160,665,181.3C701.5,203,738,213,775,192C812.3,171,849,117,886,96C923.1,75,960,85,997,122.7C1033.8,160,1071,224,1108,261.3C1144.6,299,1182,309,1218,288C1255.4,267,1292,213,1329,165.3C1366.2,117,1403,75,1422,53.3L1440,32L1440,320L1421.5,320C1403.1,320,1366,320,1329,320C1292.3,320,1255,320,1218,320C1181.5,320,1145,320,1108,320C1070.8,320,1034,320,997,320C960,320,923,320,886,320C849.2,320,812,320,775,320C738.5,320,702,320,665,320C627.7,320,591,320,554,320C516.9,320,480,320,443,320C406.2,320,369,320,332,320C295.4,320,258,320,222,320C184.6,320,148,320,111,320C73.8,320,37,320,18,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
}
