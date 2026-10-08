import React from 'react';
import { ArrowRight } from 'lucide-react';
import { NewsArticle } from '../../data/news';
import { Card } from '../ui/Card';
import { Heading } from '../ui/Heading';
import { Text } from '../ui/Text';
import { Link } from '../ui/Link';

export interface FeaturedStoryCardProps {
  article?: NewsArticle;
}

/**
 * Reusable Featured Story Component (Phase 7 — Section 3)
 * Supports:
 * - Title
 * - Short summary
 * - Category
 * - Publication date
 * - Optional image (works cleanly whether or not an image exists)
 * - Optional author
 * - Read more action
 *
 * When no published article exists, renders the intentional empty state:
 * "Updates from Piqqudim will appear here."
 */
export const FeaturedStoryCard: React.FC<FeaturedStoryCardProps> = ({ article }) => {
  if (!article) {
    return (
      <Card surface="secondary" padding="lg" className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--color-border)] pb-4 text-xs">
          <div className="flex items-center gap-2">
            <span className="font-mono font-semibold text-[var(--color-accent)]">
              FEATURED STORY
            </span>
            <span aria-hidden="true" className="text-[var(--color-text-muted)]">
              ·
            </span>
            <span className="text-[var(--color-text-secondary)]">Official Publication Channel</span>
          </div>
          <span className="font-mono text-[var(--color-text-muted)]">0 Published Articles</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 space-y-3">
            <Heading as="h3" variant="h2">
              Updates from Piqqudim will appear here.
            </Heading>
            <Text variant="body" tone="secondary" measure>
              When Piqqudim publishes official company updates, engineering notes, product
              progress, or research dispatches, the primary featured story will appear in this
              section.
            </Text>
          </div>

          <div className="lg:col-span-4 flex lg:justify-end items-start">
            <Link
              href="/news/article-architecture-template"
              variant="accent"
              className="text-xs font-semibold"
            >
              <span>Inspect Article Layout Template →</span>
            </Link>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card surface="secondary" padding="lg">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className={article.image ? 'lg:col-span-7 space-y-4' : 'lg:col-span-12 space-y-4'}>
          <div className="flex flex-wrap items-center gap-2 text-xs text-[var(--color-text-muted)]">
            <span className="font-semibold text-[var(--color-accent)]">{article.category}</span>
            <span aria-hidden="true">·</span>
            <time className="font-mono">{article.date}</time>
            {article.author ? (
              <>
                <span aria-hidden="true">·</span>
                <span>{article.author}</span>
              </>
            ) : null}
          </div>

          <Heading as="h3" variant="h1">
            {article.title}
          </Heading>

          <Text variant="body-lg" tone="secondary" measure>
            {article.summary}
          </Text>

          <div className="pt-2">
            <Link
              href={`/news/${article.slug}`}
              variant="accent"
              className="text-sm font-semibold"
            >
              <span>Read more</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>

        {article.image ? (
          <div className="lg:col-span-5">
            <img
              src={article.image.url}
              alt={article.image.alt}
              referrerPolicy="no-referrer"
              loading="lazy"
              className="w-full h-64 object-cover rounded-[var(--radius-md)] border border-[var(--color-border)]"
            />
          </div>
        ) : null}
      </div>
    </Card>
  );
};
