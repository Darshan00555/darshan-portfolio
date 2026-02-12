import { ArticleCard } from '../components/ui/blog-post-card';

import React from 'react';

const seoPosts = [
  {
    category: 'PERFORMANCE',
    title: 'Optimizing React Applications: Advanced Techniques for 2026',
    description:
      "Discover how to boost your React app's performance using concurrent rendering, automatic batching, and effective code-splitting strategies.",
    image:
      'https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=2070&auto=format&fit=crop',
    publishDate: '2026-02-10',
    readingTime: 480, // 8 min
  },
  {
    category: 'SEO & MERN',
    title: 'Mastering SEO in Single Page Applications (SPAs)',
    description:
      'A comprehensive guide to recovering SEO visibility in MERN stack applications using SSR, Helmet, and structured data.',
    image:
      'https://images.unsplash.com/photo-1572177812156-58036aae439c?q=80&w=2070&auto=format&fit=crop',
    publishDate: '2026-01-28',
    readingTime: 600, // 10 min
  },
  {
    category: 'BACKEND',
    title: 'Scalable Node.js Microservices: Patterns and Best Practices',
    description:
      'Transitioning from monolith to microservices? Learn key architectural patterns and inter-service communication with RabbitMQ.',
    image:
      'https://images.unsplash.com/photo-1558494949-ef2cb3cc6309?q=80&w=2070&auto=format&fit=crop',
    publishDate: '2026-01-15',
    readingTime: 720, // 12 min
  },
  {
    category: 'UI/UX',
    title: 'Building Glassmorphism Interfaces with Tailwind CSS',
    description:
      "Step-by-step tutorial on creating stunning glassmorphism effects using Tailwind's utility classes and backdrop-blur.",
    image:
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop',
    publishDate: '2025-12-22',
    readingTime: 360, // 6 min
  },
  {
    category: 'DATABASE',
    title: 'MongoDB Schema Design: SQL vs NoSQL Thinking',
    description:
      'Stop treating MongoDB like a relational database. Learn advanced schema design patterns for high-performance applications.',
    image:
      'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=2021&auto=format&fit=crop',
    publishDate: '2025-11-30',
    readingTime: 540, // 9 min
  },
  {
    category: 'SECURITY',
    title: 'Securing MERN Stack Apps: JWT, CORS, and Beyond',
    description:
      'Essential security checklist for modern web apps. Deep dive into HttpOnly cookies, CSS injection prevention, and API rate limiting.',
    image:
      'https://images.unsplash.com/photo-1614064641938-3bcee529cfc4?q=80&w=2069&auto=format&fit=crop',
    publishDate: '2025-11-12',
    readingTime: 420, // 7 min
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-zinc-950 px-4 pt-24 pb-20 sm:px-6 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h1 className="font-display mb-6 bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-4xl font-bold text-transparent md:text-6xl">
            Insights & Thoughts
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-zinc-400">
            Deep dives into web development, design systems, and software engineering architecture.
          </p>
        </div>

        <div className="grid justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {seoPosts.map((post, index) => (
            <ArticleCard
              key={index}
              headline={post.title}
              excerpt={post.description}
              cover={post.image}
              tag={post.category}
              readingTime={post.readingTime}
              writer="Darshan Singh"
              publishedAt={new Date(post.publishDate)}
              clampLines={3}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
