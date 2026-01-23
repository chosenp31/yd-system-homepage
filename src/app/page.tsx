'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { ArrowRight, Code2, Cloud, Rocket, Building2, Users, ShoppingCart } from 'lucide-react';
import ScrollAnimationWrapper from '@/components/ScrollAnimationWrapper';

const ParticleSphere = dynamic(() => import('@/components/ParticleSphere'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full min-h-[400px] md:min-h-[600px] flex items-center justify-center">
      <div className="w-16 h-16 border-2 border-[var(--primary)] border-t-transparent rounded-full animate-spin" />
    </div>
  ),
});

const services = [
  {
    icon: Code2,
    title: '業務システム開発',
    description: 'お客様の業務フローに合わせたオーダーメイドのシステムをスクラッチ開発',
  },
  {
    icon: Cloud,
    title: 'クラウド構築',
    description: '安全で安定したクラウド環境で、どこからでもアクセス可能なシステムを実現',
  },
  {
    icon: Rocket,
    title: '保守・運用',
    description: '開発後の機能追加、改修、トラブル対応まで一貫してサポート',
  },
];

const industries = [
  { icon: Building2, name: '不動産', description: '顧客管理・物件管理・契約管理' },
  { icon: Users, name: '人材', description: '案件管理・マッチング・勤怠管理' },
  { icon: ShoppingCart, name: '販売代理店', description: '商談管理・売上予測・在庫管理' },
];

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="container-custom w-full">
          <div className="grid lg:grid-cols-2 gap-8 items-center min-h-screen pt-24 pb-12">
            {/* Left - 3D Sphere */}
            <div
              className={`order-2 lg:order-1 transition-all duration-1000 ${
                isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
            >
              <ParticleSphere />
            </div>

            {/* Right - Content */}
            <div
              className={`order-1 lg:order-2 space-y-8 transition-all duration-1000 delay-300 ${
                isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
            >
              <div className="space-y-6">
                <p className="text-[var(--primary)] font-medium tracking-[0.3em] uppercase text-sm">
                  Scratch Development
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="gradient-text">業務システム</span>の
                  <br />
                  スクラッチ開発
                </h1>
                <p className="text-lg text-[var(--muted)] leading-relaxed max-w-lg">
                  パッケージでは実現できない、お客様専用のシステムを開発。
                  業務フローに完全にフィットしたオーダーメイドのソリューションをご提供いたします。
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="btn-primary inline-flex items-center justify-center gap-2"
                >
                  お問い合わせ
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/service"
                  className="btn-secondary inline-flex items-center justify-center gap-2"
                >
                  サービス詳細
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Background gradient overlay */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--primary)] rounded-full mix-blend-multiply filter blur-[150px] opacity-10" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--secondary)] rounded-full mix-blend-multiply filter blur-[150px] opacity-10" />
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding relative">
        <div className="container-custom">
          <ScrollAnimationWrapper>
            <div className="text-center mb-16">
              <p className="text-[var(--primary)] font-medium tracking-[0.3em] uppercase text-sm mb-4">
                Our Services
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="gradient-text">サービス</span>
              </h2>
              <p className="text-[var(--muted)] max-w-2xl mx-auto">
                お客様の業務課題を解決するために、開発から運用まで一貫してサポートします
              </p>
            </div>
          </ScrollAnimationWrapper>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ScrollAnimationWrapper key={service.title} delay={index * 0.15}>
                <div className="glass rounded-2xl p-8 card-hover h-full border border-[var(--border)]">
                  <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mb-6 glow">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-[var(--foreground)]">
                    {service.title}
                  </h3>
                  <p className="text-[var(--muted)] leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </ScrollAnimationWrapper>
            ))}
          </div>

          <ScrollAnimationWrapper>
            <div className="text-center mt-12">
              <Link
                href="/service"
                className="text-[var(--primary)] hover:text-[var(--primary-light)] inline-flex items-center gap-2 transition-colors"
              >
                サービス詳細を見る
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>

      {/* Industries Section */}
      <section className="section-padding bg-[var(--background-secondary)]/30">
        <div className="container-custom">
          <ScrollAnimationWrapper>
            <div className="text-center mb-16">
              <p className="text-[var(--primary)] font-medium tracking-[0.3em] uppercase text-sm mb-4">
                Industries
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="gradient-text">対応業界</span>
              </h2>
              <p className="text-[var(--muted)] max-w-2xl mx-auto">
                様々な業界の業務システム開発に対応しています
              </p>
            </div>
          </ScrollAnimationWrapper>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {industries.map((industry, index) => (
              <ScrollAnimationWrapper key={industry.name} delay={index * 0.15}>
                <div className="text-center p-8 rounded-2xl glass border border-[var(--border)] card-hover">
                  <div className="w-16 h-16 rounded-2xl bg-[var(--primary)]/10 flex items-center justify-center mx-auto mb-6">
                    <industry.icon className="w-8 h-8 text-[var(--primary)]" />
                  </div>
                  <h3 className="font-bold mb-3 text-[var(--foreground)]">{industry.name}</h3>
                  <p className="text-sm text-[var(--muted)]">{industry.description}</p>
                </div>
              </ScrollAnimationWrapper>
            ))}
          </div>

          <ScrollAnimationWrapper>
            <p className="text-center text-[var(--muted)] mt-12">
              上記以外の業界もお気軽にご相談ください
            </p>
          </ScrollAnimationWrapper>
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
