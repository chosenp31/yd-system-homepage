import Link from 'next/link';
import { Calendar, User, ArrowRight } from 'lucide-react';

interface BlogCardProps {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  author: string;
  tags?: string[];
  category?: string;
}

export default function BlogCard({
  slug,
  title,
  date,
  excerpt,
  author,
  tags = [],
  category,
}: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`}>
      <article className="glass rounded-2xl overflow-hidden border border-[var(--border)] card-hover h-full flex flex-col">
        {/* Content */}
        <div className="p-6 flex flex-col flex-1">
          {/* Category & Tags */}
          <div className="flex flex-wrap gap-2 mb-3">
            {category && (
              <span className="text-xs px-2 py-1 rounded-full bg-[var(--secondary)]/10 text-[var(--secondary)] font-medium">
                {category}
              </span>
            )}
            {tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 rounded-full bg-[var(--primary)]/10 text-[var(--primary)]"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h3 className="text-lg font-bold text-[var(--foreground)] mb-2 line-clamp-2 group-hover:text-[var(--primary)] transition-colors">
            {title}
          </h3>

          {/* Excerpt */}
          <p className="text-sm text-[var(--muted)] mb-4 line-clamp-3 flex-1">
            {excerpt}
          </p>

          {/* Meta */}
          <div className="flex items-center justify-between text-xs text-[var(--muted)] mt-auto pt-4 border-t border-[var(--border)]">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {date}
              </span>
              <span className="flex items-center gap-1">
                <User className="w-3 h-3" />
                {author}
              </span>
            </div>
            <ArrowRight className="w-4 h-4 text-[var(--primary)]" />
          </div>
        </div>
      </article>
    </Link>
  );
}
