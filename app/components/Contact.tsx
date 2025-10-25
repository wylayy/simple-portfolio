'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Github, Linkedin, Twitter, Phone, MapPin, Clock, Zap } from 'lucide-react';
import ContactForm from './ContactForm';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const settings = require('@/settings.json');
  
  const socials = [
    { icon: Github, label: "GitHub", link: settings.social.github },
    { icon: Linkedin, label: "LinkedIn", link: settings.social.linkedin },
    { icon: Twitter, label: "Twitter", link: settings.social.twitter },
    { icon: Mail, label: "Email", link: `mailto:${settings.personal.email}` }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6">Get in Touch</h2>
          <div className="w-24 h-1 bg-accent"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-xl md:text-2xl text-muted leading-relaxed mb-8">
              I'm always interested in hearing about new projects and opportunities. 
              Whether you have a question or just want to say hi, feel free to reach out.
            </p>

            {/* Contact Details */}
            <div className="space-y-4 mb-8">
              {settings.contact.email && (
                <div className="flex items-center gap-3 text-muted">
                  <Mail className="w-5 h-5" />
                  <a href={`mailto:${settings.contact.email}`} className="hover:text-accent transition-colors">
                    {settings.contact.email}
                  </a>
                </div>
              )}
              {settings.contact.phone && (
                <div className="flex items-center gap-3 text-muted">
                  <Phone className="w-5 h-5" />
                  <a href={`tel:${settings.contact.phone}`} className="hover:text-accent transition-colors">
                    {settings.contact.phone}
                  </a>
                </div>
              )}
              {settings.contact.location && (
                <div className="flex items-center gap-3 text-muted">
                  <MapPin className="w-5 h-5" />
                  <span>{settings.contact.location}</span>
                </div>
              )}
              {settings.contact.availability && (
                <div className="flex items-center gap-3 text-muted text-sm">
                  <Clock className="w-5 h-5" />
                  <span>{settings.contact.availability}</span>
                </div>
              )}
              {settings.contact.responseTime && (
                <div className="flex items-center gap-3 text-muted text-sm">
                  <Zap className="w-5 h-5" />
                  <span>Response time: {settings.contact.responseTime}</span>
                </div>
              )}
            </div>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="flex flex-wrap gap-6"
            >
              {socials.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.link}
                  variants={itemVariants}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 border border-muted hover:border-accent hover:bg-accent hover:text-background transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
