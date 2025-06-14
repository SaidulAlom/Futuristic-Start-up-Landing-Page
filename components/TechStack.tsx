'use client';

import { motion } from 'framer-motion';
import { Code, Database, Cloud, Shield, Cpu, Zap } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import Floating3DModel from './Floating3DModel';

const technologies = [
  {
    category: 'AI & Machine Learning',
    icon: Cpu,
    techs: ['TensorFlow', 'PyTorch', 'OpenAI GPT', 'Hugging Face', 'LangChain'],
    color: 'from-blue-500 to-cyan-600',
  },
  {
    category: 'Cloud Infrastructure',
    icon: Cloud,
    techs: ['AWS', 'Google Cloud', 'Azure', 'Kubernetes', 'Docker'],
    color: 'from-purple-500 to-pink-600',
  },
  {
    category: 'Data Processing',
    icon: Database,
    techs: ['Apache Spark', 'Kafka', 'Redis', 'PostgreSQL', 'MongoDB'],
    color: 'from-green-500 to-emerald-600',
  },
  {
    category: 'Security & Compliance',
    icon: Shield,
    techs: ['OAuth 2.0', 'JWT', 'AES-256', 'SOC 2', 'GDPR'],
    color: 'from-orange-500 to-red-600',
  },
  {
    category: 'Development',
    icon: Code,
    techs: ['TypeScript', 'Python', 'Go', 'React', 'Next.js'],
    color: 'from-indigo-500 to-purple-600',
  },
  {
    category: 'Performance',
    icon: Zap,
    techs: ['CDN', 'Edge Computing', 'Load Balancing', 'Caching', 'Optimization'],
    color: 'from-yellow-500 to-orange-600',
  },
];

export default function TechStack() {
  return (
    <section className="py-32 px-4 relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh opacity-15" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <AnimatedSection className="text-center mb-20">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
            <span className="text-sm text-gray-300">Technology Stack</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">Built with</span>
            <br />
            <span className="gradient-text">Cutting-Edge Tech</span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Our platform leverages the latest technologies and industry best practices 
            to deliver unparalleled performance, security, and scalability.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.category}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="glass-card p-8 rounded-2xl relative overflow-hidden group"
            >
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              />
              
              <div className="relative z-10">
                <div className={`inline-flex p-3 glass rounded-xl bg-gradient-to-br ${tech.color} mb-6`}>
                  <tech.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 group-hover:gradient-text transition-colors duration-300">
                  {tech.category}
                </h3>
                
                <div className="space-y-3">
                  {tech.techs.map((item, techIndex) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 + techIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                      <span className="text-gray-300">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 3D Tech Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass-card p-8 rounded-3xl"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6 gradient-text">
                Enterprise-Grade Architecture
              </h3>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                Our infrastructure is designed for scale, security, and reliability. 
                Built on cloud-native principles with microservices architecture.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: 'Uptime', value: '99.99%' },
                  { label: 'Response Time', value: '<50ms' },
                  { label: 'Data Centers', value: '15+' },
                  { label: 'Security Audits', value: 'Monthly' },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="text-2xl font-bold gradient-text mb-1">{stat.value}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="relative h-96">
              <Floating3DModel variant="sphere" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}