import React from "react";
import ME from "../../assets/nurez.jpeg";
import { FaAward, FaRegFolderOpen, FaUserTie } from "react-icons/fa";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";
import { motion } from "framer-motion";

const metrics = [
  {
    icon: FaAward,
    label: "Experience",
    value: "6+ years building on the web",
  },
  {
    icon: FaUserTie,
    label: "Teams",
    value: "4+ teams and cross-functional squads",
  },
  {
    icon: FaRegFolderOpen,
    label: "Projects",
    value: "30+ products and client builds shipped",
  },
];

const strengths = [
  "Frontend architecture that stays maintainable as products scale",
  "Responsive UI systems with careful polish, accessibility, and motion",
  "Practical full-stack support with APIs, databases, and debugging",
  "Strong collaboration inside Agile teams with clear communication",
];

function About() {
  return (
    <section id="about" className="px-4 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.28em] text-teal dark:text-emerald-400">
            About Me
          </p>
          <div className="mt-4 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="font-display text-4xl font-bold leading-tight text-ink dark:text-white md:text-5xl">
                Building thoughtful products with frontend precision and
                full-stack awareness.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-8 text-ink-soft dark:text-slate-400">
              I care about clean systems, clear communication, and interfaces
              that feel refined from first glance to final interaction.
            </p>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-teal/15 via-white/30 to-ember/10 blur-2xl dark:from-emerald-400/18 dark:via-slate-900/20 dark:to-amber-300/10" />
            <div className="relative overflow-hidden rounded-[2rem] border border-line/80 bg-white/70 p-4 shadow-card backdrop-blur transition-colors duration-500 dark:border-white/10 dark:bg-slate-900/70">
              <div className="grid gap-4 rounded-[1.5rem] border border-line/70 bg-parchment/60 p-5 transition-colors duration-500 dark:border-white/10 dark:bg-slate-950/60">
                <div className="overflow-hidden rounded-[1.5rem]">
                  <img
                    src={ME}
                    alt="Portrait of Nurudeen Saliu"
                    className="aspect-[4/4.5] w-full object-cover transition duration-700 hover:scale-[1.03]"
                  />
                </div>

                <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                  {metrics.map(({ icon: Icon, label, value }) => (
                    <article
                      key={label}
                      className="rounded-[1.25rem] border border-line bg-white px-4 py-4 transition-colors duration-500 dark:border-white/10 dark:bg-slate-900"
                    >
                      <Icon className="text-lg text-teal dark:text-emerald-400" />
                      <p className="mt-3 font-display text-sm font-semibold uppercase tracking-[0.18em] text-ink-soft dark:text-slate-400">
                        {label}
                      </p>
                      <p className="mt-2 text-sm leading-7 text-ink dark:text-white">
                        {value}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="grid gap-6"
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="rounded-[2rem] border border-line/80 bg-white/75 p-7 shadow-card transition-colors duration-500 dark:border-white/10 dark:bg-slate-900/70">
              <div className="grid gap-6">
                <p className="text-base leading-8 text-ink-soft dark:text-slate-400">
                  I am a dedicated frontend developer with over 5 years of
                  experience, specializing in JavaScript, TypeScript, React, and
                  modern web architecture. My focus is on building responsive,
                  high-performance user interfaces, backed by a useful full-stack
                  perspective for backend integration and product delivery.
                </p>

                <p className="text-base leading-8 text-ink-soft dark:text-slate-400">
                  My core strength is crafting interactive experiences with
                  React and Next.js, supported by strong fundamentals in HTML,
                  CSS, modern JavaScript, state management, and testing. I also
                  work comfortably across Node.js, Express, MongoDB, and SQL
                  systems when products need deeper technical ownership.
                </p>

                <p className="text-base leading-8 text-ink-soft dark:text-slate-400">
                  I enjoy solving complex UI problems, improving the quality of
                  shipped experiences, and collaborating clearly with designers,
                  product teams, and engineering partners. If you need someone
                  who can bridge polish and practicality, I would love to talk.
                </p>

                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full border border-line bg-parchment/70 px-4 py-2 text-sm font-semibold text-ink dark:border-white/10 dark:bg-slate-950/60 dark:text-slate-200">
                    React and Next.js
                  </span>
                  <span className="rounded-full border border-line bg-parchment/70 px-4 py-2 text-sm font-semibold text-ink dark:border-white/10 dark:bg-slate-950/60 dark:text-slate-200">
                    TypeScript and APIs
                  </span>
                  <span className="rounded-full border border-line bg-parchment/70 px-4 py-2 text-sm font-semibold text-ink dark:border-white/10 dark:bg-slate-950/60 dark:text-slate-200">
                    UI systems and performance
                  </span>
                </div>
              </div>
            </div>

            <div className="grid gap-6 rounded-[2rem] border border-line/80 bg-ink px-7 py-7 text-white shadow-card transition-colors duration-500 dark:border-white/10 dark:bg-slate-950">
              <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="font-display text-sm font-semibold uppercase tracking-[0.24em] text-white/60">
                    What I Bring
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-bold text-white">
                    Calm execution with strong product instincts
                  </h3>
                </div>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-300 transition hover:text-white"
                >
                  Let&apos;s talk
                  <FiArrowRight />
                </a>
              </div>

              <div className="grid gap-4">
                {strengths.map((strength) => (
                  <div
                    key={strength}
                    className="flex items-start gap-3 rounded-[1.25rem] border border-white/10 bg-white/5 px-4 py-4"
                  >
                    <FiCheckCircle className="mt-0.5 shrink-0 text-lg text-emerald-300" />
                    <p className="text-sm leading-7 text-white/82">{strength}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
