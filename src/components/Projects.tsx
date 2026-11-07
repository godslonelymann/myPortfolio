import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/portfolio";
import Reveal from "@/components/ui/Reveal";

export default function Projects() {
  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <Reveal className="shell">
        <h2 id="projects-title" className="section-label">
          Selected Projects
        </h2>

        <div className="grid gap-5 md:gap-6">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group relative rounded-lg border border-white/15 bg-transparent p-7 transition-[background-color,border-color] duration-200 hover:border-white/40 hover:bg-white/[0.025] focus-within:border-white/30 md:p-8"
            >
              <div className="mb-5 flex min-h-6 items-center justify-between gap-4">
                <span className="type-meta font-mono">0{index + 1}</span>
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${project.title} live site (opens in a new tab)`}
                    className="type-action flex items-center gap-2 text-neutral-300 hover:text-white after:absolute after:inset-0 after:rounded-lg"
                  >
                    Live site
                    <ArrowUpRight
                      size={24}
                      className="text-neutral-600 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
                      aria-hidden="true"
                    />
                  </a>
                )}
              </div>

              <h3 className="type-title text-balance">
                {project.title}
              </h3>
              <p className="type-body mt-4">
                {project.description}
              </p>

              <div className="mt-6 flex flex-col gap-4">
                <ul
                  className="flex flex-wrap gap-2.5"
                  aria-label={`Technologies used for ${project.title}`}
                >
                  {project.technologies.map((technology) => (
                    <li
                      key={technology}
                      className="rounded border border-white/10 px-3 py-1.5 text-sm font-medium text-neutral-300"
                    >
                      {technology}
                    </li>
                  ))}
                </ul>

                <ul
                  className="type-action flex flex-wrap gap-x-4 gap-y-2"
                  aria-label={`GitHub repositories for ${project.title}`}
                >
                  {project.repositories.map(({ label, url }) => (
                    <li key={url}>
                      <a
                        href={url}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${project.title} source code · ${label} (opens in a new tab)`}
                        className="relative z-10 text-neutral-300 underline decoration-white/20 underline-offset-4 hover:text-white"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
