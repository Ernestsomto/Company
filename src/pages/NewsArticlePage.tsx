import React, { useState } from 'react';
import { ArrowLeft, Check, Share2 } from 'lucide-react';
import {
  ARCHITECTURAL_ARTICLE_TEMPLATE,
  getPublishedArticles,
  NewsArticle,
} from '../data/news';
import { SEO } from '../components/seo/SEO';
import {
  Section,
  Grid,
  Heading,
  Text,
  Button,
  Link,
  Divider,
  NewsCard,
  PageHeader,
} from '../components/ui';

/**
 * Reusable Individual News Article Page (/news/[slug] — Phase 7 Section 5)
 * Supports:
 * - Article title
 * - Subtitle/summary
 * - Category
 * - Publication date
 * - Author (optional)
 * - Hero image (optional, lazy loaded)
 * - Article body
 * - Optional related articles
 * - Back to News action
 * - Share action
 */
export const NewsArticleDetailPage: React.FC<{ slug: string }> = ({ slug }) => {
  const [copiedLink, setCopiedLink] = useState(false);

  const publishedArticles = getPublishedArticles();
  const matchedPublished = publishedArticles.find((item) => item.slug === slug);

  const isTemplateSlug =
    slug === 'article-architecture-template' ||
    slug === 'corporate-announcement-template' ||
    slug === 'technical-dispatch-template' ||
    slug === 'corporate-dispatch-template' ||
    slug === 'engineering-log-template';

  const article: NewsArticle | undefined =
    matchedPublished || (isTemplateSlug ? ARCHITECTURAL_ARTICLE_TEMPLATE : undefined);

  const isRealPublished = Boolean(matchedPublished);

  if (!article) {
    return (
      <>
        <SEO
          title="Article Not Found | News | Piqqudim"
          description="The requested article could not be found in the Piqqudim newsroom."
          canonicalPath={`/news/${slug}`}
        />
        <PageHeader
          kicker="News"
          title="Article not found."
          description={`No published article matches "/news/${slug}". Return to the Piqqudim News page.`}
          actions={
            <Button variant="primary" size="md" href="/news">
              ← Back to News
            </Button>
          }
        />
      </>
    );
  }

  const relatedArticles = publishedArticles
    .filter((item) => item.slug !== article.slug && item.category === article.category)
    .slice(0, 3);

  const handleShare = async () => {
    const shareUrl =
      typeof window !== 'undefined' ? window.location.href : `https://piqqudim.com/news/${slug}`;
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(shareUrl);
        setCopiedLink(true);
        setTimeout(() => setCopiedLink(false), 2500);
      }
    } catch {
      // Clipboard API unavailable in restricted contexts; fail gracefully
    }
  };

  return (
    <>
      <SEO
        title={
          isRealPublished
            ? `${article.title} | News | Piqqudim`
            : 'Article Architecture Template | News | Piqqudim'
        }
        description={
          isRealPublished
            ? article.summary
            : 'Reusable article architecture template for the Piqqudim corporate website (/news/[slug]).'
        }
        ogTitle={
          isRealPublished
            ? `${article.title} | Piqqudim`
            : 'Article Architecture Template | Piqqudim'
        }
        ogDescription={
          isRealPublished
            ? article.summary
            : 'Reusable article architecture template for the Piqqudim corporate website.'
        }
        ogImage={isRealPublished && article.image?.url ? article.image.url : undefined}
        canonicalPath={`/news/${slug}`}
      />

      {/* Article Header */}
      <Section surface="grid" spacing="lg" borderBottom>
        <div className="max-w-[52rem] space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Link href="/news" variant="muted" className="text-xs font-medium">
              <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Back to News</span>
            </Link>

            <button
              type="button"
              onClick={handleShare}
              aria-label="Copy article link to clipboard"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-bg-secondary)] text-xs font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:border-[var(--color-accent)] transition-colors cursor-pointer"
            >
              {copiedLink ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[var(--color-accent)]" aria-hidden="true" />
                  <span>Link copied</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5 text-[var(--color-accent)]" aria-hidden="true" />
                  <span>Share article</span>
                </>
              )}
            </button>
          </div>

          {!isRealPublished && (
            <div
              role="note"
              className="p-4 rounded-[var(--radius-md)] border border-[var(--color-accent-border)] bg-[var(--color-accent-subtle)] text-xs text-[var(--color-text-primary)]"
            >
              <span className="font-mono font-semibold text-[var(--color-accent)]">
                ARCHITECTURAL PREVIEW
              </span>{' '}
              · This route demonstrates the reusable <code className="font-mono">/news/[slug]</code>{' '}
              article reader component. It is a structural template, not a published article.
            </div>
          )}

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

          <Heading as="h1" variant="h1">
            {article.title}
          </Heading>

          <Text variant="body-lg" tone="secondary" measure>
            {article.summary}
          </Text>
        </div>
      </Section>

      {/* Article Body & Optional Hero Image */}
      <Section surface="primary" spacing="lg" borderBottom>
        <article className="max-w-[46rem] space-y-8">
          {article.image?.url ? (
            <figure className="space-y-2">
              <img
                src={article.image.url}
                alt={article.image.alt}
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full rounded-[var(--radius-lg)] border border-[var(--color-border)] object-cover"
              />
              {article.image.caption ? (
                <figcaption className="text-xs text-[var(--color-text-muted)]">
                  {article.image.caption}
                </figcaption>
              ) : null}
            </figure>
          ) : null}

          <div className="space-y-6">
            {article.content.map((paragraph, index) => (
              <Text key={index} variant="body" tone="primary" measure>
                {paragraph}
              </Text>
            ))}
          </div>

          <Divider spacing="md" />

          <div className="flex flex-wrap items-center justify-between gap-4">
            <Link href="/news" variant="accent" className="text-sm font-semibold">
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              <span>Back to News</span>
            </Link>

            <button
              type="button"
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] cursor-pointer"
            >
              <Share2 className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{copiedLink ? 'Copied URL to clipboard' : 'Copy link to share'}</span>
            </button>
          </div>
        </article>
      </Section>

      {/* Optional Related Articles */}
      {relatedArticles.length > 0 && (
        <Section surface="secondary" spacing="md">
          <div className="space-y-8">
            <Heading as="h2" variant="h3">
              Related in {article.category}
            </Heading>
            <Grid cols={3} gap="md">
              {relatedArticles.map((rel) => (
                <NewsCard
                  key={rel.id}
                  title={rel.title}
                  category={rel.category}
                  dateLabel={rel.date}
                  summary={rel.summary}
                  href={`/news/${rel.slug}`}
                />
              ))}
            </Grid>
          </div>
        </Section>
      )}
    </>
  );
};
