import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Google Analytics ID
const GA_ID = 'G-4487N33Z54';

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
    default: 'YDシステム | AIで、業務を進化させる',
    template: '%s | YDシステム',
  },
  description:
    'AI技術を活用したシステム開発で、外注コストを大幅削減。IT人材がいなくても、御社専用のシステムを構築できます。内製化・DX推進をYDシステムが支援します。',
  keywords: [
    'AI システム開発',
    'システム内製化',
    'システム開発 コスト削減',
    '中小企業 システム開発',
    'DX推進',
    'AI活用',
    '外注 脱却',
    '業務システム',
  ],
  authors: [{ name: 'YDシステム' }],
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://www.yd-system.com',
    siteName: 'YDシステム',
    title: 'YDシステム | AIで、業務を進化させる',
    description:
      'AI技術を活用したシステム開発で、外注コストを大幅削減。IT人材がいなくても、御社専用のシステムを構築。',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'YDシステム - AIで、業務を進化させる',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'YDシステム | AIで、業務を進化させる',
    description:
      'AI技術を活用したシステム開発で、外注コストを大幅削減。IT人材がいなくても、御社専用のシステムを構築。',
  },
  robots: {
    index: true,
    follow: true,
  },
};

// 組織の構造化データ
const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'YDシステム',
  url: 'https://www.yd-system.com',
  logo: 'https://www.yd-system.com/favicon.svg',
  description: 'AI技術を活用したシステム開発で、外注コストを大幅削減。システム内製化・DX推進を支援します。',
  sameAs: [],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    url: 'https://www.yd-system.com/contact',
  },
};

// WebサイトのJSON-LD
const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'YDシステム',
  url: 'https://www.yd-system.com',
  description: 'AI技術を活用したシステム開発で、IT人材がいなくても御社専用のシステムを構築。内製化・DX推進を支援。',
  publisher: {
    '@type': 'Organization',
    name: 'YDシステム',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
        {/* YD Analytics - IPベーストラッキング */}
        <Script id="yd-analytics" strategy="afterInteractive">
          {`
            (function() {
              function getSessionId() {
                const SESSION_KEY = 'yd_tracking_session';
                const SESSION_TIMEOUT = 30 * 60 * 1000;
                const stored = localStorage.getItem(SESSION_KEY);
                if (stored) {
                  try {
                    const { sessionId, timestamp } = JSON.parse(stored);
                    if (Date.now() - timestamp < SESSION_TIMEOUT) {
                      return sessionId;
                    }
                  } catch (e) {}
                }
                const newSessionId = crypto.randomUUID();
                localStorage.setItem(SESSION_KEY, JSON.stringify({
                  sessionId: newSessionId,
                  timestamp: Date.now()
                }));
                return newSessionId;
              }

              function track() {
                const sessionId = getSessionId();
                fetch('https://analytics-six.vercel.app/api/track', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({
                    siteId: 'yd-system',
                    pagePath: window.location.pathname,
                    referrer: document.referrer || undefined,
                    sessionId: sessionId
                  })
                }).catch(err => console.warn('YD Analytics tracking failed:', err));
              }

              if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', track);
              } else {
                track();
              }
            })();
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
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
