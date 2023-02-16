import React, { useState } from "react";
import "./Contact.scss";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import Modal from "./Modal";

import { BallTriangle } from "react-loader-spinner";

const Contact = ({ setIsLoading }) => {
  const form = useRef();
  const [showModal, setShowModal] = useState(false);

  const sendEmail = (e) => {
    setIsLoading(true);
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2c95oi6",
        "template_7u48l0q",
        form.current,
        "utPogsK0u8fAa-43s"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsLoading(false);
          setShowModal(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="contact-container">
      <div className="contact-left">
        <div className="contact-text">Get in Touch</div>
      </div>
      <div className="contact-right">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            className="user"
            placeholder="Name"
          />
          <input
            type="email"
            name="user_email"
            className="user"
            placeholder="Email"
          />
          <textarea
            name="message"
            className="user"
            id="message"
            placeholder="Message"
          />
          <input type="submit" value="Send" className="button" />
        </form>
        {showModal && <Modal setShowModal={setShowModal} />}
      </div>
    </div>
  );
};

export default Contact;
