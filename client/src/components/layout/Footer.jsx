import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Contact Info */}
        <div>
          <h3>مركز العلم والعمل</h3>
          <p>تعليم - تطوير - إبداع</p>
          <p><FaMapMarkerAlt /> تونس، شارع الجامعة</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4>روابط سريعة</h4>
          <ul>
            <li><a href="/">الرئيسية</a></li>
            <li><a href="/courses">الدورات</a></li>
            <li><a href="/team">الفريق</a></li>
            <li><a href="/contact">تواصل معنا</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4>تابعنا</h4>
          <div className="socials">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 مركز العلم والعمل - جميع الحقوق محفوظة</p>
      </div>
    </footer>
  );
}

export default Footer;
