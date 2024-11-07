import React from "react";
import "./ReviewBouquet.css";

const bouquets = [
  {
    id: 1,
    name: "Nama Bunga 1",
    price: "Rp. 100.000",
    image: "https://via.placeholder.com/150", // Ganti dengan URL gambar asli
  },
  {
    id: 2,
    name: "Nama Bunga 1",
    price: "Rp. 100.000",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Nama Bunga 1",
    price: "Rp. 100.000",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Nama Bunga 1",
    price: "Rp. 100.000",
    image: "https://via.placeholder.com/150",
  },
];

const ReviewBouquet = () => {
  return (
    <div className="review-bouquet">
      <h2 className="title">Most Recent Popular Models</h2>
      <p className="description">
      Most Popular Flower Bouquet of the Month, Explore this months favorite bouquet.
      </p>
      <div className="bouquet-list">
        {bouquets.map((bouquet) => (
          <div key={bouquet.id} className="bouquet-card">
            <img src={bouquet.image} alt={bouquet.name} className="bouquet-image" />
            <h3 className="bouquet-name">{bouquet.name}</h3>
            <p className="bouquet-price">{bouquet.price}</p>
            <button className="bouquet-button">Select Options</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewBouquet;
