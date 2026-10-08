/**
 * Structured Content for the Piqqudim About / Company Page (Phase 3)
 * Adheres strictly to Content Accuracy rules: zero invented founding dates,
 * employee numbers, offices, revenue, investors, or unverified claims.
 */

export interface BeliefPrinciple {
  index: string;
  title: string;
  description: string;
}

export interface DevelopmentPractice {
  index: string;
  title: string;
  description: string;
}

export interface EcosystemLayer {
  level: string;
  title: string;
  role: string;
  description: string;
  examples: string[];
}

export const ABOUT_ENGINEERING_DOMAINS: { name: string; focus: string }[] = [
  {
    name: 'Software',
    focus: 'Core software systems, application architecture, and foundational infrastructure.',
  },
  {
    name: 'Graphics',
    focus: 'Real-time rendering pipelines, shading architectures, and visual computing.',
  },
  {
    name: 'Game Technology',
    focus: 'Runtime architectures, simulation loops, and interactive engine systems.',
  },
  {
    name: '3D Technology',
    focus: 'Spatial modeling, procedural geometry, visualization, and digital environments.',
  },
  {
    name: 'Developer Tools',
    focus: 'Programming languages, compilers, workflows, and technical authoring tools.',
  },
  {
    name: 'Digital Platforms',
    focus: 'Distribution environments, connected ecosystems, and scalable software services.',
  },
  {
    name: 'Intelligent Systems',
    focus: 'Adaptive, computational, and data-driven software capabilities.',
  },
];

export const BUILDING_TECHNOLOGY_PILLARS: { title: string; summary: string }[] = [
  {
    title: 'First-Principles Thinking',
    summary:
      'Examining problems at their root rather than defaulting to off-the-shelf abstractions.',
  },
  {
    title: 'Systems Thinking',
    summary:
      'Designing components with a clear understanding of how compilers, engines, tools, and platforms interact as a whole.',
  },
  {
    title: 'Performance & Precision',
    summary:
      'Treating efficiency, responsiveness, and resource discipline as fundamental engineering responsibilities.',
  },
  {
    title: 'Learning Through Building',
    summary:
      'Turning theoretical knowledge into durable capability by constructing real engines, languages, and software systems.',
  },
  {
    title: 'Deliberate Experimentation',
    summary:
      'Testing ideas through working prototypes and architectural exploration to discover better technical paths.',
  },
  {
    title: 'Long-Term Development',
    summary:
      'Investing in foundational codebases and architectures designed to mature and compound over years.',
  },
];

export const MISSION_ELEMENTS: { index: string; title: string; detail: string }[] = [
  {
    index: '01',
    title: 'Build useful technology',
    detail: 'Focus engineering effort on foundational systems that solve real technical and creative problems.',
  },
  {
    index: '02',
    title: 'Create products from that technology',
    detail: 'Translate core research and systems engineering into cohesive tools, platforms, and software.',
  },
  {
    index: '03',
    title: 'Provide meaningful tools and experiences',
    detail: 'Give developers, creators, and users access to capable software built with care and clarity.',
  },
  {
    index: '04',
    title: 'Build systems that grow over time',
    detail: 'Establish extensible architectures that can evolve alongside new disciplines and future ideas.',
  },
];

export const WHAT_WE_BELIEVE_PRINCIPLES: BeliefPrinciple[] = [
  {
    index: '01',
    title: 'Build deeply',
    description: 'Understand the systems underneath the technology.',
  },
  {
    index: '02',
    title: 'Think long term',
    description: 'Build foundations that can support future products and ideas.',
  },
  {
    index: '03',
    title: 'Learn by building',
    description: 'Use real projects to turn knowledge into capability.',
  },
  {
    index: '04',
    title: 'Make technology useful',
    description: 'Engineering should ultimately create something people can use.',
  },
  {
    index: '05',
    title: 'Stay curious',
    description: 'Explore difficult problems rather than avoiding them.',
  },
  {
    index: '06',
    title: 'Build for people',
    description: 'Technology exists to serve people, developers, creators, and communities.',
  },
];

export const HOW_WE_BUILD_PRACTICES: DevelopmentPractice[] = [
  {
    index: '01',
    title: 'Start with fundamentals',
    description: 'Understand the underlying problem before choosing the solution.',
  },
  {
    index: '02',
    title: 'Build systems',
    description: 'Think beyond individual features to the architecture that sustains them.',
  },
  {
    index: '03',
    title: 'Iterate',
    description: 'Build, test, learn, and improve through continuous implementation.',
  },
  {
    index: '04',
    title: 'Measure',
    description: 'Use evidence and observation to understand performance and behavior.',
  },
  {
    index: '05',
    title: 'Evolve',
    description: 'Allow technology and architecture to improve and adapt over time.',
  },
];

export const COMPANY_ECOSYSTEM_HIERARCHY: EcosystemLayer[] = [
  {
    level: 'Layer 01',
    title: 'Piqqudim',
    role: 'The Company',
    description:
      'The parent engineering institution setting the long-term direction, technical standards, and research agenda.',
    examples: ['Corporate Identity', 'Engineering Culture', 'Long-Term Research'],
  },
  {
    level: 'Layer 02',
    title: 'Technology',
    role: 'Core Engineering & Systems',
    description:
      'Foundational software architecture, real-time graphics pipelines, compilers, 3D geometry systems, and intelligent systems.',
    examples: ['Rendering Systems', 'Language & Compiler Architecture', '3D & Spatial Computing'],
  },
  {
    level: 'Layer 03',
    title: 'Platforms / Tools / Products',
    role: 'Applied Ecosystem',
    description:
      'Engines, developer tools, programming systems, and digital platforms built directly on Piqqudim’s core technology.',
    examples: ['Pi Launcher', 'Umbra Engine', 'P Language', 'NodeCAD', 'Remarket'],
  },
  {
    level: 'Layer 04',
    title: 'Experiences',
    role: 'Human & Developer Impact',
    description:
      'Interactive software, games, creative workflows, and digital experiences delivered to developers and end users.',
    examples: ['Games', 'Interactive Environments', 'Developer Workflows', 'Future Products'],
  },
];
