import { useRef, useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebookMessenger } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { FiArrowRight, FiSend } from "react-icons/fi";
import "./Contact.css";

const contactOptions = [
  {
    icon: MdOutlineEmail,
    label: "Email",
    value: "saliu.nurudeen@yahoo.com",
    href: "mailto:saliu.nurudeen@yahoo.com",
    cta: "Send an email",
  },
  {
    icon: FaFacebookMessenger,
    label: "Messenger",
    value: "saliu Nurudeen",
    href: "https://m.me/Nurez305",
    cta: "Open Messenger",
  },
  {
    icon: BsWhatsapp,
    label: "WhatsApp",
    value: "+2347036509595",
    href: "https://wa.me/+2347036509595",
    cta: "Start WhatsApp chat",
  },
];

const escapeHtml = (value = "") =>
  String(value).replace(
    /[&<>"']/g,
    (char) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[char]
  );

const showContactModal = ({ title, message, variant }) => {
  const isSuccess = variant === "success";
  const isDarkMode = document.documentElement.classList.contains("dark");

  return Swal.fire({
    html: `
      <div class="contact-modal__body">
        <div class="contact-modal__icon contact-modal__icon--${variant}">
          ${isSuccess ? "✓" : "!"}
        </div>
        <p class="contact-modal__eyebrow">
          ${isSuccess ? "Message delivered" : "Something went wrong"}
        </p>
        <h3 class="contact-modal__title">${escapeHtml(title)}</h3>
        <p class="contact-modal__text">${escapeHtml(message)}</p>
      </div>
    `,
    showCloseButton: true,
    showConfirmButton: true,
    confirmButtonText: isSuccess ? "Close" : "Try again",
    buttonsStyling: false,
    timer: isSuccess ? 4500 : undefined,
    timerProgressBar: isSuccess,
    background: isDarkMode ? "#0f172a" : "#fffdf8",
    color: isDarkMode ? "#f8fafc" : "#0f172a",
    backdrop: isDarkMode ? "rgba(2, 6, 23, 0.82)" : "rgba(15, 23, 42, 0.42)",
    customClass: {
      container: "contact-modal-container",
      popup: `contact-modal-popup contact-modal-popup--${variant}`,
      htmlContainer: "contact-modal-html",
      confirmButton: "contact-modal-button",
      closeButton: "contact-modal-close",
    },
  });
};

function Contact() {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    // Prevent multiple submissions
    if (isLoading || isSubmitted) return;

    setIsLoading(true);

    try {
      await emailjs.sendForm(
        "service_bt19kw7",
        "template_bvl593d",
        form.current,
        "CaDH0elBmpz5TQ8os"
      );

      // Success handling
      e.target.reset();
      setIsSubmitted(true);

      await showContactModal({
        title: "Message sent successfully",
        message:
          "Thanks for reaching out. Your message is in, and I will get back to you as soon as possible.",
        variant: "success",
      });

      setIsSubmitted(false);
    } catch (error) {
      console.error("Email send error:", error);

      await showContactModal({
        title: "Unable to send your message",
        message: `Please try again in a moment. ${
          error.text || "An unexpected error occurred."
        }`,
        variant: "error",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="px-4 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-[0.28em] text-teal dark:text-emerald-400">
              Contact
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-ink dark:text-white md:text-5xl">
              Let&apos;s build something thoughtful, useful, and genuinely well crafted.
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-8 text-ink-soft dark:text-slate-400">
            If you&apos;re hiring, collaborating, or exploring a product idea, I&apos;m
            happy to hear more. Pick the channel that works best for you or send
            a message directly from the form.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="grid gap-6">
            <div className="rounded-[2rem] border border-line/80 bg-ink px-6 py-7 text-white shadow-card transition-colors duration-500 dark:border-white/10 dark:bg-slate-950">
              <p className="font-display text-sm font-semibold uppercase tracking-[0.24em] text-white/60">
                Availability
              </p>
              <h3 className="mt-3 font-display text-2xl font-bold text-white">
                Open to frontend and full-stack opportunities
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/78">
                I work best on products that value thoughtful UI, maintainable
                systems, and close collaboration between product, design, and engineering.
              </p>
              <a
                href="#portfolio"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald-300 transition hover:text-white"
              >
                Review recent work
                <FiArrowRight />
              </a>
            </div>

            <div className="grid gap-4">
              {contactOptions.map(({ icon: Icon, label, value, href, cta }) => {
                const isExternal = href.startsWith("http");

                return (
                  <article
                    key={label}
                    className="rounded-[1.75rem] border border-line/80 bg-white/80 p-5 shadow-card transition-colors duration-500 dark:border-white/10 dark:bg-slate-900/70"
                  >
                    <div className="flex items-start gap-4">
                      <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-teal-soft text-xl text-teal-deep dark:bg-emerald-400/15 dark:text-emerald-300">
                        <Icon />
                      </div>
                      <div className="min-w-0">
                        <p className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-ink-soft dark:text-slate-400">
                          {label}
                        </p>
                        <p className="mt-2 break-all text-base font-semibold text-ink dark:text-white">
                          {value}
                        </p>
                        <a
                          href={href}
                          {...(isExternal
                            ? { target: "_blank", rel: "noreferrer" }
                            : {})}
                          className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-teal transition hover:text-ink dark:text-emerald-300 dark:hover:text-white"
                        >
                          {cta}
                          <FiArrowRight />
                        </a>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="rounded-[2rem] border border-line/80 bg-white/85 p-6 shadow-card transition-colors duration-500 dark:border-white/10 dark:bg-slate-900/70 md:p-8">
            <div className="mb-6">
              <p className="font-display text-sm font-semibold uppercase tracking-[0.24em] text-ink-soft dark:text-slate-400">
                Direct message
              </p>
              <h3 className="mt-3 font-display text-2xl font-bold text-ink dark:text-white">
                Tell me a little about your project or role.
              </h3>
            </div>

            <form ref={form} onSubmit={sendEmail} className="grid gap-5">
              <div className="grid gap-5 md:grid-cols-2">
                <label className="grid gap-2">
                  <span className="text-sm font-semibold text-ink dark:text-slate-200">
                    Full name
                  </span>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Full Name"
                    required
                    className="w-full rounded-2xl border border-line bg-parchment/45 px-4 py-4 text-sm text-ink outline-none transition focus:border-teal focus:bg-white dark:border-white/10 dark:bg-slate-950/60 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-emerald-400 dark:focus:bg-slate-950"
                  />
                </label>

                <label className="grid gap-2">
                  <span className="text-sm font-semibold text-ink dark:text-slate-200">
                    Email address
                  </span>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    className="w-full rounded-2xl border border-line bg-parchment/45 px-4 py-4 text-sm text-ink outline-none transition focus:border-teal focus:bg-white dark:border-white/10 dark:bg-slate-950/60 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-emerald-400 dark:focus:bg-slate-950"
                  />
                </label>
              </div>

              <label className="grid gap-2">
                <span className="text-sm font-semibold text-ink dark:text-slate-200">
                  Message
                </span>
                <textarea
                  name="message"
                  rows="8"
                  placeholder="Tell me what you're building, hiring for, or trying to improve."
                  required
                  className="w-full rounded-[1.5rem] border border-line bg-parchment/45 px-4 py-4 text-sm leading-7 text-ink outline-none transition focus:border-teal focus:bg-white dark:border-white/10 dark:bg-slate-950/60 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-emerald-400 dark:focus:bg-slate-950"
                />
              </label>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm leading-7 text-ink-soft dark:text-slate-400">
                  I typically reply as soon as possible once your message comes through.
                </p>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-teal disabled:cursor-not-allowed disabled:opacity-70 dark:bg-white dark:text-slate-950 dark:hover:bg-emerald-400"
                  disabled={isLoading || isSubmitted}
                >
                  {isLoading ? (
                    <>
                      <span className="inline-flex h-4 w-4 animate-spin rounded-full border-2 border-current border-r-transparent" />
                      <span>Sending...</span>
                    </>
                  ) : isSubmitted ? (
                    "Message Sent! ✓"
                  ) : (
                    <>
                      <FiSend />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
