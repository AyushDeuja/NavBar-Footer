import React from "react";
import "./footerLogo.css";
const FooterLogo = ({ footerLogoUrl }) => {
  return (
    <div>
      <img className="footerLogoImg" src={footerLogoUrl} />
    </div>
  );
};

export default FooterLogo;
