import blogs from '../data/blogs.js';

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

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

export default function Blog() {
  useEffect(() => {
    document.title = 'Blog — Darshan Singh | MERN & Shopify Developer';
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'description';
      document.head.appendChild(meta);
    }
    meta.content =
      'Insights on MERN Stack, Shopify, WordPress, Framer, and freelance web development by Darshan Singh — developer based in India.';
  }, []);

  const sortedBlogs = [...blogs].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="min-h-screen bg-zinc-950 px-4 pt-28 pb-20 sm:px-6 md:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-zinc-400">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-cyan-400" />
            Writing & Thoughts
          </div>
          <h1 className="mb-6 bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-4xl font-bold text-transparent md:text-6xl">
            Insights &amp; Articles
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-zinc-400">
            Deep dives into MERN Stack, Shopify, WordPress, Framer, and the realities of freelance
            web development.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sortedBlogs.map((blog) => (
            <Link
              key={blog.slug}
              to={`/blog/${blog.slug}`}
              className="group flex flex-col rounded-2xl border border-white/8 bg-white/3 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/15 hover:bg-white/6 hover:shadow-[0_8px_40px_rgba(0,0,0,0.4)]"
            >
              {/* Tags */}
              <div className="mb-4 flex flex-wrap gap-2">
                {blog.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className={`rounded-full border px-2.5 py-0.5 text-xs font-medium ${getTagColor(tag)}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h2 className="mb-3 flex-1 text-lg leading-snug font-semibold text-white transition-colors group-hover:text-cyan-300">
                {blog.title}
              </h2>

              {/* Description */}
              <p className="mb-5 line-clamp-3 text-sm leading-relaxed text-zinc-400">
                {blog.description}
              </p>

              {/* Footer */}
              <div className="mt-auto flex items-center justify-between border-t border-white/8 pt-4 text-xs text-zinc-500">
                <span>{formatDate(blog.date)}</span>
                <span className="flex items-center gap-1">
                  <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {blog.readTime}
                </span>
              </div>

              {/* Read more arrow */}
              <div className="mt-3 flex items-center gap-1 text-xs font-medium text-cyan-500 opacity-0 transition-opacity group-hover:opacity-100">
                Read article
                <svg
                  className="h-3 w-3 transition-transform group-hover:translate-x-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
