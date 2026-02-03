'use client';

import { motion } from 'framer-motion';
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
              Company
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">会社概要</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <ScrollAnimationWrapper>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-[var(--primary)] font-medium tracking-[0.3em] uppercase text-sm mb-6">
                Mission
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--primary)]">
                テクノロジーで、ビジネスの可能性を広げる。
              </h2>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>

      {/* Representative */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <ScrollAnimationWrapper>
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-8">
                <p className="text-[var(--primary)] font-medium tracking-[0.3em] uppercase text-sm mb-4">
                  Representative
                </p>
              </div>
              <div className="glass rounded-2xl p-8 md:p-12 border border-[var(--border)]">
                <div className="text-center">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2 text-[var(--foreground)]">
                    依田 尚人
                  </h3>
                  <p className="text-[var(--primary)] font-medium mb-6">
                    Naoto Yoda
                  </p>
                  <p className="text-[var(--muted)] text-sm mb-4">
                    YDシステム 代表
                  </p>
                  <p className="text-[var(--muted)] leading-relaxed text-sm md:text-base">
                    東京理科大学卒業。統計学・機械学習を専攻。
                    日系ITコンサルティングファーム、外資系コンサルティングファームにて企業のデジタル課題解決に従事。
                    その経験を活かし、YDシステムを設立。
                  </p>
                </div>
              </div>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>

      {/* Company Info */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <ScrollAnimationWrapper>
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-8">
                <p className="text-[var(--primary)] font-medium tracking-[0.3em] uppercase text-sm mb-4">
                  Company Info
                </p>
              </div>
              <div className="glass rounded-2xl p-8 md:p-12 border border-[var(--border)]">
                <table className="w-full">
                  <tbody>
                    <tr className="border-b border-[var(--border)]">
                      <th className="py-4 pr-4 text-left text-[var(--muted)] font-medium w-32">
                        会社名
                      </th>
                      <td className="py-4 text-[var(--foreground)]">
                        YDシステム
                      </td>
                    </tr>
                    <tr className="border-b border-[var(--border)]">
                      <th className="py-4 pr-4 text-left text-[var(--muted)] font-medium">
                        代表
                      </th>
                      <td className="py-4 text-[var(--foreground)]">
                        依田 尚人
                      </td>
                    </tr>
                    <tr>
                      <th className="py-4 pr-4 text-left text-[var(--muted)] font-medium">
                        事業内容
                      </th>
                      <td className="py-4 text-[var(--foreground)]">
                        <ul className="list-none space-y-1">
                          <li>システム開発</li>
                          <li>AI活用支援</li>
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

    </>
  );
}
