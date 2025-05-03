import React from "react";
import SkillListItem from "./SkillListItem";

const SkillList = ({ skills }) => {
  return (
    <div className="sl-container">
      <div className="sl-title">
        <span>Skill</span> Set
      </div>
      <div className="sl-list">
        {skills.map((skill, index) => {
          return <SkillListItem key={index} skill={skill} />;
        })}
      </div>
    </div>
  );
};

export default SkillList;
