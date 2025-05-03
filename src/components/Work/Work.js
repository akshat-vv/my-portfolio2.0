import React, { useState } from "react";
import "./Work.scss";
import WorkCard from "./WorkCard";
import WorkDesc from "./WorkDesc";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';

const Work = ({ info }) => {
  const [desc, setDesc] = useState(info.work[0]);

  const updateDesc = (desc) => {
    setDesc(desc);
  };

  return (
    <div className="w-container" id="experience">
      <div className="w-header">
        <FontAwesomeIcon icon={faBriefcase} className="w-icon" />
        <h2 className="w-title">
          Work <span>History</span>
        </h2>
      </div>
      
      <div className="w-timeline">
        <div className="w-timeline-line"></div>
        <div className="w-content">
          {info.work.map((work, index) => {
            return (
              <WorkCard
                key={index}
                work={work}
                index={index}
                updateDesc={updateDesc}
                desc={desc}
              />
            );
          })}
        </div>
      </div>
      
      <div className="w-desc-container">
        <div className="w-desc-title-container">
          <div className="w-desc-title">
            My Responsibilities @ {desc.company}
          </div>
        </div>
        <WorkDesc description={desc.desc} />
      </div>
    </div>
  );
};

export default Work;
