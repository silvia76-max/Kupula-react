import React from "react";
import "../styles/GoldenButton.css";  

const GoldenButton = ({ text, href, onClick, children, link }) => {
  return (
    <a href={href} className="golden-button" onClick={onClick}>
      {children || text || link}
    </a>
  );
};

export default GoldenButton;
