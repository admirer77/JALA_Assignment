import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Welcome to JALA Academy</h1>
        <p className="mt-2 text-gray-600">The world's best up-skilling academy</p>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <p className="text-center font-medium text-gray-700">
          Do you want to learn Selenium/cucumber Automation completely with Practical Scenarios in 7 Days? Use this website to find all the scenarios at one place.
        </p>
        <p className="text-center mt-3 text-gray-700">
          To understand or test RESTful APIs, use the JALA Academy FREE live APIs. Search on Google with the keyword "JALA Academy Postman APIs"
        </p>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <p className="text-gray-700">
          You learn Everything by doing projects if you are very serious to get a software job in 90 days <a href="http://jalatechnologies.com" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">http://jalatechnologies.com</a>
        </p>
        <p className="mt-2 text-gray-700">
          Don't forget to read our website JALAcademy completley to know more opportunities
        </p>
      </div>
      
      <div className="bg-yellow-300 rounded-lg p-4 mb-6">
        <p className="text-center font-medium text-gray-800">
          If you are a working professional, Up-skill with JALA Academy Job Guarantee Programs to keep your Job secure for 10 Years
        </p>
      </div>
      
      <footer className="text-center text-gray-600 mt-8">
        <p>Copyright © 2025 <a href="#" className="text-blue-500 hover:underline">JALA Technologies</a>. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;