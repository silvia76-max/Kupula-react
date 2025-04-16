// src/components/GoldenButton.jsx
const GoldenButton = ({ text, link }) => {
    return (
      <a href={link} className="golden-button">
        {text}
      </a>
    );
  };
  
  export default GoldenButton;
  