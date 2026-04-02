import Reveal from '../components/Reveal';
import SectionHeader from '../components/SectionHeader';
import blogs from '../data/blogs';
import { siteConfig } from '../data/siteContent';
import { usePageMetadata } from '../lib/seo';

import { Link } from 'react-router-dom';

import { BookOpenText, SearchCheck, Sparkles } from 'lucide-react';

function formatDate(date) {
  return new Date(date).toLocaleDateString('en-IN', { dateStyle: 'medium' });
}

const blogStats = [
  {
    icon: BookOpenText,
    value: 'All posts kept',
    label: 'Existing content preserved',
  },
  {
    icon: SearchCheck,
    value: '5 new posts',
    label: 'Fresh SEO-focused articles',
  },
  {
    icon: Sparkles,
    value: 'Better browsing',
    label: 'Cleaner cards and reading flow',
  },
];

export default function Blog() {
  const sortedBlogs = [...blogs].sort((left, right) => new Date(right.date) - new Date(left.date));
  const featuredBlogs = sortedBlogs.slice(0, 3);
  const remainingBlogs = sortedBlogs.slice(3);

  usePageMetadata({
    title: 'Blog | Frontend, WordPress, Shopify, and SEO Articles',
    description:
      'Explore Darshan Singh’s blog covering React frontend work, technical SEO, WordPress, Shopify, Search Console workflows, schema markup, and performance optimization.',
    path: '/blog',
    keywords: [
      'frontend developer blog',
      'SEO optimization blog',
      'technical SEO articles',
      'WordPress SEO blog',
      'Shopify SEO blog',
      'React frontend articles',
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Blog',
      name: 'Darshan Singh Blog',
      url: `${siteConfig.baseUrl}/blog`,
      description:
        'Articles about frontend development, SEO optimization, WordPress, Shopify, and performance.',
    },
  });

  return (
    <div className="mx-auto max-w-7xl px-3 pt-2 pb-20 sm:px-4 sm:pt-3 lg:px-6 lg:pt-4">
      <Reveal>
        <div className="page-hero rounded-[1.75rem] p-4 sm:p-5 lg:p-6">
          <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr] xl:items-center">
            <div>
              <p className="eyebrow mb-5">Blog</p>
              <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-balance text-[var(--color-ink)] sm:text-[3rem] lg:text-[3.15rem] lg:leading-[1.05]">
                Existing articles stay, and the blog now looks worthy of the portfolio around it.
              </h1>
              <p className="mt-4 max-w-3xl text-base leading-7 text-[var(--color-muted)] sm:text-lg">
                The archive supports the repositioned site with content on technical SEO, Search
                Console workflows, PageSpeed, schema markup, React SEO, WordPress, and Shopify.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3 xl:grid-cols-1">
              {blogStats.map((stat) => {
                const Icon = stat.icon;

                return (
                  <div key={stat.label} className="surface-card rounded-[1.55rem] p-4 sm:p-5">
                    <span className="icon-badge">
                      <Icon className="h-5 w-5" />
                    </span>
                    <p className="mt-4 text-lg font-semibold text-[var(--color-ink)]">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">{stat.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Reveal>

      <section className="section-space">
        <Reveal>
          <SectionHeader
            eyebrow="Featured"
            title="Latest articles"
            description="Recent content now surfaces first so the blog immediately reflects the stronger SEO direction."
          />
        </Reveal>
        <div className="mt-8 grid gap-4 xl:grid-cols-3">
          {featuredBlogs.map((blog, index) => (
            <Reveal key={blog.slug} delay={0.05 * index}>
              <Link
                to={`/blog/${blog.slug}`}
                className="surface-card interactive-card block rounded-[1.85rem] p-5 sm:p-6"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="icon-badge">
                    <BookOpenText className="h-5 w-5" />
                  </span>
                  <span className="chip">{blog.readTime}</span>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {blog.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="chip">
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="mt-5 text-2xl font-semibold text-[var(--color-ink)]">
                  {blog.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                  {blog.description}
                </p>
                <div className="mt-6 flex items-center justify-between text-sm text-[var(--color-muted)]">
                  <span>{formatDate(blog.date)}</span>
                  <span className="font-semibold text-[var(--color-accent)]">Read now</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-space">
        <Reveal>
          <SectionHeader
            eyebrow="All Articles"
            title={`${sortedBlogs.length} posts are now available on the site.`}
            description="The older posts remain intact, and the archive is now easier to scan across mobile, tablet, and laptop screens."
          />
        </Reveal>
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {remainingBlogs.map((blog, index) => (
            <Reveal key={blog.slug} delay={0.04 * index}>
              <Link
                to={`/blog/${blog.slug}`}
                className="surface-card interactive-card block rounded-[1.75rem] p-5 sm:p-6"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="chip">{formatDate(blog.date)}</span>
                  <span className="icon-badge">
                    <SearchCheck className="h-5 w-5" />
                  </span>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {blog.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="chip">
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="mt-5 text-xl font-semibold text-[var(--color-ink)]">{blog.title}</h2>
                <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                  {blog.description}
                </p>
                <div className="mt-6 flex items-center justify-between text-sm text-[var(--color-muted)]">
                  <span>{blog.readTime}</span>
                  <span className="font-semibold text-[var(--color-accent)]">Open article</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
