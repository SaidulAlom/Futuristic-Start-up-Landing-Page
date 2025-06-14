'use client';

import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Monitor, Smartphone, Cloud, BarChart3 } from 'lucide-react';
import Floating3DModel from './Floating3DModel';
import AnimatedSection from './AnimatedSection';

const products = [
  {
    id: 'dashboard',
    label: 'AI Dashboard',
    icon: Monitor,
    title: 'Intelligent Analytics Dashboard',
    description: 'Real-time insights and predictive analytics powered by advanced machine learning algorithms.',
    features: ['Real-time data processing', 'Predictive analytics', 'Custom visualizations', 'Export capabilities'],
  },
  {
    id: 'mobile',
    label: 'Mobile App',
    icon: Smartphone,
    title: 'AI-Powered Mobile Experience',
    description: 'Take your AI insights anywhere with our native mobile application.',
    features: ['Offline AI processing', 'Voice commands', 'Push notifications', 'Secure authentication'],
  },
  {
    id: 'cloud',
    label: 'Cloud Platform',
    icon: Cloud,
    title: 'Scalable Cloud Infrastructure',
    description: 'Enterprise-grade cloud platform that scales with your business needs.',
    features: ['Auto-scaling', 'Global CDN', '99.9% uptime', 'Multi-region deployment'],
  },
  {
    id: 'analytics',
    label: 'AI Analytics',
    icon: BarChart3,
    title: 'Advanced AI Analytics',
    description: 'Deep learning models that uncover hidden patterns in your data.',
    features: ['Pattern recognition', 'Anomaly detection', 'Trend forecasting', 'Custom models'],
  },
];

export default function ProductShowcase() {
  return (
    <section id="product" className="py-32 px-4 relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh opacity-10" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <AnimatedSection className="text-center mb-20">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
            <span className="text-sm text-gray-300">Product Suite</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">Complete AI</span>
            <br />
            <span className="gradient-text">Ecosystem</span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            From dashboards to mobile apps, our comprehensive suite of AI-powered 
            products works seamlessly together to transform your business.
          </p>
        </AnimatedSection>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="glass-card p-8 rounded-3xl"
        >
          <Tabs defaultValue="dashboard" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 glass-card p-2 rounded-2xl mb-12">
              {products.map((product) => (
                <TabsTrigger
                  key={product.id}
                  value={product.id}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-300 data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-blue-600 data-[state=active]:text-white"
                >
                  <product.icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{product.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {products.map((product) => (
              <TabsContent key={product.id} value={product.id} className="space-y-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
                      {product.title}
                    </h3>
                    
                    <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                      {product.description}
                    </p>
                    
                    <div className="space-y-4">
                      <h4 className="text-xl font-semibold text-white mb-4">Key Features:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {product.features.map((feature, index) => (
                          <motion.div
                            key={feature}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-3"
                          >
                            <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                            <span className="text-gray-300">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <div className="relative h-96 glass-card rounded-2xl overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800">
                        <Floating3DModel variant="torus" />
                      </div>
                      
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20"
                        animate={{
                          background: [
                            'radial-gradient(circle at 20% 20%, rgba(6, 182, 212, 0.2) 0%, transparent 50%)',
                            'radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.2) 0%, transparent 50%)',
                            'radial-gradient(circle at 20% 20%, rgba(6, 182, 212, 0.2) 0%, transparent 50%)',
                          ]
                        }}
                        transition={{ duration: 4, repeat: Infinity }}
                      />
                      
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="glass p-4 rounded-xl">
                          <div className="flex items-center gap-2 mb-2">
                            <product.icon className="w-5 h-5 text-cyan-400" />
                            <span className="text-white font-medium">{product.label}</span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-2">
                            <motion.div
                              className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full"
                              initial={{ width: '0%' }}
                              whileInView={{ width: '85%' }}
                              transition={{ duration: 2, delay: 0.5 }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}