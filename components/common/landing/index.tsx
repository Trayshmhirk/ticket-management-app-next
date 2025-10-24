"use client";

import Navbar from "../navbar";
import Hero from "./hero";
import Features from "./features";
import Cta from "../cta";
import Footer from "../footer";
import About from "./about";
import Contact from "./contact";

export function LandingPage() {
  return (
    <div className="bg-background text-foreground flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Features />
        <Contact />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
