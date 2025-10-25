'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, ExternalLink } from 'lucide-react';
import settings from '@/settings.json';

interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  url?: string;
}

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const certifications: Certification[] = settings.certifications;

  return (
    <section className="py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-accent"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="border border-muted p-6 hover:border-accent transition-colors duration-300 group"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 border border-muted group-hover:border-accent transition-colors duration-300">
                  <Award className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold mb-1">{cert.name}</h3>
                  <p className="text-sm text-muted mb-1">{cert.issuer}</p>
                  <p className="text-xs text-muted">{cert.date}</p>
                </div>
              </div>

              {cert.credentialId && (
                <p className="text-xs text-muted mb-3">
                  ID: {cert.credentialId}
                </p>
              )}

              {cert.url && (
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-accent hover:underline"
                >
                  <span>View Credential</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
