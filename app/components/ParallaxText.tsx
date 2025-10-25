'use client';

import { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform, useMotionValue, useVelocity, useAnimationFrame } from 'framer-motion';
import { wrap } from '@popmotion/popcorn';

interface ParallaxProps {
  text: string;
  baseVelocity?: number;
}

export default function ParallaxText({ text, baseVelocity = 1 }: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="overflow-hidden whitespace-nowrap flex flex-nowrap py-12 border-y border-muted/20">
      <motion.div className="flex whitespace-nowrap flex-nowrap" style={{ x }}>
        <span className="block mr-8 text-6xl md:text-8xl font-bold text-muted/10">
          {text} {text} {text} {text}
        </span>
        <span className="block mr-8 text-6xl md:text-8xl font-bold text-muted/10">
          {text} {text} {text} {text}
        </span>
      </motion.div>
    </div>
  );
}
