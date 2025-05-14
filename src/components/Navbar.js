import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import CartOverlay from "./CartOverlay.js";
import WishlistOverlay from "./WishlistOverlay.js";
import SearchOverlay from "./SearchOverlay.js";
import { FaSearch, FaShoppingCart, FaHeart, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import Signin from "./SignIn.js";

const Navbar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartVisible, setCartVisible] = useState(false);
  const [wishList, setWishList] = useState(false);
  const [signInOpen, setSignInOpen] = useState(false);
  const [user, setUser] = useState(null);

  const location = useLocation();
  const [activeTab, setActiveTab] = useState("home");
  
  useEffect(() => {
    const path = location.pathname;
    let tab = "home";
    if (path === "/") {
      tab = "home";
    } else if (path === "/shop") {
      tab = "shop";
    } else if (path === "/book") {
      tab = "book";
    } else if (path === "/about") {
      tab = "about";
    } else if (path === "/contact") {
      tab = "contact";
    } else if (path === "/admin") {
      tab = "admin";
    }
    setActiveTab(tab);
  }, [location]);

  const navigate = useNavigate();

  const handleWishlistClick = () => {
    setWishList(!wishList);
    document.body.classList.toggle("wishlist-open");
  };

  const handleWishlistCancel = () => {
    setWishList(false);
    document.body.classList.remove("wishlist-open");
  };

  const toggleCartVisibility = () => {
    setCartVisible(!cartVisible);
  };

  const handleSearchClick = () => {
    setSearchOpen(!searchOpen);
  };

  const handleCancelClick = () => {
    setSearchOpen(false);
  };

  const handleCartClick = () => {
    setCartOpen(!cartOpen);
    document.body.classList.toggle("cart-open");
  };

  const handleCancelCart = () => {
    setCartOpen(false);
    document.body.classList.remove("cart-open");
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleViewCartClick = () => {
    navigate("/cart");
  };

  const handleBrandClick = () => {
    handleTabClick("home");
  };

  const handleSignInClick = () => {
    setSignInOpen(!signInOpen);
    document.body.classList.toggle("signin-open");
  };

  const handleCancelSignIn = () => {
    setSignInOpen(false);
    document.body.classList.remove("signin-open");
  };

  const handleLogin = (userData) => {
    setUser(userData);
    setSignInOpen(false);
    document.body.classList.remove("signin-open");
  };

  return (
    <>
      {/* Top Navbar */}
      <div className="top-navbar">
        <div className="container d-flex justify-content-between">
          <span>Free shipping for standard orders over ₹5000</span>
          <div>
            <a href="#">Help & FAQs</a>
            {user ? (
              <a>{user.email}</a>
            ) : (
              <a className="signIn-topbar" onClick={handleSignInClick}>
                Sign In
              </a>
            )}
            <a href="#">EN</a>
            <a href="#">India</a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light main-navbar">
        <div className="container">
          <Link
            to="/"
            className="navbar-brand"
            onClick={handleBrandClick}
          >
            Lane Look
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to="/"
                  className={`nav-link ${activeTab === "home" ? "active" : ""}`}
                  onClick={() => handleTabClick("home")}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/shop"
                  className={`nav-link ${activeTab === "shop" ? "active" : ""}`}
                  onClick={() => handleTabClick("shop")}
                >
                  Shop
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/book"
                  className={`nav-link ${activeTab === "book" ? "active" : ""}`}
                  onClick={() => handleTabClick("blog")}
                >
                  Book Slot
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/about"
                  className={`nav-link ${activeTab === "about" ? "active" : ""}`}
                  onClick={() => handleTabClick("about")}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/contact"
                  className={`nav-link ${activeTab === "contact" ? "active" : ""}`}
                  onClick={() => handleTabClick("contact")}
                >
                  Contact
                </Link>
              </li>
              {user?.isAdmin && (
                <li className="nav-item">
                  <Link
                    to="/admin"
                    className={`nav-link ${activeTab === "admin" ? "active" : ""}`}
                    onClick={() => handleTabClick("admin")}
                  >
                    Admin
                  </Link>
                </li>
              )}
            </ul>
            <div className="navbar-icons">
              <motion.div className="icon" whileHover={{ scale: 1.1 }}>
                <FaSearch onClick={handleSearchClick} />
              </motion.div>
              <motion.div
                className="icon cart-icon"
                whileHover={{ scale: 1.1 }}
                onClick={handleCartClick}
              >
                <FaShoppingCart />
              </motion.div>
              <motion.div
                className="icon heart-icon"
                whileHover={{ scale: 1.1 }}
                onClick={handleWishlistClick}
              >
                <FaHeart />
              </motion.div>
            </div>
          </div>
        </div>
      </nav>

      {/* Sign In Overlay */}
      {signInOpen && (
        <div className="signin-overlay">
          <Signin close={handleCancelSignIn} onLogin={handleLogin} />
        </div>
      )}

      {/* Other overlays remain the same */}
      {searchOpen && (  
        <SearchOverlay close={handleCancelClick}/>
      )}

      {cartOpen && (
        <CartOverlay close={handleCancelCart}/>
      )}

      {wishList && (
        <WishlistOverlay close={handleWishlistCancel}/>
      )}
    </>
  );
};

export default Navbar;
