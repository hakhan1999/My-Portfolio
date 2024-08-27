import React from "react";
import Button from "./Button";

const Vision = () => {
  return (
    <div className="vision-sec section-padding">
      <div className="inner">
        <div className="left">
          <h2 className="dot-heading">Our Vision</h2>
          <h2 className="heading">The no-code revolution</h2>
          <p className="description">
            The digital world is changing. Brands need to be fast, creative, and
            flexible. That’s where no-code comes in: a cutting-edge movement
            which allows you to design and create digital products without
            needing programming know-how. Meaning brands can move faster, build
            smarter, and scale more, by coding less.
          </p>
          <Button
            href="#"
            text="More about no-code"
            textBgColor="var(--purple)"
            arrowBgColor="var(--purple)"
            icon="./src/assets/plus.svg"
            width="1.5rem"
          />
        </div>
        <div className="right">
          <div className="image">
            <img src="./src/assets/skills-icon.png" alt="Skills Icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
