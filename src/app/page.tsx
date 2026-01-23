'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { ArrowRight } from 'lucide-react';
import ScrollAnimationWrapper from '@/components/ScrollAnimationWrapper';

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
      {/* Hero Section - 球体が主役 */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* グロー背景 - 画面全体をカバー（fixedで固定） */}
        <div className="fixed inset-0 pointer-events-none -z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vmax] h-[150vmax] rounded-full bg-[#4f7cff]/10 blur-[200px]" />
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vmax] h-[120vmax] rounded-full bg-[#8b5cf6]/8 blur-[180px]" />
          <div className="absolute top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vmax] h-[100vmax] rounded-full bg-[#06b6d4]/6 blur-[150px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vmax] h-[60vmax] rounded-full bg-[#4f7cff]/15 blur-[100px]" />
        </div>

        {/* 3D Sphere - 画面中央に大きく配置 */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <ParticleSphere />
        </div>

        {/* テキストコンテンツ - 右下に小さく配置 */}
        <div className="container-custom relative z-10 min-h-screen flex items-end pb-16 md:pb-24">
          <div
            className={`max-w-md ml-auto transition-all duration-1000 delay-500 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <p className="text-[var(--primary)] font-medium tracking-[0.3em] uppercase text-xs mb-3">
              Scratch Development
            </p>
            <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-4">
              <span className="gradient-text">業務システム</span>の
              <br />
              スクラッチ開発
            </h1>
            <p className="text-sm text-[var(--muted)] leading-relaxed mb-6">
              パッケージでは実現できない、お客様専用のシステムを開発。
              業務フローに完全にフィットしたオーダーメイドのソリューションをご提供いたします。
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
                href="/service"
                className="btn-secondary text-sm px-5 py-2.5 inline-flex items-center justify-center gap-2"
              >
                サービス詳細
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg opacity-90" />
        <div className="container-custom relative z-10">
          <ScrollAnimationWrapper>
            <div className="text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                まずはお気軽にご相談ください
              </h2>
              <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
                「こんなシステムが作れるか」「費用感を知りたい」など、
                どのようなご質問でもお答えいたします。
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-[var(--primary)] px-8 py-4 rounded-lg font-bold hover:bg-white/90 transition-all hover:scale-105"
              >
                お問い合わせはこちら
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>
    </>
  );
}
