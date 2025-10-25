'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const settings = require('@/settings.json');
  const education = settings.education;

  return (
    <section className="py-24 px-6 md:px-12 bg-muted/5">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">Education</h2>
          <div className="w-20 h-1 bg-accent"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu: any, index: number) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="border border-muted p-6 md:p-8 hover:border-accent transition-colors duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 border border-accent">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                  <p className="text-muted mb-2">{edu.institution}</p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{edu.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.startDate} - {edu.endDate}</span>
                    </div>
                  </div>
                </div>
              </div>

              {edu.description && (
                <p className="text-muted mb-4">{edu.description}</p>
              )}

              {edu.achievements && edu.achievements.length > 0 && (
                <div>
                  <h4 className="font-semibold mb-2">Achievements:</h4>
                  <ul className="space-y-1">
                    {edu.achievements.map((achievement: string, i: number) => (
                      <li key={i} className="flex items-start gap-2 text-muted text-sm">
                        <span className="text-accent mt-1">▹</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
