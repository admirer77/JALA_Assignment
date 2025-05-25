import React, { useState } from 'react';
import { cn } from '../../utils/cn';

const menuItems = [
  { id: 'testing', label: 'Testing' },
  { id: 'java', label: 'Java' },
  { id: 'net', label: '.Net' },
  { id: 'database', label: 'Data Base' }
];

const Menu: React.FC = () => {
  const [activeTab, setActiveTab] = useState('single');
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  return (
    <div>
      <div className="flex items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Menu</h1>
      </div>

      <div className="bg-white rounded-lg shadow-md">
        <div className="border-b border-gray-200">
          <div className="flex">
            <button
              onClick={() => setActiveTab('single')}
              className={cn(
                'px-4 py-2 text-sm font-medium border-b-2 focus:outline-none',
                activeTab === 'single'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              )}
            >
              Single Menus
            </button>
            <button
              onClick={() => setActiveTab('sub')}
              className={cn(
                'px-4 py-2 text-sm font-medium border-b-2 focus:outline-none',
                activeTab === 'sub'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              )}
            >
              Sub Menus
            </button>
          </div>
        </div>
        <div className="p-6">
          <div className="w-full max-w-xs">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setSelectedItem(item.id)}
                className={cn(
                  'w-full text-left px-4 py-3 text-sm transition-colors',
                  selectedItem === item.id
                    ? 'bg-blue-500 text-white'
                    : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                )}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;