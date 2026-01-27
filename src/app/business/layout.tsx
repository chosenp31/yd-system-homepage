import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '事業内容',
  description: 'YDシステムの事業内容。お客様の業務に合わせたシステムをスクラッチで開発し、ビジネスの成長を支援します。',
};

export default function BusinessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
