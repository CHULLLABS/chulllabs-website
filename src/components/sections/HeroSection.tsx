export function HeroSection() {
  return (
    <section className="border-b border-border-subtle bg-background">
      <div className="mx-auto max-w-6xl px-4 pt-20 pb-16 sm:px-6 sm:pt-28 sm:pb-24 lg:px-8 lg:pt-32 lg:pb-28">
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted">
          Independent Technology Studio
        </p>

        <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[1.02] tracking-[-0.02em] text-brand-navy sm:text-7xl lg:text-[5.25rem]">
          Ideas worth <em className="italic text-brand-purple-text">exploring.</em>
          <br />
          Technology worth <em className="italic">building.</em>
        </h1>

        <div className="mt-10 grid gap-8 border-t border-border-subtle pt-8 lg:grid-cols-12 lg:items-end">
          <p className="max-w-xl text-base leading-relaxed text-muted sm:text-lg lg:col-span-7">
            ChullLabs is an independent technology studio exploring new
            possibilities through software, engineering, and creative
            experimentation.
          </p>

          <div className="flex flex-wrap items-center gap-6 lg:col-span-5 lg:justify-end">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-sm bg-brand-navy px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-navy/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-purple"
            >
              Explore projects
            </a>

            <a
              href="#contact"
              className="border-b border-foreground/30 pb-0.5 text-sm font-medium text-foreground transition-colors hover:border-brand-purple-text hover:text-brand-purple-text focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-purple"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
