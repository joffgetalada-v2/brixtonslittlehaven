'use client';

import { motion, useReducedMotion } from 'motion/react';

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
