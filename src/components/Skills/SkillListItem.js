import React from "react";

const SkillListItem = ({ skill }) => {
  let color = "";
  const expertLevel = skill.experties;

  if (expertLevel >= 50) {
    color = "#27AE60";
  } else if (expertLevel <= 30) {
    color = "#F2C94C";
  } else {
    color = "#F2994A";
  }

  return (
    <div className="sl-list-item">
      <div className="l-label">
        {skill.name}
        <span>{skill.experties}%</span>
      </div>
      <div className="l-bar">
        <div
          className="l-bar-active"
          style={{ width: `${skill.experties}%`, background: `${color}` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillListItem;
