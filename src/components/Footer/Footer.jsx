import React from "react";
import "./Footer.css";

const Footer = () => {

    
  return (
    <div className="footer-wrapper">
      <h1 className="footer-heading">Contact us</h1>
      <div className="footer-links-wrapper">
        <span className="footer-links"><a href="https://github.com/BashCraftClub">Github</a></span>
        <span className="footer-links"><a href="https://www.instagram.com/bashcraft.vit/">Instagram</a></span>
        <span className="footer-links"><a href="https://in.linkedin.com/company/bashcraft">Linkedin</a></span>
        <span className="footer-links"><a href="https://bashcraft.vercel.app/">BashCraft</a></span>
      </div>
    </div>
  );
};

export default Footer;
