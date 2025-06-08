// backend/controllers/productController.js

import {
    getAllProductsFromDB,
    getProductByIdFromDB,
    createProductInDB,
    updateProductInDB,
    deleteProductFromDB,
  } from '../models/productModel.js';
  
  export const getAllProducts = async (req, res) => {
    try {
      const products = await getAllProductsFromDB();
      res.json(products);
    } catch (err) {
      res.status(500).json({ message: 'Failed to fetch products' });
    }
  };
  
  export const getProductById = async (req, res) => {
    const { id } = req.params;
    try {
      const product = await getProductByIdFromDB(id);
      if (!product) return res.status(404).json({ message: 'Product not found' });
      res.json(product);
    } catch (err) {
      res.status(500).json({ message: 'Failed to fetch product' });
    }
  };
  
  export const createProduct = async (req, res) => {
    const productData = req.body;
    try {
      const created = await createProductInDB(productData);
      res.status(201).json(created);
    } catch (err) {
      res.status(500).json({ message: 'Failed to create product' });
    }
  };
  
  export const updateProduct = async (req, res) => {
    const { id } = req.params;
    const updatedData = req.body;
    try {
      const updated = await updateProductInDB(id, updatedData);
      res.json(updated);
    } catch (err) {
      res.status(500).json({ message: 'Failed to update product' });
    }
  };
  
  export const deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
      await deleteProductFromDB(id);
      res.json({ message: 'Product deleted' });
    } catch (err) {
      res.status(500).json({ message: 'Failed to delete product' });
    }
  };
  