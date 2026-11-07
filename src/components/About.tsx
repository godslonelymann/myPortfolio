import Reveal from "@/components/ui/Reveal";

export default function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <Reveal className="shell grid gap-8 md:grid-cols-[1fr_2fr] md:gap-16">
        <h2 id="about-title" className="section-label h-fit md:pt-2">
          About
        </h2>
        <p className="max-w-3xl text-2xl leading-relaxed tracking-tight text-neutral-200 md:text-4xl md:leading-snug">
          A 2026 graduate in AI and Data Science with a strong interest in backend development and data engineering. Particularly interested in how data is collected, processed, stored, and kept up to date, with a focus on building reliable systems that can handle failures and recover smoothly.
        </p>
      </Reveal>
    </section>
  );
}
