import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">📘 مركز العلم والعمل</h2>
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
