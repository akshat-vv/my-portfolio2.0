import React from "react";

const ProjectCard = ({ project }) => {
  const tech = project.techStack;
  const techString = tech.join(" | ");

  {
    return (
      <div className="project-card">
        <div className="p-left">
          <div className="project-title">{project.name}</div>
          <div className="project-tech">{techString}</div>
          <div className="project-desc">{project.description}</div>
        </div>
        <div className="p-right">
          <img
            src={project.image}
            alt="Screen"
            id={project.name.split(" ")[0]}
          />
        </div>
      </div>
    );
  }
};

export default ProjectCard;
