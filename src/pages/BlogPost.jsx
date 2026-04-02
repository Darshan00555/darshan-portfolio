import Reveal from '../components/Reveal';
import SectionHeader from '../components/SectionHeader';
import blogs from '../data/blogs';
import { siteConfig } from '../data/siteContent';
import { createAbsoluteUrl, usePageMetadata } from '../lib/seo';

import ReactMarkdown from 'react-markdown';
import { Link, useParams } from 'react-router-dom';

import { ArrowLeft, BookOpenText, ContactRound, SearchCheck } from 'lucide-react';

function formatDate(date) {
  return new Date(date).toLocaleDateString('en-IN', { dateStyle: 'long' });
}

const markdownComponents = {
  h1: ({ children }) => (
    <h1 className="mt-10 text-3xl font-semibold tracking-tight text-balance text-[var(--color-ink)] first:mt-0 sm:text-4xl">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="mt-10 text-2xl font-semibold tracking-tight text-[var(--color-ink)]">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="mt-8 text-xl font-semibold tracking-tight text-[var(--color-ink)]">
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="mt-5 text-base leading-8 text-[var(--color-muted)]">{children}</p>
  ),
  ul: ({ children }) => (
    <ul className="mt-5 space-y-3 pl-5 text-base leading-8 text-[var(--color-muted)]">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="mt-5 space-y-3 pl-5 text-base leading-8 text-[var(--color-muted)]">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="list-disc">{children}</li>,
  strong: ({ children }) => (
    <strong className="font-semibold text-[var(--color-ink)]">{children}</strong>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noreferrer' : undefined}
      className="font-medium text-[var(--color-accent)] underline decoration-[rgba(37,99,235,0.3)] underline-offset-4 transition hover:text-[var(--color-ink)]"
    >
      {children}
    </a>
  ),
  blockquote: ({ children }) => (
    <blockquote className="mt-6 rounded-[1.5rem] border border-[var(--color-line)] bg-white/[0.72] p-5 text-base text-[var(--color-muted)] italic">
      {children}
    </blockquote>
  ),
  code: ({ inline, children }) => {
    if (inline) {
      return (
        <code className="rounded-md bg-[rgba(37,99,235,0.08)] px-1.5 py-0.5 text-sm text-[var(--color-accent)]">
          {children}
        </code>
      );
    }

    return <code className="text-sm text-white">{children}</code>;
  },
  pre: ({ children }) => (
    <pre className="mt-6 overflow-x-auto rounded-[1.5rem] bg-[var(--color-ink)] p-5 text-sm text-white">
      {children}
    </pre>
  ),
  hr: () => <hr className="mt-8 border-[var(--color-line)]" />,
};

export default function BlogPost() {
  const { slug } = useParams();
  const blog = blogs.find((item) => item.slug === slug);

  usePageMetadata(
    blog
      ? {
          title: `${blog.title} | Darshan Singh`,
          description: blog.description,
          path: `/blog/${blog.slug}`,
          keywords: blog.keywords,
          ogType: 'article',
          schema: {
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: blog.title,
            description: blog.description,
            datePublished: blog.date,
            dateModified: blog.date,
            author: {
              '@type': 'Person',
              name: siteConfig.name,
            },
            publisher: {
              '@type': 'Person',
              name: siteConfig.name,
            },
            mainEntityOfPage: createAbsoluteUrl(`/blog/${blog.slug}`),
            url: createAbsoluteUrl(`/blog/${blog.slug}`),
          },
        }
      : {
          title: 'Post Not Found | Darshan Singh',
          description: 'The requested article could not be found.',
          path: '/blog',
          robots: 'noindex, nofollow',
        }
  );

  if (!blog) {
    return (
      <div className="mx-auto max-w-7xl px-4 pt-6 pb-20 text-center sm:px-6 sm:pt-8 lg:px-8 lg:pt-10">
        <Reveal>
          <div className="surface-card rounded-[1.9rem] p-6 sm:p-8">
            <h1 className="text-3xl font-semibold text-[var(--color-ink)]">Post not found</h1>
            <p className="mt-4 text-base leading-7 text-[var(--color-muted)]">
              The article you are trying to open does not exist.
            </p>
            <Link to="/blog" className="btn-primary mt-6">
              Back to blog
            </Link>
          </div>
        </Reveal>
      </div>
    );
  }

  const relatedBlogs = blogs
    .filter((item) => item.slug !== blog.slug && item.tags.some((tag) => blog.tags.includes(tag)))
    .sort((left, right) => new Date(right.date) - new Date(left.date))
    .slice(0, 3);

  return (
    <div className="mx-auto max-w-6xl px-3 pt-2 pb-20 sm:px-4 sm:pt-3 lg:px-6 lg:pt-4">
      <Reveal>
        <Link to="/blog" className="btn-secondary">
          <ArrowLeft className="h-4 w-4" />
          Back to all articles
        </Link>
      </Reveal>

      <div className="mt-6 grid gap-6 xl:grid-cols-[0.74fr_0.26fr]">
        <Reveal>
          <article className="article-shell surface-card p-5 sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap gap-2">
                {blog.tags.map((tag) => (
                  <span key={tag} className="chip">
                    {tag}
                  </span>
                ))}
              </div>
              <span className="icon-badge">
                <BookOpenText className="h-5 w-5" />
              </span>
            </div>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-balance text-[var(--color-ink)] sm:text-5xl">
              {blog.title}
            </h1>
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-[var(--color-muted)]">
              <span>{formatDate(blog.date)}</span>
              <span>{blog.readTime}</span>
              <span>{siteConfig.name}</span>
            </div>

            <div className="prose-reset mt-10">
              <ReactMarkdown components={markdownComponents}>{blog.content}</ReactMarkdown>
            </div>
          </article>
        </Reveal>

        <aside className="space-y-4 xl:sticky xl:top-28 xl:self-start">
          <Reveal delay={0.06}>
            <div className="surface-card rounded-[1.8rem] p-5 sm:p-6">
              <div className="flex items-center gap-3">
                <span className="icon-badge">
                  <SearchCheck className="h-5 w-5" />
                </span>
                <p className="text-sm font-semibold tracking-[0.2em] text-[var(--color-accent)] uppercase">
                  Keywords
                </p>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {blog.keywords.map((keyword) => (
                  <span key={keyword} className="chip">
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="dark-panel rounded-[1.8rem] p-5 sm:p-6">
              <div className="flex items-center gap-3">
                <span className="icon-badge-dark">
                  <ContactRound className="h-5 w-5" />
                </span>
                <p className="text-sm font-semibold tracking-[0.2em] text-white/[0.62] uppercase">
                  Need similar work?
                </p>
              </div>
              <p className="mt-4 text-sm leading-7 text-white/[0.72]">
                I handle React frontend implementation, WordPress and Shopify pages, and technical
                SEO improvements together.
              </p>
              <Link to="/contact" className="btn-secondary mt-5 w-full sm:w-auto">
                Contact me
              </Link>
            </div>
          </Reveal>
        </aside>
      </div>

      {relatedBlogs.length ? (
        <section className="section-space">
          <Reveal>
            <SectionHeader
              eyebrow="Related"
              title="Continue reading"
              description="Articles connected by topic or service area."
            />
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {relatedBlogs.map((related, index) => (
              <Reveal key={related.slug} delay={0.05 * index}>
                <Link
                  to={`/blog/${related.slug}`}
                  className="surface-card interactive-card block rounded-[1.8rem] p-6"
                >
                  <div className="flex flex-wrap gap-2">
                    {related.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="chip">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="mt-5 text-xl font-semibold text-[var(--color-ink)]">
                    {related.title}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                    {related.description}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}
