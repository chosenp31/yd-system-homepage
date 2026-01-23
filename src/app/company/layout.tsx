import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '会社概要',
  description:
    'ydシステム会社の会社概要。東京都品川区を拠点に、業務システムのスクラッチ開発を行っています。',
};

export default function CompanyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
