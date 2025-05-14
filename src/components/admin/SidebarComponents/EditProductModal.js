import React, { useState } from 'react';
import './EditProductModal.css';

const EditProductModal = ({ product, onUpdateProduct, onClose }) => {
  const [productName, setProductName] = useState(product.name);
  const [productPrice, setProductPrice] = useState(product.price);
  const [productStock, setProductStock] = useState(product.stock);
  const [productCategory, setProductCategory] = useState(product.category);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedProduct = {
      id: product.id,
      name: productName,
      price: productPrice,
      stock: productStock,
      category: productCategory,
    };

    onUpdateProduct(updatedProduct);
    onClose();
  };

  return (
    <div className="edit-product-modal">
      <div className="modal-content">
        <h4>Edit Product</h4>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            value={productName} 
            onChange={(e) => setProductName(e.target.value)} 
            required 
          />
          <input 
            type="text" 
            value={productPrice} 
            onChange={(e) => setProductPrice(e.target.value)} 
            required 
          />
          <input 
            type="text" 
            value={productStock} 
            onChange={(e) => setProductStock(e.target.value)} 
            required 
          />
          <input 
            type="text" 
            value={productCategory} 
            onChange={(e) => setProductCategory(e.target.value)} 
            required 
          />
          <button type="submit">Update Product</button>
          <button type="button" onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default EditProductModal;
