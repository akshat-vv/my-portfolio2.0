import React from "react";

const WorkDesc = ({ description }) => {
  return (
    <div className="w-desc">
      <ul>
        {description.map((desc) => {
          return <li>{desc}</li>;
        })}
      </ul>
    </div>
  );
};

export default WorkDesc;
