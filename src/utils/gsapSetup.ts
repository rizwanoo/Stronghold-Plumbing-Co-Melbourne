import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

export { gsap, ScrollTrigger };

/**
 * Initializes subtle cinematic fade-up animations on headings, sections, and images
 * Refreshes ScrollTrigger cleanly on page transitions
 */
export function initScrollReveals() {
  // Check if reduced motion is requested
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  // Kill existing scroll triggers to prevent duplicates on navigation
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

  // Animate all elements with .gsap-fade-up
  const fadeUpElements = document.querySelectorAll('.gsap-fade-up');
  fadeUpElements.forEach((el) => {
    gsap.fromTo(
      el,
      {
        opacity: 0,
        y: 32,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.85,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          toggleActions: 'play none none none',
          once: true,
        },
      }
    );
  });

  // Animate images with .gsap-reveal-img (subtle scale & opacity)
  const imageElements = document.querySelectorAll('.gsap-reveal-img');
  imageElements.forEach((el) => {
    gsap.fromTo(
      el,
      {
        opacity: 0,
        y: 28,
        scale: 0.98,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
          once: true,
        },
      }
    );
  });

  // Refresh ScrollTrigger calculations after layout shifts
  setTimeout(() => {
    ScrollTrigger.refresh();
  }, 100);
}
