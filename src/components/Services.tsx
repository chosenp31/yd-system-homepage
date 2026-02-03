'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Users, Calculator } from 'lucide-react';

type ServiceStatus = 'active' | 'coming_soon';

interface Service {
  name: string;
  description: string;
  url: string | null;
  status: ServiceStatus;
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    name: '人材HUB',
    description:
      '人材紹介会社向けCRM。求職者・クライアント管理、マッチング機能を一元化。',
    url: 'https://jinzai-hub.com',
    status: 'active',
    icon: <Users className="w-8 h-8" />,
  },
  {
    name: '販売管理システム',
    description:
      '中小企業向け販売管理。見積・請求・在庫管理をシンプルに。',
    url: null,
    status: 'coming_soon',
    icon: <Calculator className="w-8 h-8" />,
  },
];

export default function Services() {
  return (
    <div
      className={`grid gap-6 ${
        services.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-2 lg:grid-cols-3'
      } max-w-4xl mx-auto`}
    >
      {services.map((service, index) => (
        <motion.div
          key={service.name}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="relative glass rounded-xl p-6 border border-[var(--border)] hover:border-[var(--primary)]/50 transition-all duration-300"
        >
          {service.status === 'coming_soon' && (
            <div className="absolute top-4 right-4">
              <span className="px-2 py-1 bg-[var(--background-secondary)] text-[var(--muted)] text-xs font-medium rounded">
                準備中
              </span>
            </div>
          )}

          <div className="w-12 h-12 rounded-lg bg-[var(--primary)]/10 flex items-center justify-center mb-4 text-[var(--primary)]">
            {service.icon}
          </div>

          <h3 className="text-xl font-bold text-[var(--foreground)] mb-2">
            {service.name}
          </h3>

          <p className="text-[var(--muted)] text-sm mb-6 leading-relaxed">
            {service.description}
          </p>

          {service.status === 'active' && service.url ? (
            <Link
              href={service.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[var(--primary)] font-medium hover:underline"
            >
              詳しく見る
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          ) : (
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-[var(--muted)] font-medium hover:text-[var(--primary)] transition-colors"
            >
              お問い合わせ
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          )}
        </motion.div>
      ))}
    </div>
  );
}
