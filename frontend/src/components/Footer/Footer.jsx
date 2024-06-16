import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img className="footer-logo" src={assets.logo} alt="" />
          <p>
            --- © 2024 Little Lemon. All Rights Reserved. **Little Lemon** | 123
            Main St, Your City, Your State, Your Country | Tel: (123) 456-7890
            Hours: Mon-Fri 11am-10pm, Sat-Sun 9am-11pm Follow us on Facebook,
            Instagram, Twitter Designed with 🍋 by our talented team. Please
            note: Information on this website is subject to change without
            notice.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+92-3005076319</li>
            <li>contact@LittleLemon.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 © Little-Lemon.com - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
