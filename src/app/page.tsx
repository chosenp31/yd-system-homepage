'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Cloud, Rocket, Users, Building2, ShoppingCart } from 'lucide-react';
import MathBackground from '@/components/MathBackground';
import ScrollAnimationWrapper from '@/components/ScrollAnimationWrapper';

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
  return (
    <>
      <MathBackground />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="container-custom pt-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                <span className="gradient-text">業務システム</span>の
                <br />
                スクラッチ開発
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-[var(--muted)] mb-10 max-w-2xl mx-auto"
            >
              パッケージでは実現できない、
              <br className="md:hidden" />
              お客様専用のシステムを開発
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/contact"
                className="btn-primary inline-flex items-center justify-center gap-2 text-lg px-8 py-4"
              >
                お問い合わせ
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/service"
                className="btn-secondary inline-flex items-center justify-center gap-2 text-lg px-8 py-4"
              >
                サービス詳細
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-[var(--border)] rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1.5 h-1.5 bg-[var(--primary)] rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-[var(--background-secondary)]">
        <div className="container-custom">
          <ScrollAnimationWrapper>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="gradient-text">サービス</span>
              </h2>
              <p className="text-[var(--muted)] max-w-2xl mx-auto">
                お客様の業務課題を解決するために、開発から運用まで一貫してサポートします
              </p>
            </div>
          </ScrollAnimationWrapper>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ScrollAnimationWrapper key={service.title} delay={index * 0.1}>
                <div className="bg-[var(--background-card)] rounded-2xl p-8 border border-[var(--border)] card-hover h-full">
                  <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mb-6">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[var(--foreground)]">
                    {service.title}
                  </h3>
                  <p className="text-[var(--muted)]">
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
                className="text-[var(--primary)] hover:underline inline-flex items-center gap-1"
              >
                サービス詳細を見る
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>

      {/* Industries Section */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollAnimationWrapper>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="gradient-text">対応業界</span>
              </h2>
              <p className="text-[var(--muted)] max-w-2xl mx-auto">
                様々な業界の業務システム開発に対応しています
              </p>
            </div>
          </ScrollAnimationWrapper>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {industries.map((industry, index) => (
              <ScrollAnimationWrapper key={industry.name} delay={index * 0.1}>
                <div className="text-center p-8 rounded-2xl border border-[var(--border)] bg-[var(--background-card)] card-hover">
                  <div className="w-16 h-16 rounded-2xl bg-[var(--primary)]/10 flex items-center justify-center mx-auto mb-4">
                    <industry.icon className="w-8 h-8 text-[var(--primary)]" />
                  </div>
                  <h3 className="font-bold mb-2 text-[var(--foreground)]">{industry.name}</h3>
                  <p className="text-sm text-[var(--muted)]">{industry.description}</p>
                </div>
              </ScrollAnimationWrapper>
            ))}
          </div>

          <ScrollAnimationWrapper>
            <p className="text-center text-[var(--muted)] mt-8">
              上記以外の業界もお気軽にご相談ください
            </p>
          </ScrollAnimationWrapper>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-[var(--primary)] to-[var(--accent)]">
        <div className="container-custom">
          <ScrollAnimationWrapper>
            <div className="text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                まずはお気軽にご相談ください
              </h2>
              <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                「こんなシステムが作れるか」「費用感を知りたい」など、
                <br className="hidden md:block" />
                どのようなご質問でもお答えいたします。
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-[var(--primary)] px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors"
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
