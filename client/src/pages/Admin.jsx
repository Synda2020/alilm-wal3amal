import React from "react";
import "./Admin.css";

function Admin() {
  return (
    <div className="admin-page">
      <h1>⚙️ لوحة التحكم (Admin)</h1>
      <p>هذه الصفحة مخصصة لإدارة الموقع، لاحقًا ستكون مرئية فقط للمسؤولين.</p>

      {/* قسم إدارة المستخدمين */}
      <section className="admin-section">
        <h2>👥 إدارة المستخدمين</h2>
        <table>
          <thead>
            <tr>
              <th>الاسم</th>
              <th>البريد</th>
              <th>الدور</th>
              <th>إجراءات</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>أحمد علي</td>
              <td>ahmed@example.com</td>
              <td>طالب</td>
              <td><button>حذف</button> <button>ترقية</button></td>
            </tr>
            <tr>
              <td>سارة محمد</td>
              <td>sara@example.com</td>
              <td>مدرب</td>
              <td><button>حذف</button></td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* قسم إدارة الدورات */}
      <section className="admin-section">
        <h2>📚 إدارة الدورات</h2>
        <button className="add-course">➕ إضافة دورة جديدة</button>
        <ul>
          <li>📖 دورة علوم القرآن (20 متدرب)</li>
          <li>📖 دورة الحديث النبوي (15 متدرب)</li>
        </ul>
      </section>

      {/* إحصائيات */}
      <section className="admin-section">
        <h2>📊 الإحصائيات</h2>
        <p>عدد المستخدمين: <strong>150</strong></p>
        <p>عدد الدورات: <strong>12</strong></p>
        <p>عدد الشهادات الممنوحة: <strong>90</strong></p>
      </section>
    </div>
  );
}

export default Admin;
