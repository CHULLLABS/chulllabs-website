export function HeroSection() {
  return (
    <section className="bg-background pt-16 pb-12 sm:pt-24 sm:pb-16">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-purple-text">
          Independent Technology Studio
        </p>

        <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.035em] text-brand-navy sm:text-6xl sm:leading-[1.06]">
          Ideas worth exploring.
          <span className="block text-foreground/85">
            Technology worth building.
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          ChullLabs is an independent technology studio exploring new
          possibilities through software, engineering, and creative
          experimentation.
        </p>
      </div>
    </section>
  );
}
