import React from "react";
import "./Header.scss";
import github from "../../img/github.png";
import linkedin from "../../img/LinkedInNew.png";
import cyberpunkBanner from "../../img/cyberpunk-dev-banner3.png";
// Import mobile banner when available
import cyberpunkBannerMobile from "../../img/cyberpunk-dev-banner-mob.png";
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
      <div className="h-right-section">
        <div className="banner-image">
          <img
            src={cyberpunkBanner}
            alt="Developer with cyberpunk aesthetic"
            className="desktop-banner"
          />
          {/* Add mobile banner when image is available */}
          <img
            src={cyberpunkBannerMobile}
            alt="Developer with cyberpunk aesthetic"
            className="mobile-banner"
          />
          <div className="code-element top-left">{'<React.Fragment>'}</div>
          <div className="code-element top-right">{'import { Developer } from "skills";'}</div>
          <div className="code-element bottom-left">{'const skills = ["React", "JS", "CSS"];'}</div>
          <div className="code-element bottom-right">{'</React.Fragment>'}</div>
        </div>
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
            <button className="button primary neon-button" onClick={scrollToContact}>
              <FontAwesomeIcon icon={faEnvelope} /> Contact Me
            </button>
            <button className="button secondary neon-button" onClick={() => {
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
      </div>
    </div>
  );
};
