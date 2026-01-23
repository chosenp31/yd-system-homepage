import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'サービス紹介',
  description:
    'ydシステム会社のスクラッチ開発サービス。お客様の業務フローに合わせたオーダーメイドシステムを開発いたします。',
};

export default function ServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
