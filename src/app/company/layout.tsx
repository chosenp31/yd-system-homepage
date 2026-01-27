import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '会社概要',
  description:
    'YDシステムの会社概要。テクノロジーでビジネスの可能性を広げます。',
};

export default function CompanyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
