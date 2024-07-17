import React, { useEffect, useState } from "react";

import { Link , useLocation} from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { images } from "../../constants";
import "./Footer.css";

const Footer = () => {
  let location = useLocation()
  const [toggleFooter, setToggleFooter] = useState(false)

  useEffect(()=> {
    location.pathname === "/about" ?   setToggleFooter(true) :   setToggleFooter(false)
  },[location])

  return (
    <div className={toggleFooter? "app__footer footer__bg" : "app__footer app__bg "}>
      <div className="app__footer__contact">
        <h3 className="p__cormorant">Contact Us</h3>
        <div className="p__opensans" id="footer_text">
          <p>9 W 53rd St, New York, NY 10019, USA</p>
          <p>+1 212-344-1230</p>
          <p>+1 212-555-1230</p>
        </div>
      </div>

      <div className="app__footer__gericht">
        <div className="app__footer__gericht-logo2">
          <img src={images.gericht2} alt="gericht2_logo" />
        </div>
        <p className="p__opensans" id="footer_text">
          “The best way to find yourself is to lose yourself in the service of
          others.”
        </p>
        <img src={images.spoon} alt="spoon" className="spoon__img" />
        <div className="app__footer_icons_container">
          <div className="app__footer_icons">
            <Link to="https://www.facebook.com">
              <FaFacebookF id="icon" />
            </Link>
            <Link to="https://twitter.com">
              <FaTwitter id="icon" />
            </Link>
            <Link to="https://www.instagram.com/">
              <FaInstagram id="icon" />
            </Link>
          </div>
        </div>
      </div>

      <div className="app__footer__working-hours">
        <h3 className="p__cormorant">Working House</h3>
        <div className="p__opensans" id="footer_text">
          <p>
            Monday-Friday: <br />
            08:00 am -12:00 am
          </p>

          <p>
            Saturday-Sunday: <br />
            07:00am -11:00 pm
          </p>
        </div>
      </div>
    </div>
    

  );
};

export default Footer;
