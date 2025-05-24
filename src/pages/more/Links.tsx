import React from 'react';

const Links: React.FC = () => {
  return (
    <div>
      <div className="flex items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Links</h1>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex space-x-4">
          <a href="#" className="text-red-500 hover:underline">Link 1</a>
          <a href="#" className="text-blue-500 hover:underline">Link 2</a>
          <a href="#" className="text-green-500 hover:underline">Link 3</a>
        </div>

        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-4">Link Types</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium mb-2">Working Links</h3>
              <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                Google
              </a>
            </div>
            
            <div>
              <h3 className="font-medium mb-2">Broken Links</h3>
              <a href="#broken" className="text-gray-400 cursor-not-allowed">Broken Link</a>
            </div>
            
            <div>
              <h3 className="font-medium mb-2">Image Links</h3>
              <a href="#" className="inline-block">
                <img 
                  src="https://via.placeholder.com/150" 
                  alt="Placeholder" 
                  className="rounded hover:opacity-80 transition-opacity"
                />
              </a>
            </div>
            
            <div>
              <h3 className="font-medium mb-2">Status Codes</h3>
              <div className="space-y-2">
                <p>200 - Success</p>
                <p>404 - Not Found</p>
                <p>500 - Server Error</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Links;