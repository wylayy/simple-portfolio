'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function SectionIndicator() {
  const [activeSection, setActiveSection] = useState(0);

  const sections = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section, index) => {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(index);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
      <div className="flex flex-col gap-4">
        {sections.map((section, index) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="group relative flex items-center"
          >
            <div
              className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                activeSection === index
                  ? 'bg-accent border-accent scale-125'
                  : 'border-muted hover:border-accent'
              }`}
            />
            <motion.span
              initial={{ opacity: 0, x: 10 }}
              whileHover={{ opacity: 1, x: 0 }}
              className="absolute right-6 top-1/2 -translate-y-1/2 text-sm whitespace-nowrap bg-accent text-background px-3 py-1 pointer-events-none"
            >
              {section.label}
            </motion.span>
          </a>
        ))}
      </div>
    </div>
  );
}
