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
  Info,
  Contact,
  Testimonials,
} from "./index";

const App = () => {
  return (
    <>
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
        <Info />
        <Testimonials />
        <Contact />
      </div>
      <Footer />
    </>
  );
};

export default App;
