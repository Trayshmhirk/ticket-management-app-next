"use client";

export default function Footer() {
  return (
    <footer className="border-t py-6">
      <div className="app_container text-muted-foreground text-center text-sm">
        <p>© {new Date().getFullYear()} TrayDeck. Streamline Your Support Workflow.</p>
      </div>
    </footer>
  );
}
