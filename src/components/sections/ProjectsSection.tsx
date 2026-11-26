import { currentProjects, type ProjectTeaser } from "@/config/projects";

function PhoneAsRemoteVisual() {
  return (
    <div className="relative flex h-56 w-full items-center justify-center overflow-hidden rounded-xl border border-border-subtle bg-background p-6">
      <svg
        viewBox="0 0 360 200"
        className="h-full w-full max-w-[340px]"
        role="img"
        aria-label="Minimalist schematic of a smartphone acting as an interactive game controller"
      >
        {/* Subtle background grid lines */}
        <line x1="20" y1="100" x2="340" y2="100" stroke="#18375D" strokeOpacity="0.08" strokeDasharray="4 4" />
        <line x1="180" y1="16" x2="180" y2="184" stroke="#18375D" strokeOpacity="0.08" strokeDasharray="4 4" />

        {/* Subtle signal waves */}
        <path
          d="M248 76 C264 88, 264 112, 248 124"
          fill="none"
          stroke="#8B61C2"
          strokeWidth="2"
          strokeLinecap="round"
          strokeOpacity="0.45"
        />
        <path
          d="M262 64 C284 82, 284 118, 262 136"
          fill="none"
          stroke="#8B61C2"
          strokeWidth="2"
          strokeLinecap="round"
          strokeOpacity="0.25"
        />

        {/* Stylized horizontal smartphone silhouette */}
        <rect
          x="86"
          y="46"
          width="156"
          height="108"
          rx="18"
          fill="#F7F8F5"
          stroke="#18375D"
          strokeWidth="2"
        />
        <rect
          x="96"
          y="54"
          width="136"
          height="92"
          rx="10"
          fill="#FFFFFF"
          stroke="#18375D"
          strokeOpacity="0.18"
          strokeWidth="1"
        />

        {/* Left directional pad */}
        <circle cx="132" cy="100" r="20" fill="#8B61C2" fillOpacity="0.12" stroke="#8B61C2" strokeWidth="1.5" />
        <path d="M132 91v18M123 100h18" stroke="#7045A8" strokeWidth="2.5" strokeLinecap="round" />

        {/* Right action buttons */}
        <circle cx="196" cy="91" r="6" fill="#18375D" />
        <circle cx="208" cy="103" r="6" fill="#8B61C2" />
        <circle cx="184" cy="103" r="6" fill="#8B61C2" fillOpacity="0.45" />
        <circle cx="196" cy="115" r="6" fill="#18375D" fillOpacity="0.35" />
      </svg>
    </div>
  );
}

function EarthReimaginedVisual() {
  return (
    <div className="relative flex h-56 w-full items-center justify-center overflow-hidden rounded-xl border border-border-subtle bg-background p-6">
      <svg
        viewBox="0 0 360 200"
        className="h-full w-full max-w-[340px]"
        role="img"
        aria-label="Stylized 3D topographic game terrain illustration"
      >
        {/* Stylized sky/horizon */}
        <circle cx="280" cy="48" r="18" fill="#8B61C2" fillOpacity="0.18" />
        <circle cx="280" cy="48" r="10" fill="#8B61C2" fillOpacity="0.35" />

        {/* Back stylized mountain ridge */}
        <polygon
          points="20,162 92,80 156,132 228,58 340,162"
          fill="#18375D"
          fillOpacity="0.1"
          stroke="#18375D"
          strokeOpacity="0.3"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />

        {/* Mid faceted low-poly terrain */}
        <polygon
          points="42,174 128,96 192,150 264,88 334,174"
          fill="#8B61C2"
          fillOpacity="0.16"
          stroke="#7045A8"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />

        {/* Facet lines for stylized 3D game-art feel */}
        <line x1="128" y1="96" x2="146" y2="174" stroke="#7045A8" strokeOpacity="0.45" strokeWidth="1.2" />
        <line x1="264" y1="88" x2="246" y2="174" stroke="#18375D" strokeOpacity="0.4" strokeWidth="1.2" />
        <line x1="192" y1="150" x2="192" y2="174" stroke="#18375D" strokeOpacity="0.3" strokeWidth="1.2" />

        {/* Foreground stylized contour base */}
        <path
          d="M24 174 Q110 156 180 170 T336 168"
          fill="none"
          stroke="#18375D"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

function ProjectVisual({ id }: { id: ProjectTeaser["id"] }) {
  if (id === "phone-as-remote") {
    return <PhoneAsRemoteVisual />;
  }
  return <EarthReimaginedVisual />;
}

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="scroll-mt-16 border-b border-border-subtle bg-surface py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-brand-purple-text">
            02 // Current Projects
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.02em] text-brand-navy sm:text-4xl">
            Products in active exploration.
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted">
            Each project is developed with its own direction and identity under
            the ChullLabs studio.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {currentProjects.map((project) => (
            <article
              key={project.id}
              className="flex flex-col justify-between rounded-2xl border border-border-subtle bg-background p-6 sm:p-8"
            >
              <div>
                <ProjectVisual id={project.id} />

                <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
                  <span className="font-mono text-xs uppercase tracking-[0.1em] text-muted">
                    {project.category}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-600/20 bg-amber-50 px-2.5 py-1 font-mono text-[11px] font-medium text-amber-800">
                    <span
                      className="h-1.5 w-1.5 rounded-full bg-amber-600"
                      aria-hidden="true"
                    />
                    {project.status}
                  </span>
                </div>

                <h3 className="mt-4 text-2xl font-semibold tracking-tight text-brand-navy">
                  {project.name}
                </h3>

                <p className="mt-2 text-base font-medium text-brand-purple-text">
                  {project.positioning}
                </p>

                <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                  {project.description}
                </p>
              </div>

              <div className="mt-8 border-t border-border-subtle pt-5">
                <p className="font-mono text-xs text-muted">
                  Dedicated product page planned · {project.slug}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
