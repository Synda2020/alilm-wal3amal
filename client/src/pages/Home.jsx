import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1>مرحبًا بكم في مركز العلم والعمل</h1>
          <p>
            منصتنا تهدف إلى تمكين الأفراد من خلال التعلم والعمل المشترك. 
            نؤمن أن العلم والعمل معًا هما طريق النجاح.
          </p>
          <Link to="/courses" className="btn-primary">
            استكشف الدورات
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <h2>من نحن</h2>
        <p>
          مركز العلم والعمل هو مبادرة تعليمية تهدف إلى توفير بيئة 
          تعليمية حديثة تجمع بين التعلم النظري والتطبيق العملي 
          لتمكين الأفراد في مسيرتهم المهنية والشخصية.
        </p>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <h2>انضم إلينا اليوم</h2>
        <p>ابدأ رحلتك التعليمية والعملية معنا، وساهم في بناء مستقبل أفضل.</p>
        <Link to="/contact" className="btn-secondary">
          تواصل معنا
        </Link>
      </section>
    </div>
  );
}

export default Home;
