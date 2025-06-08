// backend/controllers/orderController.js
import {
    createOrderInDB,
    getUserOrdersFromDB
  } from '../models/orderModel.js';
  
  export const createOrder = async (req, res) => {
    try {
      const { userId, items, totalAmount } = req.body;
  
      // Log incoming data
      console.log('🛒 Received order:', { userId, items, totalAmount });
  
      // Basic validation
      if (!userId || !Array.isArray(items) || items.length === 0 || totalAmount == null) {
        return res.status(400).json({
          message: 'Invalid order data: userId, items, or totalAmount is missing'
        });
      }
  
      // Ensure each item has valid fields
      for (const item of items) {
        if (!item.productId || !item.quantity || item.price == null) {
          return res.status(400).json({
            message: 'Invalid item data: productId, quantity, or price is missing'
          });
        }
      }
  
      const order = await createOrderInDB(userId, items, totalAmount);
      console.log('✅ Order created with ID:', order.orderId);
  
      res.status(201).json(order);
    } catch (err) {
      console.error('❌ Error creating order:', err);
      res.status(500).json({ message: 'Failed to create order' });
    }
  };
  
  export const getUserOrders = async (req, res) => {
    try {
      const userId = req.params.userId;
  
      if (!userId) {
        return res.status(400).json({ message: 'Missing userId in request params' });
      }
  
      const orders = await getUserOrdersFromDB(userId);
      res.json(orders);
    } catch (err) {
      console.error('❌ Error fetching orders:', err);
      res.status(500).json({ message: 'Failed to get orders' });
    }
  };
  