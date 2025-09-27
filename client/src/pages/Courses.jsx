import React, { useEffect, useState } from "react";
import "./Courses.css";
import { API_BASE } from "../lib/api";

function Courses() {
  const [courses, setCourses] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        // ✅ Use plural "trainings"
        const response = await fetch(`${API_BASE}/trainings?populate=*`);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

        const result = await response.json();
        console.log("📚 Full Courses API Response:", result);
        
        if (result.data && Array.isArray(result.data)) {
          console.log("📚 Courses Array Length:", result.data.length);
          
          // Add detailed logging for each course
          result.data.forEach((course, index) => {
            console.log(`📚 Course ${index}:`, course);
            console.log(`📚 Course ${index} - Category:`, course.Category);
            console.log(`📚 Course ${index} - Title:`, course.Title);
            console.log(`📚 Course ${index} - All Keys:`, Object.keys(course));
          });
          
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

  // Filter courses by category with debugging
  const filteredCourses =
    selectedCategory === "all"
      ? courses
      : courses.filter((course) => {
          console.log(`🔍 Filtering - Course Category: "${course.Category}", Selected: "${selectedCategory}"`);
          return course.Category === selectedCategory;
        });

  console.log(`📊 Total Courses: ${courses.length}, Filtered Courses: ${filteredCourses.length}, Selected Category: "${selectedCategory}"`);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">📚 دوراتنا</h1>

      {/* Category Filter buttons */}
      <div className="flex justify-center gap-4 mb-6 flex-wrap">
        <button
          onClick={() => setSelectedCategory("all")}
          className={`px-4 py-2 rounded font-semibold ${
            selectedCategory === "all"
              ? "bg-blue-500 text-white"
              : "bg-blue-200 hover:bg-blue-300"
          }`}
        >
          جميع الدورات
        </button>
        <button
          onClick={() => setSelectedCategory("دورات جماهيرية")}
          className={`px-4 py-2 rounded font-semibold ${
            selectedCategory === "دورات جماهيرية"
              ? "bg-blue-500 text-white"
              : "bg-blue-200 hover:bg-blue-300"
          }`}
        >
          دورات جماهيرية
        </button>
        <button
          onClick={() => setSelectedCategory("دورات بنائية")}
          className={`px-4 py-2 rounded font-semibold ${
            selectedCategory === "دورات بنائية"
              ? "bg-blue-500 text-white"
              : "bg-blue-200 hover:bg-blue-300"
          }`}
        >
          دورات بنائية
        </button>
      </div>



      {/* Courses grid - Using similar structure as Books */}
      <div className="courses-grid">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => {
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
              <div key={course.id} className="courses-card">
                {/* صورة الدورة */}
                {imageUrl && (
                  <img
                    src={imageUrl}
                    alt={attrs.Title || "Course image"}
                  />
                )}

                {/* Course Details */}
                <div className="courses-card-content">
                  <h2 className="courses-card-title">
                    {attrs.Title || "بدون عنوان"}
                  </h2>
                  
                  <p className="courses-card-description">
                    {descriptionText}
                  </p>
                  
                  <div className="courses-card-details">
                    <p><strong>📅</strong> {attrs.Date || "غير محدد"}</p>
                    <p><strong>📍</strong> {attrs.Location || "غير محدد"}</p>
                  </div>
                  
                  {attrs.Category && (
                    <p className="courses-card-category">
                      {attrs.Category}
                    </p>
                  )}

                  {attrs.Link && (
                    <a
                      href={attrs.Link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="courses-card-button"
                    >
                      التسجيل الآن
                    </a>
                  )}
                </div>
              </div>
            );
          })
        ) : (
          <div className="text-center text-gray-500 py-8">
            ⏳ لا توجد دورات في هذه الفئة حالياً
          </div>
        )}
      </div>
    </div>
  );
}

export default Courses;