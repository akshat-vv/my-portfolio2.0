import React from "react";
import SkillListItem from "./SkillListItem";

const SkillList = ({ skills }) => {
  return (
    <div className="sl-container">
      <div className="sl-title">
        <span>Skills</span> set
      </div>
      <div className="sl-list">
        {skills.map((skill) => {
          return <SkillListItem skill={skill} />;
        })}
      </div>
    </div>
  );
};

export default SkillList;
