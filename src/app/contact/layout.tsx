import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'お問い合わせ',
  description:
    'YDシステムへのお問い合わせ。システム開発のご相談、お見積り依頼など、お気軽にお問い合わせください。',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
