import React from 'react';
import { Section } from './Section';
import { Heading } from './Heading';
import { Text } from './Text';
import { Button } from './Button';

export interface CTASectionProps {
  kicker?: string;
  title: string;
  description: string;
  primaryActionLabel: string;
  primaryActionHref: string;
  secondaryActionLabel?: string;
  secondaryActionHref?: string;
}

/**
 * Reusable Corporate Call-to-Action Section
 * Uses restrained architectural framing with a single primary focal action.
 */
export const CTASection: React.FC<CTASectionProps> = ({
  kicker = 'Corporate & Technical Inquiries',
  title,
  description,
  primaryActionLabel,
  primaryActionHref,
  secondaryActionLabel,
  secondaryActionHref,
}) => {
  return (
    <Section surface="secondary" spacing="md" borderTop borderBottom>
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
        <div className="max-w-[44rem] space-y-3">
          <Text as="span" variant="label" tone="accent" className="block">
            {kicker}
          </Text>
          <Heading as="h2" variant="h2">
            {title}
          </Heading>
          <Text variant="body" tone="secondary" measure>
            {description}
          </Text>
        </div>

        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <Button variant="primary" size="lg" href={primaryActionHref}>
            {primaryActionLabel}
          </Button>
          {secondaryActionLabel && secondaryActionHref ? (
            <Button variant="outline" size="lg" href={secondaryActionHref}>
              {secondaryActionLabel}
            </Button>
          ) : null}
        </div>
      </div>
    </Section>
  );
};
