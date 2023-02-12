import React from "react";
import "./Work.scss";
import WorkCard from "./WorkCard";

const Work = ({ info }) => {
  return (
    <div className="w-container">
      <div className="w-title">
        Work <span>- Life - </span>Balance
      </div>
      <div className="w-content">
        {info.work.map((work, index) => {
          return <WorkCard work={work} index={index} />;
        })}
      </div>
    </div>
  );
};

export default Work;
