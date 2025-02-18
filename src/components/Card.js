"use client"; // Ensures the component runs on the client side in Next.js

import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const Card = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "8px", maxWidth: "300px", background: "#f9f9f9" }}>
      <h3>{data.title}</h3>
      <p>{data.body}</p>
    </div>
  );
};

// Function to mount component dynamically in any project
window.loadCardComponent = (elementId) => {
  const element = document.getElementById(elementId);
  if (element) {
    ReactDOM.render(<Card />, element);
  }
};
