import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cast from "./pages/Cast";
import CastDetails from "./pages/CastDetails";
import Homepage from "./pages/Homepage";
import Header from "./components/Header";
import Demo from "./pages/demopages";
import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";

import "./styles/styles.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/cast" element={<Cast />} />
        <Route path="/Demo" element={<Demo />} />
        <Route path="/cast-details/:id" element={<CastDetails />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
