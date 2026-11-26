import { currentProjects } from "@/config/projects";

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="scroll-mt-20 bg-[#12233B] pt-16 pb-12 text-[#F4F5F8] sm:pt-24 sm:pb-16"
    >
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9FB0C7]">
            In Development
          </h2>
          <span className="font-mono text-xs text-[#9FB0C7]">
            {currentProjects.length} projects
          </span>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {currentProjects.map((project, index) => (
            <div
              key={project.id}
              className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm transition-colors hover:border-[#8B61C2]/50 hover:bg-white/[0.06]"
            >
              <div>
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                    {project.name}
                  </h3>
                  <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.06] px-3 py-1 font-mono text-[11px] text-[#DCE4F0]">
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        index === 0 ? "bg-[#A982DB]" : "bg-[#7DD3FC]"
                      }`}
                      aria-hidden="true"
                    />
                    {project.status}
                  </span>
                </div>

                <p className="mt-3 text-base leading-relaxed text-[#B6C3D4]">
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
