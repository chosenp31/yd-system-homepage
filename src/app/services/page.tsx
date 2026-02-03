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
              <span className="text-[var(--primary)]">サービス</span>
            </h1>
            <p className="text-[var(--muted)] max-w-2xl mx-auto">
              企業の成長を支援するサービスを提供
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-[#f8fafc]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-[20px] p-8 md:p-12 shadow-[0_10px_40px_rgba(79,124,255,0.12)] border border-[rgba(79,124,255,0.1)]">
              <div className="text-center mb-10">
                <span className="inline-block text-[var(--primary)] font-medium tracking-[0.3em] uppercase text-xs mb-4 bg-[rgba(79,124,255,0.08)] px-4 py-2 rounded-full">
                  Services
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-[#4d4d62] mb-2">
                  サービス
                </h2>
                <p className="text-[var(--primary)] font-medium">
                  企業の成長を支援するサービスを提供
                </p>
              </div>
              <Services />
            </div>
          </motion.div>
        </div>
      </section>

    </>
  );
}
