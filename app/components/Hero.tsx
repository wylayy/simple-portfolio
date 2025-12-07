'use client';

import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import AvailabilityStatus from './AvailabilityStatus';
import DownloadCV from './DownloadCV';
import MagneticButton from './MagneticButton';
import settings from '@/settings.json';

export default function Hero() {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    }),
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5 + i * 0.03,
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    }),
  };

  const { name, title, tagline, description } = settings.personal;

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
          className="mb-8"
        >
          <div className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-none max-w-full overflow-hidden">
            {name.split('').map((char: string, i: number) => (
              <motion.span
                key={i}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={letterVariants}
                className="inline-block"
                style={{ display: char === ' ' ? 'inline' : 'inline-block' }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.h2
          custom={1}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium mb-6 text-muted"
        >
          {title}
        </motion.h2>

        <motion.p
          custom={2}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="text-xl sm:text-2xl md:text-3xl mb-4 max-w-3xl"
        >
          {tagline}
        </motion.p>

        <motion.p
          custom={2.5}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="text-lg md:text-xl text-muted mb-8 max-w-2xl"
        >
          {description}
        </motion.p>

        <motion.div
          custom={2.8}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="mb-8"
        >
          <AvailabilityStatus
            available={settings.personal.availability.status}
            message={settings.personal.availability.message}
          />
        </motion.div>

        <motion.div
          custom={3}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6"
        >
          <MagneticButton
            href="#projects"
            className="px-8 py-4 bg-accent text-background font-medium transition-transform duration-300 text-center"
          >
            View Work
          </MagneticButton>
          <MagneticButton
            href="#contact"
            className="px-8 py-4 border border-accent text-accent font-medium hover:bg-accent hover:text-background transition-all duration-300 text-center"
          >
            Get in Touch
          </MagneticButton>
          <DownloadCV />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown className="w-6 h-6 text-muted" />
        </motion.div>
      </motion.div>
    </section>
  );
}
