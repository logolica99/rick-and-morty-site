import React from "react";

import Background from "../../Media asset/Home page/Background  Elements/Background.png";
import Spiral from "../../Media asset/Home page/Background  Elements/Spiral.png";
import Star from "../../Media asset/Home page/Background  Elements/Star.png";
import ellipsetop from "../../Media asset/Home page/Background  Elements/ellipsetop.svg";
import ellipsebottom from "../../Media asset/Home page/Background  Elements/ellipsebottom.svg";

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
    
    </div>
  );
}
