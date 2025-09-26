import React, { useState } from "react";
import "./Account.css";

function Account() {
  const [isLogin, setIsLogin] = useState(true);
  const [user, setUser] = useState({
    name: "مستخدم جديد",
    email: "example@email.com",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUser((prev) => ({ ...prev, image: URL.createObjectURL(file) }));
    }
  };

  return (
    <div className="account-page">
      <h1>👤 حسابي</h1>

      {/* Switch between Login and Register */}
      <div className="auth-toggle">
        <button
          className={isLogin ? "active" : ""}
          onClick={() => setIsLogin(true)}
        >
          تسجيل الدخول
        </button>
        <button
          className={!isLogin ? "active" : ""}
          onClick={() => setIsLogin(false)}
        >
          إنشاء حساب
        </button>
      </div>

      {isLogin ? (
        <form className="auth-form">
          <input type="email" placeholder="البريد الإلكتروني" required />
          <input type="password" placeholder="كلمة المرور" required />
          <button type="submit">تسجيل الدخول</button>
        </form>
      ) : (
        <form className="auth-form">
          <input type="text" placeholder="الاسم الكامل" required />
          <input type="email" placeholder="البريد الإلكتروني" required />
          <input type="password" placeholder="كلمة المرور" required />
          <button type="submit">إنشاء حساب</button>
        </form>
      )}

      {/* Profile Settings */}
      <div className="profile-settings">
        <h2>✏️ تعديل الملف الشخصي</h2>
        <div className="profile-info">
          <img
            src={user.image || "https://via.placeholder.com/100"}
            alt="Profile"
            className="profile-img"
          />
          <input type="file" onChange={handleImageChange} />
        </div>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleChange}
          placeholder="الاسم"
        />
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          placeholder="البريد الإلكتروني"
        />
        <button>💾 حفظ التعديلات</button>
      </div>
    </div>
  );
}

export default Account;
