import React from "react";
import { testimonials } from "../data";

const Testimonials = () => {
  return (
    <div className="testimonials">
      <div className="inner section-padding">
        <div className="col-1">
          <h2 className="dot-heading">{testimonials[0].subHeading}</h2>
          <div className="heading-description">
            <h2>{testimonials[0].heading}</h2>
            <p>{testimonials[0].description}</p>
          </div>
        </div>
        <div className="col-2">
          <div className="testimonials-wrapper">
            <div className="col-1 col">
              <div className="shape">
                <img src={testimonials[0].rSymbol} alt="R-Symbol" />
              </div>
              <div className="single-testimonial">
                <p>{testimonials[0].testimonial1Description}</p>
                <div className="testimonial-info">
                  <img
                    src={testimonials[0].testimonial1ImageURL}
                    alt="Thumbnail"
                  />
                  <div className="name-designation">
                    <h2>{testimonials[0].testimonial1Name}</h2>
                    <p>{testimonials[0].testimonial1Designation}</p>
                  </div>
                </div>
              </div>
              <div className="shape">
                <img src={testimonials[0].cSymbol} alt="C-Symbol" />
              </div>
            </div>
            <div className="col-2 col">
              <div className="shape">
                <img src={testimonials[0].xSymbol} alt="X-Symbol" />
              </div>
              <div className="single-testimonial">
                <p>{testimonials[0].testimonial2Description}</p>
                <div className="testimonial-info">
                  <img
                    src={testimonials[0].testimonial2ImageURL}
                    alt="Thumbnail"
                  />
                  <div className="name-designation">
                    <h2>{testimonials[0].testimonial2Name}</h2>
                    <p>{testimonials[0].testimonial2Designation}</p>
                  </div>
                </div>
              </div>
              <div className="single-testimonial">
                <p>{testimonials[0].testimonial2Description}</p>
                <div className="testimonial-info">
                  <img
                    src={testimonials[0].testimonial3ImageURL}
                    alt="Thumbnail"
                  />
                  <div className="name-designation">
                    <h2>{testimonials[0].testimonial3Name}</h2>
                    <p>{testimonials[0].testimonial3Designation}</p>
                  </div>
                </div>
              </div>
              <div className="shape">
                <img src={testimonials[0].tSymbol} alt="T-Symbol" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
