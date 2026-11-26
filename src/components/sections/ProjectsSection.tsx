import { currentProjects } from "@/config/projects";

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="scroll-mt-20 bg-[#161F18] pt-16 pb-12 text-[#F4F5F2] sm:pt-24 sm:pb-16"
    >
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#A4B0A6]">
            In Development
          </h2>
          <span className="font-mono text-xs text-[#A4B0A6]">
            {currentProjects.length} projects
          </span>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {currentProjects.map((project, index) => (
            <div
              key={project.id}
              className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm transition-colors hover:border-white/20 hover:bg-white/[0.06]"
            >
              <div>
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                    {project.name}
                  </h3>
                  <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.06] px-3 py-1 font-mono text-[11px] text-[#D8DEE9]">
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        index === 0 ? "bg-[#B794F4]" : "bg-[#93C5FD]"
                      }`}
                      aria-hidden="true"
                    />
                    {project.status}
                  </span>
                </div>

                <p className="mt-3 text-base leading-relaxed text-[#B8C2BA]">
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
