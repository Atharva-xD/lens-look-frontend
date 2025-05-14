import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Link } from "react-router-dom";
// Import the new CSS file
import './Shop.css';
import ProductDetails from './ProductDetails';

// Import your image files
import glasses1 from "./images/glasses1.jpg";
import glasses2 from "./images/glasses2.jpg";
import glasses3 from "./images/glasses3.jpg";
import glasses4 from "./images/glasses4.jpg";
import glasses5 from "./images/glasses5.jpg";
import glasses6 from "./images/glasses6.jpg";

// Simulating product data with your local images
const productsData = [
  {
    id: 1,
    name: "Classic Aviator",
    price: 7999,
    rating: 4.5,
    category: "eyeglasses",
    image: glasses1,
    badge: "bestseller"
  },
  {
    id: 2,
    name: "Vintage Round",
    price: 10399,
    rating: 4.2,
    category: "eyeglasses",
    image: glasses2
  },
  {
    id: 3,
    name: "Polarized Wayfarer",
    price: 11999,
    rating: 4.8,
    category: "sunglasses",
    image: glasses3,
    badge: "new"
  },
  {
    id: 4,
    name: "Sports Wrap",
    price: 15999,
    rating: 4.7,
    category: "sunglasses",
    image: glasses4
  },
  {
    id: 5,
    name: "Blue Light Blocking",
    price: 6399,
    rating: 4.3,
    category: "screen",
    image: glasses5,
    badge: "sale"
  },
  {
    id: 6,
    name: "Gaming Screen",
    price: 7199,
    rating: 4.1,
    category: "screen",
    image: glasses6
  },
  {
    id: 7,
    name: "Prescription",
    price: 12799,
    rating: 4.6,
    category: "power",
    image: glasses1
  },
  {
    id: 8,
    name: "Bifocal Power",
    price: 15199,
    rating: 4.4,
    category: "power",
    image: glasses2
  }
];

// Categories for filtering
const categories = [
  { id: "all", name: "All Products" },
  { id: "eyeglasses", name: "Eyeglasses" },
  { id: "sunglasses", name: "Sunglasses" },
  { id: "screen", name: "Screen Glasses" },
  { id: "power", name: "Power Sunglasses" }
];

// Price ranges for filtering
const priceRanges = [
  { id: "all", name: "All Prices" },
  { id: "under8000", name: "Under ₹8000" },
  { id: "8000to12000", name: "₹8000 - ₹12000" },
  { id: "over12000", name: "Over ₹12000" }
];

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedPriceRange, setSelectedPriceRange] = useState("all");
  const [sortBy, setSortBy] = useState("default");
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Filter products based on selected category and price range
  const filteredProducts = productsData.filter(product => {
    // Category filter
    const categoryMatch = selectedCategory === "all" || product.category === selectedCategory;
    
    // Price filter
    let priceMatch = true;
    if (selectedPriceRange === "under8000") {
      priceMatch = product.price < 8000;
    } else if (selectedPriceRange === "8000to12000") {
      priceMatch = product.price >= 8000 && product.price <= 12000;
    } else if (selectedPriceRange === "over12000") {
      priceMatch = product.price > 12000;
    }
    
    return categoryMatch && priceMatch;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-low") {
      return a.price - b.price;
    } else if (sortBy === "price-high") {
      return b.price - a.price;
    } else if (sortBy === "rating") {
      return b.rating - a.rating;
    }
    return 0;
  });

  // Render stars for ratings
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

  // Function to determine badge text
  const getBadgeText = (badgeType) => {
    switch (badgeType) {
      case 'sale': return 'SALE';
      case 'new': return 'NEW';
      case 'bestseller': return 'BEST SELLER';
      default: return '';
    }
  };

  return (
    <div className="shop-container container">
      {/* <h2 className="shop-title">Shop Our Collection</h2> */}
      
      <div className="shop-content">
        {/* Filter Sidebar */}
        <div className="filter-sidebar">
          <h3 className="filter-title">Filter Products</h3>
          
          {/* Category Filter */}
          <div className="filter-section">
            <h4 className="filter-section-title">Categories</h4>
            <ul className="filter-list">
              {categories.map(category => (
                <li key={category.id} className="filter-option">
                  <button
                    className={`filter-button ${selectedCategory === category.id ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    {category.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Price Range Filter */}
          <div className="filter-section">
            <h4 className="filter-section-title">Price Range</h4>
            <ul className="filter-list">
              {priceRanges.map(range => (
                <li key={range.id} className="filter-option">
                  <button
                    className={`filter-button ${selectedPriceRange === range.id ? 'active' : ''}`}
                    onClick={() => setSelectedPriceRange(range.id)}
                  >
                    {range.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Sort Options */}
          <div className="filter-section">
            <h4 className="filter-section-title">Sort By</h4>
            <select
              className="sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="default">Default</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>
        
        {/* Products Container */}
        <div className="products-container">
          <div className="products-grid">
            {sortedProducts.map(product => (
              <motion.div
                key={product.id}
                whileHover={{ scale: 1.03 }}
                className="product-card"
                onClick={() => setSelectedProduct(product)}
              >
                <div className="product-image-container">
                  {product.badge && (
                    <span className={`product-badge ${product.badge === 'new' ? 'badge-new' : ''}`}>
                      {getBadgeText(product.badge)}
                    </span>
                  )}
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="product-image"
                  />
                </div>
                <div className="product-info">
                  <h3 className="product-name">{product.name}</h3>
                  <div className="product-rating">
                    <div className="stars-container">
                      {renderRatingStars(product.rating)}
                    </div>
                    <span className="rating-text">({product.rating})</span>
                  </div>
                  <div className="product-footer">
                    <span className="product-price">₹{product.price.toFixed(2)}</span>
                      <Link to="/book" className="nav-link">
                        <button className="add-to-cart-btn">
                          Book Slot
                        </button>
                      </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Empty state */}
          {sortedProducts.length === 0 && (
            <div className="empty-state">
              <p className="empty-text">No products match your filter criteria.</p>
              <button 
                className="reset-filters-btn"
                onClick={() => {
                  setSelectedCategory("all");
                  setSelectedPriceRange("all");
                }}
              >
                Reset Filters
              </button>
            </div>
          )}

          {/* Product Details Modal */}
          {selectedProduct && (
            <ProductDetails 
              product={selectedProduct}
              onClose={() => setSelectedProduct(null)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;