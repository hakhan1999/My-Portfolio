import React, { useEffect } from "react";
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
import Lenis from "lenis";
import "lenis/dist/lenis.css";

const App = () => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });
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
