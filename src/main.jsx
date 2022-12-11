import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/styles.scss";
import Cast from "./pages/Cast";
import CastDetails from "./pages/CastDetails";
import Homepage from "./pages/Homepage";
import Header from "./components/Header";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
     
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/cast" element={<Cast />} />
        <Route path="/cast-details" element={<CastDetails />} />
      </Routes>
      
    </BrowserRouter>
  </React.StrictMode>
);
