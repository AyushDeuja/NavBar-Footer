import React from "react";
import "./NavLinks.css";
const NavLinks = ({ isNav }) => {
  return (
    <div className={isNav ? "navLinks" : "footerLinks"}>
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default NavLinks;
