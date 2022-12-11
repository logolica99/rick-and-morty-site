import React from "react";
import logo from "../Media asset/Logo.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
    </div>
  );
}
