import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './navbar.css';
import { init as initNav, toggle as toggleNav } from './navbar';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Navbar = ({ isCartOpen, isCartMenuHidden }) => {
  const { isLoggedIn } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  const [showNavbar, setShowNavbar] = useState(() => !isHomePage);

  useEffect(() => {
    if (!isHomePage) {
      setShowNavbar(true);
      return;
    }

    const triggerTarget = Array.from(document.querySelectorAll('.section-title')).find(
      (element) => element.textContent?.trim() === 'Any Occasion'
    );

    if (!triggerTarget) {
      setShowNavbar(false);
      return;
    }

    const trigger = ScrollTrigger.create({
      trigger: triggerTarget,
      start: 'top 70%',
      end: 'bottom 20%',
      onEnter: () => setShowNavbar(true),
      onLeaveBack: () => setShowNavbar(false),
    });

    return () => trigger.kill();
  }, [isHomePage]);

  useEffect(() => { initNav(); }, []);

  const handleFriendsClick = (e) => {
    if (!isLoggedIn) { e.preventDefault(); navigate('/signin'); }
  };

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Fruits', path: '/fruits' },
    // { label: 'Friends', path: '/friends', onClick: handleFriendsClick },
     { label: 'Gifts', path: '/gifts'},
    { label: 'Contact Us', path: '/contact' },
    { label: 'Sign In/Sign Up', path: '/signin' },
  ];

  return (
    <div className={isHomePage ? 'navbar-home' : ''}>
      {/* Floating logo — top left, independent of any bar */}
      {/* <div className={`site-logo ${showNavbar ? 'logo-visible' : 'logo-hidden'}`}>
        <Link to="/">OrangeU</Link>
      </div> */}

      {/* The circle that expands — sits near the transition into the first section on home */}
      {/* {!isCartOpen && (
        <> */}
      <div
        className={`menu-bubble ${showNavbar ? 'bubble-visible' : 'bubble-hidden'}`}
        // style={{
        //   opacity: isCartOpen ? 0 : 1,
        //   pointerEvents: isCartOpen ? "none" : "auto",
        //   transition: "opacity 0.25s ease",
        // }}
        style={{
          opacity: isCartOpen || isCartMenuHidden ? 0 : 1,
          pointerEvents: isCartOpen || isCartMenuHidden ? "none" : "auto",
          transition: "opacity 0.25s ease",
        }}
      />


      {/* Toggle button — sits on top of bubble, same position */}
      <button
        id="menuToggle"
        aria-expanded="false"
        aria-label="Open menu"
        className={`menu-toggle ${showNavbar ? 'bubble-visible' : 'bubble-hidden'}`}
        onClick={toggleNav}
        // style={{
        //   opacity: isCartOpen ? 0 : 1,
        //   pointerEvents: isCartOpen ? "none" : "auto",
        //   transition: "opacity 0.25s ease",
        // }}
        style={{
          opacity: isCartOpen || isCartMenuHidden ? 0 : 1,
          pointerEvents: isCartOpen || isCartMenuHidden ? "none" : "auto",
          transition: "opacity 0.25s ease",
        }}
      >
        {showNavbar ? 'MENU' : null}
      </button>
      {/* </>
      )} */}

      {/* Full-screen nav content — revealed as bubble expands */}
      <div className="nav-content">
        <button className="nav-close" aria-label="Close menu" onClick={toggleNav}>
          ✕
        </button>

        <ul className="nav-list">
          {navLinks.map((link) => {
            const isCurrent = link.path === location.pathname;
            return (
              <li key={link.path} className="nav-item">
                {isCurrent ? (
                  <span className="nav-link nav-link-current" aria-current="page">
                    {link.label}
                  </span>
                ) : (
                  <Link
                    to={link.path}
                    className="nav-link"
                    onClick={(e) => {
                      if (link.onClick) link.onClick(e);
                      toggleNav();
                    }}
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
  );
};

export default Navbar;