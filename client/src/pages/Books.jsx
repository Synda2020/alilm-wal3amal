import React, { useEffect, useState } from "react";
import axios from "axios";

function Books() {
  const [books, setBooks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/books?populate=*`)
      .then((res) => {
        console.log("📚 Books API Response:", res.data.data);
        setBooks(res.data.data || []);
      })
      .catch((err) => console.error("Failed to fetch books:", err));
  }, []);

  // ✅ Filtering by Category field (with capital C as seen in console)
  const filteredBooks =
    selectedCategory === "all"
      ? books
      : books.filter((book) => book.Category === selectedCategory);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">📚 الكتب</h1>

      {/* Filter buttons */}
      <div className="flex justify-center gap-4 mb-6 flex-wrap">
        <button
          onClick={() => setSelectedCategory("all")}
          className={`px-4 py-2 rounded font-semibold ${
            selectedCategory === "all"
              ? "bg-green-500 text-white"
              : "bg-green-200 hover:bg-green-300"
          }`}
        >
          جميع الكتب
        </button>
        <button
          onClick={() => setSelectedCategory("كتب للأطفال")}
          className={`px-4 py-2 rounded font-semibold ${
            selectedCategory === "كتب للأطفال"
              ? "bg-green-500 text-white"
              : "bg-green-200 hover:bg-green-300"
          }`}
        >
          كتب للأطفال
        </button>
        <button
          onClick={() => setSelectedCategory("كتب للشباب")}
          className={`px-4 py-2 rounded font-semibold ${
            selectedCategory === "كتب للشباب"
              ? "bg-green-500 text-white"
              : "bg-green-200 hover:bg-green-300"
          }`}
        >
          كتب للشباب
        </button>
        <button
          onClick={() => setSelectedCategory("كتب للكبار")}
          className={`px-4 py-2 rounded font-semibold ${
            selectedCategory === "كتب للكبار"
              ? "bg-green-500 text-white"
              : "bg-green-200 hover:bg-green-300"
          }`}
        >
          كتب للكبار
        </button>
      </div>

      {/* Books grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <div
              key={book.id}
              className="card border rounded-lg shadow-md bg-white overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {/* Book Image */}
              {book.image?.url && (
                <img
                  src={`${import.meta.env.VITE_API_URL}${book.image.url}`}
                  alt={book.title}
                  className="w-full h-64 object-cover"
                />
              )}

              {/* Book Details */}
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-2">{book.title}</h2>
                <p className="text-gray-600">
                  {book.description || "لا يوجد وصف"}
                </p>
                {book.price && (
                  <p className="text-green-600 font-bold mt-2">
                    {book.price} د.ت
                  </p>
                )}
                <p className="text-sm text-gray-500 mt-1">
                  {book.Category || "بدون فئة"}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-3">
            ❌ لا توجد كتب في هذه الفئة
          </p>
        )}
      </div>
    </div>
  );
}

export default Books;
