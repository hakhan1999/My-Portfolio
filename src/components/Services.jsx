import React from "react";
import { cardBox } from "../constants";

const Services = () => {
  return (
    <div className="services ">
      <div className="top-div">
        <div className="left">
            <div className="left-bg"></div>
            <div className="small"></div>
        </div>
        <div className="right"></div>
      </div>
      <div className="absolute-heading">
        <h2 className="dot-heading">Services</h2>
      </div>
      <div className="inner section-padding">
        <h2 className="main-heading">
          We create without the need for coding to give ambitious brands the
          upper hand
        </h2>
        <div className="card-row">
          {cardBox.map((item) => (
            <div key={item.id} className="card">
              <div className="top">
                <img src={item.iconUrl} alt="Icon" />
                <h2>{item.title}</h2>
              </div>
              <div className="bottom">
                <p>{item.description}</p>
                <div className="arrow-icon">
                  <img src="./src/assets/services-arrow.svg" alt="Arrow Icon" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
