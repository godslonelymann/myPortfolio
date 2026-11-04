import Reveal from "@/components/ui/Reveal";

export default function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <Reveal className="shell grid gap-8 md:grid-cols-[1fr_2fr] md:gap-16">
        <h2 id="about-title" className="section-label h-fit md:pt-2">
          About
        </h2>
        <p className="max-w-3xl text-2xl leading-relaxed tracking-tight text-neutral-200 md:text-4xl md:leading-snug">
          I’m a 2026 Artificial Intelligence and Data Science graduate who enjoys working with data and building practical projects. I’m interested in how data moves through systems and focused on growing as a Data Engineer.

        </p>
      </Reveal>
    </section>
  );
}
