import { useRef, useState } from "react";
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebookMessenger } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "@emailjs/browser";
import Swal from 'sweetalert2';

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

      Swal.fire({
        icon: "success",
        title: "Message Sent!",
        text: "Thank you! Your message has been received. I'll get back to you soon.",
        buttons: false,
        timer: 3000,
      });

      // Reset submission state after 5 seconds to allow new messages
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error("Email send error:", error);

      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Failed to send message. Please try again. Error: ${
          error.text || "Unknown error"
        }`,
        button: "Try Again",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className="contact_option-icon" />
            <h4>Email</h4>
            <h5>saliu.nurudeen@yahoo.com</h5>
            <a href="mailto:saliu.nurudeen@yahoo.com">
              Click to send a message
            </a>
          </article>

          <article className="contact_option">
            <FaFacebookMessenger className="contact_option-icon" />
            <h4>Messanger</h4>
            <h5>saliu Nurudeen</h5>
            <a href="https://m.me/Nurez305" target="_blank" rel="noreferrer">
              Click to send a message
            </a>
          </article>

          <article className="contact_option">
            <BsWhatsapp className="contact_option-icon" />
            <h4>WhatsApp</h4>
            <h5>+2347036509595</h5>
            <a
              href="https://wa.me/+2347036509595"
              target="_blank"
              rel="noreferrer"
            >
              Click to send a message
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            id=""
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          {/* <button type='submit' className='btn btn-primary' >Send Message</button> */}
          <button
            type="submit"
            className={`btn btn-primary ${isLoading ? "loading" : ""}`}
            disabled={isLoading || isSubmitted}
          >
            {isLoading ? (
              <>
                <span className="spinner"></span>
                <span>Sending...</span>
              </>
            ) : isSubmitted ? (
              "Message Sent! ✓"
            ) : (
              "Send Message"
            )}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
