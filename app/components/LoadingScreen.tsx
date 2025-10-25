'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(timer);
    };
  }, []);

  const settings = require('@/settings.json');
  const letters = settings.personal.name.toUpperCase().split("");

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] bg-background flex items-center justify-center"
        >
          {/* Geometric Shapes */}
          <motion.div
            initial={{ scale: 0, rotate: 0 }}
            animate={{ scale: 1, rotate: 45 }}
            transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99], delay: 0.1 }}
            className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-accent"
          />
          <motion.div
            initial={{ scale: 0, rotate: 0 }}
            animate={{ scale: 1, rotate: -45 }}
            transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99], delay: 0.2 }}
            className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-accent"
          />
          <motion.div
            initial={{ scale: 0, rotate: 0 }}
            animate={{ scale: 1, rotate: -45 }}
            transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99], delay: 0.3 }}
            className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-accent"
          />
          <motion.div
            initial={{ scale: 0, rotate: 0 }}
            animate={{ scale: 1, rotate: 90 }}
            transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99], delay: 0.3 }}
            className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-accent"
          />

          {/* Main Content */}
          <div className="relative z-10 text-center px-6">
            {/* Animated Letters */}
            <div className="flex justify-center mb-8 overflow-hidden">
              {letters.map((letter: string, index: number) => (
                <motion.span
                  key={index}
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                    ease: [0.6, -0.05, 0.01, 0.99],
                  }}
                  className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold inline-block"
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
              ))}
            </div>

            {/* Progress Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="w-64 mx-auto"
            >
              <div className="h-1 bg-muted/20 overflow-hidden mb-4">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: `${Math.min(progress, 100)}%` }}
                  transition={{ duration: 0.3 }}
                  className="h-full bg-accent relative"
                >
                  {/* Glowing Effect */}
                  <motion.div
                    animate={{
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 bg-accent blur-sm"
                  />
                </motion.div>
              </div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="text-sm text-muted"
              >
                Loading... {Math.round(progress)}%
              </motion.p>
            </motion.div>
          </div>

          {/* Animated Particles */}
          {[...Array(20)].map((_, i) => {
            const randomX = Math.random() * 100;
            const randomY = Math.random() * 100;
            const randomDelay = Math.random() * 2;
            const randomDuration = 2 + Math.random() * 2;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                  x: [0, (Math.random() - 0.5) * 100],
                  y: [0, (Math.random() - 0.5) * 100],
                }}
                transition={{
                  duration: randomDuration,
                  repeat: Infinity,
                  delay: randomDelay,
                }}
                className="absolute w-1 h-1 bg-accent rounded-full"
                style={{
                  left: `${randomX}%`,
                  top: `${randomY}%`,
                }}
              />
            );
          })}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
