'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import RevealText from './RevealText';

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const settings = require('@/settings.json');
  const skills = settings.skills;

  return (
    <section className="py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className="mb-12">
          <RevealText 
            text="Technical Skills"
            className="text-3xl md:text-4xl font-bold mb-4"
          />
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: '80px' } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-accent"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill: any, index: number) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div className="flex justify-between mb-2">
                <span className="font-medium">{skill.name}</span>
                <span className="text-muted">{skill.level}%</span>
              </div>
              <div className="h-2 bg-muted/20 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : {}}
                  transition={{ delay: index * 0.1 + 0.3, duration: 1, ease: "easeOut" }}
                  className="h-full bg-accent"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
