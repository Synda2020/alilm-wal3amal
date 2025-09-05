import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
     <div className="logo">
        <img src="/logo.png" alt="مركز العلم والعمل" className="logo-img" />
        <span className="logo-text">مركز العلم والعمل</span>
      </div>
      <ul className="nav-links">
        <li><Link to="/">الرئيسية</Link></li>
        <li><Link to="/courses">الدورات</Link></li>
        <li><Link to="/team">الفريق</Link></li>
        <li><Link to="/contact">تواصل معنا</Link></li>
        <li><Link to="/account">حسابي</Link></li>
        <li><Link to="/admin">المشرف</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
