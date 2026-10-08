import React from 'react';
import { Card } from './Card';
import { Heading } from './Heading';
import { Text } from './Text';
import { Link } from './Link';

export interface TechnologyCardProps {
  index: string;
  name: string;
  scope: string;
  description: string;
  href?: string;
}

/**
 * Reusable Technology Domain Card Component
 * Uses clean editorial numbering ("01. Software Engineering") without pseudo-code prefixes.
 */
export const TechnologyCard: React.FC<TechnologyCardProps> = ({
  index,
  name,
  scope,
  description,
  href = '/technology',
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
        <div className="flex items-center gap-2 text-xs text-[var(--color-text-muted)] mb-3">
          <span className="font-mono font-medium text-[var(--color-accent)]">{index}.</span>
          <span>{scope}</span>
        </div>

        <Heading as="h3" variant="h3" className="mb-3">
          {name}
        </Heading>

        <Text variant="small" tone="secondary" className="mb-6">
          {description}
        </Text>
      </div>

      <div className="pt-4 border-t border-[var(--color-border)]">
        <Link href={href} variant="accent" className="text-xs font-semibold">
          Domain Architecture →
        </Link>
      </div>
    </Card>
  );
};
