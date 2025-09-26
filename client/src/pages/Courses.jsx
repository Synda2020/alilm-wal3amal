import React, { useEffect, useState } from "react";
import "./Courses.css";
import { API_BASE, getImageUrl } from "../lib/api";

function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch(`${API_BASE}/trainings?populate=*`);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

        const result = await response.json();
        console.log("Full API Response:", result);

        if (result.data && Array.isArray(result.data)) {
          setCourses(result.data);
        } else {
          console.error("Unexpected API format:", result);
          setCourses([]);
        }
      } catch (error) {
        console.error("Failed to fetch courses:", error);
        setCourses([]);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className="courses-container">
      <h1 className="courses-title">📚 دوراتنا</h1>
      <div className="courses-grid">
        {courses.length > 0 ? (
          courses.map((course) => {
            const attrs = course.attributes || {};

            return (
              <div key={course.id} className="course-card">
                {/* صورة الدورة */}
                {attrs.Image?.data && (
                  <img
                    src={getImageUrl(attrs.Image.data.attributes)}
                    alt={attrs.Title || "Course image"}
                    className="course-image"
                  />
                )}

                <h2>{attrs.Title || "بدون عنوان"}</h2>

                {/* الوصف (RichText) */}
                {attrs.Description && (
                  <p>{attrs.Description}</p>
                )}

                <p><strong>📅 التاريخ:</strong> {attrs.Date || "غير محدد"}</p>
                <p><strong>📍 المكان:</strong> {attrs.Location || "غير محدد"}</p>

                {attrs.Link && (
                  <a
                    href={attrs.Link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="course-button"
                  >
                    التسجيل الآن
                  </a>
                )}
              </div>
            );
          })
        ) : (
          <p>⏳ لا توجد دورات حالياً...</p>
        )}
      </div>
    </div>
  );
}

export default Courses;
