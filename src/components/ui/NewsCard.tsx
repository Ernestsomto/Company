import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Card } from './Card';
import { Heading } from './Heading';
import { Text } from './Text';
import { Link } from './Link';

export interface NewsCardProps {
  title: string;
  category: string;
  dateLabel: string;
  readingTime?: string;
  summary: string;
  href?: string;
}

/**
 * Reusable News / Article Card Component
 * Follows Zero-Pill metadata discipline: unboxed metadata separated by middle dots ("·").
 */
export const NewsCard: React.FC<NewsCardProps> = ({
  title,
  category,
  dateLabel,
  readingTime,
  summary,
  href = '/news',
}) => {
  return (
    <Card
      as="article"
      surface="primary"
      padding="md"
      interactive
      className="flex flex-col justify-between h-full"
    >
      <div>
        <div className="flex flex-wrap items-center gap-2 text-xs text-[var(--color-text-muted)] mb-3">
          <span className="font-medium text-[var(--color-accent)]">{category}</span>
          <span aria-hidden="true">·</span>
          <time className="font-mono">{dateLabel}</time>
          {readingTime ? (
            <>
              <span aria-hidden="true">·</span>
              <span>{readingTime}</span>
            </>
          ) : null}
        </div>

        <Heading as="h3" variant="h3" className="mb-3">
          {title}
        </Heading>

        <Text variant="small" tone="secondary" className="mb-6">
          {summary}
        </Text>
      </div>

      <div className="pt-4 border-t border-[var(--color-border)]">
        <Link href={href} variant="accent" className="text-xs font-semibold">
          <span>Read Dispatch</span>
          <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
        </Link>
      </div>
    </Card>
  );
};
