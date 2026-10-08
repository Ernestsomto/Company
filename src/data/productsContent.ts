/**
 * Structured Content & Editable Product Registry for the Piqqudim Products Page (Phase 5 — /products)
 * Separates product definitions, category taxonomy, and featured spotlight configuration from presentation.
 * Strict adherence to Content Accuracy rules: no invented user counts, revenue, downloads, or unverified claims.
 */

import { ProductVisualAsset } from '../components/ui/ProductCard';

export type ProductCategoryId =
  | 'platforms'
  | 'developer-technology'
  | '3d-graphics'
  | 'games-interactive'
  | 'business-digital';

export type ProductStatusLabel = 'In Development' | 'Available' | 'Experimental' | 'Coming Soon';

export interface ProductCategorySpec {
  id: ProductCategoryId;
  index: string;
  name: string;
  description: string;
}

export interface ProductRecord {
  id: string;
  slug: string;
  name: string;
  categoryId: ProductCategoryId;
  categoryLabel: string;
  division: 'Piqqudim Core Ecosystem' | 'Piqqudim Enterprise';
  status?: ProductStatusLabel;
  shortDescription: string;
  extendedContext: string;
  href: string;
  visualAsset: ProductVisualAsset;
}

export interface FeaturedProductConfig {
  productId: string;
  eyebrow: string;
  name: string;
  category: string;
  headline: string;
  description: string;
  supportingNote: string;
  focusPoints: string[];
  primaryActionLabel: string;
  primaryActionHref: string;
  secondaryActionLabel: string;
  secondaryActionHref: string;
}

export interface ProductPhilosophyPrinciple {
  index: string;
  title: string;
  description: string;
}

export const PRODUCT_ECOSYSTEM_FLOW = [
  {
    step: '01',
    title: 'Piqqudim',
    subtitle: 'The Company',
    description: 'The parent engineering organization setting technical direction and standards.',
  },
  {
    step: '02',
    title: 'Technology',
    subtitle: 'Core Disciplines & Systems',
    description: 'Foundational work in software, graphics, compilers, 3D systems, and intelligence.',
  },
  {
    step: '03',
    title: 'Products',
    subtitle: 'Applied Architecture',
    description: 'Cohesive engines, languages, design tools, and digital software built by Piqqudim.',
  },
  {
    step: '04',
    title: 'Tools / Platforms / Experiences',
    subtitle: 'Real-World Utility',
    description: 'Environments, workflows, and interactive experiences that people and developers use.',
  },
];

export const PRODUCT_CATEGORIES: ProductCategorySpec[] = [
  {
    id: 'platforms',
    index: '01',
    name: 'Platforms',
    description: 'Technology platforms that support other products, distribution, or connected workflows.',
  },
  {
    id: 'developer-technology',
    index: '02',
    name: 'Developer Technology',
    description: 'Tools, programming technologies, engines, and developer-focused systems.',
  },
  {
    id: '3d-graphics',
    index: '03',
    name: '3D & Graphics',
    description: 'Technology related to 3D modeling, rendering, visualization, and graphics.',
  },
  {
    id: 'games-interactive',
    index: '04',
    name: 'Games & Interactive Experiences',
    description: 'Games and interactive projects developed under Piqqudim.',
  },
  {
    id: 'business-digital',
    index: '05',
    name: 'Business / Digital Products',
    description:
      'Software and digital products developed under Piqqudim Enterprise that solve problems outside the 3D and graphics space.',
  },
];

/**
 * Editable Product Collection Registry
 * New products, URLs, statuses, or visual assets can be added here without modifying page layout.
 */
