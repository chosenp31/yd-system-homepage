'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Building2,
  Users,
  ShoppingCart,
  CheckCircle2,
  XCircle,
  Lightbulb,
  Code2,
  Rocket,
  Cloud,
} from 'lucide-react';
import ScrollAnimationWrapper from '@/components/ScrollAnimationWrapper';
import SectionTitle from '@/components/SectionTitle';

const packageProblems = [
  {
    icon: XCircle,
    title: 'やりたいことができない',
    description:
      'パッケージの機能に縛られ、本当にやりたい業務フローが実現できない',
  },
  {
    icon: XCircle,
    title: 'カスタマイズが高額',
    description:
      'パッケージをカスタマイズすると、結局スクラッチ開発より高額になることも',
  },
  {
    icon: XCircle,
    title: '無駄な機能が多い',
    description: '使わない機能が多く、画面が複雑で操作しづらい',
  },
];

const scratchBenefits = [
  {
    icon: CheckCircle2,
    title: '業務フローに完全フィット',
    description:
      'お客様の業務フローをそのままシステム化。「システムに合わせる」必要がありません。',
  },
  {
    icon: CheckCircle2,
    title: '必要な機能だけを搭載',
    description:
      '無駄な機能がなく、シンプルで使いやすい画面設計を実現します。',
  },
  {
    icon: CheckCircle2,
    title: '柔軟な拡張・改修',
    description:
      '事業の成長や変化に合わせて、いつでも機能追加・改修が可能です。',
  },
];

const industries = [
  {
    icon: Building2,
    name: '不動産',
    examples: [
      '顧客管理システム',
      '物件管理システム',
      '賃貸管理システム',
      '契約管理システム',
    ],
  },
  {
    icon: Users,
    name: '人材',
    examples: [
      '案件管理システム',
      'マッチングシステム',
      'シフト管理システム',
      '勤怠管理システム',
    ],
  },
  {
    icon: ShoppingCart,
    name: '販売代理店',
    examples: [
      '商談管理システム',
      '売上予測システム',
      '在庫管理システム',
      '代理店管理システム',
    ],
  },
];

const techFeatures = [
  {
    icon: Cloud,
    title: 'クラウドネイティブ',
    description: '安全で安定したクラウド環境で運用',
  },
  {
    icon: Rocket,
    title: '高速・快適な操作性',
    description: 'ストレスのない軽快な動作を実現',
  },
  {
    icon: Code2,
    title: 'モダンな技術スタック',
    description: '最新技術で長期運用可能なシステムを構築',
  },
];

export default function ServicePage() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">スクラッチ開発</span>で
              <br />
              業務課題を解決
            </h1>
            <p className="text-lg md:text-xl text-[var(--muted)] max-w-2xl mx-auto">
              お客様の業務フローに合わせた
              <br className="md:hidden" />
              オーダーメイドのシステムをご提供いたします
            </p>
          </motion.div>
        </div>
      </section>

      {/* What is Scratch Development */}
      <section className="section-padding bg-[var(--background-secondary)]">
        <div className="container-custom">
          <SectionTitle
            title="スクラッチ開発とは"
            subtitle="お客様専用のシステムをゼロから構築する開発手法です"
          />

          <ScrollAnimationWrapper>
            <div className="max-w-3xl mx-auto">
              <div className="bg-[var(--background-card)] rounded-2xl p-8 md:p-12 border border-[var(--border)]">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-[var(--foreground)]">
                      パッケージではなく、ゼロから作る
                    </h3>
                    <p className="text-[var(--muted)] leading-relaxed">
                      市販のパッケージソフトを導入するのではなく、お客様の業務内容・フロー・課題を詳細にヒアリングし、
                      それに最適化されたシステムを一から設計・開発いたします。
                    </p>
                  </div>
                </div>
                <p className="text-[var(--muted)] leading-relaxed">
                  「パッケージに業務を合わせる」のではなく「業務にシステムを合わせる」ことで、
                  本当に使いやすく、業務効率を最大化するシステムを実現します。
                </p>
              </div>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>

      {/* Package vs Scratch */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionTitle
            title="なぜスクラッチ開発なのか"
            subtitle="パッケージソフトでお困りではありませんか？"
          />

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Package Problems */}
            <ScrollAnimationWrapper direction="left">
              <div className="bg-[var(--secondary)]/10 rounded-2xl p-8 border border-[var(--secondary)]/20">
                <h3 className="text-xl font-bold mb-6 text-[var(--secondary)]">
                  パッケージソフトの課題
                </h3>
                <div className="space-y-4">
                  {packageProblems.map((problem, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <problem.icon className="w-5 h-5 text-[var(--secondary)] flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-medium text-[var(--foreground)]">
                          {problem.title}
                        </p>
                        <p className="text-sm text-[var(--muted)]">
                          {problem.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollAnimationWrapper>

            {/* Scratch Benefits */}
            <ScrollAnimationWrapper direction="right">
              <div className="bg-[var(--primary)]/10 rounded-2xl p-8 border border-[var(--primary)]/20">
                <h3 className="text-xl font-bold mb-6 text-[var(--primary)]">
                  スクラッチ開発のメリット
                </h3>
                <div className="space-y-4">
                  {scratchBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <benefit.icon className="w-5 h-5 text-[var(--primary)] flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-medium text-[var(--foreground)]">
                          {benefit.title}
                        </p>
                        <p className="text-sm text-[var(--muted)]">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section-padding bg-[var(--background-secondary)]">
        <div className="container-custom">
          <SectionTitle
            title="対応業界"
            subtitle="様々な業界の業務システム開発に対応いたします"
          />

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {industries.map((industry, index) => (
              <ScrollAnimationWrapper key={industry.name} delay={index * 0.1}>
                <div className="bg-[var(--background-card)] rounded-2xl p-8 border border-[var(--border)] h-full">
                  <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mb-6">
                    <industry.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-[var(--foreground)]">{industry.name}</h3>
                  <ul className="space-y-2">
                    {industry.examples.map((example, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-[var(--muted)]"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[var(--primary)]" />
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollAnimationWrapper>
            ))}
          </div>

          <ScrollAnimationWrapper>
            <p className="text-center text-[var(--muted)] mt-8">
              上記以外の業界・システムについてもお気軽にご相談ください
            </p>
          </ScrollAnimationWrapper>
        </div>
      </section>

      {/* Technology */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionTitle
            title="技術について"
            subtitle="最先端のクラウド技術で、使いやすく充実した画面を実現"
          />

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
            {techFeatures.map((feature, index) => (
              <ScrollAnimationWrapper key={feature.title} delay={index * 0.1}>
                <div className="text-center p-6">
                  <div className="w-16 h-16 rounded-2xl bg-[var(--primary)]/10 flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-[var(--primary)]" />
                  </div>
                  <h3 className="font-bold mb-2 text-[var(--foreground)]">{feature.title}</h3>
                  <p className="text-[var(--muted)] text-sm">
                    {feature.description}
                  </p>
                </div>
              </ScrollAnimationWrapper>
            ))}
          </div>

          <ScrollAnimationWrapper>
            <p className="text-center text-[var(--muted)] mt-8 max-w-2xl mx-auto">
              弊社では、最新のクラウド技術を活用し、
              セキュリティ・パフォーマンス・保守性に優れたシステムを構築いたします。
              技術的な詳細についてはお問い合わせ時にご説明いたします。
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
