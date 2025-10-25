'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import ProjectModal from './ProjectModal';
import settings from '@/settings.json';

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

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filter featured projects or show all
  const projects: Project[] = settings.projects.filter((p) => p.featured !== false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
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
    <section id="projects" className="py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6">Selected Work</h2>
          <div className="w-24 h-1 bg-accent"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="group relative border border-muted p-6 md:p-8 hover:border-accent transition-colors duration-300"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech: string) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm border border-muted text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => {
                    setSelectedProject(project);
                    setIsModalOpen(true);
                  }}
                  className="flex items-center gap-2 text-accent hover:underline"
                >
                  <span>View Details →</span>
                </button>
                <a
                  href={project.link}
                  className="flex items-center gap-2 text-accent hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live</span>
                </a>
                <a
                  href={project.github}
                  className="flex items-center gap-2 text-accent hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4" />
                  <span>Code</span>
                </a>
              </div>

              <motion.div
                className="absolute inset-0 border border-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                initial={false}
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setSelectedProject(null);
          }}
          project={selectedProject}
        />
      )}
    </section>
  );
}
