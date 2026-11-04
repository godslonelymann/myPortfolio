"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { toast } from "sonner";
import { socialLinks, technicalSkills } from "@/data/portfolio";

const containerVariants: Variants = {
  hidden: {},
  visible: {},
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const copyEmail = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(socialLinks.emailAddress);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = socialLinks.emailAddress;
        textArea.style.position = "fixed";
        textArea.style.opacity = "0";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        const copied = document.execCommand("copy");
        textArea.remove();

        if (!copied) {
          throw new Error("Clipboard copy failed");
        }
      }

      toast("Copied to Clipboard", { id: "email-copied" });
    } catch {
      toast.error("Unable to copy email");
    }
  };

  return (
    <section id="top" className="shell flex min-h-svh items-center py-18 md:py-24">
      <motion.div
        className="grid w-full items-center gap-16 lg:grid-cols-2 lg:gap-12 xl:gap-16"
        variants={containerVariants}
        initial={shouldReduceMotion ? false : "hidden"}
        animate="visible"
      >
        <div className="min-w-0">
          <motion.p
            variants={itemVariants}
            className="mb-5 text-sm font-medium tracking-wide text-neutral-400"
          >
            Hello, I’m
          </motion.p>
          <motion.h1
            variants={itemVariants}
            className="text-[clamp(3.5rem,10vw,8rem)] font-semibold leading-[0.88] tracking-[-0.065em] text-white max-[340px]:text-5xl lg:text-[clamp(5rem,8vw,7.25rem)]"
          >
            Anurag
            <br />
            Gaikwad<span className="text-neutral-600">.</span>
          </motion.h1>

          <div className="mt-10 max-w-3xl border-l border-white/25 pl-5 md:mt-14 md:pl-7">
            <motion.p
              variants={itemVariants}
              className="text-xl leading-relaxed text-white md:text-2xl"
            >
              Aspiring Data Engineer building reliable and scalable pipelines that make data reliable, accessible and ready for analysis.
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="mt-5 text-xs leading-7 text-neutral-400 md:text-base"
            >
              You can always reach me at{" "}
              <button
                type="button"
                onClick={copyEmail}
                className="cursor-copy text-sm font-medium text-white transition-opacity duration-200 hover:opacity-75 text-xs md:text-base"
                aria-label="Copy Anurag Gaikwad’s email address to the clipboard"
                title="Copy email address"
              >
                {socialLinks.emailAddress}
              </button>
            </motion.p>
          </div>

          <motion.div
            variants={itemVariants}
            className="mt-9 flex flex-wrap gap-3 max-sm:w-full max-sm:flex-col"
          >
            <a
              href={socialLinks.resume}
              download="Anurag_Gaikwad_Data_Engineer_Resume.pdf"
              className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-black shadow-[0_0_24px_rgba(255,255,255,0.2)] ring-1 ring-white/25 transition-[background-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:bg-neutral-100 hover:shadow-[0_0_32px_rgba(255,255,255,0.28)] active:translate-y-0 max-sm:w-full max-sm:justify-center"
            >
              <Download size={16} aria-hidden="true" />
              Download Resume
            </a>
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-white/25 px-5 py-3 text-sm font-semibold text-white transition-[background-color,border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-white hover:bg-white/5 active:translate-y-0 max-sm:w-full max-sm:justify-center"
              aria-label="Visit Anurag Gaikwad’s GitHub profile (opens in a new tab)"
            >
              <FaGithub size={16} aria-hidden="true" />
              GitHub
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-white/25 px-5 py-3 text-sm font-semibold text-white transition-[background-color,border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-white hover:bg-white/5 active:translate-y-0 max-sm:w-full max-sm:justify-center"
              aria-label="Visit Anurag Gaikwad’s LinkedIn profile (opens in a new tab)"
            >
              <FaLinkedin size={16} aria-hidden="true" />
              LinkedIn
            </a>
          </motion.div>
        </div>

        <motion.aside
          variants={itemVariants}
          aria-label="Technical skills"
          className="relative flex flex-col overflow-hidden rounded-2xl border border-white/35 bg-transparent p-5 shadow-[0_24px_80px_rgba(0,0,0,0.22),inset_0_1px_0_rgba(255,255,255,0.08)] ring-1 ring-inset ring-white/[0.08] lg:self-stretch"
        >
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent"
          />
          <dl className="flex flex-1 flex-col gap-4 lg:justify-between">
            {technicalSkills.map((group) => (
              <div key={group.category}>
                <dt className="mb-2 text-sm font-medium uppercase tracking-[0.14em] text-neutral-400">
                  {group.category}
                </dt>
                <dd className="flex flex-wrap gap-1.5">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-white/[0.12] bg-white/[0.035] px-3 py-1.5 text-[0.8125rem] font-medium leading-none text-neutral-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-md transition-colors duration-200 hover:border-white/25 hover:bg-white/[0.07] hover:text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </motion.aside>
      </motion.div>
    </section>
  );
}
