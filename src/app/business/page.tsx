'use client';

import { motion } from 'framer-motion';
import { Cpu, MessageSquare, Zap, Shield } from 'lucide-react';

export default function BusinessPage() {
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
              Business
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-[var(--primary)]">事業内容</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Business Description */}
      <section className="section-padding bg-[var(--background-secondary)]/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="glass rounded-2xl p-8 md:p-12 border border-[var(--border)]">
              <p className="text-lg md:text-xl text-[var(--foreground)] leading-relaxed mb-6">
                YDシステムは、AI技術を活用してお客様専用のシステムを開発します。
              </p>
              <p className="text-[var(--muted)] leading-relaxed">
                これまで外部ベンダーに依頼していたシステム開発を、御社の業務に最適化した形で構築。パッケージソフトでは対応できない固有の課題を解決し、売上向上とコスト削減を実現します。
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* AI Development Process */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-[var(--primary)] font-medium tracking-[0.3em] uppercase text-sm mb-4">
              AI-Driven Development
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-[var(--primary)]">AI駆動開発</span>
            </h2>
            <p className="text-[var(--muted)] max-w-2xl mx-auto">
              最新のAI技術を開発プロセスに統合。従来の開発手法と比較して、大幅な工数削減と品質向上を両立します。
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: MessageSquare,
                title: '自然言語での要件定義',
                description: '専門用語不要。やりたいことを日本語で伝えるだけで、AIがシステム設計に落とし込みます。',
              },
              {
                icon: Cpu,
                title: 'AIによるコード生成',
                description: '人間が監督し、AIが実装。開発工数を大幅に削減しながら、高品質なコードを生成します。',
              },
              {
                icon: Zap,
                title: '迅速なプロトタイピング',
                description: '動くものを素早く作成し、実際に触りながら改善。認識のズレを早期に解消します。',
              },
              {
                icon: Shield,
                title: '人間による品質保証',
                description: 'AIが生成したコードは、必ず人間がレビュー。セキュリティと品質を担保します。',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-xl p-6 border border-[var(--border)] hover:border-[var(--primary)]/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-[var(--primary)]/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-[var(--primary)]" />
                </div>
                <h3 className="text-lg font-semibold text-[var(--foreground)] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
