import React, { useState, useRef, useEffect } from "react";
import "./Contact.scss";
import emailjs from "@emailjs/browser";
import Modal from "./Modal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faPaperPlane,
  faSpinner,
  faCopy,
  faCheck
} from '@fortawesome/free-solid-svg-icons';

const Contact = ({ setIsLoading, info }) => {
  const form = useRef();
  const [showModal, setShowModal] = useState(false);
  const [sending, setSending] = useState(false);
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [focusedField, setFocusedField] = useState(null);
  const [copied, setCopied] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  // Animation for contact info items
  useEffect(() => {
    const contactItems = document.querySelectorAll('.contact-info-item');
    contactItems.forEach((item, index) => {
      item.style.opacity = '0';
      item.style.transform = 'translateX(-20px)';
      setTimeout(() => {
        item.style.transition = 'all 0.5s ease';
        item.style.opacity = '1';
        item.style.transform = 'translateX(0)';
      }, 300 + (index * 150));
    });
  }, []);

  // Copy email to clipboard
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setShowTooltip(true);
      
      setTimeout(() => {
        setShowTooltip(false);
      }, 2000);
      
      setTimeout(() => {
        setCopied(false);
      }, 3000);
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when typing
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: null
      });
    }
  };

  const handleFocus = (field) => {
    setFocusedField(field);
  };

  const handleBlur = () => {
    setFocusedField(null);
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
    setSending(true);

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
          setSending(false);
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
          setSending(false);
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
            Feel free to reach out to me for any questions, collaboration opportunities, or just to say hello!
          </p>
          
          <div className="contact-info">
            <div className="contact-info-item">
              <FontAwesomeIcon icon={faEnvelope} />
              <span>{info.contact.email}</span>
              <FontAwesomeIcon
                icon={copied ? faCheck : faCopy}
                className={`copy-icon ${copied ? 'copied' : ''}`}
                onClick={() => copyToClipboard(info.contact.email)}
              />
              <span className={`copy-tooltip ${showTooltip ? 'show' : ''}`}>
                Copied!
              </span>
            </div>
            <a href={`tel:${info.contact.phone}`} className="contact-info-item">
              <FontAwesomeIcon icon={faPhone} />
              <span>{info.contact.phone}</span>
            </a>
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
                className={`user ${formErrors.user_name ? 'error' : ''} ${focusedField === 'user_name' ? 'focused' : ''}`}
                placeholder="Your Name"
                value={formData.user_name}
                onChange={handleChange}
                onFocus={() => handleFocus('user_name')}
                onBlur={handleBlur}
              />
              {formErrors.user_name && <div className="error-message">{formErrors.user_name}</div>}
            </div>
            
            <div className="form-group">
              <input
                type="email"
                name="user_email"
                className={`user ${formErrors.user_email ? 'error' : ''} ${focusedField === 'user_email' ? 'focused' : ''}`}
                placeholder="Your Email"
                value={formData.user_email}
                onChange={handleChange}
                onFocus={() => handleFocus('user_email')}
                onBlur={handleBlur}
              />
              {formErrors.user_email && <div className="error-message">{formErrors.user_email}</div>}
            </div>
            
            <div className="form-group">
              <textarea
                name="message"
                className={`user ${formErrors.message ? 'error' : ''} ${focusedField === 'message' ? 'focused' : ''}`}
                id="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                onFocus={() => handleFocus('message')}
                onBlur={handleBlur}
              />
              {formErrors.message && <div className="error-message">{formErrors.message}</div>}
            </div>
            
            <button type="submit" className="button" disabled={sending}>
              {sending ? (
                <>
                  <FontAwesomeIcon icon={faSpinner} spin /> Sending...
                </>
              ) : (
                <>
                  <FontAwesomeIcon icon={faPaperPlane} /> Send Message
                </>
              )}
            </button>
          </form>
          {showModal && <Modal setShowModal={setShowModal} />}
        </div>
      </div>
    </div>
  );
};

export default Contact;
