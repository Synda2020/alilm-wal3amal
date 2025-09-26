import React, { useEffect, useState } from "react";
import axios from "axios";

function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/api/books?populate=*`)
      .then((res) => {
        setBooks(res.data.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">الكتب</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {books.map((book) => (
          <div key={book.id} className="border rounded-lg shadow-md bg-white">
            {book.attributes.image?.data && (
  <img
    src={`${import.meta.env.VITE_API_URL}${book.attributes.image.data.attributes.url}`}
    alt={book.attributes.title}
    className="mt-2 rounded"
  />
)}

            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">
                {book.attributes.title}
              </h2>
              <p className="text-gray-600">{book.attributes.description}</p>
              <p className="text-green-600 font-bold mt-2">
                {book.attributes.price} د.ت
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Books;
