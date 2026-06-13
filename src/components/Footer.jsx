import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row justify-between items-start gap-4">
          <Link to="/about" className="hover:text-orange-400 transition">
            <div>
              <h3 className="text-sm font-medium">Learn More</h3>
              <p className="text-gray-400 text-sm">Visit our About page.</p>
            </div>
          </Link>
          <Link to="/fruits" className="hover:text-orange-400 transition">
            <div>
              <h3 className="text-sm font-medium">Fruits</h3>
              <p className="text-gray-400 text-sm">See our fruits.</p>
            </div>
          </Link>
          <Link to="/contact" className="hover:text-orange-400 transition">
            <div>
              <h3 className="text-sm font-medium">Contact</h3>
              <p className="text-gray-400 text-sm">Get in touch.</p>
            </div>
          </Link>
        </div>
        <div className="border-t border-gray-700 mt-4 pt-4 text-center text-gray-400">
          <p className="text-sm">&copy; 2024 OrangeU.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
