"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/70 backdrop-blur-md">
      <div className="app_container flex h-16 items-center justify-between">
        <Link href="/" className="text-primary text-xl font-bold">
          TrayDeck
        </Link>

        <nav className="text-muted-foreground hidden gap-6 text-sm font-medium md:flex">
          <a href="#about" className="hover:text-primary transition-colors">
            About
          </a>
          <a href="#features" className="hover:text-primary transition-colors">
            Features
          </a>
          <a href="#contact" className="hover:text-primary transition-colors">
            Contact
          </a>
        </nav>

        <div className="flex gap-3">
          <Link href="/auth/login">
            <Button variant="secondary" className="text-white">
              Login
            </Button>
          </Link>
          <Link href="/auth/signup">
            <Button>Get Started</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
