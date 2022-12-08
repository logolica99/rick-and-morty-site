import React from "react";
import Background from "../../Media asset/Cast/Background.png";
import HomeBackground from "../../Media asset/Home page/Background  Elements/Background.png";
import Star from "../../Media asset/Cast/Star.png";

export default function Cast() {
  return (
    <div className="cast">
      <div className="cast-background-top">
        <img src={Background} alt="" className="hide-for-mobiles" />
        <img src={HomeBackground} alt="" className="hide-for-desktop " />
      </div>

      <div className="cast-background-left hide-for-mobiles">
        <img src={Star} alt="" />
      </div>
      
    </div>
  );
}
