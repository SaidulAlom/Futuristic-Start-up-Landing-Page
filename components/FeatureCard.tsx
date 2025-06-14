'use client';

import { motion } from 'framer-motion';
import { DivideIcon as LucideIcon } from 'lucide-react';
import { ReactNode } from 'react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient?: string;
  model?: ReactNode;
  delay?: number;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  gradient = 'from-cyan-500 to-blue-600',
  model,
  delay = 0,
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.215, 0.61, 0.355, 1] }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -10,
        transition: { duration: 0.3 }
      }}
      className="group"
    >
      <div className="glass-card p-8 h-full hover:neon-border transition-all duration-500">
        <div className="relative overflow-hidden rounded-xl mb-6 h-48 bg-gradient-to-br from-gray-900 to-gray-800">
          {model && (
            <div className="absolute inset-0">
              {model}
            </div>
          )}
          <motion.div
            className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          <div className="absolute top-4 left-4 p-3 glass rounded-xl">
            <Icon className="w-6 h-6 text-cyan-400" />
          </div>
        </div>
        
        <motion.h3
          className="text-xl font-bold mb-3 text-white group-hover:gradient-text transition-colors duration-300"
          whileHover={{ scale: 1.02 }}
        >
          {title}
        </motion.h3>
        
        <p className="text-gray-400 leading-relaxed">
          {description}
        </p>
        
        <motion.div
          className="mt-6 flex items-center text-cyan-400 font-medium"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          Learn more
          <motion.span
            className="ml-2"
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            →
          </motion.span>
        </motion.div>
      </div>
    </motion.div>
  );
}