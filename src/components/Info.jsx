import React from "react";
import Button from "./Button";
import { skills } from "../data";
import Marquee from "react-fast-marquee";

export const Info = () => {
  return (
    <div className="info">
      <div className="top-info section-padding">
        <div className="image-div">
          <div className="wrapper">
            <div className="image">
              <svg
                height="100%"
                viewBox="0 0 464 463"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <clipPath id="cta-letter">
                  <path d="M426.794 276.327L349.999 353.122C347.867 355.254 344.424 355.254 342.306 353.122C340.174 350.991 340.174 347.547 342.306 345.429L419.088 268.647C439.598 248.137 439.598 214.877 419.088 194.366L342.292 117.571C340.16 115.439 340.16 111.996 342.292 109.878V109.878C344.42 107.749 347.871 107.749 349.999 109.878L426.781 186.659C428.954 188.832 431.277 190.772 433.695 192.494C446.39 201.445 463.908 192.153 463.908 176.616V51.7481C463.908 23.1753 440.746 0 412.16 0H52.6832C24.0967 0 0.935059 23.1616 0.935059 51.7481V411.252C0.935059 439.825 24.0967 463 52.6832 463H412.187C440.76 463 463.935 439.838 463.935 411.252V286.411C463.935 270.861 446.39 261.555 433.695 270.519C431.277 272.228 428.967 274.168 426.808 276.327H426.794Z"></path>
                </clipPath>
                <image
                  clipPath="url(#cta-letter)"
                  xlinkHref="src/assets/founder.webp"
                  alt="Founder Image"
                  width="100%"
                ></image>
              </svg>
            </div>

            <div className="shape">
              <img src="src/assets/shape.svg" alt="Shape" />
              <div className="name-div">
                <h2>Erwin Luijendijk</h2>
                <p>Founder & CTO</p>
              </div>
            </div>
          </div>
        </div>
        <div className="info-div">
          <h2 className="dot-heading">Contact</h2>
          <h2 className="founder-heading">
            Want to know more about our way of working?
          </h2>
          <Button
            href="#"
            text="Contact Me"
            textBgColor="var(--purple)"
            arrowBgColor="var(--purple)"
            icon="./src/assets/plus.svg"
            width="1.5rem"
          />
        </div>
      </div>
      <div className="bottom-marquee">
        <Marquee autoFill className="marquee">
          {skills.map((item) => (
            <div key={item.id} className="skills-box">
              <img src={item.imageURL} alt="Skills Logo" />
              <p className="description">{item.description}</p>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};
