import React from "react";
import Navbar from "../components/Navbar";
import "../styles/trending.css";
import data from "../data/data";
import Card from "../components/Card";

const Trending = () => {
  const cardElements = data.map((data) => {
    return <Card key={data.id} item={data} />;
  });
  return (
    <div className="trending">
      <Navbar />
      <div className="trending-container">
        <h3 style={{ color: "#EA06F8", marginLeft: "3rem" }}>Trending</h3>
        <section className="cards-list">{cardElements}</section>
      </div>
    </div>
  );
};

export default Trending;
