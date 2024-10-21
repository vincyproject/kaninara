import React from 'react';
import './Floral.css';
import { assets } from '../../assets/assets';

const Floral = () => {
  return (
    <div className="floral-section">
      <div className="floral-content">
        <h1 className="floral-title">The Art of Floral Expression</h1>
        <p className="floral-description">
          Most flowering plants depend on animals, such as bees, moths, and butterflies, 
          to transfer their pollen between different flowers, and have evolved to attract these pollinators.
        </p>
        <button className="learn-more-btn">Learn More</button>
      </div>
      
      <div className="floral-images">
        <div className="main-image">
          <img src={assets.flo1} alt="Floral main" />
        </div>
        <div className="overlay-image">
          <img src={assets.flo2} alt="Floral overlay" />
        </div>
      </div>
    </div>
  );
};

export default Floral;
