import React from "react";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
];

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/nurudeen-saliu-4ab897ab/",
    label: "LinkedIn",
    icon: BsLinkedin,
  },
  {
    href: "https://www.instagram.com/nurez154/",
    label: "Instagram",
    icon: BsInstagram,
  },
  {
    href: "https://twitter.com/nurez154",
    label: "Twitter",
    icon: FaTwitter,
  },
];

function Footer() {
  return (
    <footer className="mt-24 px-4 pb-8 pt-8 md:px-8">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-line/80 bg-ink px-6 py-8 text-white shadow-card transition-colors duration-500 dark:border-white/10 dark:bg-slate-950 md:px-8 md:py-10">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <a
              href="#home"
              className="font-display text-3xl font-bold text-white transition hover:text-emerald-300"
            >
              Nurudeen Saliu
            </a>
            <p className="mt-3 max-w-xl text-sm uppercase tracking-[0.28em] text-white/50">
              Frontend Engineer and full-stack product builder
            </p>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/72">
              Thoughtful interfaces, maintainable systems, and product work
              designed to feel polished from first impression to final interaction.
            </p>
          </div>

          <div className="flex flex-col gap-6 lg:items-end">
            <div className="flex flex-wrap gap-3">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-lg text-white transition hover:-translate-y-0.5 hover:border-emerald-400/50 hover:text-emerald-300"
                >
                  <Icon />
                </a>
              ))}
            </div>

            <a
              href="#home"
              className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-300 transition hover:text-white"
            >
              Back to top
              <FiArrowUpRight />
            </a>
          </div>
        </div>

        <div className="mt-8 grid gap-5 border-t border-white/10 pt-6 md:grid-cols-[1fr_auto] md:items-center">
          <nav className="flex flex-wrap gap-4 text-sm text-white/75">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition hover:text-emerald-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <p className="text-sm text-white/50">
            &copy; Nurez Portfolio website
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
