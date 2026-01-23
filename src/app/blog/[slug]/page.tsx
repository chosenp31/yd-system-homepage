import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';
import { getAllPostSlugs, getPostWithHtml, formatDate } from '@/lib/blog';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostWithHtml(slug);

  if (!post) {
    return {
      title: '記事が見つかりません | ydシステム',
    };
  }

  return {
    title: `${post.title} | ydシステム`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostWithHtml(slug);

  if (!post || !post.published) {
    notFound();
  }

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-8 md:pt-40 md:pb-12">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            {/* Back link */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[var(--muted)] hover:text-[var(--primary)] transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              ブログ一覧に戻る
            </Link>

            {/* Tags */}
            {post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] flex items-center gap-1"
                  >
                    <Tag className="w-3 h-3" />
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-6">
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex items-center gap-6 text-sm text-[var(--muted)] pb-8 border-b border-[var(--border)]">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {formatDate(post.date)}
              </span>
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {post.author}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-16 md:pb-24">
        <div className="container-custom">
          <article className="max-w-3xl mx-auto">
            <div
              className="prose-dark"
              dangerouslySetInnerHTML={{ __html: post.htmlContent }}
            />
          </article>

          {/* Footer */}
          <div className="max-w-3xl mx-auto mt-12 pt-8 border-t border-[var(--border)]">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[var(--primary)] hover:underline"
            >
              <ArrowLeft className="w-4 h-4" />
              ブログ一覧に戻る
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg opacity-90" />
        <div className="container-custom relative z-10">
          <div className="text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              システム開発のご相談
            </h2>
            <p className="text-white/80 mb-8">
              この記事に関するご質問や、システム開発のご相談がありましたら
              <br className="hidden md:block" />
              お気軽にお問い合わせください。
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-[var(--primary)] px-8 py-4 rounded-lg font-bold hover:bg-white/90 transition-all hover:scale-105"
            >
              お問い合わせはこちら
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
