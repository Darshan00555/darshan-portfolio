import { motion, useReducedMotion } from 'framer-motion';

const easing = [0.22, 1, 0.36, 1];
const MotionDiv = motion.div;

export default function Reveal({
  children,
  className = '',
  delay = 0,
  y = 32,
  scale = 1,
  amount = 0.2,
}) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <MotionDiv
      className={className}
      initial={{ opacity: 0, y, scale }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.7, delay, ease: easing }}
    >
      {children}
    </MotionDiv>
  );
}
