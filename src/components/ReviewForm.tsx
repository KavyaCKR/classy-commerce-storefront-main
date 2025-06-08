
import { useState } from 'react';
import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Product } from '@/types/product';
import { toast } from 'sonner';

interface ReviewFormProps {
  product?: Product;
  onSubmit?: (review: { productId: string; rating: number; comment: string }) => Promise<void>;
  onCancel?: () => void;
  onSubmitReview?: (rating: number, comment: string) => void;
}

const ReviewForm = ({ product, onSubmit, onCancel, onSubmitReview }: ReviewFormProps) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0) {
      toast.error('Please select a rating');
      return;
    }

    try {
      setIsSubmitting(true);
      
      if (onSubmitReview) {
        onSubmitReview(rating, comment);
      } else if (product && onSubmit) {
        await onSubmit({
          productId: product.id,
          rating,
          comment
        });
      }
      
      toast.success('Review submitted successfully');
      // Reset form
      setRating(0);
      setComment('');
    } catch (error) {
      console.error('Error submitting review:', error);
      toast.error('Failed to submit review. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-4 rounded-md border border-gray-200 mt-4">
      <h4 className="font-medium text-lg mb-3">
        Write a Review {product ? `for ${product.name}` : ''}
      </h4>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Your Rating</label>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setRating(star)}
                className="focus:outline-none"
              >
                <Star
                  fill={star <= rating ? "gold" : "none"}
                  stroke={star <= rating ? "gold" : "currentColor"}
                  size={24}
                  className={`cursor-pointer ${star <= rating ? "text-yellow-400" : "text-gray-300"}`}
                />
              </button>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="review-comment" className="block text-sm font-medium mb-1">Your Review</label>
          <Textarea
            id="review-comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Share your experience with this product..."
            className="w-full"
            rows={4}
          />
        </div>

        <div className="flex gap-2 justify-end">
          {onCancel && (
            <Button variant="outline" onClick={onCancel} type="button" disabled={isSubmitting}>
              Cancel
            </Button>
          )}
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit Review"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
