'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Building2 } from 'lucide-react';
import ScrollAnimationWrapper from '@/components/ScrollAnimationWrapper';

export default function CompanyPage() {
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
              About Us
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">会社概要</span>
            </h1>
            <p className="text-lg md:text-xl text-[var(--muted)] max-w-2xl mx-auto">
              ydシステム会社について
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Info */}
      <section className="section-padding bg-[var(--background-secondary)]/30">
        <div className="container-custom">
          <ScrollAnimationWrapper>
            <div className="max-w-3xl mx-auto">
              <div className="glass rounded-2xl p-8 md:p-12 border border-[var(--border)]">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-xl gradient-bg flex items-center justify-center glow">
                    <span className="text-white font-bold text-2xl">yd</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-[var(--foreground)]">ydシステム会社</h2>
                    <p className="text-[var(--muted)]">
                      業務システムのスクラッチ開発
                    </p>
                  </div>
                </div>

                <table className="w-full">
                  <tbody>
                    <tr className="border-b border-[var(--border)]">
                      <th className="py-4 pr-4 text-left text-[var(--muted)] font-medium w-32">
                        会社名
                      </th>
                      <td className="py-4 text-[var(--foreground)]">ydシステム会社</td>
                    </tr>
                    <tr className="border-b border-[var(--border)]">
                      <th className="py-4 pr-4 text-left text-[var(--muted)] font-medium">
                        所在地
                      </th>
                      <td className="py-4">
                        <div className="flex items-start gap-2 text-[var(--foreground)]">
                          <MapPin className="w-5 h-5 text-[var(--primary)] flex-shrink-0 mt-0.5" />
                          <span>東京都品川区</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-[var(--border)]">
                      <th className="py-4 pr-4 text-left text-[var(--muted)] font-medium">
                        事業内容
                      </th>
                      <td className="py-4">
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2 text-[var(--foreground)]">
                            <Building2 className="w-5 h-5 text-[var(--primary)] flex-shrink-0 mt-0.5" />
                            <span>業務システムのスクラッチ開発（受託開発）</span>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <th className="py-4 pr-4 text-left text-[var(--muted)] font-medium align-top">
                        対応業界
                      </th>
                      <td className="py-4">
                        <ul className="space-y-1 text-[var(--foreground)]">
                          <li>不動産</li>
                          <li>人材</li>
                          <li>販売代理店</li>
                          <li className="text-[var(--muted)]">
                            その他業界もご相談ください
                          </li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>

      {/* Representative */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollAnimationWrapper>
            <div className="text-center mb-12">
              <p className="text-[var(--primary)] font-medium tracking-[0.3em] uppercase text-sm mb-4">
                Representative
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--foreground)]">
                代表者
              </h2>
            </div>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper delay={0.1}>
            <div className="max-w-2xl mx-auto">
              <div className="glass rounded-2xl p-8 border border-[var(--border)] text-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[var(--primary)]/20 to-[var(--secondary)]/20 mx-auto mb-6 flex items-center justify-center">
                  <span className="text-4xl">👤</span>
                </div>
                <p className="text-[var(--muted)]">
                  代表者情報は後日掲載予定です
                </p>
              </div>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding bg-[var(--background-secondary)]/30">
        <div className="container-custom">
          <ScrollAnimationWrapper>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-[var(--primary)] font-medium tracking-[0.3em] uppercase text-sm mb-4">
                Our Mission
              </p>
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[var(--foreground)]">
                私たちの想い
              </h2>
              <p className="text-lg text-[var(--muted)] leading-relaxed mb-6">
                「パッケージソフトが業務に合わない」
                <br />
                「Excelでの管理に限界を感じている」
                <br />
                「システム会社に要望が伝わらない」
              </p>
              <p className="text-lg text-[var(--muted)] leading-relaxed">
                そのようなお悩みを抱えるお客様の声に真摯に耳を傾け、
                <br />
                業務に最適なシステムを一緒に作り上げることが私たちの使命です。
              </p>
            </div>
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
                お気軽にお問い合わせください
              </h2>
              <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
                システム開発のご相談、お見積りなど、
                どのようなことでもお問い合わせください。
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
