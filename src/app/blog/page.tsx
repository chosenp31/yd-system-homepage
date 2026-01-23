import { Metadata } from 'next';
import { getAllPosts, formatDate } from '@/lib/blog';
import BlogCard from '@/components/BlogCard';

export const metadata: Metadata = {
  title: 'ブログ | ydシステム',
  description: 'ydシステムのブログ。システム開発に関する技術情報や、業務効率化のヒントをお届けします。',
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">ブログ</span>
            </h1>
            <p className="text-lg md:text-xl text-[var(--muted)] max-w-2xl mx-auto">
              システム開発に関する技術情報や、
              <br className="hidden md:block" />
              業務効率化のヒントをお届けします
            </p>
          </div>
        </div>
      </section>

      {/* Blog List */}
      <section className="section-padding bg-[var(--background-secondary)]">
        <div className="container-custom">
          {posts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-[var(--muted)]">
                まだ記事がありません。
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {posts.map((post) => (
                <BlogCard
                  key={post.slug}
                  slug={post.slug}
                  title={post.title}
                  date={formatDate(post.date)}
                  excerpt={post.excerpt}
                  author={post.author}
                  tags={post.tags}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
