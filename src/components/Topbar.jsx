import React from "react";
import { topbar } from "../constants";
import Marquee from "react-fast-marquee";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="inner">
        <div className="heading">
          <h2 className="dot-heading">Now Creating</h2>
        </div>
        <Marquee autoFill className="marquee">
          {topbar.map((item) => (
            <div key={item.id} className="single-marquee">
              <p className="desc">{item.description}</p>
              <p className="title">{item.heading}</p>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Topbar;
