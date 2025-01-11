import { useEffect, useState } from "react";
import API from "../services/api";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const { data } = await API.get("/books");
        setBooks(data);
      } catch (error) {
        console.error("Error fetching books:", error.response?.data?.message);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div className="container mt-4">
      <h2>Books List</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Description</th>
            <th>Published Year</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book._id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.description}</td>
              <td>{book.publishedYear}</td>
              <td>
                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => console.log("Edit", book._id)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => console.log("Delete", book._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Books;
