'use client';

import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

export default function DownloadCV() {
  const settings = require('@/settings.json');
  
  const handleDownload = () => {
    const cvUrl = settings.files.cv;
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = `${settings.personal.name.replace(/\s+/g, '_')}_CV.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.button
      onClick={handleDownload}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="px-8 py-4 border border-accent text-accent font-medium hover:bg-accent hover:text-background transition-all duration-300 flex items-center gap-2 justify-center"
    >
      <Download className="w-5 h-5" />
      <span>Download CV</span>
    </motion.button>
  );
}
