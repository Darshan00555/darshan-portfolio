import blogs from '../data/blogs.js';

import React, { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { Link, useParams } from 'react-router-dom';

const tagColors = {
  MERN: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  MongoDB: 'bg-green-500/10 text-green-400 border-green-500/20',
  React: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
  JavaScript: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
  Shopify: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  WordPress: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  Framer: 'bg-pink-500/10 text-pink-400 border-pink-500/20',
  Git: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
  Freelancing: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
  default: 'bg-zinc-500/10 text-zinc-400 border-zinc-500/20',
};

function getTagColor(tag) {
  return tagColors[tag] || tagColors.default;
}

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

const markdownComponents = {
  h1: ({ children }) => (
    <h1 className="mt-10 mb-6 text-3xl font-bold text-white first:mt-0 md:text-4xl">{children}</h1>
  ),
  h2: ({ children }) => (
    <h2 className="mt-10 mb-4 text-2xl font-semibold text-white">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="mt-8 mb-3 text-xl font-semibold text-zinc-200">{children}</h3>
  ),
  p: ({ children }) => <p className="mb-5 leading-relaxed text-zinc-300">{children}</p>,
  ul: ({ children }) => <ul className="mb-5 list-disc space-y-1 pl-6 text-zinc-300">{children}</ul>,
  ol: ({ children }) => (
    <ol className="mb-5 list-decimal space-y-1 pl-6 text-zinc-300">{children}</ol>
  ),
  li: ({ children }) => <li className="leading-relaxed">{children}</li>,
  strong: ({ children }) => <strong className="font-semibold text-white">{children}</strong>,
  em: ({ children }) => <em className="text-zinc-300 italic">{children}</em>,
  a: ({ href, children }) => (
    <a
      href={href}
      className="font-medium text-cyan-400 underline underline-offset-2 transition-colors hover:text-cyan-300"
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
    >
      {children}
    </a>
  ),
  blockquote: ({ children }) => (
    <blockquote className="my-6 border-l-4 border-cyan-500/50 pl-5 text-zinc-400 italic">
      {children}
    </blockquote>
  ),
  code: ({ inline, children }) => {
    if (inline) {
      return (
        <code className="rounded bg-zinc-800 px-1.5 py-0.5 font-mono text-sm text-cyan-300">
          {children}
        </code>
      );
    }
    return <code className="block font-mono text-sm text-zinc-200">{children}</code>;
  },
  pre: ({ children }) => (
    <pre className="my-6 overflow-x-auto rounded-xl border border-white/10 bg-zinc-900 p-5 text-sm">
      {children}
    </pre>
  ),
  hr: () => <hr className="my-8 border-white/10" />,
};

export default function BlogPost() {
  const { slug } = useParams();
  const blog = blogs.find((b) => b.slug === slug);

  useEffect(() => {
    if (blog) {
      document.title = `${blog.title} — Darshan Singh`;
      let meta = document.querySelector('meta[name="description"]');
      if (!meta) {
        meta = document.createElement('meta');
        meta.name = 'description';
        document.head.appendChild(meta);
      }
      meta.content = blog.description;

      let kwMeta = document.querySelector('meta[name="keywords"]');
      if (!kwMeta) {
        kwMeta = document.createElement('meta');
        kwMeta.name = 'keywords';
        document.head.appendChild(kwMeta);
      }
      kwMeta.content = blog.keywords.join(', ');
    }
  }, [blog]);

  if (!blog) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-950 text-center">
        <h1 className="mb-4 text-3xl font-bold text-white">Post Not Found</h1>
        <p className="mb-8 text-zinc-400">
          The blog post you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          to="/blog"
          className="rounded-full bg-white px-6 py-3 text-sm font-bold text-black transition-colors hover:bg-zinc-200"
        >
          ← Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 px-4 pt-28 pb-20 sm:px-6 md:px-8">
      <div className="mx-auto max-w-3xl">
        {/* Back link */}
        <Link
          to="/blog"
          className="mb-10 inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-white"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Blog
        </Link>

        {/* Tags */}
        <div className="mb-5 flex flex-wrap gap-2">
          {blog.tags.map((tag) => (
            <span
              key={tag}
              className={`rounded-full border px-2.5 py-0.5 text-xs font-medium ${getTagColor(tag)}`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h1 className="mb-5 text-3xl leading-tight font-bold text-white md:text-4xl">
          {blog.title}
        </h1>

        {/* Meta */}
        <div className="mb-10 flex flex-wrap items-center gap-4 border-b border-white/10 pb-8 text-sm text-zinc-500">
          <span className="flex items-center gap-1.5">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            {formatDate(blog.date)}
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            {blog.readTime}
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            Darshan Singh
          </span>
        </div>

        {/* Markdown Content */}
        <article>
          <ReactMarkdown components={markdownComponents}>{blog.content}</ReactMarkdown>
        </article>

        {/* CTA Footer */}
        <div className="mt-16 rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
          <h3 className="mb-2 text-xl font-semibold text-white">Want to work together?</h3>
          <p className="mb-6 text-zinc-400">
            I&apos;m available for MERN Stack, Shopify, WordPress, Framer, and Wix projects.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-black shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all hover:bg-zinc-200 hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
          >
            Get in touch
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="mt-8 text-center">
          <Link to="/blog" className="text-sm text-zinc-500 transition-colors hover:text-white">
            ← Back to all articles
          </Link>
        </div>
      </div>
    </div>
  );
}
