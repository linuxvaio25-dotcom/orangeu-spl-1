import React from 'react';

const About = () => {
  return (
    <div className="flex-1 px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">About OrangeU</h1>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <p className="text-gray-700 text-lg mb-4">
            OrangeU is a modern web application built with React and Vite, designed to provide a seamless user experience.
          </p>
          <p className="text-gray-700 text-lg mb-4">
            Our mission is to create innovative and user-friendly applications that bring value to our users.
          </p>
          <p className="text-gray-700 text-lg mb-4">
            We believe in the power of technology to solve real-world problems and make a positive impact.
          </p>
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Our Values</h2>
          <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
            <li>Innovation and Creativity</li>
            <li>User-Centric Design</li>
            <li>Quality and Reliability</li>
            <li>Continuous Improvement</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
