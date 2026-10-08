import React from 'react';
import { ContactConfig, contactConfig, hasVerifiedContactDetails } from '../../data/contact';
import { Card } from '../ui/Card';
import { Text } from '../ui/Text';
import { Link } from '../ui/Link';

export interface DirectContactInfoProps {
  config?: ContactConfig;
}

/**
 * Reusable Direct Contact Information Component (Phase 7 — Section 11)
 * Only renders fields (`email`, `phone`, `address`, `businessHours`, `socialLinks`)
 * that contain real, verified values in `contactConfig`.
 */
export const DirectContactInfo: React.FC<DirectContactInfoProps> = ({
  config = contactConfig,
}) => {
  const hasVerified = hasVerifiedContactDetails(config);

  if (!hasVerified) {
    return null;
  }

  return (
    <Card surface="secondary" padding="md" className="space-y-4">
      <Text as="span" variant="label" tone="accent" className="block">
        Direct Contact Information
      </Text>
      <dl className="divide-y divide-[var(--color-border)] text-xs">
        {config.email ? (
          <div className="py-2.5 first:pt-0 last:pb-0 flex items-center justify-between gap-4">
            <dt className="text-[var(--color-text-muted)]">Email</dt>
            <dd className="font-mono font-medium text-[var(--color-text-primary)]">
              <a
                href={`mailto:${config.email}`}
                className="text-[var(--color-accent)] hover:underline"
              >
                {config.email}
              </a>
            </dd>
          </div>
        ) : null}

        {config.phone ? (
          <div className="py-2.5 first:pt-0 last:pb-0 flex items-center justify-between gap-4">
            <dt className="text-[var(--color-text-muted)]">Phone</dt>
            <dd className="font-mono font-medium text-[var(--color-text-primary)]">
              {config.phone}
            </dd>
          </div>
        ) : null}

        {config.address ? (
          <div className="py-2.5 first:pt-0 last:pb-0 flex items-center justify-between gap-4">
            <dt className="text-[var(--color-text-muted)]">Address</dt>
            <dd className="text-[var(--color-text-primary)] text-right">{config.address}</dd>
          </div>
        ) : null}

        {config.businessHours ? (
          <div className="py-2.5 first:pt-0 last:pb-0 flex items-center justify-between gap-4">
            <dt className="text-[var(--color-text-muted)]">Business Hours</dt>
            <dd className="text-[var(--color-text-primary)]">{config.businessHours}</dd>
          </div>
        ) : null}

        {config.socialLinks && config.socialLinks.length > 0 ? (
          <div className="py-2.5 first:pt-0 last:pb-0 flex items-center justify-between gap-4">
            <dt className="text-[var(--color-text-muted)]">Official Profiles</dt>
            <dd className="flex flex-wrap items-center gap-3">
              {config.socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.url}
                  external
                  variant="accent"
                  className="text-xs font-semibold"
                >
                  {social.label}
                </Link>
              ))}
            </dd>
          </div>
        ) : null}
      </dl>
    </Card>
  );
};
