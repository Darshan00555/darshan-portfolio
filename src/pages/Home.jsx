import Reveal from '../components/Reveal';
import SectionHeader from '../components/SectionHeader';
import blogs from '../data/blogs';
import {
  frontendProjects,
  processSteps,
  seoProjects,
  serviceCards,
  siteConfig,
  toolGroups,
} from '../data/siteContent';
import { createAbsoluteUrl, usePageMetadata } from '../lib/seo';

import { Link } from 'react-router-dom';

import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Blocks,
  BookOpenText,
  CircleDot,
  Code2,
  Gauge,
  LayoutPanelTop,
  MonitorSmartphone,
  SearchCheck,
  ShoppingBag,
  WandSparkles,
} from 'lucide-react';

const serviceIcons = [Code2, ShoppingBag, SearchCheck, BarChart3];
const processIcons = [SearchCheck, WandSparkles, Code2, BarChart3];
const toolIcons = [Code2, Blocks, SearchCheck, Gauge];

const heroHighlights = ['React frontend', 'WordPress / Shopify', 'Technical SEO', 'Responsive QA'];

const heroProofItems = [
  {
    icon: LayoutPanelTop,
    value: '10+',
    label: 'Frontend projects',
  },
  {
    icon: SearchCheck,
    value: '8+',
    label: 'SEO projects',
  },
  {
    icon: Gauge,
    value: '90+',
    label: 'Lighthouse goal',
  },
  {
    icon: MonitorSmartphone,
    value: 'A to Z',
    label: 'Responsive QA',
  },
];

const capabilityTiles = [
  {
    icon: MonitorSmartphone,
    title: 'Responsive by default',
    description:
      'Every section is tuned for phone, tablet, laptop, and larger desktops without spacing drift or overlap issues.',
  },
  {
    icon: SearchCheck,
    title: 'SEO built into UI',
    description:
      'Metadata, content structure, crawl flow, and performance are shaped alongside the interface instead of being patched in later.',
  },
  {
    icon: Gauge,
    title: 'Smooth without lag',
    description:
      'Motion is layered with restraint, so the portfolio feels premium without becoming heavy, noisy, or slow to interact with.',
  },
];

const heroServiceCards = [
  {
    icon: LayoutPanelTop,
    title: 'Frontend builds',
    detail: 'React UI, reusable components, and cleaner page hierarchy.',
  },
  {
    icon: SearchCheck,
    title: 'SEO execution',
    detail: 'Metadata, schema, crawlability, and content structure fixes.',
  },
  {
    icon: Gauge,
    title: 'Performance polish',
    detail: 'PageSpeed, Lighthouse, and smoother cross-device behavior.',
  },
];

