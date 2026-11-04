import { experience } from "@/data/portfolio";
import Reveal from "@/components/ui/Reveal";

export default function Experience() {
  return (
    <section id="experience" className="section" aria-labelledby="experience-title">
      <Reveal className="shell">
        <h2 id="experience-title" className="section-label">
          Experience
        </h2>

        <div className="border-y border-white/15">
          {experience.map((item) => (
            <article key={`${item.company}-${item.role}`} className="grid gap-7 py-8 md:grid-cols-12 md:gap-8 md:py-10">
              <div className="md:col-span-3">
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
                <p className="mt-2 text-sm text-neutral-500">{item.period}</p>
              </div>
              <div className="md:col-span-3">
                <p className="text-lg font-medium text-neutral-200 md:text-xl">{item.role}</p>
              </div>
              <p className="max-w-2xl text-base leading-7 text-neutral-400 md:col-span-6 md:text-lg md:leading-8">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
