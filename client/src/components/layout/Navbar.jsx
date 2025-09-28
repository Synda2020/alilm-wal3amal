import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      {/* Logo centered */}
      <div className="logo-container">
        <img src="/logo.svg" alt="مركز العلم والعمل" className="logo-img" />
      </div>

      {/* Navigation links under logo */}
      <nav className="nav-links-container">
        <ul className="nav-links">
          <li><Link to="/">الرئيسية</Link></li>
          <li><Link to="/about">من نحن ؟</Link></li>
          <li><Link to="/courses">الدورات</Link></li>
          <li><Link to="/isdarat">الاصدارات</Link></li> 
          <li><Link to="/books">الكتب</Link></li> 
          <li><Link to="/contact">تواصل معنا</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
