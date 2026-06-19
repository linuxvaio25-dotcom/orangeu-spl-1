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

  const getNavLinks = () => [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Fruits', path: '/fruits' },
    { label: 'Friends', path: '/friends', onClick: handleFriendsClick },
    { label: 'Contact Us', path: '/contact' },
    { label: 'Sign In/Sign Up', path: '/signin' },
  ];

  const navLinks = getNavLinks();

  useEffect(() => {
    initNav();
  }, []);

  return (
    <nav className="topbar">
      <div className="logo">
        <Link to="/">OrangeU</Link>
      </div>

      <div className="menu-button-group">
        <span className="menu-label">Menu</span>
        <button
          id="menuToggle"
          aria-expanded="false"
          aria-label="Open menu"
          className="menu-toggle"
          onClick={() => toggleNav()}
        >
          {/* <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="bar">
            <line className="bar-top" x1="3" y1="7" x2="17" y2="7" strokeWidth="2" strokeLinecap="round" />
            <line className="bar-bot" x1="3" y1="13" x2="17" y2="13" strokeWidth="2" strokeLinecap="round" />
          </svg> */}
        </button>
      </div>

      <div id="nav" className="nav">
        <div className="nav-bg" onClick={() => toggleNav()} />

        <div className="nav-panel nav-middle nav-border">
          <div className="nav-panel-inner nav-panel-content">
            <ul className="nav-list">
              {navLinks.map((link) => {
                const isCurrent = link.path === location.pathname;
                const linkClass = `nav-link${isCurrent ? ' nav-link-current' : ''}`;

                return (
                  <li key={link.path} className="nav-item">
                    {isCurrent ? (
                      <span className={linkClass} aria-current="page" aria-disabled="true">
                        {link.label}
                      </span>
                    ) : (
                      <Link
                        to={link.path}
                        onClick={(e) => { if (link.onClick) link.onClick(e); toggleNav(); }}
                        className="nav-link"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
            <div className="nav-login">Have an account? Sign in</div>
          </div>
        </div>

        {/* <div className="nav-panel nav-bottom nav-border">
          <div className="nav-asset">
            <img src="/orange.svg" alt="asset" />
          </div>
        </div> */}
      </div>

      {/* Alternate: each link gets its own panel (commented out)
      <div id="nav" className="nav">
        <div className="nav-bg" onClick={() => toggleNav()} />
        <div className="nav-panels">
          {navLinks.map((link) => (
            <div key={link.path} className="nav-panel link-panel">
              <Link to={link.path} onClick={(e) => { if (link.onClick) link.onClick(e); toggleNav(); }} className="nav-link-panel">
                {link.label}
              </Link>
            </div>
          ))}
        </div>
      </div>
      */}
    </nav>
  );
};

export default Navbar;
