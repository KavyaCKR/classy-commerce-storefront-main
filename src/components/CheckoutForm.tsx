import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

interface ShippingAddress {
  fullName: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

interface PaymentInfo {
  cardName: string;
  cardNumber: string;
  expiry: string;
  cvv: string;
}

interface CheckoutFormProps {
  shipping: ShippingAddress;
  setShipping: (address: ShippingAddress) => void;
  payment: PaymentInfo;
  setPayment: (info: PaymentInfo) => void;
  loading: boolean;
  onPlaceOrder: () => void;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({
  shipping,
  setShipping,
  payment,
  setPayment,
  loading,
  onPlaceOrder,
}) => {
  const handleShippingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShipping({ ...shipping, [e.target.name]: e.target.value });
  };

  const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPayment({ ...payment, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onPlaceOrder();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-2">Shipping Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="fullName">Full Name</Label>
            <Input name="fullName" value={shipping.fullName} onChange={handleShippingChange} required />
          </div>
          <div>
            <Label htmlFor="street">Street</Label>
            <Input name="street" value={shipping.street} onChange={handleShippingChange} required />
          </div>
          <div>
            <Label htmlFor="city">City</Label>
            <Input name="city" value={shipping.city} onChange={handleShippingChange} required />
          </div>
          <div>
            <Label htmlFor="state">State</Label>
            <Input name="state" value={shipping.state} onChange={handleShippingChange} required />
          </div>
          <div>
            <Label htmlFor="zipCode">Zip Code</Label>
            <Input name="zipCode" value={shipping.zipCode} onChange={handleShippingChange} required />
          </div>
          <div>
            <Label htmlFor="country">Country</Label>
            <Input name="country" value={shipping.country} onChange={handleShippingChange} required />
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">Payment Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="cardName">Cardholder Name</Label>
            <Input name="cardName" value={payment.cardName} onChange={handlePaymentChange} required />
          </div>
          <div>
            <Label htmlFor="cardNumber">Card Number</Label>
            <Input name="cardNumber" value={payment.cardNumber} onChange={handlePaymentChange} required />
          </div>
          <div>
            <Label htmlFor="expiry">Expiry Date</Label>
            <Input name="expiry" placeholder="MM/YY" value={payment.expiry} onChange={handlePaymentChange} required />
          </div>
          <div>
            <Label htmlFor="cvv">CVV</Label>
            <Input name="cvv" value={payment.cvv} onChange={handlePaymentChange} required />
          </div>
        </div>
      </div>

      <Button
        type="submit"
        className="w-full"
        disabled={loading}
      >
        {loading ? 'Placing Order...' : 'Place Order'}
      </Button>
    </form>
  );
};

export default CheckoutForm;
