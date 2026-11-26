export function HorizonSection() {
  return (
    <section
      id="whats-next"
      className="scroll-mt-16 border-b border-border-subtle bg-background py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-baseline">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted lg:col-span-4">
            What&apos;s Next
          </p>
          <div className="lg:col-span-8">
            <h2 className="font-serif text-3xl tracking-[-0.015em] text-brand-navy sm:text-4xl">
              An evolving studio.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              ChullLabs is built to grow alongside the ideas we explore. As
              current projects mature and new concepts take shape, dedicated
              product pages and updates will be shared here.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
