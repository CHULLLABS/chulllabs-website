import { siteConfig } from "@/config/site";
import { CopyEmailButton } from "@/components/common/CopyEmailButton";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="scroll-mt-16 bg-background py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-brand-purple-text">
              05 // Contact
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.02em] text-brand-navy sm:text-4xl">
              Start a conversation.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
              For general inquiries, collaborations, or questions about our
              work, reach out directly by email.
            </p>
          </div>

          <div className="lg:col-span-5 lg:flex lg:justify-end">
            <div className="w-full max-w-md rounded-2xl border border-border-subtle bg-surface p-6">
              <p className="font-mono text-xs uppercase tracking-[0.12em] text-muted">
                Direct Email
              </p>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="mt-2 block break-all text-lg font-semibold text-brand-navy underline-offset-4 hover:underline focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-purple"
              >
                {siteConfig.contact.email}
              </a>

              <div className="mt-5 flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="inline-flex items-center justify-center rounded-lg bg-brand-navy px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-navy/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-purple"
                >
                  Send Email
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
