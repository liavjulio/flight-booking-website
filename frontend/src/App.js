import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchFlights from './components/SearchFlights.jsx';
import FlightDetails from './components/FlightDetails.jsx';
import BookFlight from './components/BookFlight.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SearchFlights />} />
        <Route path="/flights/:id" element={<FlightDetails />} />
        <Route path="/book/:id" element={<BookFlight />} />
      </Routes>
    </Router>
  );
}

export default App;