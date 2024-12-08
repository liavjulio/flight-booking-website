import { Router } from 'express';
import { getFlights, getFlight } from '../controllers/flightController.js';

const router = Router();

router.get('/', getFlights);
router.get('/:id', getFlight);

export default router; // Ensure this line exists