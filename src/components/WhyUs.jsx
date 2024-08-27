import React from "react";
import { whyUsCard, whyUs } from "../constants";

const WhyUs = () => {
  return (
    <div className="why-us">
      <div className="inner">
        <div className="top">
          <h2 className="heading">{whyUs[0].heading}</h2>
        </div>
        <div className="bottom">
          {whyUsCard.map((item) => (
            <div className="why-us-card" key={item.id}>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
