import React from "react";

import Background from "../../Media asset/Home page/Background  Elements/Background.png";
import Spiral from "../../Media asset/Home page/Background  Elements/Spiral.png";
import Star from "../../Media asset/Home page/Background  Elements/Star.png";
import ellipsetop from "../../Media asset/Home page/Background  Elements/ellipsetop.svg";
import ellipsebottom from "../../Media asset/Home page/Background  Elements/ellipsebottom.svg";
import bubble from "../../Media asset/Home page/Hero Elements/bubble.png";
import gun from "../../Media asset/Home page/Hero Elements/Gun.png";
import pill from "../../Media asset/Home page/Hero Elements/pill.png";
import portal from "../../Media asset/Home page/Hero Elements/portal.png";
import playbutton from "../../Media asset/Home page/Hero Elements/playbutton.svg";

export default function Homepage() {
  return (
    <div className="homepage">
      <div className="homepage-background-top">
        <img src={Background} alt="" />
      </div>
      <div className="homepage-background-right hide-for-mobiles">
        <img src={Spiral} alt="" />
      </div>
      <div className="homepage-background-left hide-for-mobiles">
        <img src={Star} alt="" />
      </div>
      <div className="homepage-background-topright hide-for-mobiles">
        <img src={ellipsetop} alt="" />
      </div>
      <div className="homepage-background-bottomleft hide-for-mobiles">
        <img src={ellipsebottom} alt="" />
      </div>
      <div className="nav-padding"></div>{" "}
      <div className="homepage-hero backgroundimage-topping">
        <img src={gun} alt="" className="homepage-hero-gun" />
        <div className="homepage-hero-top">
          <div className="homepage-hero-top-the">
            <img src={bubble} alt="" />
            <h1>THE</h1>
          </div>
          <img src={portal} alt="" />
          <div className="homepage-hero-top-and">
            <h1>RICK &</h1>
            <img src={pill} alt="" />
          </div>
        </div>
        <div className="homepage-hero-bottom">
          <h1>MORTY</h1>
          <h1> WIKI</h1>
        </div>
        <div className="homepage-hero-details">
          <div className="homepage-hero-details-cta">
            <a href="https://youtu.be/KQ9Cgdsa9tc" target="_blank">
              <img src={playbutton} alt="" /> Watch Now
            </a>
          </div>
          <p>
            Brilliant but boozy scientist Rick hijacks his fretful teenage
            grandson, Morty, for wild escapades in other worlds and alternate
            dimensions.
          </p>
        </div>
      </div>
      <div style={{ height: "100vh" }}></div>
    </div>
  );
}
