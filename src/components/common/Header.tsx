import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Header() {
  return (
    <header className="border-b border-border-subtle bg-background">
      <div className="mx-auto flex h-16 max-w-4xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="inline-flex items-center rounded-sm py-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-purple"
          aria-label="ChullLabs home"
        >
          <Image
            src={siteConfig.logo.src}
            alt={siteConfig.logo.alt}
            width={siteConfig.logo.width}
            height={siteConfig.logo.height}
            priority
            className="h-8 w-auto object-contain"
          />
        </Link>

        <nav className="flex items-center gap-6" aria-label="Primary">
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted transition-colors hover:text-brand-navy focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-purple"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
