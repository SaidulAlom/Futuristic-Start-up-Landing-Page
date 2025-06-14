import Hero from '@/components/Hero';
import Features from '@/components/Features';
import ProductShowcase from '@/components/ProductShowcase';
import TechStack from '@/components/TechStack';
import PricingSection from '@/components/PricingSection';
import Testimonials from '@/components/Testimonials';
import BlogSection from '@/components/BlogSection';
import NewsletterSection from '@/components/NewsletterSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Features />
      <ProductShowcase />
      <TechStack />
      <PricingSection />
      <Testimonials />
      <BlogSection />
      <NewsletterSection />
      <Footer />
    </main>
  );
}