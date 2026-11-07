import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { socialLinks } from "@/data/portfolio";
import Reveal from "@/components/ui/Reveal";

const contacts = [
  { label: "Gmail", href: socialLinks.email, icon: SiGmail },
  { label: "GitHub", href: socialLinks.github, icon: FaGithub },
  { label: "LinkedIn", href: socialLinks.linkedin, icon: FaLinkedin },
];

export default function Contact() {
  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <Reveal className="shell">
        <h2 id="contact-title" className="section-label">
          Contact
        </h2>
        <div className="grid gap-10">
          <h3 className="type-display">
            Let’s build something useful.
          </h3>

          <ul className="border-t border-white/15">
            {contacts.map(({ label, href, icon: Icon }) => (
              <li key={label} className="border-b border-white/15">
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  aria-label={
                    href.startsWith("http") ? `${label} (opens in a new tab)` : label
                  }
                  className="type-action group flex items-center justify-between gap-3 py-4 text-neutral-300 transition-colors duration-200 hover:text-white"
                >
                  <span className="flex items-center gap-3">
                    <Icon size={17} aria-hidden="true" />
                    {label}
                  </span>
                  <span
                    className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
