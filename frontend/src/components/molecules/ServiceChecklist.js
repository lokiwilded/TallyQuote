// src/components/molecules/ServiceChecklist.js
import React, { useEffect, useState } from 'react';
import axios from '../../api/axios';

const ServiceChecklist = () => {
  const [services, setServices] = useState([]);
  const [selectedServices, setSelectedServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch services from the backend when the component mounts
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get('/services');
        setServices(response.data);
        setLoading(false);
      } catch (err) {
        setError('Error fetching services');
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  // Handle selecting/deselecting services
  const handleServiceChange = (service) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter((s) => s !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  // Calculate total credits
  const totalCredits = selectedServices.reduce((sum, service) => sum + service.credits, 0);

  if (loading) {
    return <div>Loading services...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Select Services</h2>

      {/* Display the list of services */}
      {services.map((service) => (
        <div key={service._id} className="flex justify-between items-center py-2">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={selectedServices.includes(service)}
              onChange={() => handleServiceChange(service)}
              className="w-4 h-4 text-blue-500 focus:ring-blue-400"
            />
            <span className="text-gray-800">{service.name}</span>
          </label>
          <span className="text-gray-500">{service.credits} credits</span>
        </div>
      ))}

      {/* Display the total credits */}
      <div className="mt-6">
        <p className="text-lg text-gray-700">
          Total Credits: <span className="font-semibold">{totalCredits}</span>
        </p>
      </div>
    </div>
  );
};

export default ServiceChecklist;
