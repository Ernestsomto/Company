/**
 * Structured Content & Editable Registry for the Piqqudim Technology Page (Phase 4 — /technology)
 * Separates technical domain specifications, stack registries, and conceptual models from presentation.
 * Strict adherence to Content Accuracy rules: no invented benchmarks, patents, or commercial deployment claims.
 */

export interface TechnologyAreaSpec {
  index: string;
  name: string;
  subtitle: string;
  description: string;
  focusTopics: string[];
}

export interface TechnicalLayerSpec {
  layerNumber: string;
  name: string;
  domain: string;
  description: string;
}

export interface EngineeringPrincipleSpec {
  index: string;
  title: string;
  description: string;
}

export interface TechnologyStackCategory {
  id: 'languages' | 'graphics' | 'engines' | 'tools';
  name: string;
  summary: string;
  items: {
    name: string;
    context: string;
  }[];
}

export interface EcosystemStageSpec {
  step: string;
  name: string;
  description: string;
}

export interface ExplorationThemeSpec {
  index: string;
  name: string;
  description: string;
}

export const TECHNOLOGY_AREAS: TechnologyAreaSpec[] = [
  {
    index: '01',
    name: 'Software Engineering',
    subtitle: 'Systems, Infrastructure & Applications',
    description:
      'Building software systems, core infrastructure, applications, and foundational tools designed for long-term reliability and clarity.',
    focusTopics: [
      'Systems',
      'Architecture',
      'Performance',
      'Maintainability',
      'Developer experience',
    ],
  },
  {
    index: '02',
    name: 'Graphics & Rendering',
    subtitle: 'Real-Time Graphics & Visual Computing',
    description:
      'Technology for real-time graphics and visual computing, focusing on how scenes, lighting, and visual data are processed and rendered.',
    focusTopics: [
      'Rendering',
      'Graphics APIs',
      'GPU programming',
      'Real-time rendering',
      'Shaders',
      'Performance analysis',
      'Rendering architecture',
    ],
  },
  {
    index: '03',
    name: 'Game Technology',
    subtitle: 'Interactive Systems & Runtime Architecture',
    description:
      'Technology for interactive experiences and games, encompassing the runtime systems and simulation loops that power responsive worlds.',
    focusTopics: [
      'Game systems',
      'Gameplay technology',
      'Engine architecture',
      'Simulation',
      'Real-time systems',
      'Interactive environments',
    ],
  },
  {
    index: '04',
    name: '3D Technology',
    subtitle: 'Spatial Representation & Digital Environments',
    description:
      'Technology for creating, processing, representing, and interacting with 3D content across design and real-time environments.',
    focusTopics: [
      '3D rendering',
      'Geometry',
      'Visualization',
      'Asset processing',
      'Digital environments',
      '3D workflows',
    ],
  },
  {
    index: '05',
    name: 'Developer Technology',
    subtitle: 'Languages, Tooling & Engineering Workflows',
    description:
      'Tools and systems designed to help developers build, inspect, and maintain complex software with greater precision.',
    focusTopics: [
      'Developer tools',
      'Programming environments',
      'Build systems',
      'Debugging',
      'Diagnostics',
      'Developer workflows',
    ],
  },
  {
    index: '06',
    name: 'Intelligent Systems',
    subtitle: 'Adaptive, Analytical & Data-Driven Systems',
    description:
      'Technology involving systems that can analyze information, adapt behavior, automate workflows, or assist users and developers.',
    focusTopics: [
      'AI-assisted systems',
      'Intelligent diagnostics',
      'Automation',
      'Data-driven systems',
      'Adaptive technology',
    ],
  },
];

export const TECHNICAL_DEPTH_LAYERS: TechnicalLayerSpec[] = [
  {
    layerNumber: '01',
    name: 'User Experience',
    domain: 'Human Interface & Interaction',
    description:
      'Responsive interfaces, visual clarity, and workflows where people interact directly with software and creative tools.',
  },
  {
    layerNumber: '02',
    name: 'Applications',
    domain: 'Products, Platforms & Environments',
    description:
      'End-user software, developer environments, distribution platforms, and interactive experiences.',
  },
  {
    layerNumber: '03',
    name: 'Systems',
    domain: 'Architecture, Compilers & Toolchains',
    description:
      'Core software architecture, programming languages, build systems, diagnostics, and modular services.',
  },
  {
    layerNumber: '04',
    name: 'Engine / Runtime',
    domain: 'Simulation, Scene Management & Execution',
    description:
      'Real-time execution loops, entity and scene representations, asset pipelines, and runtime state management.',
  },
  {
    layerNumber: '05',
    name: 'Graphics / Compute',
    domain: 'Rendering Pipelines, Shaders & GPU Workloads',
    description:
      'Real-time rendering passes, shader compilation, geometry processing, and parallel compute orchestration.',
  },
  {
    layerNumber: '06',
    name: 'Hardware',
    domain: 'Memory Layout, CPU/GPU Execution & Devices',
    description:
      'Understanding how instructions, memory hierarchies, and graphics hardware execute the systems built above them.',
  },
];

