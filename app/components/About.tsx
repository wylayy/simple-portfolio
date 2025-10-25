'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Palette, Zap } from 'lucide-react';
import RevealText from './RevealText';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const settings = require('@/settings.json');
  
  // Map icon names to actual icon components
  const iconMap: any = {
    Code2: Code2,
    Palette: Palette,
    Zap: Zap
  };

  const skills = settings.services.map((service: any) => ({
    icon: iconMap[service.icon] || Code2,
    title: service.title,
    description: service.description
  }));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 md:px-12 py-24">
      <div className="max-w-7xl w-full" ref={ref}>
        <div className="mb-16">
          <RevealText 
            text="About Me"
            className="text-5xl md:text-7xl font-bold mb-6"
          />
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: '96px' } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-1 bg-accent"
          />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-12 mb-16"
        >
          <motion.div variants={itemVariants}>
            <p className="text-lg md:text-xl text-muted leading-relaxed mb-6">
              I'm a passionate developer who loves turning ideas into reality through code. 
              With a keen eye for design and a strong technical foundation, I create 
              experiences that are both beautiful and functional.
            </p>
            <p className="text-lg md:text-xl text-muted leading-relaxed">
              My approach combines creativity with technical excellence, ensuring every 
              project not only looks great but performs exceptionally.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            {skills.map((skill: any, index: number) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 * index, duration: 0.8 }}
                className="flex gap-4 p-4 md:p-6 border border-muted hover:border-accent transition-colors duration-300"
              >
                <skill.icon className="w-8 h-8 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                  <p className="text-muted">{skill.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
