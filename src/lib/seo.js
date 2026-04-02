import { siteConfig } from '../data/siteContent';

import { useEffect } from 'react';

const DEFAULT_IMAGE = `${siteConfig.baseUrl}/favicon.png`;

function ensureMeta(selector, attributes) {
  let node = document.head.querySelector(selector);
  if (!node) {
    node = document.createElement('meta');
    document.head.appendChild(node);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    node.setAttribute(key, value);
  });
}

function ensureLink(selector, attributes) {
  let node = document.head.querySelector(selector);
  if (!node) {
    node = document.createElement('link');
    document.head.appendChild(node);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    node.setAttribute(key, value);
  });
}

function ensureJsonLd(schema) {
  const existing = document.head.querySelector('#dynamic-jsonld');

  if (!schema) {
    existing?.remove();
    return;
  }

  const script = existing ?? document.createElement('script');
  script.id = 'dynamic-jsonld';
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(schema);

  if (!existing) {
    document.head.appendChild(script);
  }
}

export function createAbsoluteUrl(path = '/') {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${siteConfig.baseUrl}${normalized}`;
}

export function usePageMetadata({
  title,
  description,
  path = '/',
  keywords = [],
  image = DEFAULT_IMAGE,
  robots = 'index, follow',
  ogType = 'website',
  schema,
}) {
  useEffect(() => {
    const absoluteUrl = createAbsoluteUrl(path);
    document.title = title;

    ensureMeta('meta[name="description"]', {
      name: 'description',
      content: description,
    });
    ensureMeta('meta[name="keywords"]', {
      name: 'keywords',
      content: keywords.join(', '),
    });
    ensureMeta('meta[name="title"]', {
      name: 'title',
      content: title,
    });
    ensureMeta('meta[name="robots"]', {
      name: 'robots',
      content: robots,
    });
    ensureMeta('meta[property="og:type"]', {
      property: 'og:type',
      content: ogType,
    });
    ensureMeta('meta[property="og:title"]', {
      property: 'og:title',
      content: title,
    });
    ensureMeta('meta[property="og:description"]', {
      property: 'og:description',
      content: description,
    });
    ensureMeta('meta[property="og:url"]', {
      property: 'og:url',
      content: absoluteUrl,
    });
    ensureMeta('meta[property="og:image"]', {
      property: 'og:image',
      content: image,
    });
    ensureMeta('meta[property="og:site_name"]', {
      property: 'og:site_name',
      content: `${siteConfig.name} Portfolio`,
    });
    ensureMeta('meta[name="twitter:card"]', {
      name: 'twitter:card',
      content: 'summary_large_image',
    });
    ensureMeta('meta[name="twitter:title"]', {
      name: 'twitter:title',
      content: title,
    });
    ensureMeta('meta[name="twitter:description"]', {
      name: 'twitter:description',
      content: description,
    });
    ensureMeta('meta[name="twitter:url"]', {
      name: 'twitter:url',
      content: absoluteUrl,
    });
    ensureMeta('meta[name="twitter:image"]', {
      name: 'twitter:image',
      content: image,
    });
    ensureLink('link[rel="canonical"]', {
      rel: 'canonical',
      href: absoluteUrl,
    });
    ensureJsonLd(schema);
  }, [description, image, keywords, ogType, path, robots, schema, title]);
}
