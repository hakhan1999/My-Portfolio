import React from "react";
import Button from "./Button";
import { contact } from "../data";

const Contact = () => {
  return (
    <div className="contact">
      <div className="inner">
        <div className="col-1">
          <h2 className="dot-heading orange">{contact[0].subHeading}</h2>
          <h2 className="heading">{contact[0].heading}</h2>
          <p>{contact[0].description}</p>
          <Button
            href="#"
            text={contact[0].buttonText}
            textBgColor="var(--purple)"
            arrowBgColor="var(--purple)"
            icon={contact[0].buttonIconURL}
            width="1.5rem"
          />
        </div>
        <div className="col-2">
          <form action="">
            <input type="text" placeholder={contact[0].namePlaceholder} />
            <input type="email" placeholder={contact[0].emailPlacegholder} />
            <input type="tel" placeholder={contact[0].phonePlaceholder} />
            <textarea placeholder={contact[0].messagePlaceholder}></textarea>
            <div className="submit">
              <div
                className="arrow"
                style={{ backgroundColor: "var(--purple)" }}
              >
                <img
                  style={{ width: "1.5rem" }}
                  src={contact[0].buttonIconURL}
                  alt="Arrow"
                />
              </div>
              <input type="submit" value={contact[0].submitPlaceholder} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
