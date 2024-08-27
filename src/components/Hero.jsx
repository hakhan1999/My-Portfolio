import React from "react";
import Button from "./Button";
import { hero, skillsLogo } from "../constants";

const Hero = () => {
  return (
    <div className="hero">
      <div className="top-content section-padding">
        <h2 className="dot-heading top-heading">{hero[0].subHeading1}</h2>
        <h2 className="hero-heading">{hero[0].heading}</h2>
        <div className="bottom-items">
          <p className="description">{hero[0].description}</p>
          <h2 className="dot-heading">{hero[0].subHeading2}</h2>
          <Button
            href={hero[0].buttonURL}
            text={hero[0].buttonText}
            arrowBgColor="#fff"
            textBgColor="#fff"
            icon={hero[0].buttonIconURL}
          />
        </div>
      </div>
      <div className="bottom-image">
        <img
          className="clip-path-img"
          src={hero[0].bannerURL}
          alt="Hero Banner"
        />
      </div>
      <div className="skills-logo">
        {skillsLogo.map((item) => (
          <div className="skill" key={item.id}>
            <img src={item.url} alt="Skill Logo" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
