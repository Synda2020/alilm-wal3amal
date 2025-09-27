import React, { useEffect, useState } from "react";
import axios from "axios";

function Books() {
  const [books, setBooks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/books?populate=*`)
      .then((res) => {
        console.log("📚 Books API Response:", res.data.data); // Debug
        setBooks(res.data.data || []);
      })
      .catch((err) => console.error("Failed to fetch books:", err));
  }, []);

  // ✅ Filter by category
  const filteredBooks =
    selectedCategory === "all"
      ? books
      : books.filter((book) => book.Category === selectedCategory);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">📚 الكتب</h1>

      {/* Category buttons */}
      <div className="flex justify-center gap-4 mb-6">
        {["all", "كتب للأطفال", "كتب للشباب", "كتب للكبار"].map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded font-semibold ${
              selectedCategory === cat
                ? "bg-green-600 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            {cat === "all" ? "جميع الكتب" : cat}
          </button>
        ))}
      </div>

      {/* Books grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => {
            const imageUrl = book.Image?.url
              ? `${import.meta.env.VITE_API_URL}${book.Image.url}`
              : null;

            return (
              <div
                key={book.id}
                className="border rounded-lg shadow-md bg-white overflow-hidden"
              >
                {imageUrl && (
                  <img
                    src={imageUrl}
                    alt={book.Title || "Book cover"}
                    className="w-full h-48 object-cover"
                  />
                )}

                <div className="p-4">
                  <h2 className="text-lg font-semibold mb-2">
                    {book.Title || "بدون عنوان"}
                  </h2>
                  <p className="text-gray-600">
                    {book.Description || "لا يوجد وصف"}
                  </p>
                  {book.Price && (
                    <p className="text-green-600 font-bold mt-2">
                      {book.Price} د.ت
                    </p>
                  )}
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-center col-span-3">❌ لا توجد كتب في هذه الفئة</p>
        )}
      </div>
    </div>
  );
}

export default Books;
