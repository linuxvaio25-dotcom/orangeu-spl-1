import React, { useEffect } from 'react';
import { initAnimatedWords } from '../animatedtext';
//import { words } from '../index';
import { words, cardImages1, cardImages2, cardImages3 } from '../index';
import ScrollSection from "../components/ScrollSection";

const Home = () => {
  useEffect(() => { initAnimatedWords(); }, []);

  // const cards1 = Array.from({ length: 5 }, (_, i) => ({
  //   id: i,
  //   title: `Card ${i + 1}`,
  //   image: `/images/card${i + 1}.jpg`,
  // }));

  // const cards2 = Array.from({ length: 5 }, (_, i) => ({
  //   id: i,
  //   title: `Card ${i + 1}`,
  //   image: `/images/card${i + 1}.jpg`,
  // }));

  // const cards3 = Array.from({ length: 5 }, (_, i) => ({
  //   id: i,
  //   title: `Card ${i + 1}`,
  //   image: `/images/card${i + 1}.jpg`,
  // }));

  const cards1 = cardImages1.map((image, i) => ({
    id: i,
    title: `Card ${i + 1}`,
    image,
  }));

  const cards2 = cardImages2.map((image, i) => ({
    id: i,
    title: `Card ${i + 1}`,
    image,
  }));

  const cards3 = cardImages3.map((image, i) => ({
    id: i,
    title: `Card ${i + 1}`,
    image,
  }));

  return (
    <div
      // className="flex-1 min-h-screen flex flex-col items-center justify-center px-4 py-12 relative overflow-hidden"
      className="flex-1 min-h-screen px-4 py-12 relative overflow-x-hidden"
      style={{ background: 'radial-gradient(circle at 10% 20%, #fffdf5 0%, #ffe6c2 20%, #ffd09a 50%, #ffb76b 100%)' }}
    >
      {/* <div className="absolute inset-0 flex items-center justify-center">
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
export default Home; */}

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 py-12 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative orange-fade-zoom">
            <img
              src="/red_orange-resize-2.png"
              alt="Orange"
              className="z-20 block"
            />

            <span className="u-appear absolute inset-0 flex items-center justify-center text-9xl md:text-9xl font-extrabold text-black pointer-events-none">
              U
            </span>

            <div className="animated-words absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-8 text-2xl text-black font-extrabold">
              {words.map((w) => (
                <span key={w} className="word">
                  {w}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="relative z-10 flex flex-col items-center text-center">
          <h1 className="text-5xl font-bold text-white mb-4">
            Welcome to OrangeU
          </h1>
          <p className="text-xl text-white max-w-2xl">
            Explore the site using the navigation bar above.
          </p>
        </div>
      </section>

      {/* Home Article */}
      {/* <article
        id="home"
        className="max-w-5xl mx-auto px-6 py-20 text-center"
      >
        <h2 className="text-4xl font-bold mb-6">Home</h2>
        <p className="text-lg">
          OrangeU is a community-centered platform where users can connect,
          learn, and share experiences.
        </p>
      </article> */}

      {/* About Article */}
      {/* <article
        id="about"
        className="max-w-5xl mx-auto px-6 py-20 text-center"
      >
        <h2 className="text-4xl font-bold mb-6">About</h2>
        <p className="text-lg">
          Our mission is to build meaningful connections and provide a welcoming
          environment for everyone.
        </p>
      </article> */}

      {/* Friends Article */}
      {/* <article
        id="friends"
        className="max-w-5xl mx-auto px-6 py-20 text-center"
      >
        <h2 className="text-4xl font-bold mb-6">Friends</h2>
        <p className="text-lg">
          Discover new friends, stay connected with existing ones, and engage
          with the OrangeU community.
        </p>
      </article> */}
      {/* Friends Article */}
      {/* <article
        id="friends"
        className="max-w-5xl mx-auto px-6 py-20 text-center"
      >
        <h2 className="text-4xl font-bold mb-6">Friends</h2>
        <p className="text-lg">
          Discover new friends, stay connected with existing ones, and engage
          with the OrangeU community.
        </p>
      </article> */}

      {/* Animated Card Sections */}
      <ScrollSection
        title="Any Fruit"
        cards={cards1}
        direction="left"
      />

      <ScrollSection
        title="Any Way"
        cards={cards2}
        direction="right"
      />

      <ScrollSection
        title="Any Occasion"
        cards={cards3}
        direction="left"
      />
    </div>
  );
};

export default Home;
