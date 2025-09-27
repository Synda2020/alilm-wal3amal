import React from "react";
import { Link } from "react-router-dom";
import "./Isdarat.css";

function Isdarat() {
  return (
    <div className="isdarat-container">
      <h1 className="isdarat-title">الاصدارات</h1>
      <p className="isdarat-subtitle">اكتشف مجموعتنا المتنوعة من الاصدارات التعليمية والثقافية</p>
      
      <div className="isdarat-grid">
        {/* اصدارات مقروءة - Links to Books page */}
        <Link to="/books" className="isdarat-card isdarat-card-books">
          <div className="isdarat-card-icon">
            📚
          </div>
          <h2 className="isdarat-card-title">اصدارات مقروءة</h2>
          <p className="isdarat-card-description">
            مجموعة متنوعة من الكتب والمؤلفات التعليمية والثقافية لجميع الفئات العمرية
          </p>
          <div className="isdarat-card-arrow">←</div>
        </Link>

        {/* اصدارات مرئية - For future video content */}
        <div className="isdarat-card isdarat-card-videos">
          <div className="isdarat-card-icon">
            🎥
          </div>
          <h2 className="isdarat-card-title">اصدارات مرئية</h2>
          <p className="isdarat-card-description">
            محتوى مرئي تعليمي وثقافي يشمل الدورات والمحاضرات والعروض التقديمية
          </p>
          <div className="isdarat-card-coming-soon">قريباً</div>
        </div>
      </div>
    </div>
  );
}

export default Isdarat;