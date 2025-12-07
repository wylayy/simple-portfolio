'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        const diff = 100 - prev;
        const inc = Math.ceil(diff * 0.1) + Math.floor(Math.random() * 3);
        return Math.min(prev + inc, 100);
      });
    }, 100);

    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2200);

    return () => {
      clearInterval(timer);
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [isLoading]);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-background flex flex-col items-center justify-center"
          exit={{ 
            y: "-100vh", 
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
        >
          <div className="relative overflow-hidden">
            <motion.div 
              className="flex items-start"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="text-[15vw] md:text-[12vw] font-bold text-accent leading-none tracking-tighter">
                {progress}
              </span>
              <span className="text-2xl md:text-4xl font-light text-muted mt-4 md:mt-8 ml-2">
                %
              </span>
            </motion.div>
          </div>
          
          <motion.div 
            className="absolute bottom-8 left-8 md:bottom-12 md:left-12 flex items-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-sm md:text-base text-muted uppercase tracking-widest">
              Loading Experience
            </span>
          </motion.div>

          {/* Progress Line */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-muted/10">
            <motion.div 
              className="h-full bg-accent"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1, ease: "linear" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
