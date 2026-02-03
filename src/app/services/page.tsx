'use client';

import { motion } from 'framer-motion';
import Services from '@/components/Services';

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <p className="text-[var(--primary)] font-medium tracking-[0.3em] uppercase text-sm mb-6">
              Services
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">サービス</span>
            </h1>
            <p className="text-[var(--muted)] max-w-2xl mx-auto">
              企業の成長を支援するサービスを提供
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-[var(--background-secondary)]/30">
        <div className="container-custom">
          <Services />
        </div>
      </section>

    </>
  );
}
