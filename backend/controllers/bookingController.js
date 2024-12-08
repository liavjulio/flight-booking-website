import { createBooking } from '../models/bookingModel.js';

export const addBooking = async (req, res) => {
  try {
    const { flightId, passengerName } = req.body;
    const booking = await createBooking(flightId, passengerName);
    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};