import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border-subtle bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5 sm:px-8">
        <Link
          href="/"
          className="inline-flex items-center rounded-md py-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-purple"
          aria-label="ChullLabs home"
        >
          <Image
            src={siteConfig.logo.src}
            alt={siteConfig.logo.alt}
            width={siteConfig.logo.width}
            height={siteConfig.logo.height}
            priority
            className="h-9 w-auto object-contain"
          />
        </Link>

        <nav className="flex items-center gap-6" aria-label="Primary">
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted transition-colors hover:text-brand-navy focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-purple"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