export const ENGINEERING_PHILOSOPHY_ITEMS: EngineeringPrincipleSpec[] = [
  {
    index: '01',
    title: 'Performance matters',
    description: 'Systems should be designed with real-world performance in mind.',
  },
  {
    index: '02',
    title: 'Understand the foundation',
    description:
      'Learn how the underlying systems work instead of treating them as black boxes.',
  },
  {
    index: '03',
    title: 'Build for change',
    description:
      'Architecture should be capable of evolving as products and requirements grow.',
  },
  {
    index: '04',
    title: 'Measure',
    description:
      'Use profiling, diagnostics, telemetry, and evidence to understand system behavior.',
  },
  {
    index: '05',
    title: 'Make complexity manageable',
    description:
      'Good engineering turns difficult systems into understandable, maintainable components.',
  },
];

/**
 * Editable Technology Stack & Tools Registry
 * Designed so technologies can be added, refined, or removed without altering page layout.
 */
export const TECHNOLOGY_STACK_CATEGORIES: TechnologyStackCategory[] = [
  {
    id: 'languages',
    name: 'Languages',
    summary: 'Systems, application, and internal language technologies used across engineering projects.',
    items: [
      { name: 'C++', context: 'Systems, engines, and performance-critical architecture' },
      { name: 'C', context: 'Low-level systems and foundational interoperability' },
      { name: 'C#', context: 'Tooling, runtime scripting, and application development' },
      { name: 'JavaScript / TypeScript', context: 'Digital platforms, web applications, and developer interfaces' },
      { name: 'P Language', context: 'Internal language and compiler exploration within Piqqudim' },
    ],
  },
  {
    id: 'graphics',
    name: 'Graphics',
    summary: 'Graphics interfaces, shader programming, and GPU compute technologies explored and utilized.',
    items: [
      { name: 'Direct3D', context: 'Graphics API & rendering pipeline integration' },
      { name: 'Vulkan', context: 'Explicit low-overhead graphics and compute architecture' },
      { name: 'OpenGL', context: 'Cross-platform graphics and visualization foundations' },
      { name: 'Shaders', context: 'Programmable shading pipelines and material computation' },
      { name: 'GPU Programming', context: 'Hardware-accelerated rendering and parallel workloads' },
    ],
  },
  {
    id: 'engines',
    name: 'Engines / Runtime',
    summary: 'Internal and external runtime environments for interactive experiences and simulation.',
    items: [
      { name: 'Umbra Engine', context: 'Internal engine and rendering technology in development at Piqqudim' },
      { name: 'Unreal Engine', context: 'Interactive development and real-time production workflows' },
      { name: 'Modular Runtimes', context: 'Custom application and simulation execution layers' },
    ],
  },
  {
    id: 'tools',
    name: 'Tools / Infrastructure',
    summary: 'Build automation, version control, profiling, and diagnostic workflows.',
    items: [
      { name: 'CMake', context: 'Cross-platform C/C++ build configuration and automation' },
      { name: 'Git', context: 'Source control and collaborative engineering workflows' },
      { name: 'Profilers', context: 'CPU/GPU frame analysis, memory inspection, and bottleneck measurement' },
      { name: 'Debugging Tools', context: 'Runtime inspection, crash diagnostics, and graphics frame debugging' },
      { name: 'Development Tooling', context: 'Internal compilers, asset processors, and workflow utilities' },
    ],
  },
];

export const TECHNOLOGY_TO_PRODUCTS_PIPELINE: EcosystemStageSpec[] = [
  {
    step: '01',
    name: 'Research & Exploration',
    description: 'Investigating fundamental problems in rendering, systems, languages, and computation.',
  },
  {
    step: '02',
    name: 'Engineering',
    description: 'Designing and implementing clean, testable architectures from first principles.',
  },
  {
    step: '03',
    name: 'Technology',
    description: 'Consolidating working code into reusable core libraries, runtimes, and subsystems.',
  },
  {
    step: '04',
    name: 'Platforms & Tools',
    description: 'Packaging core capabilities into engines, languages, and authoring environments.',
  },
  {
    step: '05',
    name: 'Products',
    description: 'Delivering focused software products and applications built on our own foundations.',
  },
  {
    step: '06',
    name: 'Experiences',
    description: 'Enabling interactive worlds, games, and productive workflows for users and developers.',
  },
];

export const UMBRA_ENGINE_FOCUS_AREAS: string[] = [
  'Game technology',
  'Rendering',
  'Engine architecture',
  'Real-time systems',
  'Graphics research',
  'Intelligent / adaptive technology',
];

export const RESEARCH_EXPLORATION_THEMES: ExplorationThemeSpec[] = [
  {
    index: '01',
    name: 'Rendering Research',
    description: 'Exploring lighting, shading architectures, and efficient real-time visual representation.',
  },
  {
    index: '02',
    name: 'Engine Technology',
    description: 'Investigating modular runtime design, simulation loops, and deterministic scene systems.',
  },
  {
    index: '03',
    name: 'Developer Tooling',
    description: 'Experimenting with language design, compilers, diagnostics, and faster iteration workflows.',
  },
  {
    index: '04',
    name: 'Intelligent Systems',
    description: ' Studying how adaptive, analytical, and data-driven methods can assist software and engines.',
  },
  {
    index: '05',
    name: 'Performance Engineering',
    description: 'Analyzing memory layout, concurrency, and hardware utilization across CPU and GPU workloads.',
  },
  {
    index: '06',
    name: '3D Technology & Experimental Software',
    description: 'Prototyping procedural geometry, node-based 3D workflows, and new interactive systems.',
  },
];
