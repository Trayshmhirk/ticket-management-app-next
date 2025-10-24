"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Cta() {
  return (
    <section className="bg-accent py-20">
      <div className="app_container text-center">
        <h2 className="text-accent-foreground mb-4 text-3xl font-semibold">
          Ready to Get Started?
        </h2>
        <p className="text-muted-foreground mb-8">
          Create your free account today and experience seamless ticket management.
        </p>
        <Link href="/auth/signup">
          <Button size="lg" variant="default">
            Sign Up for Free
          </Button>
        </Link>
      </div>
    </section>
  );
}
