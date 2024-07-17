import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "../../constants/images";

import "./Navbar.css";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/menu", label: "Menu" },
  ];

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="app logo" />
      </div>

      <ul className="app__navbar-links">
        {navLinks.map((elem) => {
          return (
            <li className="p__opensans">
              <Link to={elem.href}>{elem.label}</Link>
            </li>
          );
        })}
      </ul>

      <div className="app__navbar-login">
        <Link to="/login" className="p__opensans">Login</Link>
        <div />
        <a href="/" className="p__opensans">
          Book Table
        </a>
      </div>

      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => {
            setToggleMenu(true);
          }}
        />

        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay_close"
              onClick={() => {
                setToggleMenu(false);
              }}
            />

            <ul className="app__navbar-smallscreen-links">
              {navLinks.map((elem) => {
                return (
                  <li className="p__opensans">
                    <li className="p__opensans">
                      <Link
                        to={elem.href}
                        onClick={() => {
                          setToggleMenu(false);
                        }}
                      >
                        {elem.label}
                      </Link>
                    </li>
                  </li>
                );
              })}

            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
