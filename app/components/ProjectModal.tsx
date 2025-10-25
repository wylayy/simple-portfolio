'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github } from 'lucide-react';
import { useEffect } from 'react';

interface Project {
  title: string;
  description: string;
  longDescription?: string;
  tech: string[];
  link: string;
  github: string;
  featured?: boolean;
  features?: string[];
  metrics?: Record<string, string | number>;
}

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}

export default function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="min-h-full flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3 }}
                className="relative w-full max-w-4xl bg-background border border-muted p-8 md:p-12"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 hover:bg-accent hover:text-background transition-colors duration-300 z-10"
                >
                  <X className="w-6 h-6" />
                </button>

                {/* Content */}
                <div className="space-y-6">
                  {/* Title */}
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h2>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech: string) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm border border-muted text-muted"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <h3 className="text-xl font-semibold mb-3">About the Project</h3>
                    <p className="text-muted leading-relaxed">
                      {project.longDescription || project.description}
                    </p>
                  </div>

                  {/* Features */}
                  {project.features && project.features.length > 0 && (
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Key Features</h3>
                      <ul className="space-y-2">
                        {project.features.map((feature: string, index: number) => (
                          <li key={index} className="flex items-start gap-2 text-muted">
                            <span className="text-accent mt-1">▹</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Metrics */}
                  {project.metrics && (
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Impact</h3>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {Object.entries(project.metrics).map(([key, value]) => (
                          <div key={key} className="border border-muted p-4">
                            <div className="text-2xl font-bold text-accent mb-1">{value as string}</div>
                            <div className="text-sm text-muted capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Links */}
                  <div className="flex gap-4 pt-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-6 py-3 bg-accent text-background hover:scale-105 transition-transform duration-300"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>View Live</span>
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-6 py-3 border border-accent text-accent hover:bg-accent hover:text-background transition-all duration-300"
                    >
                      <Github className="w-5 h-5" />
                      <span>View Code</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
