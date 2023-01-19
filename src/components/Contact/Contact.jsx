import React, {useRef} from 'react'
import "./Contact.css"
import {MdOutlineEmail} from 'react-icons/md'
import {FaFacebookMessenger} from 'react-icons/fa'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from 'emailjs-com'
import swal from 'sweetalert';


function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bt19kw7', 'template_bvl593d', form.current, 'CaDH0elBmpz5TQ8os')
      .then((result) => {
          console.log(result.text);
          e.target.reset()
          swal({
            icon: "success",
            text: "Thank you! Your messages have been received.",
          });
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact_container'> 
        <div className='contact_options'>
          <article className='contact_option'>
            <MdOutlineEmail className='contact_option-icon' />
            <h4>Email</h4>
            <h5>saliu.nurudeen@yahoo.com</h5>
            <a href="mailto:saliu.nurudeen@yahoo.com">Click to send a message</a>
          </article>

          <article className='contact_option'>
            <FaFacebookMessenger className='contact_option-icon'/>
            <h4>Messanger</h4>
            <h5>saliu Nurudeen</h5>
            <a href="https://m.me/Nurez305" target="_blank" rel='noreferrer'>Click to send a message</a>
          </article>

          <article className='contact_option'>
            <BsWhatsapp className='contact_option-icon' />
            <h4>WhatsApp</h4>
            <h5>+2347036509595</h5>
            <a href="https://wa.me/+2347036509595" target="_blank" rel='noreferrer'>Click to send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" id="" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary' >Send Message</button>
        </form>
      </div>
      
    </section>
  )
}

export default Contact