export const PRODUCTS_COLLECTION: ProductRecord[] = [
  {
    id: 'pi-launcher',
    slug: 'pi-launcher',
    name: 'Pi Launcher',
    categoryId: 'platforms',
    categoryLabel: 'Platforms',
    division: 'Piqqudim Core Ecosystem',
    status: 'In Development',
    shortDescription:
      'A platform for accessing and managing Piqqudim products, including Umbra Engine and other software or experiences.',
    extendedContext:
      'Pi Launcher serves as a unified desktop and ecosystem entry point through which users and developers can access tools, engines, and interactive software built by Piqqudim.',
    href: '/products/pi-launcher',
    visualAsset: {
      monogram: 'Pi',
      domainCode: 'PLATFORM · LAUNCHER',
    },
  },
  {
    id: 'umbra-engine',
    slug: 'umbra-engine',
    name: 'Umbra Engine',
    categoryId: 'developer-technology',
    categoryLabel: 'Developer Technology · 3D & Graphics',
    division: 'Piqqudim Core Ecosystem',
    status: 'In Development',
    shortDescription:
      'Piqqudim’s game engine and graphics technology project focused on real-time rendering, engine systems, and interactive technology.',
    extendedContext:
      'Umbra Engine brings together Piqqudim’s research and engineering in rendering architecture, runtime simulation, and developer workflows for interactive 3D applications and games.',
    href: '/products/umbra-engine',
    visualAsset: {
      monogram: 'UE',
      domainCode: 'ENGINE · GRAPHICS',
    },
  },
  {
    id: 'p-language',
    slug: 'p-language',
    name: 'P Language',
    categoryId: 'developer-technology',
    categoryLabel: 'Developer Technology',
    division: 'Piqqudim Core Ecosystem',
    status: 'In Development',
    shortDescription:
      'A programming language and compiler technology project in the Piqqudim ecosystem focused on structured software development.',
    extendedContext:
      'P Language explores language design, compilation pipelines, and developer ergonomics as part of Piqqudim’s foundational developer technology work.',
    href: '/products/p-language',
    visualAsset: {
      monogram: 'P',
      domainCode: 'LANGUAGE · COMPILER',
    },
  },
  {
    id: 'nodecad',
    slug: 'nodecad',
    name: 'NodeCAD',
    categoryId: '3d-graphics',
    categoryLabel: '3D & Graphics',
    division: 'Piqqudim Core Ecosystem',
    status: 'In Development',
    shortDescription:
      'A 3D and computational design product in the Piqqudim ecosystem built around structured, node-based geometry workflows.',
    extendedContext:
      'NodeCAD applies Piqqudim’s 3D and geometry technology to procedural modeling, visualization, and structured design tools.',
    href: '/products/nodecad',
    visualAsset: {
      monogram: 'NC',
      domainCode: '3D · PROCEDURAL CAD',
    },
  },
  {
    id: 'remarket',
    slug: 'remarket',
    name: 'Remarket',
    categoryId: 'business-digital',
    categoryLabel: 'Business / Digital Products',
    division: 'Piqqudim Enterprise',
    status: 'In Development',
    shortDescription:
      'A digital platform and business product developed within the Piqqudim ecosystem outside the 3D and graphics domain.',
    extendedContext:
      'Developed under Piqqudim Enterprise, Remarket demonstrates how Piqqudim’s software engineering extends into practical digital platforms and commercial software.',
    href: '/products/remarket',
    visualAsset: {
      monogram: 'RM',
      domainCode: 'ENTERPRISE · PLATFORM',
    },
  },
  {
    id: 'games',
    slug: 'games',
    name: 'Games',
    categoryId: 'games-interactive',
    categoryLabel: 'Games & Interactive Experiences',
    division: 'Piqqudim Core Ecosystem',
    shortDescription:
      'Games and interactive experiences developed under Piqqudim alongside our graphics and engine technology.',
    extendedContext:
      'Piqqudim develops original games and interactive projects that both entertain users and validate our internal engine, graphics, and simulation systems in real production scenarios.',
    href: '/products/games',
    visualAsset: {
      monogram: 'GX',
      domainCode: 'INTERACTIVE · GAMES',
    },
  },
];

/**
 * Reusable Featured Product Configuration
 * Can be pointed to any product in the future without altering the Featured Product component layout.
 */
export const FEATURED_PRODUCT_CONFIG: FeaturedProductConfig = {
  productId: 'umbra-engine',
  eyebrow: 'Featured Ecosystem Project',
  name: 'Umbra Engine',
  category: 'Game Engine & Graphics Technology',
  headline: 'Real-time rendering and interactive engine architecture built in-house.',
  description:
    'Umbra Engine represents an important anchor within Piqqudim’s technology ecosystem. Developed as an internal game engine and graphics technology project, it connects our work in rendering pipelines, runtime architecture, and interactive tooling.',
  supportingNote:
    'Umbra Engine is currently in active development within Piqqudim and is accessed alongside other ecosystem tools through Pi Launcher.',
  focusPoints: [
    'Real-time rendering & shading architecture',
    'Modular runtime & scene simulation systems',
    'Interactive environment & game technology foundation',
    'Integrated with the broader Piqqudim tool ecosystem',
  ],
  primaryActionLabel: 'Explore Umbra Engine Overview',
  primaryActionHref: '/products/umbra-engine',
  secondaryActionLabel: 'Inspect Underlying Technology',
  secondaryActionHref: '/technology',
};

export const PRODUCT_PHILOSOPHY_PRINCIPLES: ProductPhilosophyPrinciple[] = [
  {
    index: '01',
    title: 'Solve meaningful problems',
    description: 'Every product begins with a clear technical or practical problem worth solving well.',
  },
  {
    index: '02',
    title: 'Build strong foundations',
    description: 'We prioritize sound underlying architecture so products remain dependable as they grow.',
  },
  {
    index: '03',
    title: 'Iterate through real use',
    description: 'Software improves fastest when tested against real workflows and practical demands.',
  },
  {
    index: '04',
    title: 'Learn from users',
    description: 'Observation and feedback guide how interfaces, tools, and systems are refined.',
  },
  {
    index: '05',
    title: 'Improve continuously',
    description: 'Products are long-term commitments that evolve in capability, clarity, and performance.',
  },
];
