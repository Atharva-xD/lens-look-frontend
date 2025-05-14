// backend/controllers/productController.js
const Product = require('../models/Product');
const asyncMiddleware = require('../utils/asyncMiddleware');
const validation = require('../utils/validation');

const getProduct = asyncMiddleware(async (req, res) => {
  const product = await Product.findById(req.params.id)
    .populate('category')
    .populate('brand');
  
  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }
  
  res.json(product);
});

const getProducts = asyncMiddleware(async (req, res) => {
  const query = {};
  const options = {
    page: req.query.page || 1,
    limit: req.query.limit || 10,
    sort: {}
  };

  // Category filter
  if (req.query.category && req.query.category !== 'all') {
    query.category = req.query.category;
  }

  // Price filter
  if (req.query.price) {
    const [min, max] = req.query.price.split(',');
    query.price = { $gte: min, $lte: max };
  }

  // Search filter
  if (req.query.search) {
    query.$or = [
      { name: { $regex: req.query.search, $options: 'i' } },
      { description: { $regex: req.query.search, $options: 'i' } }
    ];
  }

  // Sort
  if (req.query.sort) {
    const [field, order] = req.query.sort.split(',');
    options.sort[field] = order === 'asc' ? 1 : -1;
  }

  const products = await Product.paginate(query, options);
  res.json(products);
});

const addProduct = asyncMiddleware(async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.status(201).json(product);
});

const updateProduct = asyncMiddleware(async (req, res) => {
  const product = await Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  
  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }
  
  res.json(product);
});

const deleteProduct = asyncMiddleware(async (req, res) => {
  const product = await Product.findByIdAndDelete(req.params.id);
  
  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }
  
  res.status(204).json({ message: 'Product deleted successfully' });
});

module.exports = {
  getProduct,
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct
};