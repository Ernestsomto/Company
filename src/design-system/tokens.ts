/**
 * Piqqudim Design System Tokens
 * Central registry of color, typography, spacing, and responsive breakpoint specifications.
 * All tokens correspond directly to CSS custom properties defined in `src/index.css`.
 */

export interface ColorToken {
  name: string;
  cssVar: string;
  value: string;
  role: string;
  contrastNote: string;
}

export interface TypographyToken {
  variant:
    | 'display'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'body-lg'
    | 'body'
    | 'small'
    | 'label'
    | 'nav'
    | 'button'
    | 'code';
  label: string;
  sizeSpec: string;
  lineHeight: string;
  weight: string;
  tracking: string;
  usage: string;
}

export interface SpacingToken {
  token: string;
  cssVar: string;
  rem: string;
  px: number;
  usage: string;
}

export const COLOR_TOKENS: ColorToken[] = [
  {
    name: 'Primary Background',
    cssVar: '--color-bg-primary',
    value: '#FFFFFF / #090B0A',
    role: 'Dominant 60% architectural canvas (White in Light Theme, --background-dark in Dark Theme)',
    contrastNote: '18.1:1 (Light) / 19.2:1 (Dark) WCAG AAA contrast',
  },
  {
    name: 'Secondary Background',
    cssVar: '--color-bg-secondary',
    value: '#F5F8F6 / #101412',
    role: 'Alternating section canvas & structural container backdrop',
    contrastNote: 'Subtle mineral-green / obsidian elevation delta',
  },
  {
    name: 'Elevated Surface',
    cssVar: '--color-bg-elevated',
    value: '#EBF2EE / #161D1A',
    role: 'Distinct architectural feature sections, callouts, and segmented control wells',
    contrastNote: 'Light mineral-green in White Theme; deep carbon in Dark Theme',
  },
  {
    name: 'Primary Accent',
    cssVar: '--color-accent',
    value: '#0B7A53 / #10B968',
    role: 'Buttons, links, active navigation states, focus rings, and logo circuit traces',
    contrastNote: 'WCAG AA/AAA verified across both White and Dark themes',
  },
  {
    name: 'Accent Hover',
    cssVar: '--color-accent-hover',
    value: '#075C3E / #24DC82',
    role: 'Interactive hover & active state for buttons, links, and controls',
    contrastNote: 'High-contrast interactive feedback state',
  },
  {
    name: 'Primary Text',
    cssVar: '--color-text-primary',
    value: '#081811 / #F8FAF9',
    role: 'Headings, primary prose, brand wordmark, and key UI elements',
    contrastNote: '18.1:1 on White / 19.2:1 on Dark',
  },
  {
    name: 'Secondary Text',
    cssVar: '--color-text-secondary',
    value: '#32473D / #A7B8B0',
    role: 'Long-form body copy, card descriptions, and supporting technical context',
    contrastNote: '9.5:1+ WCAG AAA across both themes',
  },
  {
    name: 'Muted Text',
    cssVar: '--color-text-muted',
    value: '#5A7065 / #768A80',
    role: 'Metadata, timestamps, section indices, and secondary captions',
    contrastNote: '5.2:1+ WCAG AA across both themes',
  },
  {
    name: 'Structural Border',
    cssVar: '--color-border',
    value: '#DCE5E0 / #1F2924',
    role: '1px hairline dividers, card boundaries, and grid rules',
    contrastNote: 'Crisp structural separation without visual clutter',
  },
  {
    name: 'Semantic Error',
    cssVar: '--color-error',
    value: '#B91C1C / #F87171',
    role: 'Form validation errors and critical system alerts (paired with icon + text)',
    contrastNote: '6.4:1+ WCAG AA across both themes',
  },
];

