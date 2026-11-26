const principles = [
  {
    index: "01",
    title: "Curiosity",
    description:
      "We start with genuine questions about how software, play, and interaction could feel different.",
  },
  {
    index: "02",
    title: "Experimentation",
    description:
      "We test ideas early in code and prototypes, letting real behavior guide what is worth pursuing.",
  },
  {
    index: "03",
    title: "Engineering",
    description:
      "We value clean foundations, predictable performance, and software that respects the user’s device.",
  },
  {
    index: "04",
    title: "User Experience",
    description:
      "Clarity and tactile responsiveness matter as much as the underlying idea itself.",
  },
  {
    index: "05",
    title: "Meaningful Products",
    description:
      "We prefer building fewer things with depth and intent rather than chasing volume.",
  },
];

export function PhilosophySection() {
  return (
    <section
      id="philosophy"
      className="scroll-mt-16 border-b border-border-subtle bg-background py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-brand-purple-text">
              03 // Philosophy
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.02em] text-brand-navy sm:text-4xl">
              How we approach building.
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
              A quiet set of working principles that shape our decisions from
              early prototypes to finished products.
            </p>
          </div>

          <div className="lg:col-span-7">
            <ul className="divide-y divide-border-subtle border-y border-border-subtle">
              {principles.map((item) => (
                <li
                  key={item.index}
                  className="grid gap-2 py-6 sm:grid-cols-12 sm:items-baseline sm:gap-6"
                >
                  <div className="flex items-baseline gap-3 sm:col-span-4">
                    <span className="font-mono text-xs text-brand-purple-text">
                      {item.index}
                    </span>
                    <h3 className="text-base font-semibold text-brand-navy">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-muted sm:col-span-8 sm:text-base">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
