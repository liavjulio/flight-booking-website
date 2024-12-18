import { Router } from 'express';
import { addBooking, getBookings } from '../controllers/bookingController.js';

const router = Router();

router.get('/', getBookings); // Ensure you have this line for handling GET requests
router.post('/', addBooking);

export default router;