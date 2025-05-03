import React, { useState } from "react";
import "./Contact.scss";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import Modal from "./Modal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const Contact = ({ setIsLoading, info }) => {
  const form = useRef();
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.user_name.trim()) {
      errors.user_name = "Name is required";
    }
    
    if (!formData.user_email.trim()) {
      errors.user_email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.user_email)) {
      errors.user_email = "Email is invalid";
    }
    
    if (!formData.message.trim()) {
      errors.message = "Message is required";
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsLoading(true);

    emailjs
      .sendForm(
        "service_ge1oxxb",
        "template_7u48l0q",
        form.current,
        "utPogsK0u8fAa-43s"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsLoading(false);
          setShowModal(true);
          setFormData({
            user_name: '',
            user_email: '',
            message: ''
          });
        },
        (error) => {
          console.log(error.text);
          setIsLoading(false);
        }
      );
  };

  return (
    <div className="contact-container" id="contact">
      <div className="contact-overlay"></div>
      <div className="contact-content">
        <div className="contact-left">
          <h2 className="contact-title">Get in Touch</h2>
          <p className="contact-subtitle">
            Feel free to reach out to me for any questions or opportunities!
          </p>
          
          <div className="contact-info">
            <div className="contact-info-item">
              <FontAwesomeIcon icon={faEnvelope} />
              <span>{info.contact.email}</span>
            </div>
            <div className="contact-info-item">
              <FontAwesomeIcon icon={faPhone} />
              <span>{info.contact.phone}</span>
            </div>
            <div className="contact-info-item">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <span>{info.contact.location}</span>
            </div>
          </div>
        </div>
        
        <div className="contact-right">
          <form ref={form} onSubmit={sendEmail}>
            <div className="form-group">
              <input
                type="text"
                name="user_name"
                className={`user ${formErrors.user_name ? 'error' : ''}`}
                placeholder="Name"
                value={formData.user_name}
                onChange={handleChange}
              />
              {formErrors.user_name && <div className="error-message">{formErrors.user_name}</div>}
            </div>
            
            <div className="form-group">
              <input
                type="email"
                name="user_email"
                className={`user ${formErrors.user_email ? 'error' : ''}`}
                placeholder="Email"
                value={formData.user_email}
                onChange={handleChange}
              />
              {formErrors.user_email && <div className="error-message">{formErrors.user_email}</div>}
            </div>
            
            <div className="form-group">
              <textarea
                name="message"
                className={`user ${formErrors.message ? 'error' : ''}`}
                id="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
              />
              {formErrors.message && <div className="error-message">{formErrors.message}</div>}
            </div>
            
            <button type="submit" className="button">
              <FontAwesomeIcon icon={faPaperPlane} /> Send Message
            </button>
          </form>
          {showModal && <Modal setShowModal={setShowModal} />}
        </div>
      </div>
    </div>
  );
};

export default Contact;
