import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_31ididc",
        "template_vgfg39a",
        form.current,
        "ES_x_cJvjRFt3SeAJ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Skontaktuj się ze mną</h5>
      <h2>Kontakt</h2>
      <div className="contact__container-section">
        <div className="container contact__container">
          <div className="contact__options">
            <article className="contact__option">
              <MdOutlineEmail className="contact__option-icon" />
              <h4>E-mail</h4>
              <h5>marcinchowaniec21@gmail.com</h5>
              <a href="mailto:marcinchowaniec21@gmail.com" target="_blank">
                Wyślij wiadomość
              </a>
            </article>
            <article className="contact__option">
              <RiMessengerLine className="contact__option-icon" />
              <h4>Messenger</h4>
              <h5>Marcin Chowaniec</h5>
              <a href="https://m.me/marcin.chowaniec399" target="_blank">
                Wyślij wiadomość
              </a>
            </article>
            <article className="contact__option">
              <BsWhatsapp className="contact__option-icon" />
              <h4>WhatsApp</h4>
              <h5>+48 730148614</h5>
              <a
                href="https://api.whatsapp.com/send?phone=+48730148614"
                target="_blank"
              >
                Wyślij wiadomość
              </a>
            </article>
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder="Twoje imię i nazwisko"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Twój e-mail"
              required
            />
            <textarea
              name="message"
              rows="7"
              placeholder="Twoja wiadomość"
              required
            ></textarea>
            <button type="submit" className="btn btn-primary">
              Wyślij wiadomość
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
