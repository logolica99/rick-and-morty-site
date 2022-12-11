import React from "react";
import border from "./border.svg";

export default function CastCard({ name, image }) {
  return (
    <div className="card">
      <img className="card-border" src={border} alt="" />
      <div className="card-content">
        <img className="card-image" src={image} alt="" />
        <p className="card-name">{name}</p>
      </div>
    </div>
  );
}
