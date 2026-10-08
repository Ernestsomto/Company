import React, { useEffect } from 'react';

export interface SEOProps {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  canonicalPath?: string;
  structuredData?: Record<string, unknown>;
}

/**
 * Reusable SEO & Metadata Foundation Component
 * Dynamically synchronizes document title, meta description, Open Graph tags,
 * Twitter card properties, canonical URL, and optional page-level JSON-LD across route transitions.
 */
export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  ogTitle,
  ogDescription,
  ogImage = '/og-piqqudim.svg',
  canonicalPath,
  structuredData,
}) => {
  useEffect(() => {
    const resolvedOgTitle = ogTitle || title;
    const resolvedOgDesc = ogDescription || description;
    const origin =
      typeof window !== 'undefined' && window.location.origin
        ? window.location.origin
        : 'https://piqqudim.com';
    const path =
      canonicalPath || (typeof window !== 'undefined' ? window.location.pathname : '/');
    const canonicalUrl = `${origin}${path === '/' ? '/' : path}`;

    document.title = title;

    const setMetaTag = (selector: string, attribute: 'name' | 'property', key: string, content: string) => {
      let element = document.querySelector<HTMLMetaElement>(selector);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    setMetaTag('meta[name="description"]', 'name', 'description', description);
    setMetaTag('meta[property="og:title"]', 'property', 'og:title', resolvedOgTitle);
    setMetaTag('meta[property="og:description"]', 'property', 'og:description', resolvedOgDesc);
    setMetaTag('meta[property="og:image"]', 'property', 'og:image', ogImage);
    setMetaTag('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);
    setMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', resolvedOgTitle);
    setMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', resolvedOgDesc);

    let canonicalLink = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    const dynamicScriptId = 'piqqudim-dynamic-jsonld';
    const existingScript = document.getElementById(dynamicScriptId);
    if (structuredData) {
      const scriptEl = existingScript || document.createElement('script');
      scriptEl.id = dynamicScriptId;
      scriptEl.setAttribute('type', 'application/ld+json');
      scriptEl.textContent = JSON.stringify(structuredData);
      if (!existingScript) {
        document.head.appendChild(scriptEl);
      }
    } else if (existingScript) {
      existingScript.remove();
    }

    return () => {
      const cleanupScript = document.getElementById(dynamicScriptId);
      if (cleanupScript) {
        cleanupScript.remove();
      }
    };
  }, [title, description, ogTitle, ogDescription, ogImage, canonicalPath, structuredData]);

  return null;
};
