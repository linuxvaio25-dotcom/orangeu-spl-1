import React, { useRef, useState, useEffect, useCallback } from 'react';
import { fruitsections } from '../index.js';

const VIDEO_MAP = {
  Fruits:    '/fruits-1.mp4',
  Juice:     '/juice-1.mp4',
  Smoothies: '/smoothie-1.mp4',
};

const FADE_MS = 800; // crossfade duration in ms

const Fruits = () => {
  const [openSection, setOpenSection]   = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  // Two video slots that take turns being "active"
  const videoA      = useRef(null);
  const videoB      = useRef(null);
  const activeSlot  = useRef('a');       // which slot is currently visible
  const fadeTimer   = useRef(null);

  // Cross-fade to a new src, or fade everything out when src is null
  const crossfadeTo = useCallback((src) => {
    clearTimeout(fadeTimer.current);

    const current  = activeSlot.current === 'a' ? videoA.current : videoB.current;
    const incoming = activeSlot.current === 'a' ? videoB.current : videoA.current;

    if (!current || !incoming) return;

    // if (!src) {
    //   // Fade out the current video
    //   current.style.transition  = `opacity ${FADE_MS}ms ease`;
    //   // current.style.opacity     = '0';
    //   current.style.opacity     = '0';
    //   fadeTimer.current = setTimeout(() => {
    //     current.pause();
    //     current.currentTime = 0;
    //   }, FADE_MS);
    //   return;

    if (!src) {
  [videoA.current, videoB.current].forEach((video) => {
    if (!video) return;

    video.style.transition = `opacity ${FADE_MS}ms ease`;
    video.style.opacity = '0';
  });

  // fadeTimer.current = setTimeout(() => {
  //   [videoA.current, videoB.current].forEach((video) => {
  //     if (!video) return;

  //     video.pause();
  //     video.currentTime = 0;
  //     video.src = '';
  //   });
  // }, FADE_MS);

  fadeTimer.current = setTimeout(() => {
  [videoA.current, videoB.current].forEach((video) => {
    if (!video) return;

    video.pause();
    video.currentTime = 0;
    video.src = '';
  });

  activeSlot.current = 'a';
}, FADE_MS);

  return;

    }

    // Prepare incoming video (hidden, ready to play)
    incoming.src    = src;
    incoming.style.transition = 'none';
    incoming.style.opacity    = '0';
    incoming.load();

    const play = () => {
      const p = incoming.play();
      if (p && typeof p.catch === 'function') p.catch(() => {});

      // Crossfade: incoming fades in, current fades out simultaneously
      requestAnimationFrame(() => {
        incoming.style.transition = `opacity ${FADE_MS}ms ease`;
        // incoming.style.opacity    = '0.4';
        incoming.style.opacity    = '0.7';
        current.style.transition  = `opacity ${FADE_MS}ms ease`;
        current.style.opacity     = '0';
      });

      fadeTimer.current = setTimeout(() => {
        current.pause();
        current.currentTime = 0;
        current.src         = '';
      }, FADE_MS);

      activeSlot.current = activeSlot.current === 'a' ? 'b' : 'a';
      incoming.removeEventListener('canplay', play);
    };

    incoming.addEventListener('canplay', play, { once: true });
  }, []);

  const toggleSection = (title) => {
    setOpenSection((current) => {
      const next = current === title ? null : title;
      crossfadeTo(next ? VIDEO_MAP[next] : null);
      return next;
    });
  };

  // Cleanup on unmount
  useEffect(() => () => clearTimeout(fadeTimer.current), []);

  const updateQuantity = (quantity) => {
    setSelectedItem((current) => (current ? { ...current, quantity } : current));
  };

  // Shared video style — both elements are always in the DOM
  const videoBase = {
    position:   'fixed',
    inset:       0,
    width:       '100%',
    height:      '100%',
    objectFit:  'cover',
    opacity:     0,
    zIndex:      0,
    pointerEvents: 'none',
  };

  return (
    <div className="relative flex-1 px-4 py-8 fruit-bg">

      {/* ── Two video layers for crossfading ── */}
      <video ref={videoA} style={videoBase} muted playsInline loop />
      <video ref={videoB} style={videoBase} muted playsInline loop />

      {/* ── Page content ── */}
      <div className="relative max-w-4xl mx-auto" style={{ zIndex: 1 }}>
        <h1 className="text-5xl font-bold text-gray-900 mb-6">Fruits</h1>
        <p className="text-gray-600 mb-10">
          Explore fresh picks, refreshing juices, and frozen smoothie blends. Click each section to expand the list.
        </p>

        <div className="space-y-4">
          {fruitsections.map((section) => {
            const isOpen = openSection === section.title;
            return (
              <section key={section.title}>
                <div className="text-lg font-semibold text-gray-900">{section.title}</div>
                <div className="mt-3 flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => toggleSection(section.title)}
                    aria-expanded={isOpen}
                    className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-transparent text-indigo-500 shadow-sm transition hover:shadow-lg"
                    title={`${isOpen ? 'Collapse' : 'Expand'} ${section.title}`}
                  >
                    <svg
                      className={`h-5 w-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>

                {/* Accordion panel */}
                <div className={`accordion-panel mt-5 space-y-4 ${isOpen ? 'open' : ''} bg-transparent border-0 shadow-none`}>
                  {isOpen && (
                    <div className="relative z-10 bg-transparent">
                      <p className="text-gray-600">{section.description}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {section.items.map((item) => (
                          <button
                            key={item.label}
                            type="button"
                            onClick={() =>
                              setSelectedItem({ ...item, category: section.title, quantity: 1 })
                            }
                            className="orange-cursor rounded-2xl border border-transparent bg-white/30 backdrop-blur-sm px-4 py-3 text-left text-sm text-gray-800 transition hover:bg-white/50 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                          >
                            <span className="mr-2 text-xl">{item.emoji}</span>
                            {item.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </section>
            );
          })}
        </div>
      </div>

      {/* ── Item detail modal ── */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 px-4 py-6"
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="popup-card w-full max-w-xl rounded-[2rem] bg-white p-6 shadow-2xl ring-1 ring-slate-200"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-indigo-600">{selectedItem.category}</p>
                <h2 className="mt-2 text-3xl font-bold text-gray-900">{selectedItem.label}</h2>
                <p className="mt-2 text-sm text-slate-600">Price: ${selectedItem.price?.toFixed(2)}</p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                className="rounded-full bg-slate-100 p-2 text-slate-700 transition hover:bg-slate-200"
                aria-label="Close details"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-gray-600 flex-1">{selectedItem.description}</p>
              <div className="flex flex-col gap-2 rounded-2xl border border-gray-200 bg-slate-50 p-4 text-sm text-gray-800">
                <label htmlFor="quantity" className="font-medium text-slate-700">Quantity</label>
                <select
                  id="quantity"
                  value={selectedItem.quantity}
                  onChange={(event) => updateQuantity(Number(event.target.value))}
                  className="rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                >
                  {[...Array(10)].map((_, index) => (
                    <option key={index + 1} value={index + 1}>{index + 1}</option>
                  ))}
                </select>
                <div className="pt-2 text-sm text-slate-800">
                  Total: ${(selectedItem.price * selectedItem.quantity).toFixed(2)}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Fruits;