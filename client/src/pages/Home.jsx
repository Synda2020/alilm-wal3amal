import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      {/* Hero Section - Now with 3 images and text */}
      <section className="hero">
        <div className="hero-intro">
          <p>
            مركز تدريبي استشاري دولي يعمل في مجالات البناء الانساني والتزكية والتعليم والمعرفة للكبار والشباب والأطفال.
            هدفنا البناء المنهاجي للإنسان وتسديد مفاهيمه وتجويد وترشيد مهاراته البنائية المنهاجية
            من خلال دورات متعددة ومواد علمية مرئية ومقروؤة ومسموعة.
          </p>
        </div>
        <div className="features-container">
          {/* Feature 1: Learning */}
          <div className="feature">
            <Link to="/courses">
              <img src="/icons/training.svg" alt="التعلم" className="feature-icon" />
            </Link>
            <Link to="/courses" className="feature-link">
              دوراتنا
            </Link>
          </div>
          
          {/* Feature 2: Knowledge */}
          <div className="feature">
            <Link to="/books">
              <img src="/icons/books.svg" alt="المعرفة" className="feature-icon" />
            </Link>
            <Link to="/books" className="feature-link">
              كتبنا
            </Link>
          </div>
          
          {/* Feature 3: Application */}
          <div className="feature">
            <Link to="/publications">
              <img src="/icons/isdarat.svg" alt="التطبيق" className="feature-icon" />
            </Link>
            <Link to="/publications" className="feature-link">
              إصداراتنا
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;