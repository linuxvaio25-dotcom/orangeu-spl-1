// Navbar GSAP logic (adapted from provided script)
import gsap from 'gsap';

let isOpen = false;
let exitSpeed = 1.5;
const erToggle = { checked: false };
let tl;
let enterEndTime = 0;

export function init() {
  tl && tl.revert && tl.revert();

  gsap.set('#nav', { visibility: 'hidden' });
  gsap.set('.nav-bg', { opacity: 0 });
  gsap.set('.nav-login', { opacity: 0, y: 8 });

  tl = gsap
    .timeline({ paused: true })
    .set('#nav', { visibility: 'visible', pointerEvents: 'auto' })

    .to(
      '.nav-bg',
      { opacity: 1, duration: 0.4, ease: 'power2.out' },
      0
    )

    .fromTo(
      '.nav-panel',
      { x: '110%', y: 0, rotation: 0 },
      { x: '0%', y: 0, duration: 0.6, ease: 'back.out', stagger: 0.1 },
      0
    )

    .fromTo(
      '.nav-item',
      { opacity: 0, x: 80, rotation: 'random(-20, 20)' },
      { opacity: 1, x: 0, rotation: 0, duration: 1.5, ease: 'power3.out', stagger: 0.2, overwrite: true },
      0.1
    )

    .fromTo(
      '.bar-top',
      { stroke: 'var(--white)', attr: { x1: 3, y1: 7, x2: 17, y2: 7 } },
      { stroke: '#0e100f', attr: { x1: 5, y1: 5, x2: 15, y2: 15 }, duration: 0.35, ease: 'back.out(1.4)' },
      0.06
    )

    .fromTo(
      '.bar-bot',
      { stroke: 'var(--white)', attr: { x1: 3, y1: 13, x2: 17, y2: 13 } },
      { stroke: '#0e100f', attr: { x1: 15, y1: 5, x2: 5, y2: 15 }, duration: 0.35, ease: 'back.out(1.4)' },
      0.06
    )

    .to(
      '.nav-login',
      { opacity: 1, y: 0, duration: 0.3, ease: 'power3.out' },
      0.4
    )

    .addPause();

  enterEndTime = tl.duration();

  tl
    .to('.bar', { stroke: 'var(--white)', duration: 0.2 })
    .to('.bar-top', { attr: { x1: 3, y1: 7, x2: 17, y2: 7 }, duration: 0.2, ease: 'power3.in' }, "<")
    .to('.bar-bot', { attr: { x1: 3, y1: 13, x2: 17, y2: 13 }, duration: 0.2, ease: 'power3.in' }, "<")
    .to('.nav-panel', { y: '110vh', rotation: 'random(-25, 25)', duration: 1, ease: 'power3.in', stagger: { from: 'end', each: 0.02 } }, "<")
    .to('.nav-bg', { opacity: 0, duration: 0.3, ease: 'power2.in' }, "<0.1")
    .set('#nav', { visibility: 'hidden', pointerEvents: 'none' });
}

export function toggle() {
  isOpen = !isOpen;
  const btn = document.getElementById('menuToggle');
  if (btn) {
    btn.setAttribute('aria-expanded', isOpen);
    btn.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
  }

  if (!tl) return;

  if (isOpen) {
    if (tl.time() >= enterEndTime) {
      tl.timeScale(1).restart();
    } else {
      tl.timeScale(1).play();
    }
  } else {
    if (tl.time() < enterEndTime) {
      tl.timeScale(exitSpeed).reverse();
    } else {
      tl.timeScale(1).play();
    }
  }
}

// Initialize on import
if (typeof window !== 'undefined') {
  window.addEventListener('load', () => {
    try { init(); } catch (e) { /* ignore */ }
    // attach escape key behavior
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && isOpen) {
        toggle();
        const btn = document.getElementById('menuToggle');
        btn && btn.focus();
      }
    });
  });
}
