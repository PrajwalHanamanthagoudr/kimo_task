import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CourseDetails from './pages/CourseDetails'; // New component for course details
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses/:id" element={<CourseDetails />} /> {/* New route */}
      </Routes>
    </Router>
  );
}

export default App;
