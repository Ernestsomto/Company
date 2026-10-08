import React, { useState } from 'react';
import { ArrowDown, ArrowRight } from 'lucide-react';
import {
  TECHNOLOGY_AREAS,
  TECHNICAL_DEPTH_LAYERS,
  ENGINEERING_PHILOSOPHY_ITEMS,
  TECHNOLOGY_STACK_CATEGORIES,
  TECHNOLOGY_TO_PRODUCTS_PIPELINE,
  UMBRA_ENGINE_FOCUS_AREAS,
  RESEARCH_EXPLORATION_THEMES,
} from '../data/technologyContent';
import { SEO } from '../components/seo/SEO';
import {
  Section,
  Grid,
  Heading,
  Text,
  Button,
  Link,
  Badge,
  Card,
  Divider,
} from '../components/ui';

type StackFilter = 'all' | 'languages' | 'graphics' | 'engines' | 'tools';

/**
 * Official Piqqudim Technology Page (Phase 4 — /technology)
 * Answers: What areas of technology does Piqqudim work in?
 * Presents technology as connected capabilities and engineering disciplines
 * rather than a list of buzzwords.
 */
export const TechnologyPage: React.FC = () => {
  const [selectedStackCategory, setSelectedStackCategory] = useState<StackFilter>('all');

  const visibleStackCategories =
    selectedStackCategory === 'all'
      ? TECHNOLOGY_STACK_CATEGORIES
      : TECHNOLOGY_STACK_CATEGORIES.filter((cat) => cat.id === selectedStackCategory);

  return (
    <>
      <SEO
        title="Technology | Piqqudim"
        description="Explore Piqqudim’s technology and engineering work across software, graphics, game technology, 3D technology, developer technology, platforms, and intelligent systems."
        canonicalPath="/technology"
      />

      {/* =====================================================================
          1. TECHNOLOGY HERO
          Eyebrow: TECHNOLOGY
          Main heading: Building the systems behind what comes next.
          ===================================================================== */}
      <Section id="technology-hero" surface="grid" spacing="lg" borderBottom>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <div className="lg:col-span-8 space-y-5">
            <Badge tone="accent" prefix="Disciplines & Systems">
              Technology
            </Badge>

            <Heading as="h1" variant="display">
              Building the systems behind what comes next.
            </Heading>

            <Text variant="body-lg" tone="secondary" measure>
              Piqqudim works across software engineering, real-time graphics, interactive and game
              technology, 3D systems, developer tools, digital platforms, and intelligent systems.
              We approach these areas as connected disciplines that build upon one another.
            </Text>
          </div>

          {/* Abstract Systems Architecture Matrix */}
          <div className="lg:col-span-4">
            <Card surface="secondary" padding="md" className="space-y-4">
              <div className="flex items-center justify-between border-b border-[var(--color-border)] pb-3">
                <Text as="span" variant="code" tone="accent" className="font-medium">
                  SYSTEMS · ARCHITECTURE
                </Text>
                <Text as="span" variant="code" tone="muted">
                  06 DOMAINS
                </Text>
              </div>

              <div className="space-y-2.5">
                {TECHNOLOGY_AREAS.map((area) => (
                  <a
                    key={area.index}
                    href={`#area-${area.index}`}
                    className="flex items-center justify-between py-1.5 text-xs border-b border-[var(--color-border)] last:border-b-0 text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
                  >
                    <span className="font-medium text-[var(--color-text-primary)]">
                      {area.name}
                    </span>
                    <span className="font-mono text-[var(--color-accent)]">{area.index}</span>
                  </a>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* =====================================================================
          2. TECHNOLOGY AREAS
          Primary Technology section presenting the 6 major engineering areas
          ===================================================================== */}
      <Section id="technology-areas" surface="primary" spacing="lg" borderBottom>
        <div className="max-w-[48rem] space-y-3 mb-14">
          <Badge tone="accent" prefix="01">
            Core Disciplines
          </Badge>
          <Heading as="h2" variant="h1">
            Areas of technology we build and explore.
          </Heading>
          <Text variant="body" tone="secondary" measure>
            Each discipline represents an active area of engineering, systems design, and ongoing
            development at Piqqudim.
          </Text>
        </div>

        <Grid cols={2} gap="md">
          {TECHNOLOGY_AREAS.map((area) => (
            <Card
              key={area.index}
              id={`area-${area.index}`}
              as="article"
              surface="secondary"
              padding="lg"
              interactive
              className="flex flex-col justify-between space-y-8"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs text-[var(--color-text-muted)]">
                  <span className="font-mono font-semibold text-[var(--color-accent)]">
                    {area.index}.
                  </span>
                  <span>{area.subtitle}</span>
                </div>

                <Heading as="h3" variant="h2">
                  {area.name}
                </Heading>

                <Text variant="body" tone="secondary" measure>
                  {area.description}
                </Text>
              </div>

              {/* Unboxed Focus Topics (Zero-Pill Metadata Discipline) */}
              <div className="pt-5 border-t border-[var(--color-border)] space-y-2">
                <Text as="span" variant="label" tone="muted" className="block">
                  Focus Areas
                </Text>
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[var(--color-text-primary)] font-medium">
                  {area.focusTopics.map((topic, idx) => (
                    <React.Fragment key={topic}>
                      <span>{topic}</span>
                      {idx < area.focusTopics.length - 1 ? (
                        <span
                          aria-hidden="true"
                          className="text-[var(--color-text-muted)] font-normal"
                        >
                          ·
                        </span>
                      ) : null}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </Grid>
      </Section>

      {/* =====================================================================
          3. TECHNICAL DEPTH
          Conceptual model: From the interface to the system underneath
          ===================================================================== */}
      <Section id="technical-depth" surface="elevated" spacing="lg" borderBottom>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <div className="lg:col-span-5 space-y-5">
            <Badge tone="accent" prefix="02">
              Technical Depth
            </Badge>

            <Heading as="h2" variant="h1" tone="primary">
              From the interface to the system underneath.
            </Heading>

            <Text variant="body" tone="primary" measure>
              Software does not exist on a single layer. How an application feels at the surface is
              shaped by the systems, runtimes, rendering pipelines, and hardware interactions
              beneath it.
            </Text>

            <Text variant="small" tone="secondary" measure>
              This conceptual stack illustrates the layers of computing that Piqqudim studies and
              builds across—not a claim that every individual project spans every layer
              simultaneously.
            </Text>
          </div>

          {/* 6-Layer Vertical Computing Stack Diagram */}
          <div className="lg:col-span-7">
            <ol
              aria-label="Conceptual model of computing layers from User Experience down to Hardware"
              className="space-y-2.5"
            >
              {TECHNICAL_DEPTH_LAYERS.map((layer, idx) => {
                const isLast = idx === TECHNICAL_DEPTH_LAYERS.length - 1;
                return (
                  <React.Fragment key={layer.layerNumber}>
                    <li className="p-5 md:p-6 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-bg-primary)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="space-y-1 sm:min-w-[14rem]">
                        <div className="flex items-center gap-2 text-xs">
                          <span className="font-mono text-[var(--color-accent)] font-semibold">
                            Layer {layer.layerNumber}
                          </span>
                          <span aria-hidden="true" className="text-[var(--color-text-muted)]">
                            ·
                          </span>
                          <span className="text-[var(--color-text-muted)]">{layer.domain}</span>
                        </div>
                        <Heading as="h3" variant="h4" tone="primary">
                          {layer.name}
                        </Heading>
                      </div>

                      <Text
                        variant="small"
                        tone="secondary"
                        className="sm:max-w-[26rem]"
                      >
                        {layer.description}
                      </Text>
                    </li>

                    {!isLast && (
                      <li aria-hidden="true" className="flex justify-center">
                        <ArrowDown className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                      </li>
                    )}
                  </React.Fragment>
                );
              })}
            </ol>
          </div>
        </div>
      </Section>

      {/* =====================================================================
          4. ENGINEERING PHILOSOPHY
          How Piqqudim approaches technical problems
          ===================================================================== */}
      <Section id="engineering-philosophy" surface="primary" spacing="lg" borderBottom>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <div className="lg:col-span-4 space-y-3">
            <Badge tone="accent" prefix="03">
              Engineering Philosophy
            </Badge>
            <Heading as="h2" variant="h2">
              How we approach technical problems.
            </Heading>
            <Text variant="body" tone="secondary">
              Sound engineering requires discipline in how systems are designed, measured, and
              maintained over time.
            </Text>
          </div>

          <div className="lg:col-span-8 divide-y divide-[var(--color-border)] border-t border-b border-[var(--color-border)]">
            {ENGINEERING_PHILOSOPHY_ITEMS.map((item) => (
              <div
                key={item.index}
                className="py-6 flex flex-col sm:flex-row sm:items-baseline justify-between gap-4"
              >
                <div className="flex items-baseline gap-3 min-w-[16rem]">
                  <span className="font-mono text-xs font-semibold text-[var(--color-accent)]">
                    {item.index}.
                  </span>
                  <Heading as="h3" variant="h4">
                    {item.title}
                  </Heading>
                </div>
                <Text variant="body" tone="secondary" className="sm:max-w-[30rem]">
                  {item.description}
                </Text>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* =====================================================================
          5. TECHNOLOGY STACK / TOOLS
          Editable data-driven registry with interactive category filtering
          ===================================================================== */}
      <Section id="technology-tools" surface="secondary" spacing="lg" borderBottom>
        <div className="space-y-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-[46rem] space-y-3">
              <Badge tone="accent" prefix="04">
                Languages, APIs & Tooling
              </Badge>
              <Heading as="h2" variant="h2">
                Technologies and tools in our work.
              </Heading>
              <Text variant="body" tone="secondary" measure>
                A structured overview of programming languages, graphics interfaces, runtimes, and
                development tools relevant to Piqqudim’s engineering and exploration.
              </Text>
            </div>

            {/* Interactive Category Filter Controls (Functional Buttons) */}
            <div
              role="tablist"
              aria-label="Filter technology stack categories"
              className="inline-flex flex-wrap items-center gap-1 p-1 bg-[var(--color-bg-elevated)] border border-[var(--color-border)] rounded-[var(--radius-md)] shrink-0"
            >
              {(
                [
                  { id: 'all', label: 'All Categories' },
                  { id: 'languages', label: 'Languages' },
                  { id: 'graphics', label: 'Graphics' },
                  { id: 'engines', label: 'Engines / Runtime' },
                  { id: 'tools', label: 'Tools' },
                ] as const
              ).map((tab) => {
                const active = selectedStackCategory === tab.id;
                return (
                  <button
                    key={tab.id}
                    role="tab"
                    type="button"
                    aria-selected={active}
                    onClick={() => setSelectedStackCategory(tab.id)}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-[var(--radius-sm)] transition-colors whitespace-nowrap cursor-pointer ${
                      active
                        ? 'bg-[var(--color-accent)] text-[var(--color-button-text)]'
                        : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          <Grid cols={selectedStackCategory === 'all' ? 2 : 1} gap="md">
            {visibleStackCategories.map((category) => (
              <Card key={category.id} surface="primary" padding="md" className="space-y-5">
                <div className="space-y-1 border-b border-[var(--color-border)] pb-4">
                  <Heading as="h3" variant="h3">
                    {category.name}
                  </Heading>
                  <Text variant="small" tone="secondary">
                    {category.summary}
                  </Text>
                </div>

                <dl className="divide-y divide-[var(--color-border)]">
                  {category.items.map((item) => (
                    <div
                      key={item.name}
                      className="py-3 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2"
                    >
                      <dt className="font-mono text-sm font-semibold text-[var(--color-text-primary)]">
                        {item.name}
                      </dt>
                      <dd className="text-xs text-[var(--color-text-secondary)] sm:text-right">
                        {item.context}
                      </dd>
                    </div>
                  ))}
                </dl>
              </Card>
            ))}
          </Grid>

          <Text variant="small" tone="muted">
            Note: Technologies listed above reflect tools, languages, and APIs used across internal
            development, research, and engineering workflows at Piqqudim, rather than standalone
            commercial product claims.
          </Text>
        </div>
      </Section>

      {/* =====================================================================
          6. PIQQUDIM TECHNOLOGY ECOSYSTEM
          How technology becomes products:
          Research & Exploration → Engineering → Technology → Platforms & Tools → Products → Experiences
          ===================================================================== */}
      <Section id="technology-ecosystem" surface="primary" spacing="lg" borderBottom>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-[46rem] space-y-3">
            <Badge tone="accent" prefix="05">
              Technology Ecosystem
            </Badge>
            <Heading as="h2" variant="h2">
              How our technology becomes products.
            </Heading>
            <Text variant="body" tone="secondary" measure>
              At Piqqudim, technical exploration and core engineering feed directly into the tools,
              engines, platforms, software products, and interactive experiences we build.
            </Text>
          </div>

          <Link href="/products" variant="accent" className="text-sm font-semibold shrink-0">
            <span>Explore our products →</span>
          </Link>
        </div>

        {/* 6-Stage Progression Pipeline */}
        <ol
          aria-label="How Piqqudim technology becomes products across six stages"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {TECHNOLOGY_TO_PRODUCTS_PIPELINE.map((stage) => (
            <li
              key={stage.step}
              className="p-6 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-bg-secondary)] flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono font-semibold text-[var(--color-accent)]">
                    Stage {stage.step}
                  </span>
                  <ArrowRight
                    className="w-3.5 h-3.5 text-[var(--color-text-muted)]"
                    aria-hidden="true"
                  />
                </div>
                <Heading as="h3" variant="h4">
                  {stage.name}
                </Heading>
                <Text variant="small" tone="secondary">
                  {stage.description}
                </Text>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      {/* =====================================================================
          7. UMBRA ENGINE
          Dedicated, restrained spotlight on Umbra Engine as a technology example
          ===================================================================== */}
      <Section id="umbra-engine" surface="secondary" spacing="lg" borderBottom>
        <Card surface="primary" padding="lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex flex-wrap items-center gap-2 text-xs text-[var(--color-text-muted)]">
                <span className="font-semibold text-[var(--color-accent)]">
                  06 · Ecosystem Technology in Development
                </span>
                <span aria-hidden="true">·</span>
                <span>Built by Piqqudim</span>
              </div>

              <Heading as="h2" variant="h2">
                Umbra Engine
              </Heading>

              <Text variant="body" tone="secondary" measure>
                Umbra Engine is an important example of Piqqudim’s technology work—bringing together
                our focus on real-time rendering, engine architecture, simulation, and interactive
                systems within a unified internal codebase.
              </Text>

              <Text variant="small" tone="secondary" measure>
                Developed within the Piqqudim ecosystem, Umbra Engine serves as both a technical
                foundation for interactive software and an active environment for graphics and
                systems engineering.
              </Text>

              <div className="pt-2">
                <Link href="/products" variant="accent" className="text-sm font-semibold">
                  <span>Explore Umbra Engine →</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 p-6 rounded-[var(--radius-md)] bg-[var(--color-bg-secondary)] border border-[var(--color-border)] space-y-4">
              <Text as="span" variant="label" tone="accent" className="block">
                Umbra Engine Technical Areas
              </Text>
              <ul className="space-y-2.5">
                {UMBRA_ENGINE_FOCUS_AREAS.map((focus, idx) => (
                  <li
                    key={focus}
                    className="flex items-center justify-between text-sm text-[var(--color-text-primary)] border-b border-[var(--color-border)] last:border-b-0 pb-2 last:pb-0"
                  >
                    <span>{focus}</span>
                    <span className="font-mono text-xs text-[var(--color-text-muted)]">
                      0{idx + 1}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Card>
      </Section>

      {/* =====================================================================
          8. TECHNICAL RESEARCH & EXPLORATION
          Ongoing experimentation and future technology development
          ===================================================================== */}
      <Section id="research-and-exploration" surface="primary" spacing="lg" borderBottom>
        <div className="max-w-[48rem] space-y-3 mb-12">
          <Badge tone="accent" prefix="07">
            Exploration & Experimentation
          </Badge>
          <Heading as="h2" variant="h2">
            Areas of ongoing technical exploration.
          </Heading>
          <Text variant="body" tone="secondary" measure>
            Piqqudim is not limited to today’s products. We continuously explore difficult technical
            questions across rendering, compilers, 3D geometry, and adaptive software to expand what
            we can build next.
          </Text>
        </div>

        <Grid cols={3} gap="md">
          {RESEARCH_EXPLORATION_THEMES.map((theme) => (
            <Card key={theme.index} surface="secondary" padding="md" className="space-y-2.5">
              <div className="font-mono text-xs font-medium text-[var(--color-accent)]">
                {theme.index}.
              </div>
              <Heading as="h3" variant="h4">
                {theme.name}
              </Heading>
              <Text variant="small" tone="secondary">
                {theme.description}
              </Text>
            </Card>
          ))}
        </Grid>
      </Section>

      {/* =====================================================================
          9. TECHNOLOGY IS A FOUNDATION (Closing Section)
          Transitions naturally into the Products page
          ===================================================================== */}
      <Section id="technology-closing" surface="grid" spacing="lg">
        <div className="max-w-[50rem] space-y-6">
          <Badge tone="accent" prefix="08">
            From Systems to Products
          </Badge>

          <Heading as="h2" variant="h1">
            Technology is our foundation, not the final destination.
          </Heading>

          <Text variant="body-lg" tone="secondary" measure>
            The systems, engines, and tools we engineer exist to make meaningful products,
            platforms, and interactive experiences possible.
          </Text>

          <div className="pt-2 flex flex-wrap items-center gap-3.5">
            <Button
              variant="primary"
              size="lg"
              href="/products"
              iconRight={<ArrowRight className="w-4 h-4" aria-hidden="true" />}
            >
              Explore Products
            </Button>
            <Button variant="outline" size="lg" href="/about">
              About Piqqudim
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
};
