import React, { useState } from "react";
import Books from "../components/Books";
import BookForm from "../components/BookForm";

const Dashboard = () => {
  const [refresh, setRefresh] = useState(false);

  const handleBookAdded = () => {
    setRefresh(!refresh); // Toggle refresh state to reload books
  };

  return (
    <div className="container">
      <h1 className="mt-4">Dashboard</h1>
      <BookForm onBookAdded={handleBookAdded} />
      <Books key={refresh} />
    </div>
  );
};

export default Dashboard;
