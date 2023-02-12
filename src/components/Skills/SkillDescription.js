import React from "react";
import Resume from './Resume.pdf'

const SkillDescription = () => {
  return (
    <div className="sd-container">
      <div className="sd-title">
        What do I <span>Help</span> ?
      </div>
      <div className="sd-desc">
        Skilled and experienced frontend developer with a strong background in
        creating visually appealing and user-friendly websites and web
        applications. Proficient in React, HTML, CSS, and JavaScript.Committed
        to staying current with the latest web development technologies and
        trends.
      </div>
      <div className="sd-footer">
        <a href={Resume} download>
        <button className="button">Download Resume</button>
        </a>
      </div>
    </div>
  );
};

export default SkillDescription;
