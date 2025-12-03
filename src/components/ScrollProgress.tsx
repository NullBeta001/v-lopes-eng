import { motion, useScroll, useSpring } from "motion/react";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-primary/20 z-[100] origin-left"
    >
      <motion.div
        className="h-full bg-primary origin-left"
        style={{ scaleX }}
      />
    </motion.div>
  );
};

export default ScrollProgress;

