import React from "react";

const Button = ({ text, href, arrowBgColor, textBgColor, icon, width }) => {
  return (
    <a href={href} className="button">
      <div className="arrow" style={{ backgroundColor: arrowBgColor }}>
        <img src={icon} style={{ width: width }} alt="Arrow" />
      </div>
      <div className="text" style={{ backgroundColor: textBgColor }}>
        {text}
      </div>
    </a>
  );
};

export default Button;
