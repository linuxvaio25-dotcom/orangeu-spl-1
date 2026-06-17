import React, { useRef, useState, useEffect } from 'react';
import { fruitsections } from '../index.js';

const Fruits = () => {
  const [openSection, setOpenSection] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [videoSection, setVideoSection] = useState(null);
  const videoRef = useRef(null);

  const toggleSection = (title) => {
    setOpenSection((current) => {
      const newVal = current === title ? null : title;
      setVideoSection(newVal ? title : null);
      return newVal;
    });
  };

  useEffect(() => {
    if (!videoRef.current) return;
    if (videoSection) {
      const p = videoRef.current.play();
      if (p && typeof p.catch === 'function') p.catch(() => {});
    } else {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [videoSection]);

  const updateQuantity = (quantity) => {
    setSelectedItem((current) => (current ? { ...current, quantity } : current));
  };

  return (
    <div className="flex-1 px-4 py-8">
      <div className="max-w-4xl mx-auto">
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
                      className={`h-5 w-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>

                {/*
                  ORIGINAL PANEL (commented out for comparison)
                <div className={`accordion-panel mt-5 space-y-4 ${isOpen ? 'open' : ''} relative overflow-hidden rounded-2xl`}>
                  {isOpen && (
                    <>
                      <video
                        ref={videoRef}
                        src={
                          section.title === 'Fruits'
                            ? '/fruits-1.mp4'
                            : section.title === 'Juice'
                            ? '/juice-1.mp4'
                            : '/smoothie-1.mp4'
                        }
                        className="absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none"
                        muted
                        playsInline
                        loop
                      />
                      <div className="relative z-10">
                        <p className="text-gray-600">{section.description}</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {section.items.map((item) => (
                            <button
                              key={item.label}
                              type="button"
                              onClick={() => setSelectedItem({ ...item, category: section.title, quantity: 1 })}
                              className="orange-cursor rounded-2xl border border-gray-200 bg-slate-50 px-4 py-3 text-left text-sm text-gray-800 transition hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                            >
                              <span className="mr-2 text-xl">{item.emoji}</span>
                              {item.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    </>
                  )}
                </div>
                */}

                {/* Transparent panel (active) - no visible panel backgrounds */}
                <div className={`accordion-panel mt-5 space-y-4 ${isOpen ? 'open' : ''} relative overflow-hidden bg-transparent border-0 shadow-none`}>
                  {isOpen && (
                    <>
                      <video
                        ref={videoRef}
                        src={
                          section.title === 'Fruits'
                            ? '/fruits-1.mp4'
                            : section.title === 'Juice'
                            ? '/juice-1.mp4'
                            : '/smoothie-1.mp4'
                        }
                        className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none"
                        muted
                        playsInline
                        loop
                      />
                      <div className="relative z-10 bg-transparent">
                        <p className="text-gray-600">{section.description}</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {section.items.map((item) => (
                            <button
                              key={item.label}
                              type="button"
                              onClick={() => setSelectedItem({ ...item, category: section.title, quantity: 1 })}
                              className="orange-cursor rounded-2xl border border-transparent bg-transparent px-4 py-3 text-left text-sm text-gray-800 transition hover:bg-slate-100/40 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                            >
                              <span className="mr-2 text-xl">{item.emoji}</span>
                              {item.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </section>
            );
          })}
        </div>
      </div>

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
