import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AiOutlineMenu } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";
import { FiMoon, FiSun } from "react-icons/fi";
import Logo from "../../assets/mylogo.jpeg";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#portfolio", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

function TopNav({ isDark, onToggleTheme }) {
  const [activeNav, setActiveNav] = useState("#home");
  const [showMenu, setShowMenu] = useState(false);

  const handleNavClick = (href) => {
    setActiveNav(href);
    setShowMenu(false);
  };

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 md:px-8">
      <motion.div
        className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-line/70 bg-surface/90 px-4 py-3 shadow-card backdrop-blur transition-colors duration-500 dark:border-white/10 dark:bg-slate-900/75 dark:shadow-[0_24px_60px_rgba(15,23,42,0.45)] md:px-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <a
          href="#home"
          className="flex items-center gap-3 text-ink transition-colors duration-300 dark:text-slate-50"
          onClick={() => handleNavClick("#home")}
        >
          <img
            src={Logo}
            alt="Nurudeen Saliu logo"
            className="h-11 w-11 rounded-full border border-line object-cover shadow-sm dark:border-white/10"
          />
          <div className="leading-tight">
            <p className="font-display text-lg font-bold text-ink transition-colors duration-300 dark:text-white">Nurez</p>
            <p className="text-xs uppercase tracking-[0.24em] text-ink-soft transition-colors duration-300 dark:text-slate-400">
              Frontend Engineer
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-2 rounded-full border border-line/70 bg-white/70 p-1 transition-colors duration-500 dark:border-white/10 dark:bg-slate-950/60 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => handleNavClick(item.href)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                activeNav === item.href
                  ? "bg-ink text-white shadow-sm dark:bg-white dark:text-slate-950"
                  : "text-ink-soft hover:bg-parchment hover:text-ink dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            type="button"
            onClick={onToggleTheme}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-ink transition duration-300 hover:-translate-y-0.5 hover:bg-parchment dark:border-white/10 dark:bg-slate-950/60 dark:text-amber-300 dark:hover:bg-slate-800"
            aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
          >
            {isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>
          <a
            href="https://nurez-blog.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5 hover:bg-teal dark:bg-white dark:text-slate-950 dark:hover:bg-teal dark:hover:text-white"
          >
            Visit My Blog
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-line bg-white text-ink transition hover:bg-parchment dark:border-white/10 dark:bg-slate-950/60 dark:text-white dark:hover:bg-slate-800 lg:hidden"
          onClick={() => setShowMenu((prev) => !prev)}
          aria-label={showMenu ? "Close menu" : "Open menu"}
        >
          {showMenu ? <FaTimes size={20} /> : <AiOutlineMenu size={22} />}
        </button>
      </motion.div>

      <AnimatePresence>
        {showMenu ? (
          <motion.div
            className="mx-auto mt-3 max-w-7xl overflow-hidden rounded-[2rem] border border-line bg-surface/95 px-5 py-5 shadow-card backdrop-blur transition-colors duration-500 dark:border-white/10 dark:bg-slate-900/95 lg:hidden"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
          >
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                    activeNav === item.href
                      ? "bg-ink text-white dark:bg-white dark:text-slate-950"
                      : "bg-white text-ink-soft hover:bg-parchment hover:text-ink dark:bg-slate-950/60 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <button
                type="button"
                onClick={onToggleTheme}
                className="mt-1 inline-flex items-center justify-center gap-2 rounded-2xl border border-line bg-white px-4 py-3 text-sm font-semibold text-ink transition dark:border-white/10 dark:bg-slate-950/60 dark:text-white"
              >
                {isDark ? <FiSun size={16} /> : <FiMoon size={16} />}
                {isDark ? "Light mode" : "Dark mode"}
              </button>
              <a
                href="https://nurez-blog.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex justify-center rounded-2xl bg-teal px-4 py-3 text-sm font-semibold text-white"
              >
                Visit My Blog
              </a>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

export default TopNav;
