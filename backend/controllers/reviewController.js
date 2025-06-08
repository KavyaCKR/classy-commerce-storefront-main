import db from '../config/db.js';

export const addReview = async (req, res) => {
  const { userId } = req.user;
  const { productId, rating, comment } = req.body;

  try {
    await db.query(
      'INSERT INTO reviews (user_id, product_id, rating, comment, created_at) VALUES (?, ?, ?, ?, NOW())',
      [userId, productId, rating, comment]
    );

    res.status(201).json({ message: 'Review submitted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to submit review' });
  }
};

export const getReviewsByProductId = async (req, res) => {
  try {
    const [reviews] = await db.query(
      'SELECT r.*, u.first_name, u.last_name FROM reviews r JOIN users u ON r.user_id = u.id WHERE r.product_id = ?',
      [req.params.productId]
    );
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch reviews' });
  }
};
