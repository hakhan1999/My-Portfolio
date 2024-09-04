import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="inner section-padding">
        <div className="col-1 col">
          <p>© 2024 ✦ All Rights Reserved</p>
        </div>
        <div className="col-2 col">
          <p>
            Built by me with <span>❤</span>
          </p>
          <a href="#scroll-top" className="scroll-top">
            <img src="src/assets/arrow.svg" alt="Arrow" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
