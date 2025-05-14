import React from 'react';
import { Star } from 'lucide-react';
import { Link } from "react-router-dom";
import './ProductDetails.css';
import { FaTimes } from "react-icons/fa";

const ProductDetails = ({ product, onClose }) => {
  const renderRatingStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<Star key={i} className="text-yellow-500 fill-yellow-500" size={16} />);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<Star key={i} className="text-yellow-500 fill-yellow-500" size={16} />);
      } else {
        stars.push(<Star key={i} className="text-gray-300" size={16} />);
      }
    }
    return stars;
  };

  return (
    <div className="product-details-modal">
      <div className="product-details-content">
        <div className="product-details-header">
          <h2 className="product-name">{product.name}</h2>
          <FaTimes
            className="cancel-icon"
            onClick={onClose}
            style={{ cursor: 'pointer', fontSize: '1.5rem', color: '#333' }}
          />
        </div>
        <div className="product-details-body">
          <div className="product-details-image">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="product-details-info">
            <div className="product-rating">
              <div className="stars-container">
                {renderRatingStars(product.rating)}
              </div>
              <span className="rating-text">({product.rating})</span>
            </div>
            <p className="product-price">₹{product.price.toFixed(2)}</p>
            <p className="product-category">Category: {product.category}</p>
            <p className="product-description">
              {product.description || "This is a fantastic product with great features. Perfect for your needs!"}
            </p>
            <Link to="/book" className="nav-link">
              <button className="book-slot-btn">
                Book Slot
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;