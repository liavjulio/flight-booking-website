// controllers/flightController.js
import { getAllFlights, getFlightById } from '../models/flightModel.js';

export const getFlights = async (req, res) => {
  try {
    const flights = await getAllFlights();
    res.json(flights);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getFlight = async (req, res) => {
  try {
    const { id } = req.params;
    const flight = await getFlightById(id);
    if (flight) {
      res.json(flight);
    } else {
      res.status(404).json({ error: 'Flight not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};