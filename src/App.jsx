import React from "react";
import {
  Header,
  Footer,
  Topbar,
  Hero,
  Services,
  Vision,
  WhyUs,
  Projects,
} from "./index";

const App = () => {
  return (
    <div className="main-wrapper padding-global">
      <Topbar />
      <div className="header-hero-wrapper">
        <Header />
        <Hero />
      </div>
      <Services />
      <Vision />
      <Projects />
      <WhyUs />
    </div>
  );
};

export default App;
