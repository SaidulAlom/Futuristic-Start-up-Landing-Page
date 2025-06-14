'use client';

import { Brain, Zap, Shield, Layers, Globe, Cpu } from 'lucide-react';
import FeatureCard from './FeatureCard';
import Floating3DModel from './Floating3DModel';
import AnimatedSection from './AnimatedSection';

const features = [
  {
    icon: Brain,
    title: 'Neural Intelligence',
    description: 'Advanced neural networks that learn and adapt to your business needs, providing insights that evolve with your data.',
    gradient: 'from-pink-500 to-purple-600',
    model: <Floating3DModel variant="brain" className="scale-75" />,
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Process millions of data points in real-time with our optimized AI engine built for enterprise-scale performance.',
    gradient: 'from-yellow-500 to-orange-600',
    model: <Floating3DModel variant="sphere" className="scale-75" />,
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-level encryption and privacy protection ensure your data remains secure while leveraging powerful AI capabilities.',
    gradient: 'from-green-500 to-emerald-600',
    model: <Floating3DModel variant="torus" className="scale-75" />,
  },
  {
    icon: Layers,
    title: 'Multi-Modal AI',
    description: 'Process text, images, audio, and video simultaneously for comprehensive understanding and analysis.',
    gradient: 'from-blue-500 to-cyan-600',
    model: <Floating3DModel variant="brain" className="scale-75" />,
  },
  {
    icon: Globe,
    title: 'Global Scale',
    description: 'Deploy AI solutions across multiple regions with automatic scaling and localization support.',
    gradient: 'from-indigo-500 to-purple-600',
    model: <Floating3DModel variant="sphere" className="scale-75" />,
  },
  {
    icon: Cpu,
    title: 'Edge Computing',
    description: 'Run AI models directly on edge devices for ultra-low latency and improved privacy.',
    gradient: 'from-red-500 to-pink-600',
    model: <Floating3DModel variant="torus" className="scale-75" />,
  },
];

export default function Features() {
  return (
    <section id="features\" className="py-32 px-4 relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh opacity-20" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <AnimatedSection className="text-center mb-20">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            <span className="text-sm text-gray-300">Core Features</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Powerful Features</span>
            <br />
            <span className="text-white">Built for the Future</span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Discover the cutting-edge capabilities that make NeuroFlow AI the most 
            advanced platform for intelligent automation and decision-making.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              gradient={feature.gradient}
              model={feature.model}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}