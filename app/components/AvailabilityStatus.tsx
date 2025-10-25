'use client';

import { motion } from 'framer-motion';

interface AvailabilityStatusProps {
  available: boolean;
  message: string;
}

export default function AvailabilityStatus({ available, message }: AvailabilityStatusProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="inline-flex items-center gap-3 px-4 py-2 border border-muted"
    >
      <div className="relative">
        <div className={`w-3 h-3 rounded-full ${available ? 'bg-green-500' : 'bg-red-500'}`} />
        {available && (
          <motion.div
            animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 w-3 h-3 rounded-full bg-green-500"
          />
        )}
      </div>
      <span className="text-sm text-muted">{message}</span>
    </motion.div>
  );
}
