import React from "react";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-line"></div> {/* The horizontal line */}
      <div className="social-icons">
        <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="icon" />
        </a>
        <a href="https://www.youtube.com/yourchannel" target="_blank" rel="noopener noreferrer">
          <FaYoutube className="icon" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;