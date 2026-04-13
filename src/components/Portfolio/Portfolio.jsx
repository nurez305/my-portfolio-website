import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowRight, FiExternalLink, FiGithub } from "react-icons/fi";
import IMG1 from "../../assets/airtime.png";
import IMG2 from "../../assets/ecom.png";
import IMG3 from "../../assets/movies.png";
import IMG10 from "../../assets/IMG-10.png";
import IMG4 from "../../assets/youtube.png";
import IMG5 from "../../assets/school.png";
import IMG6 from "../../assets/meal-order.png";
import IMG7 from "../../assets/mini-wallet.png";

const projects = [
  {
    id: 1,
    image: IMG7,
    title: "Mini Wallet App",
    category: "Finance Product",
    desc: "A personal finance app for managing accounts, transactions, budgets, and recurring payments, with responsive design, dark and light themes, and CSV import/export.",
    stack: ["React", "TypeScript", "Tailwind CSS"],
    highlight: "Budgeting, recurring payments, CSV import and export",
    github: "https://github.com/nurez305/mini-wallet",
    demo: "https://nurezminiwallet.netlify.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "E-commerce App",
    category: "Commerce Experience",
    desc: "A responsive shopping application built with React and CSS Modules, with Paystack powering product checkout and purchase flow.",
    stack: ["React", "CSS Modules", "Paystack"],
    highlight: "Checkout flow and payment integration",
    github: "https://github.com/nurez305/al-nur-store",
    demo: "https://al-nur-store.netlify.app/",
  },
  {
    id: 3,
    image: IMG1,
    title: "Airtime-to-Cash App",
    category: "Fintech Workflow",
    desc: "An airtime conversion platform with wallet functionality, transaction handling, and withdrawal support to a user's designated bank account.",
    stack: ["React", "Wallet Flow", "Bank Withdrawal"],
    highlight: "Wallet operations and withdrawal support",
    github: "https://github.com/nurez305/Airtime-2-cash-app",
    demo: "https://airtime-to-cash-frontend-master.vercel.app/",
  },
  {
    id: 4,
    image: IMG6,
    title: "Meal Order App",
    category: "Full-stack Product",
    desc: "A full-stack food ordering platform for Nigerian meals, built with a React client and a Node.js, Express, and MongoDB backend.",
    stack: ["React", "Node.js", "MongoDB"],
    highlight: "Ordering flow with full-stack implementation",
    github: "https://github.com/nurez305/Meal-order-app",
    demo: "https://fastordermeal.netlify.app/",
  },
  {
    id: 5,
    image: IMG10,
    title: "Payment UI/UX",
    category: "Landing Page Design",
    desc: "A modern payment experience concept focused on visual polish, clean UI structure, and responsive marketing-page presentation.",
    stack: ["React", "Tailwind CSS", "UI Design"],
    highlight: "Visual polish and responsive marketing layout",
    github: "https://github.com/nurez305/landing-page-ui",
    demo: "https://bankpay.netlify.app/",
  },
  {
    id: 6,
    image: IMG3,
    title: "Movie App",
    category: "Search Experience",
    desc: "A movie discovery interface where users search by keyword and instantly get related titles in a simple, responsive browsing experience.",
    stack: ["React", "Search UI", "API Data"],
    highlight: "Keyword search and fast result browsing",
    github: "https://github.com/nurez305/learning-react",
    demo: "https://moviestarapp.netlify.app/",
  },
  {
    id: 7,
    image: IMG4,
    title: "YouTube Clone App",
    category: "Media Interface",
    desc: "A responsive video browsing experience inspired by YouTube, built with React, Material UI, and Rapid API integration.",
    stack: ["React", "Material UI", "Rapid API"],
    highlight: "Video browsing with API-driven content",
    github: "https://github.com/nurez305/project_youtube_clone-main",
    demo: "http://nurez-youtube.netlify.app",
  },
  {
    id: 8,
    image: IMG5,
    title: "Multipage School Website",
    category: "Marketing Website",
    desc: "A complete multi-page education website built with HTML, CSS, and JavaScript, with a strong focus on responsive layout behavior.",
    stack: ["HTML", "CSS", "JavaScript"],
    highlight: "Responsive multi-page marketing presentation",
    github: "https://github.com/nurez305/Multipage-project",
    demo: "http://checkitoutnow.netlify.app",
  },
];

