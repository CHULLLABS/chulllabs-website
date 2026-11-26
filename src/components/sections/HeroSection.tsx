export function HeroSection() {
  return (
    <section className="border-b border-border-subtle bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted">
          Independent Technology Studio
        </p>

        <h1 className="mt-5 font-serif text-4xl leading-[1.06] tracking-[-0.02em] text-brand-navy sm:text-6xl">
          Ideas worth <em className="italic text-brand-purple-text">exploring.</em>
          <br />
          Technology worth <em className="italic">building.</em>
        </h1>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
          ChullLabs is an independent technology studio exploring new
          possibilities through software, engineering, and creative
          experimentation.
        </p>
      </div>
    </section>
  );
}
