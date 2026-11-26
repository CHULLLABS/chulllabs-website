export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-border-subtle bg-studio-grid">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <p className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-background px-3 py-1 font-mono text-xs uppercase tracking-[0.12em] text-brand-purple-text">
              <span
                className="h-1.5 w-1.5 rounded-full bg-brand-purple"
                aria-hidden="true"
              />
              Independent Technology &amp; Product Studio
            </p>

            <h1 className="mt-6 text-4xl font-semibold tracking-[-0.03em] text-brand-navy sm:text-5xl lg:text-[3.5rem] lg:leading-[1.08]">
              Ideas worth exploring.
              <br />
              Technology worth building.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
              ChullLabs is an independent technology studio exploring new
              possibilities through software, engineering, and creative
              experimentation.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-lg bg-brand-navy px-5 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5 hover:bg-brand-navy/95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-purple"
              >
                Explore Projects
                <svg
                  width="16"
                  height="16"
                  className="ml-2 h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 5v14M19 12l-7 7-7-7" />
                </svg>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg border border-border-subtle bg-background px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-purple"
              >
                Get in Touch
                <svg
                  width="16"
                  height="16"
                  className="ml-2 h-4 w-4 text-muted"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
            </div>
          </div>

          {/* Restrained architectural studio composition */}
          <div className="hidden lg:col-span-4 lg:flex lg:justify-end" aria-hidden="true">
            <div className="relative w-full max-w-[300px] rounded-2xl border border-border-subtle bg-background p-6 shadow-xs">
              <div className="flex items-center justify-between border-b border-border-subtle pb-4">
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                  Studio Index
                </span>
                <span className="h-2 w-2 rounded-full bg-brand-purple" />
              </div>

              <div className="mt-5 space-y-4">
                <div className="rounded-xl border border-border-subtle bg-surface p-4">
                  <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-brand-purple-text">
                    01 // Experimentation
                  </p>
                  <p className="mt-1 text-sm font-medium text-brand-navy">
                    Phone as Remote
                  </p>
                </div>
                <div className="rounded-xl border border-border-subtle bg-surface p-4">
                  <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-brand-navy">
                    02 // Worlds
                  </p>
                  <p className="mt-1 text-sm font-medium text-brand-navy">
                    Earth Reimagined
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
