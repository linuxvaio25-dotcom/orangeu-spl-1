import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { isLoggedIn } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleFriendsClick = (e) => {
    if (!isLoggedIn) {
      e.preventDefault();
      navigate('/signin');
    }
  };

  const getNavLinks = () => {
    const pathname = location.pathname;

    // Home page navbar
    if (pathname === '/') {
      return [
        { label: 'About', path: '/about' },
        { label: 'Fruits', path: '/fruits' },
        ...(isLoggedIn ? [{ label: 'Friends', path: '/friends' }] : []),
        { label: 'Contact Us', path: '/contact' },
        { label: 'Sign In/Sign Up', path: '/signin' },
      ];
    }

    // About page navbar
    if (pathname === '/about') {
      return [
        { label: 'Home', path: '/' },
        { label: 'Fruits', path: '/fruits' },
        { label: 'Friends', path: '/friends', onClick: handleFriendsClick },
        { label: 'Contact Us', path: '/contact' },
        { label: 'Sign In/Sign Up', path: '/signin' },
      ];
    }

    // Fruits page navbar
    if (pathname === '/fruits') {
      return [
        { label: 'Home', path: '/' },
        { label: 'About', path: '/about' },
        { label: 'Friends', path: '/friends', onClick: handleFriendsClick },
        { label: 'Contact Us', path: '/contact' },
        { label: 'Sign In/Sign Up', path: '/signin' },
      ];
    }

    // Friends page navbar (only if logged in)
    if (pathname === '/friends') {
      return [
        { label: 'Home', path: '/' },
        { label: 'About', path: '/about' },
        { label: 'Fruits', path: '/fruits' },
        { label: 'Contact Us', path: '/contact' },
        { label: 'Sign In/Sign Up', path: '/signin' },
      ];
    }

    // Contact Us page navbar
    if (pathname === '/contact') {
      return [
        { label: 'Home', path: '/' },
        { label: 'About', path: '/about' },
        { label: 'Fruits', path: '/fruits' },
        { label: 'Friends', path: '/friends', onClick: handleFriendsClick },
        { label: 'Sign In/Sign Up', path: '/signin' },
      ];
    }

    // Sign In/Sign Up page navbar
    if (pathname === '/signin') {
      return [
        { label: 'Home', path: '/' },
      ];
    }

    // Default
    return [
      { label: 'Home', path: '/' },
      { label: 'About', path: '/about' },
    ];
  };

  const navLinks = getNavLinks();

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-purple-600">
              OrangeU
            </Link>
          </div>
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={link.onClick}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'bg-purple-100 text-purple-600'
                    : 'text-gray-700 hover:text-purple-600'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
