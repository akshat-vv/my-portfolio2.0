import React, { useState } from "react";
import "./Work.scss";
import WorkCard from "./WorkCard";
import WorkDesc from "./WorkDesc";

const Work = ({ info }) => {
  const [desc, setDesc] = useState(info.work[0]);

  const updateDesc = (desc) => {
    setDesc(desc);
  };

  return (
    <div className="w-container">
      <div className="w-title">
        Work <span>History</span>
      </div>
      <div className="w-content">
        {info.work.map((work, index) => {
          return (
            <WorkCard
              work={work}
              index={index}
              updateDesc={updateDesc}
              desc={desc}
            />
          );
        })}
      </div>
      <div className="w-desc-container">
        <div className="w-desc-title-container">
          <div className="w-desc-title">
            My Responsiblities @ {desc.company}
          </div>
        </div>
        <WorkDesc description={desc.desc} />
      </div>
    </div>
  );
};

export default Work;
