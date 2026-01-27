import Link from 'next/link';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Business', href: '/business' },
  { name: 'Blog', href: '/blog' },
  { name: 'Company', href: '/company' },
  { name: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--background-secondary)]/50">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center glow">
                <span className="text-white font-bold text-lg">YD</span>
              </div>
              <span className="font-semibold text-lg tracking-wider text-[var(--foreground)]">
                YDシステム
              </span>
            </div>
            <p className="text-[var(--muted)] text-sm leading-relaxed max-w-xs">
              お客様の業務に合わせたシステムを開発し、ビジネスの成長を支援します。
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-6 text-sm tracking-wider uppercase text-[var(--foreground)]">
              Navigation
            </h3>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-[var(--muted)] hover:text-[var(--primary)] transition-colors duration-300 text-sm tracking-wide"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-6 text-sm tracking-wider uppercase text-[var(--foreground)]">
              Company
            </h3>
            <ul className="space-y-3 text-[var(--muted)] text-sm">
              <li>YDシステム</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[var(--border)] mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[var(--muted)] text-sm tracking-wide">
            &copy; {new Date().getFullYear()} YDシステム. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
