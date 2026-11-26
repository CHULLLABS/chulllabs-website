import { siteConfig } from "@/config/site";
import { CopyEmailButton } from "@/components/common/CopyEmailButton";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="scroll-mt-16 bg-background py-16 sm:py-20"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted">
          Contact
        </p>

        <div className="mt-4 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="break-all font-serif text-2xl text-brand-navy underline decoration-border-subtle underline-offset-8 transition-colors hover:text-brand-purple-text hover:decoration-brand-purple-text focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-purple sm:text-3xl"
          >
            {siteConfig.contact.email}
          </a>

          <div className="flex flex-wrap items-center gap-4">
            <CopyEmailButton email={siteConfig.contact.email} />
            {siteConfig.socials.map((social) => (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="border-b border-foreground/30 pb-0.5 text-sm font-medium text-foreground transition-colors hover:border-brand-purple-text hover:text-brand-purple-text focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-purple"
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
