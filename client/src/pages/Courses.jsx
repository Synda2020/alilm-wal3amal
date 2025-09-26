import React, { useEffect, useState } from "react";
import "./Courses.css";
import { API_BASE } from "../lib/api";

function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        // ✅ Use plural "trainings"
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
            const attrs = course; // ✅ Strapi v5: no `attributes`, fields are top-level

            // ✅ Extract image URL
            const imageUrl = attrs.Image?.url
              ? `${import.meta.env.VITE_API_URL}${attrs.Image.url}`
              : null;

            // ✅ Handle Rich Text Description (array of blocks)
            let descriptionText = "لا يوجد وصف";
            if (Array.isArray(attrs.Description)) {
              descriptionText = attrs.Description
                .map((block) =>
                  block.children?.map((child) => child.text).join(" ")
                )
                .join("\n");
            } else if (typeof attrs.Description === "string") {
              descriptionText = attrs.Description;
            }

            return (
              <div key={course.id} className="course-card">
                {/* صورة الدورة */}
                {imageUrl && (
                  <img
                    src={imageUrl}
                    alt={attrs.Title || "Course image"}
                    className="course-image"
                  />
                )}

                <h2>{attrs.Title || "بدون عنوان"}</h2>
                <p>{descriptionText}</p>
                <p><strong>📅 التاريخ:</strong> {attrs.Date || "غير محدد"}</p>
                <p><strong>📍 المكان:</strong> {attrs.Location || "غير محدد"}</p>
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
