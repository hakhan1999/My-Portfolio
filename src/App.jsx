import React from "react";
import { Header, Footer, Topbar, Hero, Services, Vision } from "./index";

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
    </div>
  );
};

export default App;
