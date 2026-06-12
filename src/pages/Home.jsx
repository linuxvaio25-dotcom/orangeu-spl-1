import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Home = () => {
  const orangeRef = useRef(null);
  const uLetterRef = useRef(null);

  useEffect(() => {
    // Set initial positions
    gsap.set(orangeRef.current, { x: -200, y: -350, opacity: 0 });
    gsap.set(uLetterRef.current, { x: 200, y: 350, opacity: 0 });

    // Animation timeline
    const tl = gsap.timeline();

    // Orange animates to center from top left
    tl.to(orangeRef.current, {
      duration: 2.2,
      x: 0,
      y: 0,
      opacity: 1,
      ease: 'sine.inOut',
    }, 0);

    // U letter animates to center from bottom right
    tl.to(
      uLetterRef.current,
      {
        duration: 2.2,
        x: 0,
        y: 0,
        opacity: 1,
        ease: 'sine.inOut',
      },
      0 // Start at same time as orange
    );
  }, []);

  return (
    <div className="flex-1 flex flex-col items-center justify-center px-4 py-8 bg-orange-400 relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Orange image sliding down from top left */}
        <div ref={orangeRef} className="absolute">
          <img src="/orange.svg" alt="Orange" className="w-40 h-40" />
        </div>

        {/* Letter U sliding up from bottom right */}
        <div ref={uLetterRef} className="absolute text-9xl font-black text-black">
          U
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <h1 className="text-5xl font-bold text-white mb-4">Welcome to OrangeU</h1>
        <p className="text-xl text-white mb-8 max-w-2xl">
          This is the home page of OrangeU. Explore the site using the navigation bar above.
        </p>
      </div>
    </div>
  );
};

export default Home;
