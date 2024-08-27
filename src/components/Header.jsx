import React from "react";
import Navbar from "./Navbar";
import { header } from "../constants";

const Header = () => {
  return (
    <header>
      <div className="header-inner">
        <div className="logo">
          <img src={header[0].logoURL} alt="Logo" />
        </div>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
