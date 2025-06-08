import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '@/context/AuthContext';
import { useCart } from '@/context/CartContext';
import { toast } from '@/components/ui/use-toast';
import CheckoutForm from '@/components/CheckoutForm';

const CheckoutPage = () => {
  const { user } = useAuth();
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();

  const [shipping, setShipping] = useState({
    fullName: '',
    street: '',
    city: '',
    state: '',
    zip: '',
    country: '',
  });

  const [payment, setPayment] = useState({
    method: 'credit_card',
  });

  const [loading, setLoading] = useState(false);

  const handleOrderPlacement = async () => {
    if (!user) {
      toast({
        variant: 'destructive',
        title: 'Authentication Required',
        description: 'Please log in to place an order.',
      });
      return;
    }

    if (cartItems.length === 0) {
      toast({
        variant: 'destructive',
        title: 'Empty Cart',
        description: 'Please add items to your cart before checking out.',
      });
      return;
    }

    const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const orderPayload = {
      userId: user.id,
      items: cartItems.map((item) => ({
        productId: item.id,
        quantity: item.quantity,
        price: item.price,
      })),
      shippingAddress: {
        fullName: shipping.fullName,
        street: shipping.street,
        city: shipping.city,
        state: shipping.state,
        zipCode: shipping.zip,
        country: shipping.country,
      },
      paymentMethod: payment.method,
      totalAmount,
    };

    console.log('📝 Sending Order Payload:', orderPayload);

    try {
      setLoading(true);

      await axios.post('http://localhost:5000/api/orders', orderPayload, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      toast({
        title: 'Order Placed',
        description: 'Your order has been placed successfully!',
      });

      clearCart();
      navigate('/orders');
    } catch (error) {
      console.error('❌ Order submission failed:', error);
      toast({
        variant: 'destructive',
        title: 'Order Failed',
        description: 'Something went wrong. Please try again.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      <CheckoutForm
        shipping={shipping}
        setShipping={setShipping}
        payment={payment}
        setPayment={setPayment}
        loading={loading}
        onPlaceOrder={handleOrderPlacement}
      />
    </div>
  );
};

export default CheckoutPage;
