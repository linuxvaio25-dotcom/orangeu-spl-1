import gsap from 'gsap';
import { words } from './index';

let animation = null;

export function initAnimatedWords(selector = '.animated-words') {
  const el = document.querySelector(selector);
  if (!el) return;

  const split = { words: Array.from(el.querySelectorAll('.word')) };

  if (animation && animation.revert) animation.revert();

  animation = gsap.fromTo(
    split.words,
    { y: -80, opacity: 0, rotation: "random(-20, 20)" },
    {
      y: 0,
      opacity: 1,
      rotation: 0,
      duration: 1.5,
      ease: "power3.out",
      stagger: 0.2,
      overwrite: true
    }
  );
}

export function clearAnimation() {
  if (animation && animation.revert) animation.revert();
  animation = null;
}
