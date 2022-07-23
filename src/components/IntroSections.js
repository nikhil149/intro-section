import React from "react";
import imageHeroDesktop from "../images/image-hero-desktop.png";
import dataBiz from "../images/client-databiz.svg";
import audioPhile from "../images/client-audiophile.svg";
import meet from "../images/client-meet.svg";
import maker from "../images/client-maker.svg";
import "./introSection.css";

const IntroSections = () => {
  return (
    <div className="container">
      <div className="container__leftContainer">
          <h1 className="container__leftContainer_h1">Make remote work</h1>
          <p className="container__leftContainer_p">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          <button className="container__leftContainer_button">
            Learn more
          </button>
          <div className="container__leftContainer_imgDiv">
            <img src={dataBiz} alt="dataBiz" />
            <img src={audioPhile} alt="audioPhile" />
            <img src={meet} alt="meet" />
            <img src={maker} alt="maker" />
          </div>
      </div>
      <div className="container__imgDiv">
        <img
          src={imageHeroDesktop}
          alt="imageHeroDesktop"
          className="container__imgDiv_img"
        />
      </div>
    </div>
  );
};

export default IntroSections;
