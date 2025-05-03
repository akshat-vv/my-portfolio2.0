import React from "react";
import "./Project.scss";
import ProjectCard from "./ProjectCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

// Custom arrows for the slider
const PrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={`${className} custom-arrow prev-arrow`} onClick={onClick}>
      <FontAwesomeIcon icon={faChevronLeft} />
    </div>
  );
};

const NextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={`${className} custom-arrow next-arrow`} onClick={onClick}>
      <FontAwesomeIcon icon={faChevronRight} />
    </div>
  );
};

const Project = ({ info }) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  
  return (
    <div className="project-section" id="projects">
      <div className="project-heading">
        <h2>My <span>Projects</span></h2>
      </div>
      <div className="project-container">
        <Slider {...settings}>
          {info.projects.map((project, index) => {
            return <ProjectCard key={index} project={project} />;
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Project;
