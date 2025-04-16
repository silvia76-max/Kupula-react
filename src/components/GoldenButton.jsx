// GoldenButton.jsx
import React from "react";
import "../styles/GoldenButton.css";  

const GoldenButton = ({ text, href }) => {
  return (
    <a href={href} className="golden-button">
      {text}
    </a>
  );
};

export default GoldenButton;
