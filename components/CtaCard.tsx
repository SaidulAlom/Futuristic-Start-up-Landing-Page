'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CtaCardProps {
  title: string;
  description: string;
  buttonText: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
}

export default function CtaCard({
  title,
  description,
  buttonText,
  onClick,
  variant = 'primary',
}: CtaCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
      viewport={{ once: true }}
      className="relative overflow-hidden"
    >
      <div className="glass-card p-8 text-center relative z-10">
        <motion.div
          className="absolute top-4 right-4"
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
            scale: { duration: 2, repeat: Infinity }
          }}
        >
          <Sparkles className="w-6 h-6 text-cyan-400" />
        </motion.div>
        
        <motion.h3
          className="text-2xl font-bold mb-4 gradient-text"
          whileHover={{ scale: 1.05 }}
        >
          {title}
        </motion.h3>
        
        <p className="text-gray-400 mb-6 leading-relaxed">
          {description}
        </p>
        
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            onClick={onClick}
            className={`
              group relative overflow-hidden px-8 py-3 rounded-xl font-semibold transition-all duration-300
              ${variant === 'primary' 
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg hover:shadow-cyan-500/25' 
                : 'glass-card text-cyan-400 hover:text-white border-cyan-400/50 hover:border-cyan-400'
              }
            `}
          >
            <span className="relative z-10 flex items-center gap-2">
              {buttonText}
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-4 h-4" />
              </motion.div>
            </span>
            {variant === 'primary' && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
            )}
          </Button>
        </motion.div>
      </div>
      
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        animate={{
          background: [
            'radial-gradient(circle at 0% 0%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 100% 100%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 0% 0%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)',
          ]
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
    </motion.div>
  );
}