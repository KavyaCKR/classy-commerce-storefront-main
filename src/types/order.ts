
export interface Address {
  fullName: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  mobileNumber?: string; // Add mobile number to address
}

export type PaymentMethod = 'credit_card' | 'paypal' | 'apple_pay' | 'google_pay' | 'upi' | 'net_banking' | 'cod';

export interface Order {
  id: string;
  userId: string;
  items: OrderItem[];
  address: Address;
  totalAmount: number;
  paymentMethod: PaymentMethod;
  paymentStatus: 'pending' | 'paid' | 'failed';
  orderStatus: 'processing' | 'shipped' | 'delivered' | 'cancelled';
  createdAt: string;
  estimatedDelivery?: string; // Add estimated delivery date
  trackingId?: string;
  shippingAddress?: Address; // For backward compatibility
  status?: OrderStatus; // For backward compatibility
  trackingNumber?: string; // For backward compatibility
  updatedAt?: string; // For backward compatibility
}

export interface OrderItem {
  productId: string;
  productName: string;
  price: number;
  quantity: number;
  size?: string;
  color?: string;
  image: string;
  product?: any; // For backward compatibility
}

export type OrderStatus = 'processing' | 'shipped' | 'delivered' | 'cancelled' | 'pending';
