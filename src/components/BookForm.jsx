import { useState } from "react";
import PropTypes from "prop-types";
import API from "../services/api";

const BookForm = ({ onBookAdded }) => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    description: "",
    publishedYear: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/books", formData);
      onBookAdded(); // Callback to refresh the books list
      setFormData({ title: "", author: "", description: "", publishedYear: "" }); // Clear the form
    } catch (error) {
      console.error("Error adding book:", error.response?.data?.message);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Add Book</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Title</label>
          <input
            type="text"
            name="title"
            className="form-control"
            placeholder="Enter book title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label>Author</label>
          <input
            type="text"
            name="author"
            className="form-control"
            placeholder="Enter author name"
            value={formData.author}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label>Description</label>
          <textarea
            name="description"
            className="form-control"
            placeholder="Enter book description"
            value={formData.description}
            onChange={handleChange}
            rows="3"
            required
          ></textarea>
        </div>
        <div className="mb-3">
          <label>Published Year</label>
          <input
            type="number"
            name="publishedYear"
            className="form-control"
            placeholder="Enter published year"
            value={formData.publishedYear}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Book
        </button>
      </form>
    </div>
  );
};

// Add PropTypes
BookForm.propTypes = {
  onBookAdded: PropTypes.func.isRequired,
};

export default BookForm;
