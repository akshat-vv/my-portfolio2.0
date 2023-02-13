import React from "react";
import information from "../../constants/global";
import "./Project.scss";
import ProjectCard from "./ProjectCard";
import Slider from "react-slick";

const Project = ({ info }) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1180,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 664,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="project-container">
      <div className="project-heading">My Projects</div>
      <Slider {...settings}>
        {info.projects.map((project) => {
          return <ProjectCard project={project} />;
        })}
      </Slider>
    </div>
  );
};

export default Project;
