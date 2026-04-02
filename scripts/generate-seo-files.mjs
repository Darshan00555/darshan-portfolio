import { writeFile } from 'node:fs/promises';

import blogs from '../src/data/blogs.js';
import { siteConfig } from '../src/data/siteContent.js';

const baseUrl = siteConfig.baseUrl.replace(/\/+$/, '');
const buildDate = new Date().toISOString().split('T')[0];

const staticRoutes = [
  { path: '/', priority: '1.0', changefreq: 'weekly', lastmod: buildDate },
  { path: '/projects', priority: '0.9', changefreq: 'weekly', lastmod: buildDate },
  { path: '/blog', priority: '0.9', changefreq: 'weekly', lastmod: buildDate },
  { path: '/about', priority: '0.8', changefreq: 'monthly', lastmod: buildDate },
  { path: '/resume', priority: '0.7', changefreq: 'monthly', lastmod: buildDate },
  { path: '/contact', priority: '0.7', changefreq: 'monthly', lastmod: buildDate },
];

const blogRoutes = blogs.map((blog) => ({
  path: `/blog/${blog.slug}`,
  priority: blog.tags.includes('SEO') || blog.tags.includes('Technical SEO') ? '0.8' : '0.7',
  changefreq: 'monthly',
  lastmod: blog.date,
}));

const allRoutes = [...staticRoutes, ...blogRoutes];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes
  .map(
    (route) => `  <url>
    <loc>${baseUrl}${route.path}</loc>
    <lastmod>${route.lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

const robots = `User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml
`;

await writeFile(new URL('../public/sitemap.xml', import.meta.url), sitemap, 'utf8');
await writeFile(new URL('../public/robots.txt', import.meta.url), robots, 'utf8');

console.log(`Generated sitemap and robots for ${baseUrl}`);
