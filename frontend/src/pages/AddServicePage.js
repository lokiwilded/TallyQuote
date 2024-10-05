// src/pages/AddServicePage.js
import React, { useState, useEffect } from 'react';
import axios from '../api/axios';

const AddServicePage = () => {
  const [services, setServices] = useState([]);
  const [name, setName] = useState('');
  const [credits, setCredits] = useState('');

  // Fetch services from backend
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get('/services');
        setServices(response.data);
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    };

    fetchServices();
  }, []);

  // Handle form submit to add a new service
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/services', { name, credits: Number(credits) });
      setServices([...services, response.data]);
      setName('');
      setCredits('');
    } catch (error) {
      console.error('Error adding service:', error);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Add New Service</h1>

      <form onSubmit={handleSubmit} className="mb-6">
        <div className="mb-4">
          <label className="block text-gray-700">Service Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Credits</label>
          <input
            type="number"
            value={credits}
            onChange={(e) => setCredits(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Add Service
        </button>
      </form>

      <h2 className="text-2xl font-bold mb-4">Available Services</h2>
      <ul className="list-disc pl-5">
        {services.map((service) => (
          <li key={service._id}>
            {service.name} - {service.credits} credits
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddServicePage;
