import { siteConfig } from "@/config/site";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border-subtle bg-background">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-5 py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>© {currentYear} {siteConfig.name}. All rights reserved.</p>
        <p className="font-mono">chulllabs.in</p>
      </div>
    </footer>
  );
}
