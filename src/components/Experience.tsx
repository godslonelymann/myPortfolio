import { experience } from "@/data/portfolio";
import Reveal from "@/components/ui/Reveal";

export default function Experience() {
  return (
    <section id="experience" className="section" aria-labelledby="experience-title">
      <Reveal className="shell">
        <h2 id="experience-title" className="section-label">
          Experience
        </h2>

        {experience.map((item) => (
          <article key={`${item.company}-${item.role}`} className="not-first-of-type:mt-8 md:not-first-of-type:mt-10">
            <header className="space-y-1">
              <h3 className="type-title">
                {item.website ? (
                  <a
                    href={item.website}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block transition-opacity duration-200 hover:opacity-75"
                    aria-label={`Visit ${item.company} website (opens in a new tab)`}
                  >
                    {item.company}
                  </a>
                ) : (
                  item.company
                )}
              </h3>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <p className="type-body font-medium text-neutral-200">{item.role}</p>
                <p className="type-meta">{item.period}</p>
              </div>
            </header>
            <div className="type-body mt-4 space-y-3">
              {typeof item.description === "string" ? (
                <p>{item.description}</p>
              ) : (
                item.description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)
              )}
            </div>
          </article>
        ))}
      </Reveal>
    </section>
  );
}
