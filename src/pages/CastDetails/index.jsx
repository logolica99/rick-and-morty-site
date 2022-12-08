import React from "react";
import Background from "../../Media asset/Cast Details/Background.png";
import HomeBackground from "../../Media asset/Home page/Background  Elements/Background.png";
import Star from "../../Media asset/Cast Details/Star.png";

export default function CastDetails() {
  return (
    <div className="castdetails">
      <div className="castdetails-background-top">
        <img src={Background} alt="" className="hide-for-mobiles" />
        <img src={HomeBackground} alt=""  className="hide-for-desktop "/>
      </div>

      <div className="castdetails-background-left hide-for-mobiles">
        <img src={Star} alt="" />
      </div>

    </div>
  );
}
