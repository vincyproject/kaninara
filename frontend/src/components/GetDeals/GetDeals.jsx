import React from "react";
import "./GetDeals.css";
import { assets } from "../../assets/assets"; // Pastikan path ini benar

function GetDeals() {
  return (
    <div className="get-deals" style={{ backgroundImage: `url(${assets.deals})` }}>
      <div className="content">
        <h1>Get The Latest Deals</h1>
        <p>10% discount for first shopping</p>
        <a href="https://wa.me/6285175300119" className="whatsapp-button">
          What'sApp Us
        </a>
      </div>
    </div>
  );
}

export default GetDeals;
