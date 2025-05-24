import React from 'react';
import Button from '../../components/ui/Button';

const CssProperties: React.FC = () => {
  return (
    <div>
      <div className="flex items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">CSS Properties</h1>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="space-y-8">
          {/* Links Section */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Links</h2>
            <div className="flex space-x-4">
              <a href="#" className="text-red-500 hover:underline">Link 1</a>
              <a href="#" className="text-blue-500 hover:underline">Link 2</a>
              <a href="#" className="text-green-500 hover:underline">Link 3</a>
              <a href="#" className="text-orange-500 hover:underline">Link 4</a>
              <a href="#" className="text-purple-500 hover:underline">Link 5</a>
            </div>
          </div>

          {/* Labels Section */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Labels</h2>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded">Label 1</span>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded">Label 2</span>
              <span className="px-3 py-1 bg-red-100 text-red-800 rounded">Label 3</span>
            </div>
          </div>

          {/* Buttons Section */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Buttons</h2>
            <div className="flex flex-wrap gap-2">
              <Button>Primary Button</Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="danger">Danger Button</Button>
            </div>
          </div>

          {/* Alerts Section */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Alerts</h2>
            <div className="space-y-2">
              <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4">
                Info Alert
              </div>
              <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4">
                Success Alert
              </div>
              <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4">
                Warning Alert
              </div>
              <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                Error Alert
              </div>
            </div>
          </div>

          {/* Progress Bars Section */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Progress Bars</h2>
            <div className="space-y-4">
              <div>
                <div className="h-2 bg-gray-200 rounded">
                  <div className="h-2 bg-blue-500 rounded" style={{ width: '25%' }}></div>
                </div>
                <span className="text-sm text-gray-600">25% Complete</span>
              </div>
              <div>
                <div className="h-2 bg-gray-200 rounded">
                  <div className="h-2 bg-green-500 rounded" style={{ width: '50%' }}></div>
                </div>
                <span className="text-sm text-gray-600">50% Complete</span>
              </div>
              <div>
                <div className="h-2 bg-gray-200 rounded">
                  <div className="h-2 bg-yellow-500 rounded" style={{ width: '75%' }}></div>
                </div>
                <span className="text-sm text-gray-600">75% Complete</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CssProperties;