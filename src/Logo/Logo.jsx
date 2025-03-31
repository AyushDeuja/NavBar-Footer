import React from "react";
import "./Logo.css";
const Logo = ({ src }) => {
  return (
    <div>
      <img src={src} alt="Logo-Image" />
    </div>
  );
};

export default Logo;
