import React from "react";
import SkillDescription from "./SkillDescription";
import SkillList from "./SkillList";
import "./Skills.scss";

const Skills = ({ info }) => {

  return (
    <div className="s-container" id="skills-section">
      <div className="s-header">
        {/* <h2>My <span>Skills</span></h2> */}
      </div>
      <div className="s-content">
        <div className="s-left">
          <SkillDescription desc={info.skills.description} />

        </div>
        <div className="s-right">
          <SkillList skills={info.skills.skillsList} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
