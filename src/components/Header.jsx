import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuShow, setMenuShow] = useState(false);
  useEffect(() => {
    document.body.style.overflow = menuShow ? "hidden" : "auto";
    const handleScroll = () => {
      const isScrolled = window.scrollY > 150;
      setScrolled(isScrolled);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className={` ${scrolled ? "scrolled" : ""}`}>
      <div className="container">
        <Link to="/" id="h-logo">
          <img src="/assets/images/nf_logo.png" alt="" />
        </Link>
        <nav className={`${menuShow ? "menuShow" : ""}`}>
          <ul>
            <li>
              <NavLink exact="true" activeclassname="active" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink activeclassname="active" to="/program">
                Programs
              </NavLink>
            </li>
            <li>
              <NavLink activeclassname="active" to="/countries">
                Countries
              </NavLink>
            </li>
            <li>
              <NavLink activeclassname="active" to="/contact">
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink activeclassname="active" to="/about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink activeclassname="active" to="/countrydetail">
                Help
              </NavLink>
            </li>
          </ul>
        </nav>
        <div
          id="menu"
          
          onClick={() => {
            setMenuShow(!menuShow);
          }}
        >
          <img src="/assets/images/menu.svg" alt="" />
        </div>
      </div>
    </header>
  );
};

export default Header;
