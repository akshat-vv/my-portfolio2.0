import React from "react";

const WorkCard = ({ work, index }) => {
  let greenBorder = {};
  if (index == 0) {
    greenBorder = {
      border: "2px dashed #27AE60",
      borderRadius: 30,
      padding: 17,
    };
  }
  return (
    <div className="w-card-out" style={greenBorder}>
      <div className="w-card">
        <div className="card-title">{work.role}</div>
        <div className="card-line" />
        <div className="card-company">@ {work.company}</div>
        <div className="card-date">{work.time}</div>
      </div>
    </div>
  );
};

export default WorkCard;
