import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimes } from '@fortawesome/free-solid-svg-icons';

const Modal = ({ setShowModal }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <FontAwesomeIcon 
          icon={faCheckCircle} 
          style={{ 
            fontSize: '3rem', 
            color: 'var(--blue)', 
            marginBottom: '15px' 
          }} 
        />
        <h3>Thank You!</h3>
        <p>
          I've received your message and will get back to you as soon as
          possible. Thank you for reaching out!
        </p>
        <button
          type="button"
          onClick={() => setShowModal(false)}
          className="button"
        >
          <FontAwesomeIcon icon={faTimes} /> Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
