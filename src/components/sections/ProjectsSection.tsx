import { currentProjects } from "@/config/projects";

export function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-20 py-6 sm:py-10">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="flex items-center justify-between border-b border-border-subtle pb-3">
          <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
            In Development
          </h2>
          <span className="font-mono text-xs text-muted">
            {currentProjects.length} projects
          </span>
        </div>

        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {currentProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-border-subtle bg-surface p-6 transition-colors hover:border-brand-purple/40 sm:p-7"
            >
              {/* Crisp top accent line matching brand purple & navy */}
              <div
                className={`absolute inset-x-0 top-0 h-[3px] ${
                  index === 0 ? "bg-brand-purple" : "bg-brand-navy"
                }`}
                aria-hidden="true"
              />

              <div>
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-xl font-semibold tracking-tight text-brand-navy sm:text-2xl">
                    {project.name}
                  </h3>
                  <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-border-subtle bg-background px-2.5 py-0.5 font-mono text-[11px] font-medium text-muted">
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        index === 0 ? "bg-brand-purple" : "bg-brand-navy"
                      }`}
                      aria-hidden="true"
                    />
                    {project.status}
                  </span>
                </div>

                <p className="mt-3 text-base leading-relaxed text-muted">
                  {project.positioning}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
