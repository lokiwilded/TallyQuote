// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/organisms/Navbar';
import HomePage from './pages/HomePage';
import QuotesPage from './pages/QuotesPage'; // Ensure you have this component
import AddServicePage from './pages/AddServicePage'; // Ensure you have this component
import AddClientPage from './pages/AddClientPage'; // Ensure you have this component

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <main className="container mx-auto p-6">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/quotes" element={<QuotesPage />} />
            <Route path="/add-service" element={<AddServicePage />} />
            <Route path="/add-client" element={<AddClientPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
