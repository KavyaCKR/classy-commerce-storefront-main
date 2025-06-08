// backend/models/productModel.js
import db from '../config/db.js';

// Get all products
export const getAllProductsFromDB = async () => {
  const [rows] = await db.query('SELECT * FROM products');
  return rows;
};

// Get product by ID
export const getProductByIdFromDB = async (id) => {
  const [rows] = await db.query('SELECT * FROM products WHERE id = ?', [id]);
  return rows[0];
};

// Create a new product
export const createProductInDB = async (product) => {
  const { name, description, price, category, imageUrl } = product;
  const [result] = await db.query(
    'INSERT INTO products (name, description, price, category, imageUrl) VALUES (?, ?, ?, ?, ?)',
    [name, description, price, category, imageUrl]
  );
  return { id: result.insertId, ...product };
};

// Update a product
export const updateProductInDB = async (id, product) => {
  const { name, description, price, category, imageUrl } = product;
  await db.query(
    'UPDATE products SET name = ?, description = ?, price = ?, category = ?, imageUrl = ? WHERE id = ?',
    [name, description, price, category, imageUrl, id]
  );
  return { id, ...product };
};

// Delete a product
export const deleteProductFromDB = async (id) => {
  await db.query('DELETE FROM products WHERE id = ?', [id]);
};
