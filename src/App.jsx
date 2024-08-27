import React from "react";
import { Header, Footer, Topbar, Hero, Services, Vision, WhyUs } from "./index";

const App = () => {
  return (
    <div className="main-wrapper padding-global">
      <Topbar />
      <div className="header-hero-wrapper">
        <Header />
        <Hero />
      </div>
      <Services />
      <Vision/>
      <WhyUs/>
    </div>
  );
};

export default App;
