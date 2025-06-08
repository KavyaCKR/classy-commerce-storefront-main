import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Package, ChevronDown, ChevronRight, Truck, Clock,
  CheckCircle, AlertCircle, Star
} from 'lucide-react';
import {
  Table, TableHeader, TableBody, TableHead,
  TableRow, TableCell
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { getUserOrders } from '@/data/orders';
import { Order, OrderStatus } from '@/types/order';
import { format } from 'date-fns';
import { useAuth } from '@/context/AuthContext';
import ReviewForm from '@/components/ReviewForm';
import ReviewDisplay from '@/components/ReviewDisplay';
import { submitProductReview } from '@/utils/dbUtils';
import { Product } from '@/types/product';

const OrdersPage = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedOrders, setExpandedOrders] = useState<string[]>([]);
  const [reviewingProduct, setReviewingProduct] = useState<{
    orderId: string;
    productId: string;
  } | null>(null);
  const [showReviews, setShowReviews] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    const fetchOrders = async () => {
      if (!user?.id) return;
      try {
        const data = await getUserOrders(user.id);
        setOrders(data);
      } catch (err) {
        console.error('Error fetching orders:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, [user]);

  const toggleOrderDetails = (orderId: string) => {
    setExpandedOrders(prev =>
      prev.includes(orderId)
        ? prev.filter(id => id !== orderId)
        : [...prev, orderId]
    );
  };

  const toggleProductReviews = (productId: string) => {
    setShowReviews(prev => ({
      ...prev,
      [productId]: !prev[productId],
    }));
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return format(date, 'MMM dd, yyyy');
  };

  const getStatusIcon = (status: OrderStatus) => {
    switch (status) {
      case 'pending': return <Clock size={18} className="text-yellow-500" />;
      case 'processing': return <Clock size={18} className="text-blue-500" />;
      case 'shipped': return <Truck size={18} className="text-blue-600" />;
      case 'delivered': return <CheckCircle size={18} className="text-green-500" />;
      case 'cancelled': return <AlertCircle size={18} className="text-red-500" />;
      default: return null;
    }
  };

  const getStatusStyle = (status: OrderStatus) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'processing': return 'bg-blue-100 text-blue-800';
      case 'shipped': return 'bg-indigo-100 text-indigo-800';
      case 'delivered': return 'bg-green-100 text-green-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleSubmitReview = async ({ productId, rating, comment }: { productId: string; rating: number; comment: string }) => {
    if (!user) return;
    await submitProductReview(
      user.id,
      `${user.firstName} ${user.lastName}`,
      productId,
      rating,
      comment
    );
    setReviewingProduct(null);
  };

  if (loading) {
    return <div className="text-center py-10 text-gray-500">Loading your orders...</div>;
  }

  return (
    <div className="container py-8">
      <div className="flex items-center mb-6">
        <Package size={24} className="mr-2 text-primary" />
        <h1 className="text-3xl font-bold">My Orders</h1>
      </div>

      {orders.length === 0 ? (
        <div className="bg-white rounded-lg shadow p-8 text-center">
          <h3 className="text-lg font-medium mb-2">You haven't placed any orders yet</h3>
          <p className="text-gray-500 mb-4">Once you place an order, it will appear here.</p>
          <Button asChild>
            <Link to="/products">Continue Shopping</Link>
          </Button>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Order ID</TableHead>
                <TableHead className="hidden md:table-cell">Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Total</TableHead>
                <TableHead className="w-[50px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order) => (
                <>
                  <TableRow
                    key={order.id}
                    className="cursor-pointer hover:bg-gray-50"
                    onClick={() => toggleOrderDetails(order.id)}
                  >
                    <TableCell className="font-medium">{order.id}</TableCell>
                    <TableCell className="hidden md:table-cell">{formatDate(order.createdAt)}</TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusStyle(order.status as OrderStatus)}`}>
                          {getStatusIcon(order.status as OrderStatus)}
                          <span className="ml-1 capitalize">{order.status}</span>
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">${order.totalAmount.toFixed(2)}</TableCell>
                    <TableCell>
                      {expandedOrders.includes(order.id) ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
                    </TableCell>
                  </TableRow>

                  {expandedOrders.includes(order.id) && (
                    <TableRow>
                      <TableCell colSpan={5} className="bg-gray-50 p-0">
                        <div className="p-4">
                          <h4 className="font-medium mb-3">Order Details</h4>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                            <div>
                              <h5 className="text-sm font-medium text-gray-500 mb-1">Shipping Address</h5>
                              <p className="text-sm">
                                {order.shippingAddress.fullName}<br />
                                {order.shippingAddress.street}<br />
                                {order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zipCode}<br />
                                {order.shippingAddress.country}
                              </p>
                            </div>
                            <div>
                              <h5 className="text-sm font-medium text-gray-500 mb-1">Payment Method</h5>
                              <p className="text-sm capitalize">{order.paymentMethod.replace('_', ' ')}</p>
                            </div>
                            <div>
                              {order.trackingNumber && (
                                <>
                                  <h5 className="text-sm font-medium text-gray-500 mb-1">Tracking Number</h5>
                                  <p className="text-sm">{order.trackingNumber}</p>
                                </>
                              )}
                            </div>
                          </div>

                          <h5 className="font-medium mb-2">Items</h5>
                          <div className="space-y-3">
                            {order.items.map((item, idx) => (
                              <div key={idx} className="flex flex-col border-b border-gray-100 pb-3">
                                <div className="flex items-center">
                                  <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                    <img
                                      src={item.image}
                                      alt={item.productName}
                                      className="h-full w-full object-cover object-center"
                                    />
                                  </div>
                                  <div className="ml-4 flex-1">
                                    <Link
                                      to={`/product/${item.productId}`}
                                      className="font-medium text-sm hover:text-primary"
                                      onClick={(e) => e.stopPropagation()}
                                    >
                                      {item.productName}
                                    </Link>
                                    <div className="flex justify-between mt-1">
                                      <div className="text-sm text-gray-500">
                                        {item.size && <span className="mr-2">Size: {item.size}</span>}
                                        {item.color && <span>Color: {item.color}</span>}
                                        <span className="mx-2">Qty: {item.quantity}</span>
                                      </div>
                                      <p className="text-sm font-medium">
                                        ${(item.price * item.quantity).toFixed(2)}
                                      </p>
                                    </div>
                                  </div>
                                </div>

                                {order.status === 'delivered' && (
                                  <div className="ml-20 mt-2">
                                    {reviewingProduct &&
                                      reviewingProduct.orderId === order.id &&
                                      reviewingProduct.productId === item.productId ? (
                                        <ReviewForm
                                          product={item.product as Product}
                                          onSubmit={handleSubmitReview}
                                          onCancel={() => setReviewingProduct(null)}
                                        />
                                      ) : (
                                        <div className="flex items-center space-x-3">
                                          <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={(e) => {
                                              e.stopPropagation();
                                              setReviewingProduct({ orderId: order.id, productId: item.productId });
                                            }}
                                          >
                                            Write a Review
                                          </Button>
                                          <Button
                                            variant="ghost"
                                            size="sm"
                                            onClick={(e) => {
                                              e.stopPropagation();
                                              toggleProductReviews(item.productId);
                                            }}
                                          >
                                            <Star size={14} className="mr-1" />
                                            {showReviews[item.productId] ? 'Hide Reviews' : 'View Reviews'}
                                          </Button>
                                        </div>
                                      )}
                                    {showReviews[item.productId] && (
                                      <div className="mt-2">
                                        <ReviewDisplay productId={item.productId} />
                                      </div>
                                    )}
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      </TableCell>
                    </TableRow>
                  )}
                </>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default OrdersPage;
