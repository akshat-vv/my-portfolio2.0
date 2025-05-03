import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

// Add all icons to the library
library.add(fab, fas);

const SkillListItem = ({ skill }) => {
  let color = "";
  const expertLevel = skill.experties;

  if (expertLevel >= 70) {
    color = "linear-gradient(90deg, #27AE60, #2ECC71)";
  } else if (expertLevel >= 50) {
    color = "linear-gradient(90deg, #2980B9, #3498DB)";
  } else if (expertLevel >= 30) {
    color = "linear-gradient(90deg, #F2994A, #F2C94C)";
  } else {
    color = "linear-gradient(90deg, #EB5757, #F2994A)";
  }

  return (
    <div className="sl-list-item">
      <div className="l-icon">
        <FontAwesomeIcon icon={skill.icon} />
      </div>
      <div className="l-content">
        <div className="l-label">
          {skill.name}
          <span>{skill.experties}%</span>
        </div>
        <div className="l-bar">
          <div
            className="l-bar-active"
            style={{ width: `${skill.experties}%`, background: color }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default SkillListItem;
