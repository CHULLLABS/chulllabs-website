const tenets = [
  {
    title: "Independent thinking",
    description:
      "We pursue ideas because they are worth solving, free from client-agency timelines or short-term trends.",
  },
  {
    title: "Engineering craft",
    description:
      "Every product is grounded in deliberate software architecture, responsiveness, and attention to detail.",
  },
  {
    title: "Distinct identities",
    description:
      "ChullLabs is the parent studio. Each product is shaped with its own purpose, character, and experience.",
  },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-16 border-b border-border-subtle bg-surface py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted">
              The Studio
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-[1.08] tracking-[-0.015em] text-brand-navy sm:text-5xl">
              Built to explore, engineer, and ship{" "}
              <em className="italic">original</em> software.
            </h2>
          </div>

          <div className="lg:col-span-7">
            <p className="max-w-2xl text-lg leading-relaxed text-foreground/85">
              ChullLabs exists to turn curiosity into tangible products. Rather
              than building a single platform or offering outsourced services,
              we focus on independent software projects—each shaped by
              experimentation, creative problem-solving, and care for how people
              actually experience technology.
            </p>

            <dl className="mt-12 divide-y divide-border-subtle border-t border-border-subtle">
              {tenets.map((tenet) => (
                <div
                  key={tenet.title}
                  className="grid gap-2 py-5 sm:grid-cols-12 sm:gap-6"
                >
                  <dt className="text-sm font-medium text-brand-navy sm:col-span-4">
                    {tenet.title}
                  </dt>
                  <dd className="text-sm leading-relaxed text-muted sm:col-span-8">
                    {tenet.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
