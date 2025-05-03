import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const ProjectCard = ({ project }) => {
  const tech = project.techStack;
  const techString = tech.join(" | ");

  return (
    <div className="project-card">
      <div className="p-left">
        <div className="project-title">{project.name}</div>
        <div className="project-tech">{techString}</div>
        <div className="project-desc">{project.description}</div>
        <div className="project-links">
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="project-link github"
          >
            <FontAwesomeIcon icon={faGithub} /> View Code
          </a>
          {project.demo && (
            <a 
              href={project.demo} 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-link demo"
            >
              <FontAwesomeIcon icon={faExternalLinkAlt} /> Live Demo
            </a>
          )}
        </div>
      </div>
      <div className="p-right">
        <img
          src={project.image}
          alt={project.name}
          id={project.name.split(" ")[0]}
        />
      </div>
    </div>
  );
};

export default ProjectCard;
