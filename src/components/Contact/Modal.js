import React, { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimes } from '@fortawesome/free-solid-svg-icons';

const Modal = ({ setShowModal }) => {
  // Close modal when ESC key is pressed
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        setShowModal(false);
      }
    };
    
    window.addEventListener('keydown', handleEsc);
    
    // Prevent scrolling when modal is open
    document.body.style.overflow = 'hidden';
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [setShowModal]);

  // Close modal when clicking outside content
  const handleBackdropClick = (e) => {
    if (e.target.className === 'modal') {
      setShowModal(false);
    }
  };

  return (
    <div className="modal" onClick={handleBackdropClick}>
      <div className="modal-content">
        <FontAwesomeIcon
          icon={faCheckCircle}
          style={{
            fontSize: '4rem',
            color: 'var(--primary)',
            marginBottom: '20px',
            filter: 'drop-shadow(0 0 10px var(--primary))'
          }}
        />
        <h3>Thank You!</h3>
        <p>
          I've received your message and will get back to you as soon as
          possible. I appreciate you taking the time to reach out!
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
