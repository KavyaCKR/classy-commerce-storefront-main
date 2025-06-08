
import { Order, OrderItem, OrderStatus } from "@/types/order";
import { products } from "./products";

// Mock orders data
export const orders: Order[] = [
  {
    id: "ORD-1001",
    userId: "user-123",
    items: [
      {
        productId: products[0].id,
        productName: products[0].name,
        price: products[0].price,
        quantity: 2,
        size: "L",
        image: products[0].images[0],
        product: products[0] // For backward compatibility
      },
      {
        productId: products[2].id,
        productName: products[2].name,
        price: products[2].price,
        quantity: 1,
        size: "M",
        image: products[2].images[0],
        product: products[2] // For backward compatibility
      }
    ],
    totalAmount: 169.97,
    status: "delivered" as OrderStatus,
    paymentMethod: "credit_card",
    paymentStatus: "paid",
    orderStatus: "delivered",
    shippingAddress: {
      fullName: "John Doe",
      street: "123 Main St",
      city: "San Francisco",
      state: "CA",
      zipCode: "94105",
      country: "United States"
    },
    address: {
      fullName: "John Doe",
      street: "123 Main St",
      city: "San Francisco",
      state: "CA",
      zipCode: "94105",
      country: "United States"
    },
    createdAt: "2023-12-01T10:30:00Z",
    updatedAt: "2023-12-04T15:20:00Z",
    trackingNumber: "TRK-87654321"
  },
  {
    id: "ORD-1002",
    userId: "user-123",
    items: [
      {
        productId: products[3].id,
        productName: products[3].name,
        price: products[3].price,
        quantity: 1,
        image: products[3].images[0],
        product: products[3] // For backward compatibility
      }
    ],
    totalAmount: 89.99,
    status: "shipped" as OrderStatus,
    paymentMethod: "paypal",
    paymentStatus: "paid",
    orderStatus: "shipped",
    shippingAddress: {
      fullName: "John Doe",
      street: "123 Main St",
      city: "San Francisco",
      state: "CA",
      zipCode: "94105",
      country: "United States"
    },
    address: {
      fullName: "John Doe",
      street: "123 Main St",
      city: "San Francisco",
      state: "CA",
      zipCode: "94105",
      country: "United States"
    },
    createdAt: "2024-01-15T14:20:00Z",
    updatedAt: "2024-01-16T09:15:00Z",
    trackingNumber: "TRK-45678901"
  },
  {
    id: "ORD-1003",
    userId: "user-123",
    items: [
      {
        productId: products[4].id,
        productName: products[4].name,
        price: products[4].price,
        quantity: 1,
        size: "M",
        image: products[4].images[0],
        product: products[4] // For backward compatibility
      },
      {
        productId: products[6].id,
        productName: products[6].name,
        price: products[6].price,
        quantity: 1,
        image: products[6].images[0],
        product: products[6] // For backward compatibility
      },
      {
        productId: products[7].id,
        productName: products[7].name,
        price: products[7].price,
        quantity: 2,
        size: "S",
        color: "Beige",
        image: products[7].images[0],
        product: products[7] // For backward compatibility
      }
    ],
    totalAmount: 249.96,
    status: "processing" as OrderStatus,
    paymentMethod: "credit_card",
    paymentStatus: "paid",
    orderStatus: "processing",
    shippingAddress: {
      fullName: "John Doe",
      street: "123 Main St",
      city: "San Francisco",
      state: "CA",
      zipCode: "94105",
      country: "United States"
    },
    address: {
      fullName: "John Doe",
      street: "123 Main St",
      city: "San Francisco",
      state: "CA",
      zipCode: "94105",
      country: "United States"
    },
    createdAt: "2024-03-25T11:45:00Z",
    updatedAt: "2024-03-25T14:30:00Z"
  },
  {
    id: "ORD-1004",
    userId: "user-123",
    items: [
      {
        productId: products[9].id,
        productName: products[9].name,
        price: products[9].price,
        quantity: 1,
        image: products[9].images[0],
        product: products[9] // For backward compatibility
      }
    ],
    totalAmount: 49.99,
    status: "pending" as OrderStatus,
    paymentMethod: "apple_pay",
    paymentStatus: "pending",
    orderStatus: "processing",
    shippingAddress: {
      fullName: "John Doe",
      street: "123 Main St",
      city: "San Francisco",
      state: "CA",
      zipCode: "94105",
      country: "United States"
    },
    address: {
      fullName: "John Doe",
      street: "123 Main St",
      city: "San Francisco",
      state: "CA",
      zipCode: "94105",
      country: "United States"
    },
    createdAt: "2024-04-06T09:10:00Z",
    updatedAt: "2024-04-06T09:10:00Z"
  }
];

export const getUserOrders = (userId: string): Order[] => {
  return orders.filter(order => order.userId === userId);
};

export const getOrderById = (orderId: string): Order | undefined => {
  return orders.find(order => order.id === orderId);
};
