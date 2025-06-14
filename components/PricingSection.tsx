'use client';

import { motion } from 'framer-motion';
import { Check, Star, Zap, Crown, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedSection from './AnimatedSection';

const plans = [
  {
    name: 'Starter',
    price: '$29',
    period: '/month',
    description: 'Perfect for small teams getting started with AI',
    icon: Zap,
    features: [
      '10,000 API calls/month',
      'Basic AI models',
      'Email support',
      'Dashboard analytics',
      'Standard integrations',
    ],
    popular: false,
    gradient: 'from-blue-500 to-cyan-600',
  },
  {
    name: 'Professional',
    price: '$99',
    period: '/month',
    description: 'Advanced features for growing businesses',
    icon: Star,
    features: [
      '100,000 API calls/month',
      'Advanced AI models',
      'Priority support',
      'Custom analytics',
      'Advanced integrations',
      'Team collaboration',
      'Custom workflows',
    ],
    popular: true,
    gradient: 'from-purple-500 to-pink-600',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'Tailored solutions for large organizations',
    icon: Crown,
    features: [
      'Unlimited API calls',
      'Custom AI models',
      '24/7 dedicated support',
      'Advanced security',
      'Custom integrations',
      'On-premise deployment',
      'SLA guarantees',
      'Training & consulting',
    ],
    popular: false,
    gradient: 'from-orange-500 to-red-600',
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-32 px-4 relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh opacity-10" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <AnimatedSection className="text-center mb-20">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm text-gray-300">Pricing Plans</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">Choose Your</span>
            <br />
            <span className="gradient-text">AI Journey</span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Flexible pricing plans designed to scale with your business needs. 
            Start free and upgrade as you grow.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className={`relative ${plan.popular ? 'md:-mt-8' : ''}`}
            >
              {plan.popular && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10"
                >
                  <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                    <Rocket className="w-4 h-4" />
                    Most Popular
                  </div>
                </motion.div>
              )}
              
              <div className={`glass-card p-8 rounded-3xl h-full relative overflow-hidden ${
                plan.popular ? 'neon-border' : ''
              }`}>
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-5`}
                  whileHover={{ opacity: 0.1 }}
                  transition={{ duration: 0.3 }}
                />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-3 glass rounded-xl bg-gradient-to-br ${plan.gradient}`}>
                      <plan.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                      <p className="text-gray-400 text-sm">{plan.description}</p>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold gradient-text">{plan.price}</span>
                      <span className="text-gray-400">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.5 + featureIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3"
                      >
                        <Check className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                  
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
                        plan.popular
                          ? 'bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white shadow-lg hover:shadow-purple-500/25'
                          : 'glass-card text-cyan-400 hover:text-white border-cyan-400/50 hover:border-cyan-400'
                      }`}
                    >
                      {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-4">
            All plans include 14-day free trial • No credit card required
          </p>
          <div className="flex justify-center gap-8 text-sm text-gray-500">
            <span>✓ Cancel anytime</span>
            <span>✓ 99.9% uptime SLA</span>
            <span>✓ Enterprise security</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}