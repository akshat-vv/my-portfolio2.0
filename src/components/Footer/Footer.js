import React from "react";
import "./Footer.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-social">
          <a 
            href="https://github.com/akshat-vv" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a 
            href="https://www.linkedin.com/in/akshat-vijayvergiya-203bbb127/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
        
        <div className="footer-text">
          Designed & Developed with <FontAwesomeIcon icon={faHeart} className="heart-icon" /> by Akshat Vijayvergiya © {new Date().getFullYear()}
        </div>
        
        <div className="scroll-top" onClick={scrollToTop}>
          <FontAwesomeIcon icon={faArrowUp} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
