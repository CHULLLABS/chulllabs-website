const pillars = [
  {
    title: "Independent Thinking",
    description:
      "We pursue ideas because they are worth solving, free from client-agency timelines or short-term trends.",
  },
  {
    title: "Engineering Craft",
    description:
      "Every product is grounded in deliberate software architecture, responsiveness, and attention to detail.",
  },
  {
    title: "Distinct Identities",
    description:
      "ChullLabs is the parent studio. Each product is shaped with its own purpose, character, and experience.",
  },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-16 border-b border-border-subtle bg-background py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-brand-purple-text">
              01 // Studio
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.02em] text-brand-navy sm:text-4xl">
              Built to explore, engineer, and ship original software.
            </h2>
          </div>

          <div className="lg:col-span-7">
            <p className="max-w-2xl text-lg leading-relaxed text-muted">
              ChullLabs exists to turn curiosity into tangible products. Rather
              than building a single platform or offering outsourced services,
              we focus on independent software projects—each shaped by
              experimentation, creative problem-solving, and care for how people
              actually experience technology.
            </p>

            <div className="mt-10 grid gap-8 border-t border-border-subtle pt-8 sm:grid-cols-3">
              {pillars.map((pillar) => (
                <div key={pillar.title}>
                  <h3 className="text-sm font-semibold text-brand-navy">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
