import React from 'react';
import './Flowers.css';

const Flowers = () => {
  return (
    <div className="flowers-container">
      <h1 className="flowers-title">FLOWERS</h1>
      <div className="flowers-cards">
        <div className="flower-card">
          <h2>Daily Flowers</h2>
          <div className="flower-icon">
            <img src="path_to_your_icon" alt="icon" />
          </div>
          <p>You can choose your bouquet size to perfectly match your occasion!</p>
          <button className="browse-button">Browse</button>
        </div>
        <div className="flower-card">
          <h2>Catalog by category</h2>
          <div className="flower-icon">
            <img src="path_to_your_icon" alt="icon" />
          </div>
          <p>Go to the catalog / choose the type of bouquet </p>
          <button className="browse-button">Browse</button>
        </div>
        <div className="flower-card">
          <h2>How to Order</h2>
          <div className="flower-icon">
            <img src="path_to_your_icon" alt="icon" />
          </div>
          <p>Kindly reach out to our Admin by WhatsApp for Order and design custom</p>
          <button className="browse-button">Browse</button>
        </div>
      </div>
    </div>
  );
};

export default Flowers;
