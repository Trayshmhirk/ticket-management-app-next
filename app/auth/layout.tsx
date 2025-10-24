import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-background text-foreground relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Decorative background elements */}
      <div className="bg-primary/25 absolute -top-32 -right-32 h-96 w-96 rounded-full blur-xl"></div>
      <div className="bg-accent/50 absolute -bottom-32 -left-32 h-96 w-96 rounded-full blur-xl"></div>

      {/* Main content container */}
      <div className="app_container relative z-10 w-full max-w-md">{children}</div>
    </div>
  );
}
