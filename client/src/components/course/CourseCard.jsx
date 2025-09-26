import React from "react";
import "./CourseCard.css";

function CourseCard({ title, description, image, link }) {
  return (
    <div className="course-card">
      <img src={image} alt={title} />
      <div className="course-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link} className="btn-course">
          عرض المزيد
        </a>
      </div>
    </div>
  );
}

export default CourseCard;
