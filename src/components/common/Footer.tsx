import { siteConfig } from "@/config/site";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#12233B] text-[#9FB0C7]">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-5 py-7 text-xs sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>© {currentYear} {siteConfig.name}. All rights reserved.</p>
        <p className="font-mono">chulllabs.in</p>
      </div>
    </footer>
  );
}
