import React from "react";

const ProjectCard = ({ project }) => {
  const tech = project.techStack;
  const techString = tech.join(" | ");

  {
    return (
      <div className="project-card">
        <div className="project-title">{project.name}</div>
        <div className="project-tech">{techString}</div>
        <div className="project-desc">{project.description}</div>
      </div>
    );
  }
};

export default ProjectCard;
