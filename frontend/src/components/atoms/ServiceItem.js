// src/components/atoms/ServiceItem.js
import React from 'react';

const ServiceItem = ({ name, credits, isChecked, onChange }) => {
  return (
    <div className="flex justify-between items-center py-2">
      <label className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={onChange}
          className="w-4 h-4 text-blue-500 focus:ring-blue-400"
        />
        <span className="text-gray-800">{name}</span>
      </label>
      <span className="text-gray-500">{credits} credits</span>
    </div>
  );
};

export default ServiceItem;
