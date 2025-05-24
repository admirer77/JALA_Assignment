import React from 'react';
import { Info } from 'lucide-react';

const Tooltips: React.FC = () => {
  return (
    <div>
      <div className="flex items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Tooltips</h1>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-center items-center space-x-4">
          <div className="relative group">
            <button className="bg-blue-500 text-white px-4 py-2 rounded flex items-center">
              Check the Tooltip Before You Click
              <Info className="ml-2" size={18} />
            </button>
            <div className="absolute invisible group-hover:visible bg-black text-white text-sm rounded p-2 -mt-2 transform -translate-y-full top-0">
              This is a helpful tooltip!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tooltips;