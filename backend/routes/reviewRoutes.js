import express from 'express';
import { addReview, getReviewsByProductId } from '../controllers/reviewController.js';

const router = express.Router();

router.post('/', addReview);
router.get('/:productId', getReviewsByProductId);

export default router;
