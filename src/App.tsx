/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { RouterProvider, useRouter } from './router/RouterContext';
import { ThemeProvider } from './context/ThemeContext';
import { SiteLayout } from './components/layout/SiteLayout';
import {
  HomePage,
  AboutPage,
  TechnologyPage,
  ProductsPage,
  ProductDetailPlaceholderPage,
  PeoplePage,
  CareersPage,
  JobDetailPage,
  NewsPage,
  NewsArticleDetailPage,
  ContactPage,
  HomeFoundationPage,
} from './pages';
import { PageHeader, Section, Button, Card, Text } from './components/ui';
import { SEO } from './components/seo/SEO';

const RouteDispatcher: React.FC = () => {
  const { currentPath } = useRouter();

  if (currentPath === '/' || currentPath === '') {
    return <HomePage />;
  }

  if (currentPath === '/about') {
    return <AboutPage />;
  }

  if (currentPath === '/technology') {
    return <TechnologyPage />;
  }

  if (currentPath === '/products') {
    return <ProductsPage />;
  }

  if (currentPath.startsWith('/products/')) {
    const slug = currentPath.replace('/products/', '');
    return <ProductDetailPlaceholderPage slug={slug} />;
  }

  if (currentPath === '/people') {
    return <PeoplePage />;
  }

  if (currentPath === '/careers') {
    return <CareersPage />;
  }

  if (currentPath.startsWith('/careers/')) {
    const slug = currentPath.replace('/careers/', '');
    return <JobDetailPage slug={slug} />;
  }

  if (currentPath === '/news') {
    return <NewsPage />;
  }

  if (currentPath.startsWith('/news/')) {
    const slug = currentPath.replace('/news/', '');
    return <NewsArticleDetailPage slug={slug} />;
  }

  if (currentPath === '/contact') {
    return <ContactPage />;
  }

  if (currentPath === '/foundation') {
    return <HomeFoundationPage />;
  }

  if (currentPath === '/privacy' || currentPath === '/terms') {
    const isPrivacy = currentPath === '/privacy';
    return (
      <>
        <SEO
          title={`${isPrivacy ? 'Privacy Policy' : 'Terms of Use'} — Piqqudim`}
          description={`Official corporate ${isPrivacy ? 'privacy policy' : 'terms of use'} route for Piqqudim.`}
          canonicalPath={currentPath}
        />
        <PageHeader
          kicker="Legal & Governance"
          title={isPrivacy ? 'Privacy Policy' : 'Terms of Use'}
          description="Architectural route established for official Piqqudim corporate legal documentation."
          actions={
            <Button variant="outline" size="sm" href="/">
              ← Return to Homepage
            </Button>
          }
        />
        <Section surface="primary" spacing="md">
          <Card surface="secondary" padding="md" className="max-w-[48rem]">
            <Text variant="body" tone="secondary">
              [Reserved Legal Documentation Slot — Official corporate {isPrivacy ? 'Privacy Policy' : 'Terms of Use'} text will be provided in a subsequent phase.]
            </Text>
          </Card>
        </Section>
      </>
    );
  }

  return (
    <>
      <SEO
        title="Route Not Found — Piqqudim"
        description="The requested route does not exist on the Piqqudim corporate website."
      />
      <PageHeader
        kicker="404 · Route Not Found"
        title="The requested page could not be located."
        description={`No architectural route is registered for "${currentPath}". Return to the Piqqudim corporate homepage.`}
        actions={
          <Button variant="primary" size="md" href="/">
            Return to Homepage
          </Button>
        }
      />
      <Section surface="primary" spacing="sm">
        <div />
      </Section>
    </>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <RouterProvider>
        <SiteLayout>
          <RouteDispatcher />
        </SiteLayout>
      </RouterProvider>
    </ThemeProvider>
  );
}

