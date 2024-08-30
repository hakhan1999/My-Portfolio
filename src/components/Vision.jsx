import React from "react";
import Button from "./Button";
import { vision } from "../data";

const Vision = () => {
  return (
    <div className="vision-sec section-padding">
      <div className="inner">
        <div className="left">
          <h2 className="dot-heading">{vision[0].subHeading}</h2>
          <h2 className="heading">{vision[0].heading}</h2>
          <p className="description">{vision[0].description}</p>
          <Button
            href={vision[0].buttonURL}
            text={vision[0].buttontext}
            textBgColor="var(--purple)"
            arrowBgColor="var(--purple)"
            icon={vision[0].buttonIconURL}
            width="1.5rem"
          />
        </div>
        <div className="right">
          <div className="image">
            <img src={vision[0].visionImageURL} alt="Skills Icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
