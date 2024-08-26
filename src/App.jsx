import React from "react";
import { Header, Footer, Topbar, Hero } from "./index";

const App = () => {
  return (
    <div className="main-wrapper padding-global">
      <Topbar />
      <div className="header-hero-wrapper">
        <Header />
        <Hero />
      </div>
    </div>
  );
};

export default App;
