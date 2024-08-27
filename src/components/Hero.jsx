import React from "react";
import Button from "./Button";
import { skillsLogo } from "../constants";

const Hero = () => {
  return (
    <div className="hero">
      <div className="top-content section-padding">
        <h2 className="dot-heading top-heading">
          Leading No-Code & Webflow Agency
        </h2>
        <h2 className="hero-heading">
          We enable rapid growth through digital creation
        </h2>
        <div className="bottom-items">
          <p className="description">
            Cut the Code is a leading no-code agency & Webflow Partner based in
            Amsterdam, The Netherlands. We push our clients forward into
            tomorrow - and fast - by creating the next generation of web
            experiences.
          </p>
          <h2 className="dot-heading">Professional Partner</h2>
          <Button
            href="#"
            text="Learn more"
            arrowBgColor="#fff"
            textBgColor="#fff"
            icon="./src/assets/arrow.svg"
          />
        </div>
      </div>
      <div className="bottom-image">
        <img
          className="clip-path-img"
          src="./src/assets/hero.webp"
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
