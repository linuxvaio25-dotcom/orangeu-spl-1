import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link to="/about" className="hover:text-orange-400 transition">
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold mb-2">Learn More</h3>
              <p className="text-gray-400">Visit our About page to learn more about us.</p>
            </div>
          </Link>
          <Link to="/fruits" className="hover:text-orange-400 transition">
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold mb-2">Fruits</h3>
              <p className="text-gray-400">Check out our collection of fruits.</p>
            </div>
          </Link>
          <Link to="/contact" className="hover:text-orange-400 transition">
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
              <p className="text-gray-400">Get in touch with us on the Contact page.</p>
            </div>
          </Link>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 OrangeU. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
