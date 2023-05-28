import React from "react";
import "./Footer.scss";
import {
  GrFacebook,
  GrInstagram,
  GrTwitter,
  GrPinterest,
  GrHome,
} from "react-icons/gr";
import { FcTwoSmartphones } from "react-icons/fc";
import { MdMailOutline } from "react-icons/md";
const Footer = () => {
  return (
    <div className="footer">
      <div className="left">
        <h1>NQT</h1>
        <p>
          {" "}
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </p>
        <div className="socialContainer">
          <div className="socialIcon">
            <GrFacebook />
          </div>
          <div className="socialIcon">
            <GrInstagram />
          </div>
          <div className="socialIcon">
            <GrTwitter />
          </div>
          <div className="socialIcon">
            <GrPinterest />
          </div>
        </div>
      </div>
      <div className="center">
        <h3>Useful Links</h3>
        <ul>
          <li>Home</li>
          <li>Cart</li>
          <li>Man Fashion</li>
          <li>Woman Fashion</li>
          <li>Accessories</li>
          <li>My Account</li>
          <li>Order Tracking</li>
          <li>Wishlist</li>
          <li>Wishlist</li>
          <li>Terms</li>
        </ul>
      </div>
      <div className="right">
        <h3>Contact</h3>
        <div className="contactItem">
          <GrHome />
          123 Đong Khoi ,HCM city
        </div>
        <div className="contactItem">
          <FcTwoSmartphones />
          +1 234 56 78
        </div>
        <div className="contactItem">
          <MdMailOutline /> mrtholoiabc@gmail.com
        </div>
        <img src="https://i.ibb.co/Qfvn4z6/payment.png" alt="" />
      </div>
    </div>
  );
};

export default Footer;
