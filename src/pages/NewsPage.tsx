import React, { useState } from 'react';
import {
  NEWS_CATEGORIES,
  getPublishedArticles,
  getFeaturedPublishedArticle,
} from '../data/news';
import { SEO } from '../components/seo/SEO';
import {
  FeaturedStoryCard,
  NewsCategoryFilter,
  NewsCategorySelection,
} from '../components/news';
import {
  Section,
  Grid,
  Heading,
  Text,
  Badge,
  Card,
  NewsCard,
  CTASection,
} from '../components/ui';

export { NewsArticleDetailPage } from './NewsArticlePage';

/**
 * Official Piqqudim News Page (Phase 7A — /news)
 * Flow:
 * News Hero → Featured Story → Categories / Filters →
 * News Articles (or Empty State if no articles exist) → Closing CTA → Footer
 */
export const NewsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<NewsCategorySelection>('All');

  const featuredArticle = getFeaturedPublishedArticle();
  const publishedArticles = getPublishedArticles(selectedCategory);

  const visibleCategorySpecs =
    selectedCategory === 'All'
      ? NEWS_CATEGORIES
      : NEWS_CATEGORIES.filter((cat) => cat.name === selectedCategory);

  return (
    <>
      <SEO
        title="News | Piqqudim"
        description="Ideas, progress, and what we're building. Official company updates, technology work, engineering notes, product progress, and announcements from Piqqudim."
        canonicalPath="/news"
      />

      {/* =====================================================================
          1. NEWS HERO
          Eyebrow: Piqqudim
          Headline: Ideas, progress, and what we're building.
          ===================================================================== */}
      <Section id="news-hero" surface="grid" spacing="lg" borderBottom>
        <div className="max-w-[52rem] space-y-5">
          <Badge tone="accent" prefix="News & Dispatches">
            Piqqudim
          </Badge>

          <Heading as="h1" variant="display">
            Ideas, progress, and what we’re building.
          </Heading>

          <Text variant="body-lg" tone="secondary" measure>
            A space for sharing company updates, technology work, engineering notes, product
            progress, research, and official announcements from Piqqudim.
          </Text>
        </div>
      </Section>

      {/* =====================================================================
          2. FEATURED STORY
          Reusable FeaturedStoryCard with intentional empty state when no articles exist
          ===================================================================== */}
      <Section id="featured-story" surface="primary" spacing="md" borderBottom>
        <div className="space-y-6">
          <Badge tone="accent" prefix="01">
            Featured Story
          </Badge>
          <FeaturedStoryCard article={featuredArticle} />
        </div>
      </Section>

      {/* =====================================================================
          3. CATEGORIES / FILTERS & 4. NEWS ARTICLES / EMPTY STATE
          ===================================================================== */}
      <Section id="news-articles" surface="secondary" spacing="lg" borderBottom>
        <div className="space-y-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-[46rem] space-y-3">
              <Badge tone="accent" prefix="02">
                Content Categories & Archive
              </Badge>
              <Heading as="h2" variant="h2">
                Dispatches and categories.
              </Heading>
              <Text variant="body" tone="secondary" measure>
                Updates across Piqqudim are organized into six editorial and technical categories.
              </Text>
            </div>

            <NewsCategoryFilter
              categories={NEWS_CATEGORIES}
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />
          </div>

          {publishedArticles.length > 0 ? (
            <Grid cols={3} gap="md">
              {publishedArticles.map((article) => (
                <NewsCard
                  key={article.id}
                  title={article.title}
                  category={article.category}
                  dateLabel={article.date}
                  readingTime={article.author}
                  summary={article.summary}
                  href={`/news/${article.slug}`}
                />
              ))}
            </Grid>
          ) : (
            <div className="space-y-8">
              <Card surface="primary" padding="lg" className="space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[var(--color-text-muted)]">
                  <span className="font-mono font-semibold text-[var(--color-accent)]">
                    ARCHIVE STATUS
                  </span>
                  <span className="font-mono">
                    {selectedCategory === 'All'
                      ? 'Showing all 6 editorial categories'
                      : `Category: ${selectedCategory}`}
                  </span>
                </div>
                <Heading as="h3" variant="h3">
                  Updates from Piqqudim will appear here.
                </Heading>
                <Text variant="small" tone="secondary" measure>
                  No published articles are listed under{' '}
                  {selectedCategory === 'All' ? 'the newsroom archive' : selectedCategory} yet.
                  Below are the editorial categories through which future company, engineering,
                  technology, product, and research updates will be shared.
                </Text>
              </Card>

              <Grid cols={3} gap="sm">
                {visibleCategorySpecs.map((cat, idx) => (
                  <Card key={cat.id} surface="primary" padding="md" className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-mono font-semibold text-[var(--color-accent)]">
                        0{idx + 1}.
                      </span>
                      <span className="text-[var(--color-text-muted)]">Category</span>
                    </div>
                    <Heading as="h3" variant="h4">
                      {cat.name}
                    </Heading>
                    <Text variant="small" tone="secondary">
                      {cat.description}
                    </Text>
                  </Card>
                ))}
              </Grid>
            </div>
          )}
        </div>
      </Section>

      {/* =====================================================================
          5. CLOSING CTA
          ===================================================================== */}
      <CTASection
        kicker="03 · Connect with Piqqudim"
        title="Have a press, partnership, or technology inquiry?"
        description="Reach out through Piqqudim’s official contact page or explore our core technology and product ecosystem."
        primaryActionLabel="Contact Piqqudim →"
        primaryActionHref="/contact"
        secondaryActionLabel="Explore Technology"
        secondaryActionHref="/technology"
      />
    </>
  );
};
