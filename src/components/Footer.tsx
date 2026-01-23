import Link from 'next/link';

const navigation = [
  { name: 'サービス', href: '/service' },
  { name: 'ブログ', href: '/blog' },
  { name: '会社概要', href: '/company' },
  { name: 'お問い合わせ', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--background-secondary)] border-t border-[var(--border)]">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center">
                <span className="text-white font-bold text-lg">yd</span>
              </div>
              <span className="font-bold text-lg text-[var(--foreground)]">ydシステム</span>
            </div>
            <p className="text-[var(--muted)] text-sm leading-relaxed">
              お客様の業務課題を解決する
              <br />
              オーダーメイドの業務システムを開発いたします。
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-bold mb-4 text-lg text-[var(--foreground)]">ページ</h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-[var(--muted)] hover:text-[var(--primary)] transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold mb-4 text-lg text-[var(--foreground)]">会社情報</h3>
            <ul className="space-y-2 text-[var(--muted)]">
              <li>ydシステム会社</li>
              <li>東京都品川区</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[var(--border)] mt-12 pt-8 text-center text-[var(--muted)] text-sm">
          <p>&copy; {new Date().getFullYear()} ydシステム会社. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
