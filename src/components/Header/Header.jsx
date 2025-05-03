import React from "react";
import "./Header.scss";
import headerImage from "../../img/av-head-web.png";
import github from "../../img/github.png";
import linkedin from "../../img/LinkedInNew.png";
import ReactTyped from "react-typed";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const openLink = (url) => {
  window.open(url);
};

export const Header = ({ info }) => {
  const { role } = info.user;
  const roleString = role.join(' | ');

  const scrollToContact = () => {
    const contactSection = document.querySelector('.contact-container');
    contactSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="h-container">
      <div className="h-left-section">
        <div className="h-lineOne">
          <span>{info.text.heyText}</span>
        </div>
        <div className="h-lineTwo">
          <span>{info.user.name}</span>
        </div>
        <div className="h-lineThree">
          <ReactTyped
            className="typed-text"
            strings={[roleString]}
            typeSpeed={40}
            backSpeed={60}
            loop
          />
        </div>
        <div className="h-about">
          <p>{info.user.about}</p>
        </div>
        <div className="h-buttons">
          <button className="button primary" onClick={scrollToContact}>
            <FontAwesomeIcon icon={faEnvelope} /> Contact Me
          </button>
          <button className="button secondary" onClick={() => {
            const skillsSection = document.querySelector('.s-container');
            skillsSection.scrollIntoView({ behavior: 'smooth' });
          }}>
            {info.text.knowMoreText} <FontAwesomeIcon icon={faArrowDown} />
          </button>
        </div>
        <div className="h-icons">
          <img src={linkedin} alt="LinkedIn" onClick={() => openLink('https://www.linkedin.com/in/akshat-vijayvergiya-203bbb127/')} />
          <img src={github} alt="GitHub" onClick={() => openLink('https://github.com/akshat-vv')} />
        </div>
      </div>
      <div className="h-right-section">
        <img id="av-head" src={headerImage} alt="Akshat Vijayvergiya" />
      </div>
    </div>
  );
};
