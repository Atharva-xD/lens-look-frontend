// backend/models/Product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a product name']
  },
  price: {
    type: Number,
    required: [true, 'Please provide a product price'],
    default: 0
  },
  rating: {
    type: Number,
    default: 0
  },
  category: {
    type: String,
    required: [true, 'Please provide a product category'],
    enum: ['eyeglasses', 'sunglasses', 'screen', 'power']
  },
  description: {
    type: String,
    required: [true, 'Please provide a product description']
  },
  images: {
    type: [String],
    default: ['/uploads/products/default.jpg']
  },
  stock: {
    type: Number,
    required: [true, 'Please provide stock quantity'],
    default: 0
  },
  badge: {
    type: String,
    enum: ['sale', 'new', 'bestseller']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Virtual field for product image URL
productSchema.virtual('imageURL').get(function() {
  return `${process.env.BASE_URL}/uploads/products/${this.images[0]}`;
});

// Index for better query performance
productSchema.index({ name: 'text', description: 'text', category: 'text' });

module.exports = mongoose.model('Product', productSchema);