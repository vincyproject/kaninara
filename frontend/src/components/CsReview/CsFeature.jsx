import React, { useState, useEffect } from "react";
import "./CsFeature.css";

const bouquets = [
    {
        id: 1,
        author: "Sri",
        date: "2022/08/22",
        image: "https://via.placeholder.com/300",
        review: "The flowers are always fresh and vibrant. Love the arrangements!",
    },
    {
        id: 2,
        author: "Rahmatul",
        date: "2022/08/22",
        image: "https://via.placeholder.com/300",
        review: "Perfect for any occasion! Great quality and beautiful bouquets.",
    },
    {
        id: 3,
        author: "Albart",
        date: "2022/08/22",
        image: "https://via.placeholder.com/300",
        review: "Lovely flowers with a long-lasting fragrance. Highly recommend!",
    }
];

const CsFeature = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % bouquets.length);
        }, 3000); // Slides every 3 seconds
        return () => clearInterval(interval);
    }, []);

    const { author, date, image, review } = bouquets[currentIndex];

    return (
        <div className="cs-feature">
            <h2>Customer Evaluations of Our Foods</h2>
            <div className="review-container">
                <div className="flower-decor"></div>
                <div className="review">
                    <span className="quote-mark">“</span>
                    <p className="review-quote">{review}</p>
                    <div className="review-info">
                        <img src={image} alt={author} className="reviewer-image" />
                        <div>
                            <p className="review-author">{author}</p>
                            <p className="review-date">{date}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="indicator">
                {bouquets.map((_, index) => (
                    <span
                        key={index}
                        className={`indicator-line ${index === currentIndex ? "active" : ""}`}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default CsFeature;
