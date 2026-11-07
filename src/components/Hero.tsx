"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { toast } from "sonner";
import { professionalTitle, socialLinks } from "@/data/portfolio";

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

const greetingStrokes = [
  // Apple’s English hello from the linked Figma Community lettering export.
  // https://www.figma.com/community/file/1414773009964314315/official-apple-hello-lettering
  {
    path: `M3.956 47.474
      C10.154 44.029 15.802 39.598 22.209 32.057
      C26.571 26.908 28.916 21.03 29.027 16.976
      C29.083 13.961 27.613 11.674 24.896 11.674
      C21.881 11.674 19.983 13.961 18.81 19.211
      C17.526 24.98 16.577 31.601 14.176 52.83`,
    delay: "0s",
    duration: "0.55s",
  },
  {
    path: `M14.412 50.755
      C15.641 39.951 20.318 32.061 26.292 32.061
      C29.865 32.061 32.136 34.908 31.491 38.984
      C31.128 41.385 30.707 43.841 30.217 46.689
      C29.646 50.262 31.279 53.053 36.227 53.053
      C43.444 53.053 51.318 49.043 55.347 42.831
      C56.72 40.715 57.278 38.816 57.334 36.974
      C57.39 33.624 55.491 31.112 52.141 31.112
      C47.898 31.112 44.66 35.913 44.66 42.055
      C44.66 48.643 48.233 53.277 55.822 53.277
      C66.14 53.277 77.569 40.891 82.82 27.068
      C84.302 23.165 84.859 19.541 84.859 17.009
      C84.859 14.006 83.909 11.701 81.229 11.701
      C78.606 11.701 76.875 13.738 75.312 16.955
      C73.48 20.687 72.125 26.069 71.571 32.152
      C70.175 47.418 73.302 53.053 80.736 53.053
      C89.75 53.053 99.772 40.495 104.889 27.025
      C106.356 23.165 106.912 19.541 106.912 17.009
      C106.912 14.006 105.963 11.701 103.283 11.701
      C100.659 11.701 98.928 13.738 97.365 16.955
      C95.533 20.687 94.178 26.069 93.624 32.152
      C92.228 47.418 95.355 53.053 101.994 53.053
      C108.622 53.053 112.222 47.276 114.381 41.14
      C116.515 35.076 119.139 31.335 124.61 31.335
      C129.133 31.335 132.706 34.685 132.706 40.994
      C132.706 47.973 128.178 53.221 122.456 53.277
      C117.421 53.333 114.114 49.257 114.449 43.115
      C114.84 36.304 118.971 31.335 124.387 31.335
      C127.514 31.335 130.14 32.725 132.203 34.238
      C137.799 38.32 142.11 35.798 143.761 31.762`,
    delay: "0.55s",
    duration: "1.23s",
  },
  { path: "M140 53 C144 51 143 58 137 62", delay: "1.78s", duration: "0.13s" },
  // The capital I, apostrophe, and final m.
  { path: "M157 22 C166 13 182 8 195 11", delay: "2s", duration: "0.19s" },
  { path: "M180 12 C178 23 174 41 165 51 C161 56 155 57 153 53 C151 48 157 46 165 48 C173 50 181 55 190 51", delay: "2.19s", duration: "0.37s" },
  { path: "M201 14 C203 18 200 22 196 24", delay: "2.56s", duration: "0.12s" },
  {
    path: "M190 51 C197 44 201 36 204 34 C209 31 207 41 203 51 C211 36 217 31 221 34 C225 38 220 46 219 51 C228 36 234 31 237 35 C240 39 235 48 237 52 C240 56 247 52 252 46",
    delay: "2.68s",
    duration: "0.62s",
  },
];

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
        className="w-full"
        variants={containerVariants}
        initial={shouldReduceMotion ? false : "hidden"}
        animate="visible"
      >
        <p className="mb-5">
          <span className="sr-only">Hello, I’m</span>
          <svg
            aria-hidden="true"
            className="hero-greeting h-auto w-40 max-w-full text-neutral-200 md:w-48"
            viewBox="2 1 254 64"
            fill="none"
            stroke="currentColor"
            strokeWidth="3.35"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {greetingStrokes.map(({ path, delay, duration }) => (
              <path
                key={path}
                d={path}
                pathLength="1"
                style={{ animationDelay: delay, animationDuration: duration }}
              />
            ))}
          </svg>
        </p>
        <motion.h1
          variants={itemVariants}
          className="type-hero"
        >
          Anurag
          <br />
          Gaikwad<span className="text-neutral-600">.</span>
        </motion.h1>

        <div className="mt-10 md:mt-14">
          <motion.p
            variants={itemVariants}
            className="type-lead font-medium"
          >
            {professionalTitle}
          </motion.p>
          <motion.p
            variants={itemVariants}
            className="type-body mt-2"
          >
            I build data pipelines, design databases, and develop APIs with Python, PostgreSQL, and AWS.
          </motion.p>
          <motion.p
            variants={itemVariants}
            className="type-meta mt-5"
          >
            You can always reach me at{" "}
            <button
              type="button"
              onClick={copyEmail}
              className="type-action cursor-copy text-white transition-opacity duration-200 hover:opacity-75"
              aria-label="Copy Anurag Gaikwad’s email address to the clipboard"
              title="Copy email address"
            >
              {socialLinks.emailAddress}
            </button>
          </motion.p>
        </div>

        <motion.div
          variants={itemVariants}
          className="mt-9 flex flex-wrap gap-3 max-sm:flex-col"
        >
          <a
            href={socialLinks.resume}
            download="Anurag_Gaikwad_Data_&_Backend_Engineer.pdf"
            className="type-action inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 font-semibold text-black shadow-[0_0_24px_rgba(255,255,255,0.2)] ring-1 ring-white/25 transition-[background-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:bg-neutral-100 hover:shadow-[0_0_32px_rgba(255,255,255,0.28)] active:translate-y-0"
          >
            <Download size={16} aria-hidden="true" />
            Download Resume
          </a>
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noreferrer"
            className="type-action inline-flex items-center gap-2 rounded-md border border-white/25 px-5 py-3 text-white transition-[background-color,border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-white hover:bg-white/5 active:translate-y-0"
            aria-label="Visit Anurag Gaikwad’s GitHub profile (opens in a new tab)"
          >
            <FaGithub size={16} aria-hidden="true" />
            GitHub
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noreferrer"
            className="type-action inline-flex items-center gap-2 rounded-md border border-white/25 px-5 py-3 text-white transition-[background-color,border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-white hover:bg-white/5 active:translate-y-0"
            aria-label="Visit Anurag Gaikwad’s LinkedIn profile (opens in a new tab)"
          >
            <FaLinkedin size={16} aria-hidden="true" />
            LinkedIn
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
