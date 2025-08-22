import React from "react";

function Contact() {
  return (
    <div>
      <h1>تواصل معنا</h1>
      <form>
        <label>الاسم:</label>
        <input type="text" placeholder="أدخل اسمك" />
        <br />
        <label>البريد الإلكتروني:</label>
        <input type="email" placeholder="example@mail.com" />
        <br />
        <label>رسالتك:</label>
        <textarea placeholder="اكتب رسالتك هنا"></textarea>
        <br />
        <button type="submit">إرسال</button>
      </form>
    </div>
  );
}

export default Contact;
