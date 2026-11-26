import { siteConfig } from "@/config/site";
import { CopyEmailButton } from "@/components/common/CopyEmailButton";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 bg-[#12233B] pt-8 pb-20 text-[#F4F5F8] sm:pt-10 sm:pb-24"
    >
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="flex flex-col gap-6 rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between sm:p-9">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9FB0C7]">
              Contact
            </p>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="mt-2 block break-all text-lg font-medium tracking-tight text-white transition-colors hover:text-[#B794F4] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B794F4] sm:text-xl"
            >
              {siteConfig.contact.email}
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2 text-sm font-medium text-[#12233B] transition-colors hover:bg-white/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B794F4]"
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
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.05] px-5 py-2 text-sm font-medium text-[#F4F5F8] transition-colors hover:border-white/30 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B794F4]"
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
