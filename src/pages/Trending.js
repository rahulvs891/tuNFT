import React from "react";
import Navbar from "../components/Navbar";
import "../styles/trending.css";

const Trending = () => {
  return (
    <>
      <Navbar />
      <div className="trending-container">
        <h3>Trending</h3>
        <p>Card</p>
      </div>
    </>
  );
};

export default Trending;
