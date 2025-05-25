import React, { useState } from 'react';
import Button from '../../components/ui/Button';

const Images: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState('');

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleUpload = () => {
    if (!selectedFile || !fileName) {
      alert('Please select a file and enter a file name');
      return;
    }
    // Handle upload logic here
  };

  return (
    <div>
      <div className="flex items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Images</h1>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select File:
            </label>
            <div className="flex items-center">
              <label className="cursor-pointer bg-white border border-gray-300 rounded-md px-3 py-2 hover:bg-gray-50">
                <span>Choose File</span>
                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleFileSelect}
                />
              </label>
              <span className="ml-3 text-gray-500">
                {selectedFile ? selectedFile.name : 'No file chosen'}
              </span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              File Name:
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter file name"
              value={fileName}
              onChange={(e) => setFileName(e.target.value)}
            />
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <Button
            onClick={handleUpload}
            className="bg-green-500 hover:bg-green-600"
          >
            Upload
          </Button>
        </div>

        <div className="mt-8">
          <h2 className="text-lg font-medium text-gray-800 mb-4">List Of Images:</h2>
          <div className="border border-gray-200 rounded-lg p-4">
            <p className="text-gray-500 text-center">No images uploaded yet</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Images;