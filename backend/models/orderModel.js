// backend/models/orderModel.js
import db from '../config/db.js';

export const createOrderInDB = async (userId, items, totalAmount) => {
  const [orderResult] = await db.query(
    'INSERT INTO orders (user_id, total_amount) VALUES (?, ?)',
    [userId, totalAmount]
  );

  const orderId = orderResult.insertId;

  for (const item of items) {
    await db.query(
      'INSERT INTO order_items (order_id, product_id, quantity, price) VALUES (?, ?, ?, ?)',
      [orderId, item.productId, item.quantity, item.price]
    );
    console.log('Saving item:', item); // Add this inside the for-loop

  }

  return { orderId, userId, totalAmount, items };
};

export const getUserOrdersFromDB = async (userId) => {
  const [orders] = await db.query(
    'SELECT * FROM orders WHERE user_id = ? ORDER BY created_at DESC',
    [userId]
  );
  return orders;
};
