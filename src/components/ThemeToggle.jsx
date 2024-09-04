import React, { useState } from "react";

const ThemeToggle = () => {
  const [isLightTheme, setIsLightTheme] = useState(false);

  const handleThemeToggle = () => {
    setIsLightTheme(!isLightTheme);
    if (!isLightTheme) {
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  };

  return (
    <div
      className="toggle-theme"
      onClick={handleThemeToggle}
      style={{ cursor: "pointer" }}
    >
      <div className="inner">
        <div className="button">
          <img
            src={isLightTheme ? "src/assets/moon.svg" : "src/assets/sun.svg"}
            alt={isLightTheme ? "Sun" : "Moon"}
          />
        </div>
      </div>
    </div>
  );
};

export default ThemeToggle;
