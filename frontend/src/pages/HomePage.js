// src/pages/HomePage.js
import React from 'react';
import ServiceChecklist from '../components/molecules/ServiceChecklist';

const HomePage = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-blue-500 text-center mb-8">Welcome to TallyQuote</h1>
      <ServiceChecklist />
    </div>
  );
};

export default HomePage;
