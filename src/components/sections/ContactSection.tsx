import { siteConfig } from "@/config/site";
import { CopyEmailButton } from "@/components/common/CopyEmailButton";

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-20 py-14 sm:py-20">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="flex flex-col gap-6 rounded-xl border border-border-subtle bg-surface p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
              Contact
            </p>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="mt-2 block break-all text-lg font-semibold tracking-tight text-brand-navy transition-colors hover:text-brand-purple-text focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-purple sm:text-xl"
            >
              {siteConfig.contact.email}
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="inline-flex items-center justify-center rounded-lg bg-brand-navy px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-navy/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-purple"
            >
              Email us
            </a>
            <CopyEmailButton email={siteConfig.contact.email} />
            {siteConfig.socials.map((social) => (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg border border-border-subtle bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-surface-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-purple"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
