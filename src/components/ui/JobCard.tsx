import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Card } from './Card';
import { Heading } from './Heading';
import { Text } from './Text';
import { Link } from './Link';

export interface JobCardProps {
  title: string;
  department?: string;
  discipline?: string;
  location: string;
  workArrangement?: string;
  employmentType?: string;
  commitment?: string;
  summary: string;
  actionLabel?: string;
  href?: string;
}

/**
 * Reusable Job Card Component
 * Uses clean unboxed metadata separators ("·") and single-level card elevation.
 * Designed for the Careers directory and role architecture.
 */
export const JobCard: React.FC<JobCardProps> = ({
  title,
  department,
  discipline,
  location,
  workArrangement,
  employmentType,
  commitment,
  summary,
  actionLabel = 'View position',
  href = '/careers',
}) => {
  const primaryDepartment = department || discipline || 'Engineering';
  const scheduleLabel = employmentType || commitment;
  const metaItems = [location, workArrangement, scheduleLabel].filter(Boolean);

  return (
    <Card
      as="article"
      surface="primary"
      padding="md"
      interactive
      className="flex flex-col md:flex-row md:items-center justify-between gap-6"
    >
      <div className="space-y-2 max-w-[65ch]">
        <div className="flex flex-wrap items-center gap-2 text-xs text-[var(--color-text-muted)]">
          <span className="font-semibold text-[var(--color-accent)]">{primaryDepartment}</span>
          {metaItems.map((item) => (
            <React.Fragment key={item}>
              <span aria-hidden="true">·</span>
              <span>{item}</span>
            </React.Fragment>
          ))}
        </div>

        <Heading as="h3" variant="h3">
          {title}
        </Heading>

        <Text variant="small" tone="secondary">
          {summary}
        </Text>
      </div>

      <div className="shrink-0">
        <Link
          href={href}
          variant="accent"
          aria-label={`${actionLabel}: ${title}`}
          className="text-sm font-semibold whitespace-nowrap"
        >
          <span>{actionLabel}</span>
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </Link>
      </div>
    </Card>
  );
};
