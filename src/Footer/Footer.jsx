import React from "react";
import "./Footer.css";
import NavLinks from "../NavLinks/NavLinks";
import FooterLogo from "../FooterLogo/FooterLogo";
const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <p>&copy; copyright...</p>
        <div>
          <NavLinks isNav={false} />
        </div>
        <div className="footerImage">
          <a href="https://www.facebook.com/">
            <FooterLogo
              footerLogoUrl={
                "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/2023_Facebook_icon.svg/667px-2023_Facebook_icon.svg.png"
              }
            />
          </a>
          <a href="https://www.instagram.com/">
            <FooterLogo
              footerLogoUrl={
                "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png"
              }
            />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
