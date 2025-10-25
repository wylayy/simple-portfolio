'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import settings from '@/settings.json';

interface Experience {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate?: string | null;
  current?: boolean;
  description: string;
  achievements?: string[];
  technologies?: string[];
}

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences: Experience[] = settings.experience;

  return (
    <section className="py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">Experience</h2>
          <div className="w-20 h-1 bg-accent"></div>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="border-l-2 border-accent pl-8 relative"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-accent rounded-full" />

              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                  <div className="flex flex-wrap items-center gap-4 text-muted mb-2">
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4" />
                      <span>{exp.company}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-muted">
                  <Calendar className="w-4 h-4" />
                  <span>
                    {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                  </span>
                </div>
              </div>

              <p className="text-muted mb-4">{exp.description}</p>

              {exp.achievements && exp.achievements.length > 0 && (
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {exp.achievements.map((achievement: string, i: number) => (
                      <li key={i} className="flex items-start gap-2 text-muted">
                        <span className="text-accent mt-1">▹</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {exp.technologies && exp.technologies.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech: string) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm border border-muted text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
