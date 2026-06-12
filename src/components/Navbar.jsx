import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './navbar.css';
import { init as initNav, toggle as toggleNav } from './navbar';

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

  useEffect(() => {
    initNav();
  }, []);

  return (
    <nav className="topbar">
      <div className="logo">
        <Link to="/">OrangeU</Link>
      </div>

      <button
        id="menuToggle"
        aria-expanded="false"
        aria-label="Open menu"
        className="menu-toggle"
        onClick={() => toggleNav()}
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="bar">
          <line className="bar-top" x1="3" y1="7" x2="17" y2="7" strokeWidth="2" strokeLinecap="round" />
          <line className="bar-bot" x1="3" y1="13" x2="17" y2="13" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>

      <div id="nav" className="nav">
        <div className="nav-bg" onClick={() => toggleNav()} />

        <div className="nav-panel nav-top nav-border">
          <div className="header">
            <h1>Navigation</h1>
            <p className="nav-middle-desc">Explore OrangeU</p>
          </div>
        </div>

        <div className="nav-panel nav-middle nav-border">
          <div className="nav-panel-inner nav-panel-content">
            <ul className="nav-list">
              {navLinks.map((link) => (
                <li key={link.path} className="nav-item">
                  <Link to={link.path} onClick={(e) => { if (link.onClick) link.onClick(e); toggleNav(); }} className="nav-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="nav-login">Have an account? Sign in</div>
          </div>
        </div>

        <div className="nav-panel nav-bottom nav-border">
          <div className="nav-asset">
            <img src="/orange.svg" alt="asset" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