function Home() {
  const latestSeoArticles = [...blogs]
    .filter((blog) =>
      blog.tags.some((tag) => ['SEO', 'Technical SEO', 'Google Search Console'].includes(tag))
    )
    .sort((left, right) => new Date(right.date) - new Date(left.date))
    .slice(0, 3);

  usePageMetadata({
    title:
      'Darshan Singh | React Frontend Developer, WordPress & Shopify Developer, SEO Specialist',
    description:
      'Darshan Singh builds responsive React websites, WordPress and Shopify pages, and SEO optimization systems focused on crawlability, metadata, performance, and conversion clarity.',
    path: '/',
    keywords: [
      'Darshan Singh frontend developer',
      'React frontend developer India',
      'WordPress developer India',
      'Shopify developer India',
      'SEO specialist India',
      'technical SEO and performance optimization',
    ],
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Person',
          name: siteConfig.name,
          url: siteConfig.baseUrl,
          email: siteConfig.email,
          telephone: siteConfig.phone,
          jobTitle: siteConfig.headline,
          sameAs: [siteConfig.linkedin, siteConfig.github],
        },
        {
          '@type': 'ProfessionalService',
          name: `${siteConfig.name} Digital Services`,
          url: siteConfig.baseUrl,
          areaServed: 'India',
          serviceType: [
            'React frontend development',
            'WordPress development',
            'Shopify development',
            'SEO optimization',
          ],
        },
      ],
    },
  });

  return (
    <div className="pb-20 sm:pb-24">
      <section className="mx-auto max-w-7xl px-3 pt-2 sm:px-4 sm:pt-3 lg:px-6 lg:pt-4">
        <div className="hero-shell rounded-[1.7rem] px-3.5 py-4 sm:px-5 sm:py-5 lg:px-6 lg:py-5.5">
          <div className="grid gap-4 lg:gap-5 xl:grid-cols-[1.08fr_0.92fr] xl:items-start">
            <Reveal>
              <div className="relative">
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <span className="eyebrow">Portfolio Redesign</span>
                  <span className="chip bg-[rgba(255,255,255,0.88)] text-[var(--color-accent)]">
                    React + SEO + CMS delivery
                  </span>
                </div>

                <h1 className="max-w-4xl text-[1.95rem] font-semibold tracking-tight text-balance text-[var(--color-ink)] sm:text-[2.45rem] lg:text-[2.85rem] lg:leading-[1.02] xl:text-[3.05rem]">
                  Professional websites that look sharp, load fast, and stay clean on every screen.
                </h1>
                <p className="mt-3 max-w-xl text-sm leading-6 text-pretty text-[var(--color-muted)] sm:text-base sm:leading-7">
                  I build React frontends, WordPress and Shopify pages, and SEO-focused redesigns
                  with better visual hierarchy, performance, and responsive behavior.
                </p>

                <div className="mt-4 flex flex-col gap-2.5 sm:flex-row">
                  <Link to="/projects" className="btn-primary w-full sm:w-auto">
                    Explore projects
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link to="/contact" className="btn-secondary w-full sm:w-auto">
                    Start a redesign
                  </Link>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {heroHighlights.map((item) => (
                    <span key={item} className="chip">
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-4 grid grid-cols-2 gap-2 sm:gap-3 xl:grid-cols-4">
                  {heroProofItems.map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.label}
                        className="page-meta-card rounded-[0.95rem] px-3 py-2.5 sm:rounded-[1.1rem]"
                      >
                        <span className="icon-badge h-9 w-9 sm:h-10 sm:w-10">
                          <Icon className="h-5 w-5" />
                        </span>
                        <p className="mt-2 text-xl font-semibold text-[var(--color-ink)] sm:text-2xl">
                          {item.value}
                        </p>
                        <p className="mt-1 text-xs leading-4 font-medium text-[var(--color-muted)] sm:text-sm sm:leading-5">
                          {item.label}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="dark-panel rounded-[1.45rem] p-3.5 sm:p-4.5 lg:p-5">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="floating-pill">
                    <CircleDot className="h-4 w-4 text-[var(--color-secondary)]" />
                    Open for frontend and SEO projects
                  </span>
                </div>

                <h2 className="mt-4 max-w-lg text-[1.4rem] font-semibold text-balance text-white sm:text-[1.75rem] lg:text-[1.9rem]">
                  React websites, WordPress and Shopify support, plus technical SEO upgrades.
                </h2>
                <p className="mt-2.5 max-w-xl text-sm leading-5 text-white/[0.72] sm:text-[0.95rem] sm:leading-6">
                  The first screen is now cleaner and more direct, while the rest of the site keeps
                  the richer design system, motion, and responsive polish.
                </p>

                <div className="mt-4 grid gap-2 sm:grid-cols-3 xl:grid-cols-1">
                  {heroServiceCards.map((card) => {
                    const Icon = card.icon;

                    return (
                      <div key={card.title} className="dark-tile rounded-[1rem] p-3">
                        <div className="flex items-start gap-3">
                          <span className="icon-badge-dark h-8 w-8 sm:h-9 sm:w-9">
                            <Icon className="h-4 w-4" />
                          </span>
                          <div>
                            <p className="text-sm leading-5 font-semibold text-white">
                              {card.title}
                            </p>
                            <p className="mt-1 text-xs leading-4 text-white/[0.7] sm:text-sm sm:leading-5">
                              {card.detail}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {['Google Search Console', 'Google Analytics', 'PageSpeed', 'Lighthouse'].map(
                    (item) => (
                      <span
                        key={item}
                        className="chip border-white/10 bg-white/10 text-white/[0.82] shadow-none"
                      >
                        {item}
                      </span>
                    )
                  )}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-space mx-auto max-w-7xl px-3 sm:px-4 lg:px-6">
        <Reveal>
          <SectionHeader
            eyebrow="Why It Feels Better"
            title="A stronger first impression comes from design discipline, not just more sections."
            description="These upgrades make the portfolio more attractive to explore while keeping it clean, responsive, and fast to read on every screen."
          />
        </Reveal>
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {capabilityTiles.map((tile, index) => (
            <Reveal key={tile.title} delay={0.06 * index}>
              <article className="surface-card interactive-card rounded-[1.7rem] p-5 sm:p-6">
                <span className="icon-badge">
                  <tile.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-2xl font-semibold text-[var(--color-ink)]">
                  {tile.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                  {tile.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-space mx-auto max-w-7xl px-3 sm:px-4 lg:px-6">
        <Reveal>
          <SectionHeader
            eyebrow="Services"
            title="Frontend development, CMS execution, and SEO optimization with a better visual standard."
            description="The positioning stays focused on the work you want to attract, but the presentation is now designed to feel more intentional and premium."
          />
        </Reveal>
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {serviceCards.map((service, index) => {
            const Icon = serviceIcons[index];

            return (
              <Reveal key={service.title} delay={0.05 * index}>
                <article className="surface-card interactive-card rounded-[1.8rem] p-5 sm:p-6">
                  <div className="flex items-center justify-between gap-3">
                    <span className="icon-badge">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="chip">0{index + 1}</span>
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-[var(--color-ink)]">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                    {service.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {service.items.map((item) => (
                      <span key={item} className="chip">
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="section-space mx-auto max-w-7xl px-3 sm:px-4 lg:px-6">
        <div className="grid gap-5 xl:grid-cols-[0.95fr_1.05fr] xl:items-start">
          <Reveal>
            <div className="section-shell self-start rounded-[1.65rem] p-4 sm:p-5 lg:p-6">
              <SectionHeader
                eyebrow="Featured Work"
                title="The project area now shows both frontend websites and SEO case studies clearly."
                description="10+ frontend projects and 8+ SEO projects are part of the wider portfolio, while the homepage shows selected featured work with stronger contrast and hierarchy."
              />
            </div>
          </Reveal>

          <div className="grid gap-4">
            {[...frontendProjects.slice(0, 2), ...seoProjects.slice(0, 2)].map((project, index) => {
              const isSeo = project.kind === 'SEO optimization';
              const Icon = isSeo ? SearchCheck : LayoutPanelTop;

              return (
                <Reveal key={`${project.kind}-${project.title}`} delay={0.05 * index}>
                  <article className="surface-card interactive-card rounded-[1.9rem] p-5 sm:p-6">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <span className="icon-badge">
                          <Icon className="h-5 w-5" />
                        </span>
                        <div>
                          <p className="text-xs font-semibold tracking-[0.22em] text-[var(--color-accent)] uppercase">
                            {project.kind}
                          </p>
                          <h3 className="mt-2 text-2xl font-semibold text-[var(--color-ink)]">
                            {project.title}
                          </h3>
                        </div>
                      </div>
                      <span className="chip">{project.year}</span>
                    </div>
                    <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
                      {project.summary}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <span key={item} className="chip">
                          {item}
                        </span>
                      ))}
                    </div>
                    <ul className="mt-5 space-y-3">
                      {project.outcomes.slice(0, 2).map((outcome) => (
                        <li
                          key={outcome}
                          className="flex gap-3 text-sm leading-6 text-[var(--color-muted)]"
                        >
                          <span className="mt-2 h-2 w-2 rounded-full bg-[var(--color-accent)]" />
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-accent)] transition hover:text-[var(--color-ink)]"
                    >
                      Visit project
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-space mx-auto max-w-7xl px-3 sm:px-4 lg:px-6">
        <Reveal>
          <SectionHeader
            eyebrow="Workflow"
            title="A polished portfolio still needs a clear production process behind it."
            description="The tools you mentioned remain part of the delivery flow, but the section now reads more like a confident system than a plain checklist."
          />
        </Reveal>
        <div className="mt-8 grid gap-4 lg:grid-cols-4">
          {processSteps.map((step, index) => {
            const Icon = processIcons[index];

            return (
              <Reveal key={step.title} delay={0.05 * index}>
                <article className="surface-card interactive-card rounded-[1.75rem] p-5 sm:p-6">
                  <div className="flex items-center justify-between gap-3">
                    <span className="icon-badge">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="chip">Step 0{index + 1}</span>
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-[var(--color-ink)]">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                    {step.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {step.tools.map((tool) => (
                      <span key={tool} className="chip">
                        {tool}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="section-space mx-auto max-w-7xl px-3 sm:px-4 lg:px-6">
        <div className="grid gap-6 xl:grid-cols-[0.92fr_1.08fr]">
          <Reveal>
            <div className="dark-panel rounded-[2rem] p-5 sm:p-7">
              <p className="eyebrow mb-4 text-white/[0.8]">Stack</p>
              <h2 className="max-w-lg text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl">
                Tools that support the UI, the content structure, and the SEO work together.
              </h2>
              <p className="mt-4 max-w-lg text-base leading-7 text-white/[0.7]">
                The site now communicates a stronger build process without losing the technical
                credibility behind React development, CMS work, and search optimization.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  'Google Search Console',
                  'Google Analytics',
                  'PageSpeed Insights',
                  'Lighthouse',
                  'Schema markup',
                  'Cross-device QA',
                ].map((tool) => (
                  <span
                    key={tool}
                    className="chip border-white/10 bg-white/10 text-white/[0.82] shadow-none"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="grid gap-4 md:grid-cols-2">
            {toolGroups.map((group, index) => {
              const Icon = toolIcons[index];

              return (
                <Reveal key={group.title} delay={0.05 * index}>
                  <article className="surface-card interactive-card rounded-[1.8rem] p-5 sm:p-6">
                    <span className="icon-badge">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-5 text-xl font-semibold text-[var(--color-ink)]">
                      {group.title}
                    </h3>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {group.tools.map((tool) => (
                        <span key={tool} className="chip">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-space mx-auto max-w-7xl px-3 sm:px-4 lg:px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal className="max-w-3xl">
            <SectionHeader
              eyebrow="SEO Blog"
              title="The portfolio now has a blog area that supports the service positioning, not just fills space."
              description="Existing articles stay intact, and the five SEO-focused posts make the site feel more credible for technical SEO, Search Console, PageSpeed, and optimization work."
            />
          </Reveal>
          <Reveal delay={0.06}>
            <Link to="/blog" className="btn-secondary w-full md:w-auto">
              View all articles
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {latestSeoArticles.map((article, index) => (
            <Reveal key={article.slug} delay={0.05 * index}>
              <Link
                to={`/blog/${article.slug}`}
                className="surface-card interactive-card block rounded-[1.8rem] p-5 sm:p-6"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="icon-badge">
                    <BookOpenText className="h-5 w-5" />
                  </span>
                  <span className="chip">{article.readTime}</span>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {article.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="chip">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="mt-5 text-xl font-semibold text-[var(--color-ink)]">
                  {article.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                  {article.description}
                </p>
                <div className="mt-6 flex items-center justify-between text-sm text-[var(--color-muted)]">
                  <span>
                    {new Date(article.date).toLocaleDateString('en-IN', { dateStyle: 'medium' })}
                  </span>
                  <span className="inline-flex items-center gap-2 font-semibold text-[var(--color-accent)]">
                    Read article
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-space mx-auto max-w-7xl px-3 sm:px-4 lg:px-6">
        <Reveal>
          <div className="dark-panel rounded-[2.2rem] p-5 sm:p-8 lg:p-10">
            <div className="grid gap-8 xl:grid-cols-[1.08fr_0.92fr] xl:items-center">
              <div>
                <p className="eyebrow mb-4 text-white/[0.8]">Ready to Work</p>
                <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl lg:text-5xl">
                  Need a portfolio-quality website with stronger frontend polish and SEO depth?
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-7 text-white/[0.72]">
                  This redesign is built to make visitors stop, explore, and trust the work faster.
                  The same approach can be applied to client sites, product pages, service websites,
                  and performance-focused redesigns.
                </p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Link to="/contact" className="btn-secondary w-full sm:w-auto">
                    Start a conversation
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <a
                    href={createAbsoluteUrl('/resumes/Darshan_Singh_Final_ATS.pdf')}
                    className="btn-primary w-full sm:w-auto"
                  >
                    Download frontend CV
                  </a>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  'Premium visual direction',
                  'Responsive without gaps',
                  'Strong CTA hierarchy',
                  'SEO-friendly content framing',
                ].map((item, index) => (
                  <div
                    key={item}
                    className="dark-tile rounded-[1.4rem] p-4"
                    style={{ animationDelay: `${index * 140}ms` }}
                  >
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-white">
                      <CircleDot className="h-4 w-4 text-[var(--color-secondary)]" />
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}

export default Home;
