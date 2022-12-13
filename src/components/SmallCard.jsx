import React from "react";
import smallCardBorder from "../Media asset/smallcardborder.svg";

export default function SmallCard({ name, episode, id }) {
  return (
    <div className="smallcard">
      <img src={smallCardBorder} alt="" />
      {episode ? <p>{episode}</p> : <p>#{id}</p>}

      <h6>{name}</h6>
    </div>
  );
}
