import React, { useState } from 'react';
import ProductForm from './ProductForm';
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import EditProductModal from './EditProductModal'; // Import the EditProductModal component
import './ProductsTable.css';

const ProductsTable = () => {
  const [activeTab, setActiveTab] = useState('details'); // State to track active tab
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', price: '$100', stock: 20, category: 'Category A' },
    { id: 2, name: 'Product 2', price: '$150', stock: 10, category: 'Category B' },
    // Add more initial products here
  ]);

  const [selectedProduct, setSelectedProduct] = useState(null); // Track selected product for editing
  const [isModalOpen, setIsModalOpen] = useState(false); // Track modal visibility

  // Function to add a new product
  const handleAddProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  // Function to update product details
  const handleUpdateProduct = (updatedProduct) => {
    const updatedProducts = products.map((product) =>
      product.id === updatedProduct.id ? updatedProduct : product
    );
    setProducts(updatedProducts);
  };

  // Function to delete a product
  const handleDeleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div className="products-table container">
      {/* Tabs Section */}
      <div className="tabs">
        <button
          className={activeTab === 'details' ? 'active-tab' : ''}
          onClick={() => setActiveTab('details')}
        >
          Product Details
        </button>
        <button
          className={activeTab === 'overview' ? 'active-tab' : ''}
          onClick={() => setActiveTab('overview')}
        >
          Products Overview
        </button>
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {activeTab === 'details' && (
          <div className="product-details-tab text-center">
            <h3>Product Form</h3>
            <ProductForm onAddProduct={handleAddProduct} />
          </div>
        )}

        {activeTab === 'overview' && (
          <div className="products-overview-tab">
            <h3>Products Overview</h3>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Stock</th>
                  <th>Category</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.stock}</td>
                    <td>{product.category}</td>
                    <td>
                      <button 
                        onClick={() => {
                          setSelectedProduct(product);
                          setIsModalOpen(true);
                        }}

                        className='editproductData'
                      >
                        <FaRegEdit />
                      </button>
                      <button onClick={() => handleDeleteProduct(product.id)} className='deleteproductData'>
                      <RiDeleteBin6Line />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Edit Product Modal */}
        {isModalOpen && (
          <EditProductModal
            product={selectedProduct}
            onUpdateProduct={handleUpdateProduct}
            onClose={() => setIsModalOpen(false)}
          />
        )}
      </div>
    </div>
  );
};

export default ProductsTable;