const Portfolio = () => {
  const [activeProjectId, setActiveProjectId] = useState(projects[0].id);
  const activeProject =
    projects.find((project) => project.id === activeProjectId) ?? projects[0];

  return (
    <section id="portfolio" className="px-4 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-[0.28em] text-teal dark:text-emerald-400">
              Selected Work
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-ink dark:text-white md:text-5xl">
              Product work that balances interface quality, clarity, and real
              user flow.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-[1.5rem] border border-line bg-white/75 px-5 py-5 shadow-card transition-colors duration-500 dark:border-white/10 dark:bg-slate-900/70">
              <p className="text-sm uppercase tracking-[0.22em] text-ink-soft dark:text-slate-400">
                Projects
              </p>
              <p className="mt-3 font-display text-2xl font-bold text-ink dark:text-white">
                8 featured builds
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-line bg-white/75 px-5 py-5 shadow-card transition-colors duration-500 dark:border-white/10 dark:bg-slate-900/70">
              <p className="text-sm uppercase tracking-[0.22em] text-ink-soft dark:text-slate-400">
                Focus
              </p>
              <p className="mt-3 font-display text-2xl font-bold text-ink dark:text-white">
                UI and product flow
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-line bg-white/75 px-5 py-5 shadow-card transition-colors duration-500 dark:border-white/10 dark:bg-slate-900/70">
              <p className="text-sm uppercase tracking-[0.22em] text-ink-soft dark:text-slate-400">
                Delivery
              </p>
              <p className="mt-3 font-display text-2xl font-bold text-ink dark:text-white">
                Live demos included
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <motion.div
            className="rounded-[2rem] border border-line/80 bg-white/80 p-4 shadow-card transition-colors duration-500 dark:border-white/10 dark:bg-slate-900/70"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="mb-4 flex items-center justify-between gap-3 px-1">
              <p className="font-display text-lg font-bold text-ink dark:text-white">
                Project Index
              </p>
              <span className="shrink-0 text-sm text-ink-soft dark:text-slate-400">
                {projects.length} builds
              </span>
            </div>

            <div className="flex gap-3 overflow-x-auto pb-2">
              {projects.map((project, index) => {
                const isActive = project.id === activeProject.id;

                return (
                  <button
                    key={project.id}
                    type="button"
                    onClick={() => setActiveProjectId(project.id)}
                    className={`min-w-[13.5rem] shrink-0 rounded-[1.35rem] border px-4 py-4 text-left transition-all duration-300 md:min-w-[15rem] ${
                      isActive
                        ? "border-transparent bg-ink text-white shadow-soft dark:bg-white dark:text-slate-950"
                        : "border-line bg-parchment/60 text-ink hover:-translate-y-0.5 hover:border-teal/40 hover:bg-white dark:border-white/10 dark:bg-slate-950/60 dark:text-white dark:hover:border-emerald-400/40 dark:hover:bg-slate-900"
                    }`}
                    aria-pressed={isActive}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <p
                          className={`text-xs font-semibold uppercase tracking-[0.22em] ${
                            isActive
                              ? "text-white/60 dark:text-slate-500"
                              : "text-ink-soft dark:text-slate-400"
                          }`}
                        >
                          0{index + 1}
                        </p>
                        <p className="mt-3 font-display text-base font-bold leading-snug md:text-lg">
                          {project.title}
                        </p>
                      </div>
                      <span
                        className={`mt-1 rounded-full px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] ${
                          isActive
                            ? "bg-white/10 text-white dark:bg-slate-900 dark:text-slate-300"
                            : "bg-white text-ink-soft dark:bg-slate-900 dark:text-slate-400"
                        }`}
                      >
                        {project.category}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </motion.div>

          <div className="relative overflow-hidden rounded-[2rem] border border-line/80 bg-white/80 shadow-card transition-colors duration-500 dark:border-white/10 dark:bg-slate-900/70">
            <AnimatePresence mode="wait">
              <motion.article
                key={activeProject.id}
                className="grid h-full lg:grid-cols-[0.95fr_1.05fr]"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                <div className="relative overflow-hidden">
                  <div className="absolute left-5 top-5 z-10 inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-ink shadow-sm dark:bg-slate-950/85 dark:text-white">
                    Active Project
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-tr from-ink/10 via-transparent to-teal/10 dark:from-slate-950/35 dark:to-emerald-400/10" />
                  <img
                    src={activeProject.image}
                    alt={activeProject.title}
                    className="h-64 w-full object-cover sm:h-72 lg:h-full lg:min-h-[420px]"
                  />
                </div>

                <div className="flex h-full flex-col p-5 md:p-7 lg:p-8">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-teal-soft px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-teal-deep dark:bg-emerald-400/15 dark:text-emerald-300">
                      {activeProject.category}
                    </span>
                    <span className="text-sm text-ink-soft dark:text-slate-400">
                      Selected case study
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-2xl font-bold text-ink dark:text-white sm:text-3xl md:text-[2.2rem]">
                    {activeProject.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-ink-soft dark:text-slate-400 sm:text-base sm:leading-8">
                    {activeProject.desc}
                  </p>

                  <div className="mt-6 rounded-[1.5rem] border border-line bg-parchment/60 p-4 dark:border-white/10 dark:bg-slate-950/60 sm:p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ink-soft dark:text-slate-400">
                      Project highlight
                    </p>
                    <p className="mt-3 text-sm leading-7 text-ink dark:text-white">
                      {activeProject.highlight}
                    </p>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {activeProject.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-line bg-parchment/70 px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-ink dark:border-white/10 dark:bg-slate-950/60 dark:text-slate-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto pt-6 sm:pt-8">
                    <div className="flex flex-col gap-3 border-t border-line/80 pt-5 dark:border-white/10 sm:flex-row">
                      <a
                        href={activeProject.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-line bg-white px-5 py-3 text-sm font-semibold text-ink transition duration-300 hover:-translate-y-0.5 hover:border-teal hover:text-teal dark:border-white/10 dark:bg-slate-950/60 dark:text-white dark:hover:border-emerald-400 dark:hover:text-emerald-300"
                      >
                        <FiGithub />
                        View Code
                      </a>
                      <a
                        href={activeProject.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-teal dark:bg-white dark:text-slate-950 dark:hover:bg-emerald-400"
                      >
                        Live Demo
                        <FiExternalLink />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-line bg-white/80 px-6 py-3 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:border-teal hover:text-teal dark:border-white/10 dark:bg-slate-900/70 dark:text-white dark:hover:border-emerald-400 dark:hover:text-emerald-300"
          >
            Need something similar for your product?
            <FiArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