export const TYPOGRAPHY_TOKENS: TypographyToken[] = [
  {
    variant: 'display',
    label: 'Display Heading',
    sizeSpec: 'clamp(2.5rem, 4.5vw + 1rem, 4.25rem)',
    lineHeight: '1.08',
    weight: '600 (SemiBold)',
    tracking: '-0.03em',
    usage: 'Primary corporate positioning statements and hero anchors',
  },
  {
    variant: 'h1',
    label: 'Heading 1 (H1)',
    sizeSpec: 'clamp(2rem, 3.2vw + 0.75rem, 3.25rem)',
    lineHeight: '1.12',
    weight: '600 (SemiBold)',
    tracking: '-0.025em',
    usage: 'Top-level page headers',
  },
  {
    variant: 'h2',
    label: 'Heading 2 (H2)',
    sizeSpec: 'clamp(1.5rem, 2.2vw + 0.5rem, 2.25rem)',
    lineHeight: '1.18',
    weight: '600 (SemiBold)',
    tracking: '-0.02em',
    usage: 'Major architectural section headings',
  },
  {
    variant: 'h3',
    label: 'Heading 3 (H3)',
    sizeSpec: 'clamp(1.25rem, 1.4vw + 0.4rem, 1.5rem)',
    lineHeight: '1.28',
    weight: '600 (SemiBold)',
    tracking: '-0.015em',
    usage: 'Card titles, technology domain titles, and subsystem headers',
  },
  {
    variant: 'h4',
    label: 'Heading 4 (H4)',
    sizeSpec: '1.125rem (18px)',
    lineHeight: '1.35',
    weight: '600 (SemiBold)',
    tracking: '-0.01em',
    usage: 'Subsection headers and structured list titles',
  },
  {
    variant: 'body-lg',
    label: 'Body Large',
    sizeSpec: '1.125rem (18px)',
    lineHeight: '1.65',
    weight: '400 (Regular)',
    tracking: '0em',
    usage: 'Lead paragraphs and page header introductions (65ch max measure)',
  },
  {
    variant: 'body',
    label: 'Body Standard',
    sizeSpec: '1rem (16px)',
    lineHeight: '1.65',
    weight: '400 (Regular)',
    tracking: '0em',
    usage: 'Default editorial and technical prose (65–75ch measure)',
  },
  {
    variant: 'small',
    label: 'Small Text',
    sizeSpec: '0.875rem (14px)',
    lineHeight: '1.55',
    weight: '400 (Regular)',
    tracking: '0em',
    usage: 'Secondary card descriptions, footnotes, and supporting specifications',
  },
  {
    variant: 'label',
    label: 'Label / Metadata',
    sizeSpec: '0.75rem (12px)',
    lineHeight: '1.45',
    weight: '500 (Medium)',
    tracking: '0.02em',
    usage: 'Section kickers, form labels, and unboxed metadata lines',
  },
  {
    variant: 'nav',
    label: 'Navigation Link',
    sizeSpec: '0.875rem (14px)',
    lineHeight: '1.2',
    weight: '500 (Medium)',
    tracking: '-0.005em',
    usage: 'Global header and footer navigation links',
  },
  {
    variant: 'button',
    label: 'Button Action',
    sizeSpec: '0.875rem (14px)',
    lineHeight: '1.2',
    weight: '600 (SemiBold)',
    tracking: '-0.005em',
    usage: 'Interactive buttons and primary action triggers (single-line)',
  },
  {
    variant: 'code',
    label: 'Code / Technical',
    sizeSpec: '0.8125rem (13px)',
    lineHeight: '1.5',
    weight: '400 (Regular)',
    tracking: '0em',
    usage: 'Technical identifiers, architectural coordinates, and tabular numerals',
  },
];

export const SPACING_TOKENS: SpacingToken[] = [
  { token: 'space-1', cssVar: '--space-1', rem: '0.25rem', px: 4, usage: 'Micro inline icon/text offset' },
  { token: 'space-2', cssVar: '--space-2', rem: '0.5rem', px: 8, usage: 'Tight inline element grouping' },
  { token: 'space-3', cssVar: '--space-3', rem: '0.75rem', px: 12, usage: 'Compact control vertical padding' },
  { token: 'space-4', cssVar: '--space-4', rem: '1rem', px: 16, usage: 'Base unit, mobile container padding' },
  { token: 'space-6', cssVar: '--space-6', rem: '1.5rem', px: 24, usage: 'Standard card internal padding (mobile/tablet)' },
  { token: 'space-8', cssVar: '--space-8', rem: '2rem', px: 32, usage: 'Desktop card padding & grid gap' },
  { token: 'space-12', cssVar: '--space-12', rem: '3rem', px: 48, usage: 'Subsection separation & header-to-grid gap' },
  { token: 'space-16', cssVar: '--space-16', rem: '4rem', px: 64, usage: 'Compact section vertical rhythm' },
  { token: 'space-24', cssVar: '--space-24', rem: '6rem', px: 96, usage: 'Standard desktop section vertical padding' },
  { token: 'space-32', cssVar: '--space-32', rem: '8rem', px: 128, usage: 'Generous architectural hero/feature vertical spacing' },
];

export const BREAKPOINT_SPECS = [
  {
    name: 'Mobile',
    range: '< 768px (default)',
    columns: '1 column',
    containerPadding: '16px – 24px (px-4 sm:px-6)',
    behavior: 'Full-width stacked cards, accessible slide-over navigation drawer, minimum 44px touch targets, fluid clamp() typography.',
  },
  {
    name: 'Tablet',
    range: '768px – 1023px (md)',
    columns: '2 columns',
    containerPadding: '32px (md:px-8)',
    behavior: '2-column adaptive grids, balanced horizontal header actions, expanded whitespace.',
  },
  {
    name: 'Standard Desktop',
    range: '1024px – 1279px (lg)',
    columns: '3 columns / Asymmetric 12-col',
    containerPadding: '48px (lg:px-12)',
    behavior: 'Full 3-zone top bar navigation, split-column page headers, structured multi-column architectural grids.',
  },
  {
    name: 'Large Desktop',
    range: '>= 1280px (xl / 1440px baseline)',
    columns: '3–4 columns / 1216px–1344px max container',
    containerPadding: '48px – 64px',
    behavior: 'Generous architectural margins, maximum 65–75ch prose measure preserved, high-precision alignment.',
  },
];
