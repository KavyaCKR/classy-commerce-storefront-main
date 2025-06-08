
import { useEffect, useState } from 'react';
import { Star, MessageSquare } from 'lucide-react';
import { Review } from '@/types/review';
import { getProductReviews } from '@/utils/dbUtils';
import { format } from 'date-fns';

interface ReviewDisplayProps {
  productId?: string;
  review?: Review;
  className?: string;
}

const ReviewDisplay = ({ productId, review, className }: ReviewDisplayProps) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // If a single review is provided, don't fetch
    if (review) return;
    
    // Only fetch if productId is provided
    if (!productId) return;
    
    const fetchReviews = async () => {
      try {
        setLoading(true);
        const data = await getProductReviews(productId);
        setReviews(data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [productId, review]);

  // Display a single review if provided
  if (review) {
    return (
      <div className={`border-b pb-3 ${className || ''}`}>
        <div className="flex justify-between">
          <div>
            <p className="font-medium">{review.userName}</p>
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className="text-yellow-400"
                  fill={i < review.rating ? "currentColor" : "none"}
                />
              ))}
              <span className="text-xs text-gray-500 ml-2">
                {format(new Date(review.createdAt), 'MMM dd, yyyy')}
              </span>
            </div>
          </div>
        </div>
        <p className="mt-1 text-sm">{review.comment}</p>
      </div>
    );
  }

  if (loading) {
    return <div className="text-center py-2 text-sm text-gray-500">Loading reviews...</div>;
  }

  if (reviews.length === 0) {
    return <div className="text-center py-2 text-sm text-gray-500">No reviews yet</div>;
  }

  return (
    <div className={`space-y-4 ${className || ''}`}>
      <h3 className="font-medium flex items-center gap-1.5">
        <MessageSquare size={16} /> 
        Reviews ({reviews.length})
      </h3>
      
      {reviews.map((reviewItem) => (
        <div key={reviewItem.id} className="border-b pb-3">
          <div className="flex justify-between">
            <div>
              <p className="font-medium">{reviewItem.userName}</p>
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="text-yellow-400"
                    fill={i < reviewItem.rating ? "currentColor" : "none"}
                  />
                ))}
                <span className="text-xs text-gray-500 ml-2">
                  {format(new Date(reviewItem.createdAt), 'MMM dd, yyyy')}
                </span>
              </div>
            </div>
          </div>
          <p className="mt-1 text-sm">{reviewItem.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewDisplay;
