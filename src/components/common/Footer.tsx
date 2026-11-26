import { siteConfig } from "@/config/site";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border-subtle bg-background">
      <div className="mx-auto flex max-w-4xl flex-col gap-2 px-4 py-8 text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>© {currentYear} {siteConfig.name}</p>
        <p className="font-mono">chulllabs.in</p>
      </div>
    </footer>
  );
}
