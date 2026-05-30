'use client';

import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';

const fadeUpVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: delay ?? 0, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const staggerItem = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
};

/** Fades and slides a single element up when it enters the viewport. */
export function FadeUp({ children, className, delay }) {
  const shouldReduce = useReducedMotion();
  if (shouldReduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      custom={delay}
      variants={fadeUpVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
    >
      {children}
    </motion.div>
  );
}

/** Wraps a grid/list and staggers children as they come into view. */
export function StaggerGrid({ children, className }) {
  const shouldReduce = useReducedMotion();
  if (shouldReduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
    >
      {children}
    </motion.div>
  );
}

/** Child item inside a StaggerGrid — place around each card. */
export function StaggerItem({ children, className }) {
  const shouldReduce = useReducedMotion();
  if (shouldReduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      variants={staggerItem}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
    >
      {children}
    </motion.div>
  );
}

/** Subtle parallax blobs for the hero background. */
export function HeroBlobs() {
  const { scrollY } = useScroll();
  const shouldReduce = useReducedMotion();
  const y1 = useTransform(scrollY, [0, 600], [0, -90]);
  const y2 = useTransform(scrollY, [0, 600], [0, 70]);
  const y3 = useTransform(scrollY, [0, 600], [0, -50]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <motion.div
        style={shouldReduce ? {} : { y: y1 }}
        className="animate-blob absolute -top-24 -left-24 h-96 w-96 rounded-full bg-coral/15 blur-3xl"
      />
      <motion.div
        style={shouldReduce ? {} : { y: y2 }}
        className="animate-blob animation-delay-2000 absolute top-1/3 -right-32 h-80 w-80 rounded-full bg-sky-300/20 blur-3xl"
      />
      <motion.div
        style={shouldReduce ? {} : { y: y3 }}
        className="animate-blob animation-delay-4000 absolute -bottom-16 left-1/3 h-72 w-72 rounded-full bg-amber-300/15 blur-3xl"
      />
    </div>
  );
}

/** Hover-lift button wrapper. */
export function HoverButton({ children, className }) {
  const shouldReduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      whileHover={shouldReduce ? {} : { scale: 1.03, y: -2 }}
      whileTap={shouldReduce ? {} : { scale: 0.97 }}
      transition={{ duration: 0.18 }}
    >
      {children}
    </motion.div>
  );
}
