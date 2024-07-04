// components/Illustration.js
import React from "react";
import "./Illustration.css";

function Illustration() {
  return (
    <div className="illustration">
      <h3>Lorem ipsum dolor sit amet, consectetur</h3>
      <p>Lorem ipsum dolor sit amet, consectetur</p>
      <div class="loading-indicator">
        <div class="dot active"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
      <img
        src={`${process.env.PUBLIC_URL}/img-a2-grid.72f620d8 1.png`}
        alt="Illustration"
      />
    </div>
  );
}

export default Illustration;
