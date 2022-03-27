// Footer.js
import React from "react";

import facebook from "../Assets/facebook.png";
import instagram from "../Assets/instagram.png";
import twitter from "../Assets/twitter.png";
const Footer = () => {
  return (
    <div className="footer">
      <a href="/">
        <h3 className="logo">LOGO</h3>
      </a>
      <div>
        <ul className="footer-info1">
          <li className="footer-phone">
            <a className="profile-phone" href="">
              +1 (245) 678-9012
            </a>
          </li>
          <li className="footer-email">
            <a className="profile-email" href="">
              support@email.com
            </a>
          </li>
        </ul>
      </div>

      <div className="menu-profile-footer">
        <ul className="footer-info2">
          <li className="menu">Menu</li>
          <li className="footer-profile">
            <a className="profile-link-footer" href="/Profile">
              Profile
            </a>
          </li>
        </ul>
      </div>
      <hr className="horizontal-rule"></hr>
      <div className="social-media-wrapper">
        <ul className="footer-facebook">
          <li className="facebook">
            <div className="facebook-div">
              <a
                className="link-facebook"
                href="https://facebook.com/home?lang=en"
                target="_blank"
              >
                <img src={facebook} alt="icon" />
              </a>
            </div>
          </li>
          <li className="twitter">
            <div className="facebook-div">
              <a
                className="link-twitter"
                href="https://twitter.com/home?lang=en"
                target="_blank"
              >
                <img src={twitter} alt="icon" />
              </a>
            </div>
          </li>
          <li className="instagram">
            <div className="facebook-div">
              <a
                className="link-instagram"
                href="https://instagram.com/home?lang=en"
                target="_blank"
              >
                <img src={instagram} alt="icon" />
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Footer;
