import { experience } from "@/data/portfolio";
import Reveal from "@/components/ui/Reveal";

export default function Experience() {
  return (
    <section id="experience" className="section" aria-labelledby="experience-title">
      <Reveal className="shell">
        <h2 id="experience-title" className="section-label">
          Experience
        </h2>

        <div className="max-w-3xl divide-y divide-white/15 border-y border-white/15">
          {experience.map((item) => (
            <article key={`${item.company}-${item.role}`} className="py-8 md:py-10">
              <header className="space-y-1">
                <h3 className="text-2xl font-semibold text-white">
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
                <p className="text-lg font-medium text-neutral-200 md:text-xl">{item.role}</p>
                <p className="text-sm text-neutral-500">{item.period}</p>
              </header>
              <div className="mt-4 space-y-3 text-base leading-7 text-neutral-400 md:text-lg md:leading-8">
                {typeof item.description === "string" ? (
                  <p>{item.description}</p>
                ) : (
                  item.description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)
                )}
              </div>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
