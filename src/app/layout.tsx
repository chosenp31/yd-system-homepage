import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'ydシステム会社 | 業務システムのスクラッチ開発',
    template: '%s | ydシステム会社',
  },
  description:
    'ydシステム会社は、不動産・人材・販売代理店向けの業務システムをスクラッチ開発いたします。パッケージでは解決できない課題を、お客様の業務フローに合わせたオーダーメイドシステムで解決します。',
  keywords: [
    '業務システム開発',
    'スクラッチ開発',
    '受託開発',
    '不動産システム',
    '人材管理システム',
    '顧客管理システム',
    '東京',
  ],
  authors: [{ name: 'ydシステム会社' }],
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://yd-system.co.jp',
    siteName: 'ydシステム会社',
    title: 'ydシステム会社 | 業務システムのスクラッチ開発',
    description:
      'お客様の業務課題を解決するオーダーメイドの業務システムを開発いたします。',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'ydシステム会社',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ydシステム会社 | 業務システムのスクラッチ開発',
    description:
      'お客様の業務課題を解決するオーダーメイドの業務システムを開発いたします。',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
