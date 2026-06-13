import React, { useEffect } from 'react';
import { initAnimatedWords } from '../animatedtext';
import { words } from '../index';

const Home = () => {
  useEffect(() => { initAnimatedWords(); }, []);

  return (
    <div
      className="flex-1 min-h-screen flex flex-col items-center justify-center px-4 py-12 relative overflow-hidden"
      style={{ background: 'radial-gradient(circle at 10% 20%, #fffdf5 0%, #ffe6c2 20%, #ffd09a 50%, #ffb76b 100%)' }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative orange-fade-zoom">
          <img src="/red_orange-resize-2.png" alt="Orange" className="z-20 block" />
          <span className="u-appear absolute inset-0 flex items-center justify-center text-9xl md:text-9xl font-extrabold text-black pointer-events-none">U</span>
          <div className="animated-words absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-8 text-2xl text-black font-extrabold">
            {words.map((w) => (
              <span key={w} className="word">
                {w}
              </span>
            ))}
          </div>
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
