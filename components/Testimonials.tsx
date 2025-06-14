'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CTO at TechFlow',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
    content: 'NeuroFlow AI transformed our data analysis capabilities. What used to take weeks now happens in real-time.',
    rating: 5,
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Head of Innovation at DataCorp',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
    content: 'The predictive analytics have increased our efficiency by 300%. Absolutely revolutionary platform.',
    rating: 5,
  },
  {
    name: 'Emily Watson',
    role: 'Founder at AI Ventures',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
    content: 'The easiest AI platform we\'ve ever implemented. The ROI was immediate and continues to grow.',
    rating: 5,
  },
];

const companies = [
  'TechFlow', 'DataCorp', 'AI Ventures', 'CloudScale', 'NeuralNet', 'FutureAI'
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-32 px-4 relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh opacity-20" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <AnimatedSection className="text-center mb-20">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
            <span className="text-sm text-gray-300">Customer Stories</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">Trusted by</span>
            <br />
            <span className="gradient-text">Industry Leaders</span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Join thousands of companies already transforming their business with NeuroFlow AI.
          </p>
        </AnimatedSection>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="glass-card p-8 rounded-2xl relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-cyan-400/30" />
              
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-3">
                <motion.div
                  className="w-12 h-12 rounded-full overflow-hidden"
                  whileHover={{ scale: 1.1 }}
                >
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <div>
                  <h4 className="font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Company Logos */}
        <AnimatedSection delay={0.3}>
          <div className="glass-card p-8 rounded-2xl">
            <p className="text-center text-gray-400 mb-8">Trusted by leading companies worldwide</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
              {companies.map((company, index) => (
                <motion.div
                  key={company}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-2 glass rounded-xl flex items-center justify-center">
                    <span className="text-2xl font-bold gradient-text">
                      {company[0]}
                    </span>
                  </div>
                  <p className="text-sm text-gray-400 font-medium">{company}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}