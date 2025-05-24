import React from 'react';

const IFrames: React.FC = () => {
  return (
    <div>
      <div className="flex items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">iFrames</h1>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="space-y-8">
          {/* Frame One */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Frame One</h2>
            <div className="border border-gray-300 rounded-lg overflow-hidden">
              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik"
                className="w-full h-96"
                title="Frame One"
              ></iframe>
            </div>
          </div>

          {/* Frame Two */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Frame Two</h2>
            <div className="border border-gray-300 rounded-lg overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                className="w-full h-96"
                title="Frame Two"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IFrames;