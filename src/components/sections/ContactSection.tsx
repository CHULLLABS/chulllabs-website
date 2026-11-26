import { siteConfig } from "@/config/site";
import { CopyEmailButton } from "@/components/common/CopyEmailButton";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="scroll-mt-16 bg-surface py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-6">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted">
              Contact
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-[1.08] tracking-[-0.015em] text-brand-navy sm:text-5xl">
              Start a conversation.
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
              For general inquiries, collaborations, or questions about our
              work, reach out directly by email.
            </p>
          </div>

          <div className="lg:col-span-6 lg:flex lg:flex-col lg:items-end">
            <div className="w-full max-w-lg border-t border-border-subtle pt-6 lg:text-right">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="block break-all font-serif text-2xl text-brand-navy underline decoration-border-subtle underline-offset-8 transition-colors hover:text-brand-purple-text hover:decoration-brand-purple-text focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-purple sm:text-3xl"
              >
                {siteConfig.contact.email}
              </a>

              <div className="mt-6 flex flex-wrap items-center gap-4 lg:justify-end">
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="inline-flex items-center justify-center rounded-sm bg-brand-navy px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-navy/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-purple"
                >
                  Send email
                </a>
                <CopyEmailButton email={siteConfig.contact.email} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
