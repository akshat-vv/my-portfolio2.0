import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const WorkDesc = ({ description }) => {
  return (
    <div className="w-desc">
      <ul>
        {description.map((desc, index) => {
          return (
            <li key={index}>
              <FontAwesomeIcon icon={faCheckCircle} className="check-icon" />
              <span>{desc}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default WorkDesc;
