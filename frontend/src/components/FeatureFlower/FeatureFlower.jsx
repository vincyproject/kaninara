import React from 'react';
import './FeatureFlower.css';

const FeatureFlower = () => {
    const bouquets = [
        {
            id: 1,
            author: "Sri",
            date: "2022/22/8",
            image: "https://via.placeholder.com/300",
        },
        {
            id: 2,
            author: "Rahmatul",
            date: "2022/22/8",
            image: "https://via.placeholder.com/300",
        },
        {
            id: 3,
            author: "Albart",
            date: "2022/22/8",
            image: "https://via.placeholder.com/300",
        }
    ];

    return (
        <div className="feature-flower">
            <div className="feature-flower-header">
                <h1>Featured Bouquet of The Week</h1>
                <p>Most flowering plants depend on animals, such as bees, moths, and butterflies, to transfer their pollen between different flowers, and have evolved to attract these pollinators.</p>
            </div>
            <div className="flower-cards">
                {bouquets.map((bouquet) => (
                    <div key={bouquet.id} className="flower-card">
                        <img src={bouquet.image} alt="Flower" className="flower-image" />
                        <div className="flower-card-info">
                            <div className="author-date">
                                <img src="https://via.placeholder.com/40" alt="Author" className="author-image" />
                                <span className="author">{bouquet.author}</span>
                                <span className="date">{bouquet.date}</span>
                            </div>
                            <h2>Best flowers for inside home</h2>
                            <p className="description">All the flowers are best for your lovely house just get the one you love the most.</p>
                            <div className="flower-card-footer">
                                <span className="likes">💖 15</span>
                                <span className="views">👁️ 2001</span>
                                <a href="#" className="read-more">Read more</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeatureFlower;
