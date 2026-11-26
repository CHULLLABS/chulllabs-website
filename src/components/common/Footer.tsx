import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border-subtle bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="space-y-3">
            <Link
              href="/"
              className="inline-flex items-center rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-purple"
              aria-label="ChullLabs home"
            >
              <Image
                src={siteConfig.logo.src}
                alt={siteConfig.logo.alt}
                width={siteConfig.logo.width}
                height={siteConfig.logo.height}
                className="h-9 w-auto object-contain"
              />
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-muted">
              Independent technology and product studio.
            </p>
          </div>

          <div className="flex flex-wrap gap-12">
            <div className="space-y-2.5">
              <p className="font-mono text-xs uppercase tracking-[0.12em] text-muted">
                Navigation
              </p>
              <ul className="space-y-2 text-sm">
                {siteConfig.nav.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="text-foreground/85 transition-colors hover:text-brand-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-purple"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-2.5">
              <p className="font-mono text-xs uppercase tracking-[0.12em] text-muted">
                Contact
              </p>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-foreground/85 transition-colors hover:text-brand-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-purple"
                  >
                    {siteConfig.contact.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-border-subtle pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} {siteConfig.name}. All rights reserved.</p>
          <p className="font-mono">chulllabs.in</p>
        </div>
      </div>
    </footer>
  );
}
