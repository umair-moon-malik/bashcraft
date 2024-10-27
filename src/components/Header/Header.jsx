import React, { useEffect, useState } from "react";
import "./Header.css";
import Logo from "../../assets/bashcraft-logo.png";

const Header = ({ scrollToSection, heroRef, eventRef, contactusRef }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [scrolled, setScrolled] = useState(false);
  const [scrolledBottom, setScrolledBottom] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setScrolled(true) : setScrolled(false);
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 2200
        ? setScrolledBottom(true)
        : setScrolledBottom(false);
    });
  }, []);

  return (
    <div
      className={`header ${scrolled ? "blurred-header" : ""} ${
        scrolledBottom ? "header-scrolled-bottom" : ""
      }`}
    >
      <div id="header-logo-container">
        <img src={Logo} alt="" className="header-logo-image" />
      </div>
      <div id="header-links-container" className={isOpen ? "open" : ""}>
        <li
          onClick={() => {
            scrollToSection(heroRef);
            toggleMenu();
          }}
          className="header-link-items"
        >
          BashCraft
        </li>
        <li
          onClick={() => {
            scrollToSection(eventRef);
            toggleMenu();
          }}
          className="header-link-items"
        >
          Events
        </li>
        <li
          onClick={() => {
            scrollToSection(contactusRef);
            toggleMenu();
          }}
          className="header-link-items"
        >
          Contact us
        </li>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Header;
