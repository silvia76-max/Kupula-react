import React from "react";
import "../styles/GoldenButton.css";  

const GoldenButton = ({ text, href, onClick, children }) => {
  return (
    <a href={href} className="golden-button" onClick={onClick}>
      {children || text}
    </a>
  );
};

export default GoldenButton;
