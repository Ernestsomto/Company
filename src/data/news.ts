/**
 * Piqqudim News Data Model & Content Registry (src/data/news.ts)
 * Separates NewsArticle records and category definitions from presentation components.
 * Strict adherence to Content Accuracy rules: zero invented articles, announcements, or authors.
 */

export type NewsArticleStatus = 'Draft' | 'Published' | 'Archived';

export type NewsCategoryName =
  | 'Company'
  | 'Technology'
  | 'Engineering'
  | 'Products'
  | 'Research'
  | 'Announcements';

export interface NewsCategorySpec {
  id: string;
  name: NewsCategoryName;
  description: string;
}

/**
 * NewsArticle Data Structure (Phase 7 — Section 6)
 * - id
 * - slug
 * - title
 * - summary
 * - category
 * - date
 * - author
 * - image
 * - content
 * - featured
 * - status ('Draft' | 'Published' | 'Archived')
 */
export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  summary: string;
  category: NewsCategoryName;
  date: string;
  author?: string;
  image?: {
    url: string;
    alt: string;
    caption?: string;
  };
  content: string[];
  featured?: boolean;
  status: NewsArticleStatus;
}

/**
 * Data-driven News Categories (Phase 7 — Section 4)
 * Additional categories can be added here without modifying UI components.
 */
export const NEWS_CATEGORIES: NewsCategorySpec[] = [
  {
    id: 'company',
    name: 'Company',
    description: 'Corporate updates, institutional milestones, and organizational developments.',
  },
  {
    id: 'technology',
    name: 'Technology',
    description:
      'Developments across software, graphics, game technology, 3D systems, and intelligent systems.',
  },
  {
    id: 'engineering',
    name: 'Engineering',
    description:
      'Technical notes on systems architecture, rendering pipelines, compilers, and performance.',
  },
  {
    id: 'products',
    name: 'Products',
    description:
      'Progress and release dispatches across Umbra Engine, Pi Launcher, P Language, NodeCAD, Remarket, and Games.',
  },
  {
    id: 'research',
    name: 'Research',
    description:
      'Explorations in visual computing, language design, simulation, and foundational computing.',
  },
  {
    id: 'announcements',
    name: 'Announcements',
    description: 'Official public communications and dispatches from Piqqudim.',
  },
];

/**
 * Master News Articles Collection
 * Strictly empty of published articles so zero fictional news or announcements appear publicly.
 * Only items with `status: 'Published'` are surfaced by `getPublishedArticles()`.
 */
export const NEWS_ARTICLES: NewsArticle[] = [];

/**
 * Alias maintained for module compatibility
 */
export const NEWS_ARTICLES_REGISTRY = NEWS_ARTICLES;

/**
 * Returns only Published articles, optionally filtered by category
 */
export function getPublishedArticles(category?: 'All' | NewsCategoryName): NewsArticle[] {
  const published = NEWS_ARTICLES.filter((article) => article.status === 'Published');
  if (!category || category === 'All') {
    return published;
  }
  return published.filter((article) => article.category === category);
}

/**
 * Returns the primary Featured Published article if one exists
 */
export function getFeaturedPublishedArticle(): NewsArticle | undefined {
  const published = getPublishedArticles();
  return published.find((article) => article.featured) || published[0];
}

/**
 * Clearly Marked Development Placeholder for the `/news/[slug]` Article Reader Architecture (Section 5)
 * Status is 'Draft' so it is never listed as a real published article.
 */
export const ARCHITECTURAL_ARTICLE_TEMPLATE: NewsArticle = {
  id: 'template-article-architecture',
  slug: 'article-architecture-template',
  title: '[Article Architecture Template — Not a Published Article]',
  summary:
    'Structural preview of the reusable /news/[slug] article reader layout supporting title, subtitle/summary, category, publication date, optional author, optional hero image, article body, back navigation, share action, and related articles.',
  category: 'Engineering',
  date: 'Template Specification',
  author: 'Optional Author Slot',
  content: [
    'This route demonstrates the reusable article architecture for individual dispatches on the Piqqudim corporate website (/news/[slug]). In accordance with Piqqudim’s content accuracy rules, no fictional articles or unverified announcements are published.',
    'When a real article is added to src/data/news.ts with status set to "Published", it automatically populates the /news page and renders at its dedicated /news/[slug] URL using this editorial layout.',
    'The reader layout supports long-form technical and editorial paragraphs, optional hero imagery with accessible alt text and captions, optional author metadata, link sharing, and related-article discovery.',
  ],
  featured: false,
  status: 'Draft',
};
