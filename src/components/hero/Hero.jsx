import ME from '../../assets/programmer.png'
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import CV from '../../assets/saliu-nurudeen.pdf'
import { FiArrowRight, FiExternalLink, FiGithub, FiLinkedin } from "react-icons/fi";

const Hero = () => {
  const leftVariant = {
    hidden: {
      y: 36,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };
  const rightVariant = {
    hidden: {
      y: 36,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="home"
      className="relative mt-0 overflow-hidden px-4 pb-16 pt-10 transition-colors duration-500 dark:bg-transparent md:px-8 md:pb-24 md:pt-12"
    >
      <div className="absolute inset-x-0 top-0 -z-10 h-[42rem] bg-hero-glow transition-opacity duration-500 dark:opacity-0" />
      <div className="absolute inset-0 -z-10 hidden bg-[radial-gradient(circle_at_top_left,rgba(52,211,153,0.18),transparent_22%),radial-gradient(circle_at_top_right,rgba(251,191,36,0.12),transparent_18%),linear-gradient(180deg,#08111f_0%,#020617_100%)] dark:block" />
      <div className="absolute left-[6%] top-28 -z-10 hidden h-40 w-40 rounded-full bg-teal/10 blur-3xl dark:bg-teal/20 md:block" />
      <div className="absolute right-[8%] top-40 -z-10 hidden h-56 w-56 rounded-full bg-ember/10 blur-3xl dark:bg-amber-300/10 md:block" />

      <div className="mx-auto max-w-7xl">
        <motion.div
          className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]"
          initial={"hidden"}
          whileInView={"show"}
          transition={{ staggerChildren: 0.14 }}
          viewport={{ once: true }}
        >
          <motion.div className="relative" variants={leftVariant}>
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-line bg-white/80 px-4 py-2 text-sm font-semibold text-ink shadow-sm backdrop-blur transition-colors duration-500 dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-100">
              <span className="inline-flex h-2.5 w-2.5 rounded-full bg-teal dark:bg-emerald-400" />
              Available for frontend and full-stack opportunities
            </div>

            <p className="mb-5 font-display text-xl text-ink-soft transition-colors duration-500 dark:text-slate-400 md:text-2xl">
              Hello there, I&apos;m
            </p>

            <div className="mb-6 font-display text-4xl font-bold leading-tight text-teal transition-colors duration-500 dark:text-emerald-400 sm:text-5xl md:text-6xl">
              <span className="block">
                <Typewriter
                  options={{
                    strings: ["Nurudeen Saliu"],
                    autoStart: true,
                    loop: true,
                    cursor: "|",
                    pauseFor: 5000,
                  }}
                />
              </span>
            </div>

            <h1 className="max-w-3xl font-display text-4xl font-bold leading-[1.05] text-ink transition-colors duration-500 dark:text-white sm:text-5xl lg:text-7xl">
              I design and build
              <span className="text-teal dark:text-emerald-400"> thoughtful web interfaces </span>
              with React, Node.js, and product-minded precision.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-ink-soft transition-colors duration-500 dark:text-slate-400 md:text-lg">
              Frontend-focused full-stack developer crafting responsive,
              high-performance products with strong UI polish, scalable code,
              and a clear bias toward great user experience.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="#portfolio" className="btn btn-primary">
                View Projects
                <FiArrowRight />
              </a>
              <a href={CV} target="_blank" rel="noreferrer" className="btn">
                View CV
                <FiExternalLink />
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-ink-soft">
              <div className="rounded-full border border-line bg-white/80 px-4 py-2 shadow-sm transition-colors duration-500 dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-300">
                6+ years building for the web
              </div>
              <div className="rounded-full border border-line bg-white/80 px-4 py-2 shadow-sm transition-colors duration-500 dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-300">
                React, Next.js, Node.js, TypeScript
              </div>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <a
                href="https://github.com/nurez305"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-line bg-white text-ink transition hover:-translate-y-0.5 hover:border-teal hover:text-teal dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-200 dark:hover:border-emerald-400 dark:hover:text-emerald-400"
                aria-label="GitHub profile"
              >
                <FiGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/nurudeen-saliu-4ab897ab/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-line bg-white text-ink transition hover:-translate-y-0.5 hover:border-teal hover:text-teal dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-200 dark:hover:border-emerald-400 dark:hover:text-emerald-400"
                aria-label="LinkedIn profile"
              >
                <FiLinkedin />
              </a>
            </div>
          </motion.div>

          <motion.div className="relative" variants={rightVariant}>
            <div className="relative mx-auto max-w-xl">
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-teal/20 via-white/40 to-ember/20 blur-2xl dark:from-emerald-400/20 dark:via-slate-900/30 dark:to-amber-300/10" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/70 p-4 shadow-card backdrop-blur transition-colors duration-500 dark:border-white/10 dark:bg-slate-900/75 dark:shadow-[0_24px_60px_rgba(15,23,42,0.48)]">
                <div className="rounded-[1.5rem] border border-line bg-parchment/60 p-6 transition-colors duration-500 dark:border-white/10 dark:bg-slate-950/60">
                  <div className="mb-5 flex items-center justify-between rounded-2xl border border-line bg-white px-4 py-3 transition-colors duration-500 dark:border-white/10 dark:bg-slate-900">
                    <div>
                      <p className="text-xs uppercase tracking-[0.28em] text-ink-soft transition-colors duration-500 dark:text-slate-400">
                        Current Focus
                      </p>
                      <p className="mt-1 font-display text-xl font-bold text-ink transition-colors duration-500 dark:text-white">
                        Frontend systems
                      </p>
                    </div>
                    <div className="rounded-full bg-teal-soft px-3 py-1 text-sm font-semibold text-teal-deep dark:bg-emerald-400/15 dark:text-emerald-300">
                      Building
                    </div>
                  </div>

                  <img
                    src={ME}
                    alt="Illustration representing software development"
                    className="mx-auto w-full max-w-md animate-float"
                  />

                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl border border-line bg-white px-4 py-4 transition-colors duration-500 dark:border-white/10 dark:bg-slate-900">
                      <p className="text-xs uppercase tracking-[0.22em] text-ink-soft transition-colors duration-500 dark:text-slate-400">
                        Speciality
                      </p>
                      <p className="mt-2 text-sm font-semibold text-ink transition-colors duration-500 dark:text-white">
                        UI engineering, design systems, app performance
                      </p>
                    </div>
                    <div className="rounded-2xl border border-line bg-ink px-4 py-4 text-white transition-colors duration-500 dark:border-white/10 dark:bg-emerald-500/10 dark:text-emerald-100">
                      <p className="text-xs uppercase tracking-[0.22em] text-white/60 dark:text-emerald-200/70">
                        Stack
                      </p>
                      <p className="mt-2 text-sm font-semibold">
                        React, Next.js, Node, MongoDB, PostgreSQL
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
