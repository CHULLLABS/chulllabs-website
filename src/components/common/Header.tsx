import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Header() {
  return (
    <header className="pointer-events-none fixed inset-x-0 top-4 z-50 flex justify-center px-4 sm:top-6">
      <div className="pointer-events-auto flex items-center gap-4 rounded-full border border-brand-navy/10 bg-white/85 px-4 py-1.5 shadow-sm backdrop-blur-md sm:gap-7 sm:px-5">
        <Link
          href="/"
          className="inline-flex items-center rounded-full py-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-purple"
          aria-label="ChullLabs home"
        >
          <Image
            src={siteConfig.logo.src}
            alt={siteConfig.logo.alt}
            width={siteConfig.logo.width}
            height={siteConfig.logo.height}
            priority
            className="h-7 w-auto object-contain"
          />
        </Link>

        <nav className="flex items-center gap-4 sm:gap-6" aria-label="Primary">
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs font-medium text-foreground/75 transition-colors hover:text-brand-navy focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-purple sm:text-sm"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={`mailto:${siteConfig.contact.email}`}
          className="hidden rounded-full bg-brand-navy px-4 py-1.5 text-xs font-medium text-white transition-colors hover:bg-brand-navy/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-purple sm:inline-flex"
        >
          Get in touch
        </a>
      </div>
    </header>
  );
}
