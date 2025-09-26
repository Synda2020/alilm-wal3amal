import React, { useEffect, useState } from "react";
import axios from "axios";

function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/books?populate=*`)
      .then((res) => {
        console.log("Books API Response:", res.data); // 👈 للتأكد من الحقول
        setBooks(res.data.data);
      })
      .catch((err) => console.error("Failed to fetch books:", err));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">📚 الكتب</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {books.map((book) => {
          const attrs = book; // ✅ v5 لا يحتوي attributes

          const imageUrl = attrs.image?.url
            ? `${import.meta.env.VITE_API_URL}${attrs.image.url}`
            : null;

          return (
            <div key={book.id} className="border rounded-lg shadow-md bg-white">
              {imageUrl && (
                <img
                  src={imageUrl}
                  alt={attrs.title || "Book cover"}
                  className="mt-2 rounded"
                />
              )}

              <div className="p-4">
                <h2 className="text-lg font-semibold mb-2">
                  {attrs.title || "بدون عنوان"}
                </h2>
                <p className="text-gray-600">
                  {attrs.description || "لا يوجد وصف"}
                </p>
                {attrs.price && (
                  <p className="text-green-600 font-bold mt-2">
                    {attrs.price} د.ت
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Books;
