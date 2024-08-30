import React from "react";
import { carousel, subHeading } from "../data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projects = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000
  };
  return (
    <div className="projects">
      <div className="inner">
        <div className="absolute-heading">
          <h2 className="dot-heading top-heading">
            {subHeading[0].subHeading}
          </h2>
        </div>
        <div className="carousel">
          <Slider {...settings}>
            {carousel.map((item) => (
              <div key={item.id} className="carousel-card">
                <a href={item.URL}>
                  <div className="carousel-img">
                    <img src={item.imgURL} alt="Carousel Image" />
                  </div>
                  <div className="carousel-content">
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                  </div>
                </a>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="top-div">
        <div className="left">
          <div className="left-bg"></div>
          <div className="small"></div>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
};

export default Projects;
