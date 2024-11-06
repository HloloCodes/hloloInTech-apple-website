import gsap from "gsap";
import { ScrollTrigger } from "gsap/all"; // ensure you import all plugins properly
gsap.registerPlugin(ScrollTrigger); // Correct case for ScrollTrigger

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
  timeline,
  rotationRef,
  rotationState,
  firstTarget,
  secondTarget,
  animationProps
) => {
  // Animation for the rotation
  timeline.to(rotationRef.current.rotation, {
    y: rotationState,
    duration: 1,
    ease: 'Power2.inOut',
  });

  // Apply animations to the first and second targets
  timeline.to(
    firstTarget,
    {
      ...animationProps,
      ease: 'Power2.inOut',
    },
    '<' // This correctly overlaps with the rotation animation
  );

  timeline.to(
    secondTarget,
    {
      ...animationProps,
      ease: 'Power2.inOut',
    },
    '<' // This overlaps with the first target animation
  );
};
