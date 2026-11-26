import { currentProjects, type ProjectTeaser } from "@/config/projects";

function PhoneAsRemotePlate() {
  return (
    <div className="relative flex aspect-[16/10] w-full items-center justify-center overflow-hidden rounded-sm border border-border-subtle bg-surface p-8">
      <svg
        viewBox="0 0 420 240"
        className="h-full w-full max-w-[380px]"
        role="img"
        aria-label="Minimalist architectural plate of a smartphone in landscape controller orientation"
      >
        {/* Architectural registration marks */}
        <path d="M24 24h12M24 24v12" stroke="#18375D" strokeOpacity="0.28" strokeWidth="1" />
        <path d="M396 24h-12M396 24v12" stroke="#18375D" strokeOpacity="0.28" strokeWidth="1" />
        <path d="M24 216h12M24 216v-12" stroke="#18375D" strokeOpacity="0.28" strokeWidth="1" />
        <path d="M396 216h-12M396 216v-12" stroke="#18375D" strokeOpacity="0.28" strokeWidth="1" />

        {/* Horizontal datum line */}
        <line x1="36" y1="120" x2="384" y2="120" stroke="#18375D" strokeOpacity="0.1" strokeWidth="1" />

        {/* Device frame */}
        <rect
          x="88"
          y="54"
          width="244"
          height="132"
          rx="22"
          fill="#FFFFFF"
          stroke="#18375D"
          strokeWidth="1.75"
        />
        <rect
          x="100"
          y="64"
          width="220"
          height="112"
          rx="14"
          fill="#F7F8F5"
          stroke="#18375D"
          strokeOpacity="0.18"
          strokeWidth="1"
        />

        {/* Left tactile zone */}
        <circle cx="152" cy="120" r="26" fill="none" stroke="#8B61C2" strokeWidth="1.25" />
        <circle cx="152" cy="120" r="6" fill="#8B61C2" />

        {/* Center divider */}
        <line x1="210" y1="84" x2="210" y2="156" stroke="#18375D" strokeOpacity="0.14" strokeWidth="1" />

        {/* Right tactile action points */}
        <circle cx="268" cy="103" r="6.5" fill="#18375D" />
        <circle cx="285" cy="120" r="6.5" fill="#8B61C2" />
        <circle cx="251" cy="120" r="6.5" fill="none" stroke="#18375D" strokeWidth="1.5" />
        <circle cx="268" cy="137" r="6.5" fill="none" stroke="#8B61C2" strokeWidth="1.5" />
      </svg>
    </div>
  );
}

function EarthReimaginedPlate() {
  return (
    <div className="relative flex aspect-[16/10] w-full items-center justify-center overflow-hidden rounded-sm border border-border-subtle bg-surface p-8">
      <svg
        viewBox="0 0 420 240"
        className="h-full w-full max-w-[380px]"
        role="img"
        aria-label="Stylized low-poly game terrain and topographic elevation plate"
      >
        {/* Registration marks */}
        <path d="M24 24h12M24 24v12" stroke="#18375D" strokeOpacity="0.28" strokeWidth="1" />
        <path d="M396 24h-12M396 24v12" stroke="#18375D" strokeOpacity="0.28" strokeWidth="1" />
        <path d="M24 216h12M24 216v-12" stroke="#18375D" strokeOpacity="0.28" strokeWidth="1" />
        <path d="M396 216h-12M396 216v-12" stroke="#18375D" strokeOpacity="0.28" strokeWidth="1" />

        {/* Stylized celestial disc */}
        <circle cx="320" cy="64" r="18" fill="#8B61C2" fillOpacity="0.16" stroke="#8B61C2" strokeOpacity="0.4" strokeWidth="1" />

        {/* Distant stylized ridge */}
        <polygon
          points="38,186 112,92 178,144 252,68 382,186"
          fill="#18375D"
          fillOpacity="0.08"
          stroke="#18375D"
          strokeOpacity="0.35"
          strokeWidth="1.25"
          strokeLinejoin="round"
        />

        {/* Mid faceted low-poly terrain */}
        <polygon
          points="62,196 146,108 214,162 288,96 364,196"
          fill="#8B61C2"
          fillOpacity="0.15"
          stroke="#7045A8"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />

        {/* Facet lines */}
        <line x1="146" y1="108" x2="164" y2="196" stroke="#7045A8" strokeOpacity="0.45" strokeWidth="1" />
        <line x1="288" y1="96" x2="268" y2="196" stroke="#18375D" strokeOpacity="0.4" strokeWidth="1" />
        <line x1="214" y1="162" x2="214" y2="196" stroke="#18375D" strokeOpacity="0.3" strokeWidth="1" />

        {/* Topographic horizon baseline */}
        <line x1="38" y1="196" x2="382" y2="196" stroke="#18375D" strokeWidth="1.5" />
      </svg>
    </div>
  );
}

function ProjectPlate({ id }: { id: ProjectTeaser["id"] }) {
  if (id === "phone-as-remote") {
    return <PhoneAsRemotePlate />;
  }
  return <EarthReimaginedPlate />;
}

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="scroll-mt-16 border-b border-border-subtle bg-background py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 border-b border-border-subtle pb-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted">
              Current Projects
            </p>
            <h2 className="mt-3 font-serif text-4xl leading-[1.08] tracking-[-0.015em] text-brand-navy sm:text-5xl">
              Products in active exploration.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted">
            Each project is shaped with its own identity and direction under the
            ChullLabs studio.
          </p>
        </div>

        <div className="divide-y divide-border-subtle">
          {currentProjects.map((project, index) => (
            <article
              key={project.id}
              className="grid items-center gap-10 py-14 lg:grid-cols-12 lg:gap-12"
            >
              <div
                className={
                  index % 2 === 1 ? "lg:col-span-6 lg:order-2" : "lg:col-span-6"
                }
              >
                <ProjectPlate id={project.id} />
              </div>

              <div
                className={
                  index % 2 === 1 ? "lg:col-span-6 lg:order-1" : "lg:col-span-6"
                }
              >
                <div className="flex flex-wrap items-center gap-4">
                  <span className="font-mono text-xs uppercase tracking-[0.12em] text-muted">
                    {project.category}
                  </span>
                  <span className="text-border-subtle" aria-hidden="true">
                    /
                  </span>
                  <span className="inline-flex items-center gap-1.5 font-mono text-xs text-brand-purple-text">
                    <span
                      className="h-1.5 w-1.5 rounded-full bg-brand-purple"
                      aria-hidden="true"
                    />
                    {project.status}
                  </span>
                </div>

                <h3 className="mt-4 font-serif text-3xl tracking-tight text-brand-navy sm:text-4xl">
                  {project.name}
                </h3>

                <p className="mt-3 text-lg font-medium text-foreground">
                  {project.positioning}
                </p>

                <p className="mt-3 max-w-lg text-base leading-relaxed text-muted">
                  {project.description}
                </p>

                <p className="mt-6 font-mono text-xs text-muted">
                  Planned product route: {project.slug}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
