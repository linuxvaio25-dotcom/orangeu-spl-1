import gsap from 'gsap';

let isOpen = false;
let tl;

export function init() {
  tl && tl.revert && tl.revert();

  // Start: bubble is a small circle, content hidden.
  // Keep the menu hidden until the scroll-based state intentionally reveals it.
  gsap.set('.menu-bubble', { scale: 1, opacity: 0, transformOrigin: 'center center' });
  gsap.set('.nav-content', { visibility: 'hidden' });
  gsap.set('.nav-item', { opacity: 0, y: 30 });
  gsap.set('.nav-close', { opacity: 0, scale: 0, rotate: -90 });
  gsap.set('.nav-login', { opacity: 0 });
  // Previous code kept the toggle visible on initial load:
  // gsap.set('.menu-toggle', { opacity: 1, pointerEvents: 'auto' });
  gsap.set('.menu-toggle', { opacity: 0, pointerEvents: 'none' });

  tl = gsap.timeline({ paused: true })

    // --- OPEN ---
    // Hide the toggle icon as bubble starts expanding
    .to('.menu-toggle', {
      opacity: 0,
      duration: 0.15,
      ease: 'none',
    }, 0)

    // The bubble circle zooms to fill the screen
    // scale(80) covers any viewport from top-right corner
    .to('.menu-bubble', {
      scale: 80,
      duration: 0.7,
      ease: 'power3.inOut',
    }, 0)

    // Reveal the nav content layer
    .set('.nav-content', { visibility: 'visible' }, 0.35)

    // Close button spins in
    .to('.nav-close', {
      opacity: 1,
      scale: 1,
      rotate: 0,
      duration: 0.35,
      ease: 'back.out(1.7)',
    }, 0.45)

    // Links stagger up
    .to('.nav-item', {
      opacity: 1,
      y: 0,
      duration: 0.55,
      ease: 'power3.out',
      stagger: 0.08,
    }, 0.45)

    .to('.nav-login', {
      opacity: 1,
      duration: 0.3,
      ease: 'power2.out',
    }, 0.65)

    .addPause()

    // --- CLOSE ---
    .to('.nav-login', { opacity: 0, duration: 0.15 }, '>')
    .to('.nav-item', {
      opacity: 0,
      y: -20,
      duration: 0.3,
      ease: 'power2.in',
      stagger: { each: 0.05, from: 'end' },
    }, '<')
    .to('.nav-close', {
      opacity: 0,
      scale: 0,
      rotate: 90,
      duration: 0.2,
      ease: 'power2.in',
    }, '<')

    // Bubble collapses back to small circle
    .set('.nav-content', { visibility: 'hidden' }, '+=0.05')
    .to('.menu-bubble', {
      scale: 1,
      duration: 0.65,
      ease: 'power3.inOut',
    }, '-=0.1')

    // Toggle icon reappears
    .to('.menu-toggle', {
      opacity: 1,
      pointerEvents: 'auto',
      duration: 0.2,
      ease: 'none',
    }, '-=0.2');
}

export function toggle() {
  if (!tl) return;
  isOpen = !isOpen;

  const btn = document.getElementById('menuToggle');
  if (btn) {
    btn.setAttribute('aria-expanded', isOpen);
    btn.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
  }

  document.body.style.overflow = isOpen ? 'hidden' : '';
  document.documentElement.style.overflow = isOpen ? 'hidden' : '';

  isOpen ? tl.timeScale(1).play(0) : tl.timeScale(1.1).play();
}

// if (typeof window !== 'undefined') {
//   window.addEventListener('load', () => {
//     try { init(); } catch (e) {}
//     document.addEventListener('keydown', (e) => {
//       if (e.key === 'Escape' && isOpen) toggle();
//     });
//   });
// }