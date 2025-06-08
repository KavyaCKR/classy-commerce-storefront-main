
import { Review } from "@/types/review";
import { toast } from "sonner";

// Mock database for reviews (will be replaced with real database connection)
let mockReviews: Review[] = [
  {
    id: "rev-001",
    productId: "1",
    userId: "user-123",
    userName: "John Doe",
    rating: 4,
    comment: "Great product, really comfortable and stylish!",
    createdAt: "2024-03-15T09:30:00Z"
  },
  {
    id: "rev-002",
    productId: "3",
    userId: "user-123",
    userName: "John Doe",
    rating: 5,
    comment: "Absolutely love this product. Would definitely recommend!",
    createdAt: "2024-02-10T14:45:00Z"
  }
];

// Function to get reviews for a product
export const getProductReviews = async (productId: string): Promise<Review[]> => {
  try {
    // In a real app, this would be a database query
    // Example SQL: SELECT * FROM reviews WHERE product_id = ?
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300));
    
    return mockReviews.filter(review => review.productId === productId);
  } catch (error) {
    console.error("Error fetching product reviews:", error);
    throw error;
  }
};

// Function to submit a new review
export const submitProductReview = async (
  userId: string,
  userName: string,
  productId: string,
  rating: number,
  comment: string
): Promise<Review> => {
  try {
    // In a real app, this would be a database insert
    // Example SQL: INSERT INTO reviews (user_id, user_name, product_id, rating, comment) VALUES (?, ?, ?, ?, ?)
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const newReview: Review = {
      id: `rev-${Math.random().toString(36).substr(2, 9)}`,
      userId,
      userName,
      productId,
      rating,
      comment,
      createdAt: new Date().toISOString()
    };
    
    // Add to mock database
    mockReviews = [...mockReviews, newReview];
    
    return newReview;
  } catch (error) {
    console.error("Error submitting product review:", error);
    throw error;
  }
};

// Export submitProductReview as addReview for backward compatibility
export const addReview = submitProductReview;

// Function to get all reviews for a user
export const getUserReviews = async (userId: string): Promise<Review[]> => {
  try {
    // In a real app, this would be a database query
    // Example SQL: SELECT * FROM reviews WHERE user_id = ?
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300));
    
    return mockReviews.filter(review => review.userId === userId);
  } catch (error) {
    console.error("Error fetching user reviews:", error);
    throw error;
  }
};

// Example SQL queries for a production environment
export const SQL_EXAMPLES = {
  CREATE_REVIEWS_TABLE: `
    CREATE TABLE reviews (
      id VARCHAR(255) PRIMARY KEY,
      product_id VARCHAR(255) NOT NULL,
      user_id VARCHAR(255) NOT NULL,
      user_name VARCHAR(255) NOT NULL,
      rating INTEGER NOT NULL CHECK (rating BETWEEN 1 AND 5),
      comment TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (product_id) REFERENCES products(id),
      FOREIGN KEY (user_id) REFERENCES users(id)
    );
  `,
  INSERT_REVIEW: `
    INSERT INTO reviews (id, product_id, user_id, user_name, rating, comment)
    VALUES (?, ?, ?, ?, ?, ?);
  `,
  GET_PRODUCT_REVIEWS: `
    SELECT * FROM reviews 
    WHERE product_id = ?
    ORDER BY created_at DESC;
  `,
  GET_USER_REVIEWS: `
    SELECT r.*, p.name as product_name, p.images
    FROM reviews r
    JOIN products p ON r.product_id = p.id
    WHERE r.user_id = ?
    ORDER BY r.created_at DESC;
  `
};
