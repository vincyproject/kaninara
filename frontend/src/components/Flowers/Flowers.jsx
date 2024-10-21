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
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
          <button className="browse-button">Browse</button>
        </div>
        <div className="flower-card">
          <h2>Catalog by category</h2>
          <div className="flower-icon">
            <img src="path_to_your_icon" alt="icon" />
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
          <button className="browse-button">Browse</button>
        </div>
        <div className="flower-card">
          <h2>How to Order</h2>
          <div className="flower-icon">
            <img src="path_to_your_icon" alt="icon" />
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
          <button className="browse-button">Browse</button>
        </div>
      </div>
    </div>
  );
};

export default Flowers;
