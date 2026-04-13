import React from "react";
import { motion } from "framer-motion";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { FiLayers, FiServer } from "react-icons/fi";

const skillGroups = [
  {
    title: "Frontend Engineering",
    icon: FiLayers,
    intro:
      "Design systems, interaction polish, accessibility, and product-ready UI implementation.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Redux",
      "Git and GitHub",
    ],
  },
  {
    title: "Backend and Delivery",
    icon: FiServer,
    intro:
      "API work, data modeling, deployment-minded engineering, and production problem solving.",
    skills: [
      "Node.js",
      "Express",
      "MongoDB",
      "GraphQL",
      "MySQL",
      "PostgreSQL",
      "Docker",
      "CI/CD",
    ],
  },
];

function Experience() {
  return (
    <section id="experience" className="px-4 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-[0.28em] text-teal dark:text-emerald-400">
              Experience
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-ink dark:text-white md:text-5xl">
              A toolkit built for shipping modern products with confidence.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-[1.5rem] border border-line bg-white/75 px-5 py-5 shadow-card transition-colors duration-500 dark:border-white/10 dark:bg-slate-900/70">
              <p className="text-sm uppercase tracking-[0.22em] text-ink-soft dark:text-slate-400">
                Focus
              </p>
              <p className="mt-3 font-display text-xl font-bold text-ink dark:text-white">
                Frontend systems
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-line bg-white/75 px-5 py-5 shadow-card transition-colors duration-500 dark:border-white/10 dark:bg-slate-900/70">
              <p className="text-sm uppercase tracking-[0.22em] text-ink-soft dark:text-slate-400">
                Strength
              </p>
              <p className="mt-3 font-display text-xl font-bold text-ink dark:text-white">
                Product-minded execution
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-line bg-white/75 px-5 py-5 shadow-card transition-colors duration-500 dark:border-white/10 dark:bg-slate-900/70">
              <p className="text-sm uppercase tracking-[0.22em] text-ink-soft dark:text-slate-400">
                Delivery
              </p>
              <p className="mt-3 font-display text-xl font-bold text-ink dark:text-white">
                Build, refine, ship
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {skillGroups.map(({ title, icon: Icon, intro, skills }, index) => (
            <motion.article
              key={title}
              className="rounded-[2rem] border border-line/80 bg-white/75 p-7 shadow-card transition-colors duration-500 dark:border-white/10 dark:bg-slate-900/70"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, delay: index * 0.08, ease: "easeOut" }}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-soft text-teal-deep dark:bg-emerald-400/15 dark:text-emerald-300">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-bold text-ink dark:text-white">
                    {title}
                  </h3>
                </div>
                <span className="rounded-full border border-line bg-parchment/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-ink-soft dark:border-white/10 dark:bg-slate-950/60 dark:text-slate-400">
                  Experienced
                </span>
              </div>

              <p className="mt-5 text-base leading-8 text-ink-soft dark:text-slate-400">
                {intro}
              </p>

              <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4">
                {skills.map((skill) => (
                  <div
                    key={skill}
                    className="group flex items-start gap-2.5 rounded-[1.25rem] border border-line bg-parchment/55 px-3 py-3 transition duration-300 hover:-translate-y-1 hover:border-teal/50 hover:bg-white sm:gap-3 sm:px-4 sm:py-4 dark:border-white/10 dark:bg-slate-950/55 dark:hover:border-emerald-400/40 dark:hover:bg-slate-900"
                  >
                    <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-sm text-teal shadow-sm sm:h-8 sm:w-8 dark:bg-slate-900 dark:text-emerald-400">
                      <BsFillPatchCheckFill />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-ink sm:text-base dark:text-white">
                        {skill}
                      </p>
                      <p className="mt-1 text-xs text-ink-soft sm:text-sm dark:text-slate-400">
                        Experienced
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
