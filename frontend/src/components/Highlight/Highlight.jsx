import React from 'react';
import './Highlight.css';
// Import ikon dari assets.js
import { assets } from '../../assets/assets'; // Pastikan path-nya sesuai

const highlights = [
  {
    icon: assets.hg1, // Menggunakan variabel ikon yang diimpor
    text: 'Most flowering plants depend on animals.'
  },
  {
    icon: assets.hg2, // Menggunakan variabel ikon yang diimpor
    text: 'Most flowering plants depend on animals.'
  },
  {
    icon: assets.hg3, // Menggunakan variabel ikon yang diimpor
    text: 'Most flowering plants depend on animals.'
  },
  {
    icon: assets.hg4, // Menggunakan variabel ikon yang diimpor
    text: 'Most flowering plants depend on animals.'
  }
];

const Highlight = () => {
  return (
    <div className="highlight-container">
      {highlights.map((highlight, index) => (
        <div className="highlight-item" key={index}>
          <img src={highlight.icon} alt={`icon-${index}`} className="highlight-icon" />
          <p className="highlight-text">{highlight.text}</p>
        </div>
      ))}
    </div>
  );
}

export default Highlight;
