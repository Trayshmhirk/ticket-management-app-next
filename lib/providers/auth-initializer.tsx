"use client";

import { useEffect } from "react";
import { initializeAuthFromStorage } from "@/lib/store/auth-store";

export default function AuthInitializer({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    initializeAuthFromStorage();
  }, []);

  return <>{children}</>;
}
