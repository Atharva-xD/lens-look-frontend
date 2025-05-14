// ProductForm.js
import React, { useState } from "react";
import "./ProductForm.css";

const ProductForm = ({ onAddProduct }) => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productStock, setProductStock] = useState("");
  const [productCategory, setProductCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      id: Math.floor(Math.random() * 10000),
      name: productName,
      price: productPrice,
      stock: productStock,
      category: productCategory,
    };

    onAddProduct(newProduct);
    // Reset form fields
    setProductName("");
    setProductPrice("");
    setProductStock("");
    setProductCategory("");
  };

  return (
    <div className="product-form">
      <h4>Add New Product</h4>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Product Name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Product Price"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Stock"
          value={productStock}
          onChange={(e) => setProductStock(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Category"
          value={productCategory}
          onChange={(e) => setProductCategory(e.target.value)}
          required
        />

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default ProductForm;
