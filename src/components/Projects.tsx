import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/portfolio";
import Reveal from "@/components/ui/Reveal";

export default function Projects() {
  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <Reveal>
        <div className="shell">
          <h2 id="projects-title" className="section-label">
            Selected Projects
          </h2>
        </div>

        <div className="mx-auto grid w-full max-w-7xl gap-5 px-4 md:px-8 lg:grid-cols-3 xl:gap-6">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group relative flex min-h-[29rem] flex-col rounded-lg border border-white/15 bg-transparent p-7 transition-[background-color,border-color] duration-200 hover:border-white/40 hover:bg-white/[0.025] focus-within:border-white/30 md:p-8 xl:min-h-[31rem] xl:p-9"
            >
              <div className="mb-12 flex items-center justify-between">
                <span className="font-mono text-sm text-neutral-600">0{index + 1}</span>
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${project.title} live site (opens in a new tab)`}
                  className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white after:absolute after:inset-0 after:rounded-lg"
                >
                  Live site
                  <ArrowUpRight
                    size={24}
                    className="text-neutral-600 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
                    aria-hidden="true"
                  />
                </a>
              </div>

              <h3 className="text-3xl font-semibold leading-tight tracking-tight text-white xl:text-[2rem]">
                {project.title}
              </h3>
              <p className="mt-5 flex-1 text-base leading-7 text-neutral-400 xl:text-lg xl:leading-8">
                {project.description}
              </p>

              <div className="mt-8 flex min-h-32 shrink-0 flex-col gap-4">
                <ul
                  className="flex flex-wrap gap-2.5"
                  aria-label={`Technologies used for ${project.title}`}
                >
                  {project.technologies.map((technology) => (
                    <li
                      key={technology}
                      className="rounded border border-white/10 px-3 py-1.5 text-xs text-white/80 [text-shadow:0_0_8px_rgba(255,255,255,0.28)]"
                    >
                      {technology}
                    </li>
                  ))}
                </ul>

                <ul
                  className="mt-auto flex flex-wrap gap-x-4 gap-y-2 text-sm"
                  aria-label={`GitHub repositories for ${project.title}`}
                >
                  {project.repositories.map(({ label, url }) => (
                    <li key={url}>
                      <a
                        href={url}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${project.title} source code · ${label} (opens in a new tab)`}
                        className="relative z-10 text-neutral-400 underline decoration-white/20 underline-offset-4 hover:text-white"
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
