import React from "react";
//importing css file
import "./contact.module.css";
//importing useRef and emailjs
import { useRef } from "react";
import emailjs from "emailjs-com";
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "SERVICE_ID",
      "TEMPLATE_ID",
      form.current,
      "PUBLIC_KEY"
    );
    e.target.reset();
  };
  return (
    <section>
        //Form Section
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="name" placeholder="Your Full Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea
          name="message"
          id="10"
          rows="7"
          placeholder="Your Messege"
          required
        ></textarea>
        //Submit Button
        <button type="submit" className="btn btn-primary">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
