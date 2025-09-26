import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("تم إرسال رسالتك بنجاح ✅");
    // هنا مستقبلاً نربط مع backend لإرسال الرسائل ل MongoDB أو Email service
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-page">
      <h1>📩 اتصل بنا</h1>

      <div className="contact-container">
        {/* form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>الاسم الكامل</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label>البريد الإلكتروني</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>الرسالة</label>
          <textarea
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">إرسال</button>
        </form>

        {/* contact info */}
        <div className="contact-info">
          <h3>معلومات التواصل</h3>
          <p>📞 الهاتف: +216 12 345 678</p>
          <p>📧 البريد: info@elilmwal3amal.com</p>
          <p>📍 العنوان: تونس، مركز العلم والعمل</p>

          {/* Google Maps */}
          <div className="map-container">
            <iframe
              title="location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3190.993210772342!2d10.181531315238922!3d36.806494979949474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1302c7d5f1d3e8e3%3A0x7c40c23ed0e4a6e2!2sTunis!5e0!3m2!1sen!2stn!4v1680212345678!5m2!1sen!2stn"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
