import Image from "next/image";
import { siteConfig } from "@/config/site";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[92vh] flex-col items-center justify-between overflow-hidden bg-surface px-4 pt-28 pb-8 sm:min-h-screen sm:pt-36 sm:pb-10">
      {/* Full-bleed atmospheric landscape */}
      <Image
        src={siteConfig.heroImage}
        alt=""
        fill
        priority
        className="pointer-events-none object-cover object-bottom select-none"
      />

      {/* Top readability veil blending seamlessly into the open sky */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-2/3 bg-gradient-to-b from-white/55 via-white/20 to-transparent"
        aria-hidden="true"
      />

      {/* Bottom meadow-to-forest fade so the lower section flows seamlessly */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#161F18] via-[#161F18]/45 to-transparent"
        aria-hidden="true"
      />

      {/* Centered editorial headline in the open sky */}
      <div className="relative z-10 mx-auto max-w-2xl text-center">
        <p className="inline-flex items-center rounded-full border border-brand-navy/10 bg-white/80 px-3.5 py-1 text-[11px] font-medium tracking-[0.06em] text-brand-navy backdrop-blur-sm">
          Independent Technology Studio
        </p>

        <h1 className="mt-5 text-4xl font-semibold tracking-[-0.035em] text-brand-navy sm:text-6xl sm:leading-[1.06]">
          Ideas worth exploring.
          <span className="block text-foreground/85">
            Technology worth building.
          </span>
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-foreground/75 sm:text-base">
          ChullLabs is an independent technology studio exploring new
          possibilities through software, engineering, and creative
          experimentation.
        </p>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-1.5 rounded-full border border-brand-navy/10 bg-white/95 px-5 py-2.5 text-sm font-medium text-brand-navy shadow-sm transition-all hover:-translate-y-0.5 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-purple"
          >
            Explore projects
            <span aria-hidden="true">→</span>
          </a>

          <a
            href="#contact"
            className="text-sm font-medium text-brand-navy/85 transition-colors hover:text-brand-navy focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-purple"
          >
            Contact studio
          </a>
        </div>
      </div>

      {/* Bottom scroll cue */}
      <a
        href="#projects"
        className="relative z-10 inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-black/25 px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-white/90 backdrop-blur-md transition-colors hover:bg-black/35 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        Scroll
        <span aria-hidden="true">↓</span>
      </a>
    </section>
  );
}
