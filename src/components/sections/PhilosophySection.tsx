const principles = [
  {
    title: "Curiosity",
    description:
      "We start with genuine questions about how software, play, and interaction could feel different.",
  },
  {
    title: "Experimentation",
    description:
      "We test ideas early in code and prototypes, letting real behavior guide what is worth pursuing.",
  },
  {
    title: "Engineering",
    description:
      "We value clean foundations, predictable performance, and software that respects the user’s device.",
  },
  {
    title: "User Experience",
    description:
      "Clarity and tactile responsiveness matter as much as the underlying idea itself.",
  },
  {
    title: "Meaningful Products",
    description:
      "We prefer building fewer things with depth and intent rather than chasing volume.",
  },
];

export function PhilosophySection() {
  return (
    <section
      id="philosophy"
      className="scroll-mt-16 border-b border-border-subtle bg-surface py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted">
              Philosophy
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-[1.08] tracking-[-0.015em] text-brand-navy sm:text-5xl">
              How we approach <em className="italic">building.</em>
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
                  key={item.title}
                  className="grid gap-2 py-6 sm:grid-cols-12 sm:items-baseline sm:gap-6"
                >
                  <h3 className="text-base font-medium text-brand-navy sm:col-span-4">
                    {item.title}
                  </h3>
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
