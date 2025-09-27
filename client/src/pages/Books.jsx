import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Books.css"; // Import the specific CSS file

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

      {/* Books grid - Using custom CSS classes */}
      <div className="books-grid">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <div key={book.id} className="books-card">
              {/* Book Image */}
              {book.image?.url && (
                <img
                  src={`${import.meta.env.VITE_API_URL}${book.image.url}`}
                  alt={book.title}
                />
              )}

              {/* Book Details */}
              <div className="books-card-content">
                <h2 className="books-card-title">
                  {book.title}
                </h2>
                
                {book.price && (
                  <p className="books-card-price">
                    {book.price} د.ت
                  </p>
                )}
                
                {book.Category && (
                  <p className="books-card-category">
                    {book.Category}
                  </p>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500 py-8">
            ❌ لا توجد كتب في هذه الفئة
          </div>
        )}
      </div>
    </div>
  );
}

export default Books;