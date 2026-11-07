import Reveal from "@/components/ui/Reveal";

export default function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <Reveal className="shell">
        <h2 id="about-title" className="section-label">
          About
        </h2>
        <p className="type-lead text-[length:clamp(1.375rem,2.5vw,1.75rem)]">
          A 2026 graduate in AI and Data Science with a strong interest in backend development and data engineering. Particularly interested in how data is collected, processed, stored, and kept up to date, with a focus on building reliable systems that can handle failures and recover smoothly.
        </p>
      </Reveal>
    </section>
  );
}
