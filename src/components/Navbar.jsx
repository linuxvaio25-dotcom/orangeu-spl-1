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
  const [scrollOpacity, setScrollOpacity] = useState(0); // Track opacity based on scroll

  useEffect(() => {
    if (!isHomePage) {
      setShowNavbar(true);
      setScrollOpacity(1);
      return;
    }

    const triggerTarget = Array.from(document.querySelectorAll('.section-title')).find(
      (element) => element.textContent?.trim() === 'Any Occasion'
    );

    if (!triggerTarget) {
      setShowNavbar(false);
      setScrollOpacity(0);
      return;
    }

    // Original binary approach (commented out for reference):
    // const trigger = ScrollTrigger.create({
    //   trigger: triggerTarget,
    //   start: 'top 70%',
    //   end: 'bottom 20%',
    //   onEnter: () => setShowNavbar(true),
    //   onLeaveBack: () => setShowNavbar(false),
    // });

    // New fade-in approach: gradually increase opacity based on scroll progress
    const trigger = ScrollTrigger.create({
      trigger: triggerTarget,
      start: 'top 85%',        // Fade-in begins when section is 85% from top
      end: 'top 40%',          // Fade-in completes when section is 40% from top
      onUpdate: (self) => {
        setScrollOpacity(self.progress); // 0 to 1 based on scroll
        setShowNavbar(self.progress > 0.05); // Show after tiny scroll threshold
      },
      onLeaveBack: () => {
        setScrollOpacity(0);
        setShowNavbar(false);
      },
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
     { label: 'Social', path: '/gifts'},
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
      {/* Original: className={`menu-bubble ${showNavbar ? 'bubble-visible' : 'bubble-hidden'}`} */}
      <div
        className="menu-bubble"
        style={{
          opacity: (isCartOpen || isCartMenuHidden) ? 0 : scrollOpacity,
          pointerEvents: (isCartOpen || isCartMenuHidden || scrollOpacity === 0) ? "none" : "auto",
          transition: isHomePage ? "none" : "opacity 0.25s ease", // No transition on home for smooth fade
        }}
      />


      {/* Toggle button — sits on top of bubble, same position */}
      {/* Original: className={`menu-toggle ${showNavbar ? 'bubble-visible' : 'bubble-hidden'}`} */}
      <button
        id="menuToggle"
        aria-expanded="false"
        aria-label="Open menu"
        className="menu-toggle"
        onClick={toggleNav}
        style={{
          opacity: (isCartOpen || isCartMenuHidden) ? 0 : scrollOpacity,
          pointerEvents: (isCartOpen || isCartMenuHidden || scrollOpacity === 0) ? "none" : "auto",
          transition: isHomePage ? "none" : "opacity 0.25s ease",
        }}
      >
        {scrollOpacity > 0.1 ? 'MENU' : null}
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