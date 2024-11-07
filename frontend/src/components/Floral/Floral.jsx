import React from 'react';
import './Floral.css';
import { assets } from '../../assets/assets';

const Floral = () => {
  return (
    <div className="floral-section">
      <div className="floral-content">
        <h1 className="floral-title">Blossom, Love, Memorable</h1>
        <p className="floral-description">
        Blossom, a dream Kaninara continues to nurture
        Love, the essence in each arrangement, crafted with care, 
        and shared warmly with every customer and recipient. 
        Through quality blooms and heartfelt design, 
        Kaninara aspires to bring moments of joy. 
        Every bouquet becomes a cherished memory, 
        a meaningful part of each customers story, 
        leaving a lasting impression with each creation.
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
