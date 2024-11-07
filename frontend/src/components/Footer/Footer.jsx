import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-contact">
          <p><i className="fas fa-phone-alt"></i> +62 851-7530-0119</p>
          <p><i className="fas fa-envelope"></i> kaninaraflorist</p>
          <p><i className="fas fa-map-marker-alt"></i> Kaninara Florist,<br />
            Jl. Kaliurang Km 13, Besi,<br />
            Kec. Ngaglik, Sleman<br />
            DI Yogyakarta 55581
          </p>
        </div>
        
        <div className="footer-center">
          <h2>kaninara florist</h2>
          <p>By Vincy Project</p>
          <div className="footer-socials">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>

        <div className="footer-links">
          <a href="#">Home</a>
          <span className="dot">•</span>
          <a href="#">Catalog</a>
          <span className="dot">•</span>
          <a href="#">Service</a>
          <span className="dot">•</span>
          <a href="#">Blog</a>
          <span className="dot">•</span>
          <a href="#">Contact Us</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>@VincyProject all right reserved.</p>
        <a href="#">Privacy policy</a>
        <a href="#">Terms & Conditions</a>
        <a href="#">Cookies policy</a>
      </div>
    </footer>
  );
};

export default Footer;
