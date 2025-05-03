import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const WorkCard = ({ work, index, updateDesc, desc }) => {
  const isSelected = desc === work;
  
  return (
    <div 
      className={`w-card ${isSelected ? "isSelected" : ""}`} 
      onClick={() => updateDesc(work)}
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      <div className="w-card-dot"></div>
      <div className="w-card-content">
        <div className="card-title">{work.role}</div>
        <div className="card-company">
          <FontAwesomeIcon icon={faBuilding} /> {work.company}
        </div>
        <div className="card-date">
          <FontAwesomeIcon icon={faCalendarAlt} /> {work.time}
        </div>
        {isSelected && <div className="card-indicator"></div>}
      </div>
    </div>
  );
};

export default WorkCard;
