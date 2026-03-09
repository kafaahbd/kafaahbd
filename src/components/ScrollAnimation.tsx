import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface ScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // আলাদা আলাদা এলিমেন্টের জন্য ডিলে সেট করার সুবিধা
  direction?: 'up' | 'down' | 'left' | 'right'; // কোন দিক থেকে আসবে
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({ 
  children, 
  className = '', 
  delay = 0.1, 
  direction = 'up' 
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // দিক অনুযায়ী অফসেট সেট করা
  const directionOffsets = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial={{ 
        opacity: 0, 
        y: directionOffsets[direction].y, 
        x: directionOffsets[direction].x 
      }}
      animate={isInView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ 
        duration: 0.8, 
        delay: delay, 
        ease: [0.21, 0.47, 0.32, 0.98] // Premium cubic-bezier easing
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;