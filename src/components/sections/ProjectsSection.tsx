import { currentProjects } from "@/config/projects";

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="scroll-mt-16 border-b border-border-subtle bg-surface py-16 sm:py-20"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted">
          Projects
        </p>

        <ul className="mt-6 divide-y divide-border-subtle border-y border-border-subtle">
          {currentProjects.map((project) => (
            <li
              key={project.id}
              className="flex flex-col gap-2 py-6 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
            >
              <div>
                <h2 className="font-serif text-2xl text-brand-navy sm:text-3xl">
                  {project.name}
                </h2>
                <p className="mt-1 text-sm text-muted sm:text-base">
                  {project.positioning}
                </p>
              </div>

              <span className="inline-flex shrink-0 items-center gap-1.5 font-mono text-xs text-brand-purple-text">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-brand-purple"
                  aria-hidden="true"
                />
                {project.status}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
