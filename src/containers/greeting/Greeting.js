import React, { useContext } from "react";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting() {
  const { isDark } = useContext(StyleContext);

  if (!greeting.displayGreeting) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          {/* Left: Text */}
          <div className="greeting-text-div">
            <h1
              className={isDark ? "dark-mode greeting-text" : "greeting-text"}
            >
              {greeting.title}{" "}
              <span className="wave-emoji">{emoji("👋")}</span>
            </h1>

            <p
              className={
                isDark
                  ? "dark-mode greeting-text-p"
                  : "greeting-text-p subTitle"
              }
            >
              {greeting.subTitle}
            </p>

            <div id="resume" className="empty-div"></div>
            <SocialMedia />

            <div className="button-greeting-div">
              <Button text="Contact me" href="#contact" />
              <div>
                {greeting.resumeLink && (
                <a
                  href={greeting.resumeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="download-link-button"
                >
                  <Button text="Download my resume" />
                </a>
              )}
              </div>
              

            </div>
          </div>

          {/* Right: Image */}
          <div className="greeting-image-div">
            <img
              src={require("../../assets/images/self.png")}
              alt="My profile"
            />
          </div>
        </div>
      </div>
    </Fade>
  );
}
