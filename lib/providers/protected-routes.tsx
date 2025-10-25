"use client";

import { useLayoutEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useAuthStore } from "@/lib/store/auth-store";

const publicRoutes = ["/", "/auth/login", "/auth/signup"];

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const { isAuthenticated, hasHydrated } = useAuthStore();

  useLayoutEffect(() => {
    if (!hasHydrated) return;

    const authed = isAuthenticated();

    // Redirect unauthenticated users away from private routes
    if (!authed && !publicRoutes.includes(pathname)) {
      router.replace("/auth/login");
    }

    // Redirect authenticated users away from login/signup
    if (authed && publicRoutes.includes(pathname) && pathname !== "/") {
      router.replace("/dashboard");
    }
  }, [hasHydrated, isAuthenticated, pathname, router]);

  // Only render children after Zustand hydration
  if (!hasHydrated) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <div className="border-primary h-12 w-12 animate-spin rounded-full border-b-2" />
      </div>
    );
  }

  return <>{children}</>;
}
