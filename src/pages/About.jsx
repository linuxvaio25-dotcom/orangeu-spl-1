import React from 'react';
import '../components/about/about.css';

const About = () => {
  return (
    <div className="home-background flex-1 min-h-screen px-4 py-12 relative overflow-x-hidden">
    <div className="flex-1 px-4 py-8">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .fade-tile {
          opacity: 0;
          // animation: fadeInUp 0.8s ease-out forwards;
          animation: fadeInUp 1s ease-out forwards;
        }
      `}</style>

      <div className="max-w-1xl mx-auto">
        {/* <h1 className="text-5xl font-bold text-gray-900 mb-6">About OrangeU</h1> */}
        <h1 className="about-title">About OrangeU</h1>
      </div>

      <div className="flex flex-col gap-16">
        <div className="max-w-1xl mx-auto w-full">
          {/* Tile 1 - left aligned, right + bottom border with shadow */}
          {/* Border commented out for comparison - re-add "border-r-4 border-b-4 border-orange-400" to className to restore */}
          <div
            // className="fade-tile bg-white rounded-lg shadow-2xl shadow-orange-500/50 max-w-2xl mr-auto"
            className="fade-tile bg-white rounded-lg shadow-2xl shadow-black max-w-2xl w-full"
            // style={{ animationDelay: '0.3s', padding: '2rem 3rem' }}
            style={{ animationDelay: '0.8s', padding: '2rem 3rem' }}
          >
            <p className="text-gray-700 text-lg mb-4">
              For the curious: The phrase "OrangeU (orange you)" is a phonetic pun for "Aren't you," which is often used in jokes and wordplay. It plays on the similarity in sound between "orange" and "aren't." The phrase is commonly used to create humorous or playful statements, often in the context of puns or riddles.
            </p>
          </div>
        </div>

        {/* Tile 2 - lives in a full-width row so it can sit at the true right edge of the screen */}
        {/* Border commented out for comparison - re-add "border-l-4 border-b-4 border-orange-400" to className to restore */}
        <div className="w-full flex justify-end">
          <div
            // className="fade-tile bg-white rounded-lg shadow-2xl shadow-orange-500/50 max-w-2xl w-full"
            className="fade-tile bg-white rounded-lg shadow-2xl shadow-black max-w-2xl w-full"
            // style={{ animationDelay: '0.8s', padding: '2rem 3rem' }}
            style={{ animationDelay: '1.3s', padding: '2rem 3rem' }}
          >
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

        <div className="max-w-4xl mx-auto w-full">
          {/* Tile 3 - left aligned, right + bottom border with shadow (same as tile 1) */}
          {/* Border commented out for comparison - re-add "border-r-4 border-b-4 border-orange-400" to className to restore */}
          <div
            // className="fade-tile bg-white rounded-lg shadow-2xl shadow-orange-500/50 max-w-2xl mr-auto"
            className="fade-tile bg-white rounded-lg shadow-2xl shadow-black max-w-2xl w-full"
            // style={{ animationDelay: '1.3s', padding: '2rem 3rem' }}
            style={{ animationDelay: '1.8s', padding: '2rem 3rem' }}
          >
            <p className="text-gray-700 text-lg mb-4">
              So orange you glad there's a site dedicated to offering, sharing various types of fruits for any type of way for any occasion?
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;