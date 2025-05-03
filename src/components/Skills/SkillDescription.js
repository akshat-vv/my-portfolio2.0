import React from "react";
import resumePDF from "./Resume.pdf";

const SkillDescription = () => {

  const downloadResume = () => {
    window.open(resumePDF, '_blank');
  };

  return (
    <div className="sd-container">
      <div className="sd-title">
        <span>About</span> Me
      </div>
      <div className="sd-desc">
        I am a Frontend Developer specializing in React, HTML, CSS, JavaScript
        (ES6), and other web technologies, crafting captivating web interfaces
        that seamlessly blend form with function. I am passionate about
        delivering user-friendly experiences that leave a lasting impression on
        customers and stakeholders. With a Bachelor of Engineering in Computer
        Science from Ujjain Engineering College, I have a solid foundation in
        web development and design principles, along with a keen interest in
        staying up-to-date with industry trends and innovations. Beyond building
        web applications, I ensure their quality and reliability through
        rigorous testing and debugging practices, guaranteeing smooth operation
        across diverse browsers and devices. I am always eager to learn new
        skills and collaborate with others to elevate digital experiences.
      </div>
      <a href={resumePDF} download>
        <button className="button primary neon-button resume-btn">
          Download Resume
        </button>
      </a>
    </div>
  );
};

export default SkillDescription;
