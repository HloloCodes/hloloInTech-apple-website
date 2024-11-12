import gsap from "gsap";
import { ScrollTrigger } from "gsap/all"; // Import all gsap plugins, including ScrollTrigger
gsap.registerPlugin(ScrollTrigger); // Register the ScrollTrigger plugin

export const animateWithGsap = (target, animationProps, scrollProps) => {
  gsap.to(target, {
    ...animationProps,
    scrollTrigger: {
      trigger: target,
      toggleActions: 'restart reverse restart reverse',
      start: 'top 85%',
      ...scrollProps,
    },
  });
};

export const animateWithGsapTimeline = (
  timeline,           // GSAP Timeline
  rotationRef,        // Reference to rotation object
  rotationState,      // Target rotation value
  firstTarget,        // First target to animate
  secondTarget,       // Second target to animate
  animationProps      // Properties for the animation
) => {
  // Animate the rotation
  timeline.to(rotationRef.current.rotation, {
    y: rotationState,  // Set the target rotation (y-axis)
    duration: 1,
    ease: 'Power2.inOut',
  });

  // Animate the first target (e.g., a model or an element)
  timeline.to(
    firstTarget,
    {
      ...animationProps,  // Spread the animation properties
      ease: 'Power2.inOut',
    },
    '<' // This ensures the first target animation starts at the same time as the previous one
  );

  // Animate the second target (another model or element)
  timeline.to(
    secondTarget,
    {
      ...animationProps,  // Spread the animation properties for the second target
      ease: 'Power2.inOut',
    },
    '<' // This overlaps with the first target's animation for a smooth sequence
  );
};
