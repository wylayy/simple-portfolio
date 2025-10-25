'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect, useCallback } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import settings from '@/settings.json';

interface Testimonial {
  name: string;
  role: string;
  company?: string;
  avatar: string;
  content: string;
  rating?: number;
}

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = settings.testimonials;

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="py-24 px-6 md:px-12">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">What Clients Say</h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="border border-muted p-8 md:p-12 relative">
            <Quote className="w-12 h-12 text-accent/20 absolute top-4 left-4" />
            
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="relative z-10"
            >
              <p className="text-lg md:text-xl text-muted mb-8 leading-relaxed">
                &quot;{testimonials[currentIndex].content}&quot;
              </p>
              
              {/* Rating Stars */}
              {testimonials[currentIndex].rating && (
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i: number) => (
                    <span key={i} className={i < (testimonials[currentIndex].rating ?? 0) ? 'text-accent' : 'text-muted/30'}>
                      ★
                    </span>
                  ))}
                </div>
              )}
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent text-background rounded-full flex items-center justify-center font-bold">
                  {testimonials[currentIndex].avatar}
                </div>
                <div>
                  <div className="font-semibold">{testimonials[currentIndex].name}</div>
                  <div className="text-sm text-muted">
                    {testimonials[currentIndex].role}
                    {testimonials[currentIndex].company && ` • ${testimonials[currentIndex].company}`}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-3 border border-muted hover:border-accent hover:bg-accent hover:text-background transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <div className="flex items-center gap-2">
              {testimonials.map((_, index: number) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-accent w-8' : 'bg-muted'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-3 border border-muted hover:border-accent hover:bg-accent hover:text-background transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
