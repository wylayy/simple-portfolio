'use client';

import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { useRef, useEffect } from 'react';
import settings from '@/settings.json';

interface Stat {
  label: string;
  value: number;
  suffix?: string;
}

interface StatItemProps {
  value: number;
  label: string;
  suffix?: string;
  delay: number;
  isInView: boolean;
}

export default function StatsCounter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats: Stat[] = settings.stats;

  return (
    <section className="py-24 px-6 md:px-12 bg-muted/5">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index: number) => (
            <StatItem
              key={stat.label}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
              delay={index * 0.1}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatItem({ value, label, suffix = '', delay, isInView }: StatItemProps) {
  const count = useMotionValue(0);
  const rounded = useSpring(count, { damping: 50, stiffness: 100 });

  useEffect(() => {
    if (isInView) {
      count.set(value);
    }
  }, [isInView, value, count]);

  useEffect(() => {
    const unsubscribe = rounded.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.round(latest).toString();
      }
    });
    return unsubscribe;
  }, [rounded]);

  const ref = useRef<HTMLSpanElement>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay }}
      className="text-center"
    >
      <div className="text-4xl md:text-5xl font-bold mb-2">
        <span ref={ref}>0</span>
        {suffix}
      </div>
      <div className="text-muted">{label}</div>
    </motion.div>
  );
}
