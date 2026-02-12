import React from 'react';
import { Link } from 'react-router-dom';

import { ArrowRight } from 'lucide-react';

export default function Blogs({ posts }) {
  // Use passed posts or default empty array to avoid errors
  const articlesData = posts || [];

  return (
    <section className="bg-zinc-950 px-4 py-12 text-white sm:py-16 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-center sm:mb-12">
          <p className="mb-3 text-xs font-medium tracking-wider text-zinc-400 uppercase sm:mb-4">
            INSIGHTS & THOUGHTS
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-6xl">
            Latest Articles
          </h2>
        </div>
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articlesData.map((article, index) => (
            <div
              className="group cursor-pointer overflow-hidden rounded-2xl border border-white/5 bg-white/5 shadow-none backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/10 hover:shadow-2xl"
              key={index}
            >
              <div className="p-0">
                <div className="relative mb-4 overflow-hidden sm:mb-6">
                  <img
                    alt={article.title}
                    className="aspect-video h-64 w-full object-cover transition-transform duration-700 group-hover:scale-110 sm:h-72 md:h-80"
                    src={
                      article.image ||
                      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80'
                    }
                    loading="lazy"
                  />
                  <p className="absolute top-4 left-4 rounded-full border-0 border-white/20 bg-white/10 px-3 py-1 text-[10px] font-medium text-white uppercase backdrop-blur-md sm:text-xs">
                    #{article.category}
                  </p>
                </div>
                <div className="px-5 pb-5 sm:px-6 sm:pb-6">
                  <h3 className="mb-3 line-clamp-2 text-xl font-bold tracking-tight text-white sm:mb-4 sm:text-2xl">
                    {article.title}
                  </h3>
                  <p className="mb-6 line-clamp-3 text-sm leading-relaxed text-zinc-400 sm:mb-8">
                    {article.description}
                  </p>
                  {/* Read More Link and Date */}
                  <div className="flex flex-col gap-4 border-t border-white/5 pt-4 sm:flex-row sm:items-center sm:justify-between">
                    <Link
                      className="group/btn relative flex items-center overflow-hidden text-xs font-medium text-white transition-colors hover:text-cyan-400 sm:text-sm"
                      to={article.readMoreLink || '#'}
                    >
                      <span className="mr-2 flex items-center justify-center rounded-full border border-white/20 p-2 transition-colors duration-300 ease-in group-hover/btn:bg-white group-hover/btn:text-black sm:p-2">
                        <ArrowRight className="h-3 w-3 translate-x-0 transition-transform duration-500 group-hover/btn:-rotate-45" />
                      </span>
                      Read Article
                    </Link>
                    <span className="flex items-center gap-2 text-[10px] text-zinc-500 sm:gap-3 sm:text-xs">
                      {article.publishDate}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
