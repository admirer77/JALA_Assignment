import React, { useState } from 'react';

const Slider: React.FC = () => {
  const [value, setValue] = useState(11);

  return (
    <div>
      <div className="flex items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Slider</h1>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="max-w-xl">
          <div className="relative">
            <input
              type="range"
              min="0"
              max="100"
              value={value}
              onChange={(e) => setValue(parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <div
              className="absolute -top-8 transform -translate-x-1/2 bg-blue-500 text-white px-2 py-1 rounded text-sm"
              style={{ left: `${value}%` }}
            >
              {value}
            </div>
          </div>
          <p className="mt-6 text-gray-700">Current Slider Value: {value}</p>
        </div>
      </div>
    </div>
  );
};

export default Slider;