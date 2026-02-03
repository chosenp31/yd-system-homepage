'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const ParticleSphere = dynamic(() => import('@/components/ParticleSphere'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-20 h-20 border-2 border-[var(--primary)] border-t-transparent rounded-full animate-spin" />
    </div>
  ),
});

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0a0a1a] via-[#1a1a3e] to-[#0d0d24] overflow-hidden">
        {/* グロー背景 */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vmax] h-[150vmax] rounded-full bg-[#4f7cff]/10 blur-[200px]" />
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vmax] h-[120vmax] rounded-full bg-[#8b5cf6]/8 blur-[180px]" />
          <div className="absolute top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vmax] h-[100vmax] rounded-full bg-[#06b6d4]/6 blur-[150px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vmax] h-[60vmax] rounded-full bg-[#4f7cff]/15 blur-[100px]" />
        </div>

        {/* 3D Sphere */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <ParticleSphere />
        </div>

        {/* テキストコンテンツ */}
        <div className="container-custom relative z-10 min-h-screen flex items-end pb-16 md:pb-24">
          <div
            className={`max-w-lg ml-auto transition-all duration-1000 delay-500 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
              <span className="gradient-text">AIで、</span>
              <br />
              <span className="gradient-text">業務を進化させる</span>
            </h1>
            <p className="text-sm md:text-base text-[#9090b0] leading-relaxed mb-6">
              外部任せだったシステムを、自社専用に開発。
              売上拡大とコスト削減を実現します。
            </p>

            <div className="flex flex-row gap-3">
              <Link
                href="/contact"
                className="btn-primary text-sm px-5 py-2.5 inline-flex items-center justify-center gap-2"
              >
                お問い合わせ
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services"
                className="btn-secondary text-sm px-5 py-2.5 inline-flex items-center justify-center gap-2 text-white border-white hover:bg-white/10"
              >
                サービス
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="text-[var(--primary)] font-medium tracking-[0.3em] uppercase text-sm mb-6">
              What We Do
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[var(--primary)]">
              AIを中心とする
            </h2>
            <p className="text-2xl md:text-3xl font-bold mb-8 text-[var(--primary)]">
              最先端テクノロジーで企業の成長を支援
            </p>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-[var(--primary)] hover:underline font-medium"
            >
              サービスを見る
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

    </>
  );
}
