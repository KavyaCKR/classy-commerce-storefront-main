const db = require('../config/db');

const addReview = (userId, productId, rating, comment) => {
  return db.query(
    'INSERT INTO reviews (user_id, product_id, rating, comment) VALUES (?, ?, ?, ?)',
    [userId, productId, rating, comment]
  );
};

const getReviewsByProduct = (productId) => {
  return db.query('SELECT * FROM reviews WHERE product_id = ?', [productId]);
};

module.exports = { addReview, getReviewsByProduct };
