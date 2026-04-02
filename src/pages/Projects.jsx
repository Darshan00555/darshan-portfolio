import Reveal from '../components/Reveal';
import SectionHeader from '../components/SectionHeader';
import { frontendProjects, seoProjects, siteConfig } from '../data/siteContent';
import { usePageMetadata } from '../lib/seo';

import { ArrowUpRight, Gauge, LayoutPanelTop, MonitorSmartphone, SearchCheck } from 'lucide-react';

const summaryCards = [
  {
    icon: LayoutPanelTop,
    value: '10+',
    label: 'Frontend projects',
    detail:
      'The page highlights selected frontend work from a broader React and website-delivery portfolio.',
  },
  {
    icon: SearchCheck,
    value: '8+',
    label: 'SEO projects',
    detail:
      'The page highlights selected SEO case studies from broader technical and on-page optimization work.',
  },
  {
    icon: MonitorSmartphone,
    value: 'A to Z',
    label: 'Responsive coverage',
    detail: 'Layouts are shaped for phone, tablet, laptop, and large screens from the beginning.',
  },
];

function ProjectGrid({ eyebrow, title, description, projects }) {
  return (
    <section className="section-space">
      <Reveal>
        <SectionHeader eyebrow={eyebrow} title={title} description={description} />
      </Reveal>
      <div className="mt-8 grid gap-5 xl:grid-cols-3">
        {projects.map((project, index) => {
          const isSeo = project.kind === 'SEO optimization';
          const Icon = isSeo ? SearchCheck : LayoutPanelTop;

          return (
            <Reveal key={`${eyebrow}-${project.title}`} delay={0.05 * index}>
              <article className="surface-card interactive-card rounded-[1.9rem] p-5 sm:p-6">
                <div className="flex items-start justify-between gap-4">
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

                <ul className="mt-6 space-y-3">
                  {project.outcomes.map((outcome) => (
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
                  Visit live project
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

export default function Projects() {
  usePageMetadata({
    title: 'Projects | React Frontend Projects and SEO Optimization Case Studies',
    description:
      'Browse Darshan Singh’s featured React frontend websites and SEO optimization case studies, selected from a broader portfolio of 10+ frontend projects and 8+ SEO projects.',
    path: '/projects',
    keywords: [
      'React frontend projects',
      'SEO optimization projects',
      'frontend developer case studies',
      'technical SEO portfolio',
      'WordPress and Shopify developer projects',
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Projects',
      url: `${siteConfig.baseUrl}/projects`,
      description:
        'A collection of frontend development work and SEO optimization case studies by Darshan Singh.',
    },
  });

  return (
    <div className="mx-auto max-w-7xl px-3 pt-2 pb-20 sm:px-4 sm:pt-3 lg:px-6 lg:pt-4">
      <Reveal>
        <div className="page-hero rounded-[1.75rem] p-4 sm:p-5 lg:p-6">
          <div className="grid gap-6 xl:grid-cols-[1.04fr_0.96fr] xl:items-center">
            <div>
              <p className="eyebrow mb-5">Projects</p>
              <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-balance text-[var(--color-ink)] sm:text-[3rem] lg:text-[3.2rem] lg:leading-[1.05]">
                Frontend builds and SEO case studies now look like a real portfolio, not a plain
                list.
              </h1>
              <p className="mt-4 max-w-3xl text-base leading-7 text-[var(--color-muted)] sm:text-lg">
                Your original projects are still the foundation, but the page now separates the work
                into cleaner tracks with stronger hierarchy, richer cards, and a better visual flow
                for recruiters and clients.
              </p>
            </div>

            <div className="dark-panel rounded-[1.9rem] p-5 sm:p-6">
              <div className="flex items-center gap-3">
                <span className="icon-badge-dark">
                  <Gauge className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold tracking-[0.2em] text-white/[0.62] uppercase">
                    Portfolio direction
                  </p>
                  <p className="text-lg font-semibold text-white">Clear tracks, clearer outcomes</p>
                </div>
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-3 xl:grid-cols-1">
                {summaryCards.map((card) => {
                  const Icon = card.icon;

                  return (
                    <div key={card.label} className="dark-tile rounded-[1.35rem] p-4">
                      <Icon className="h-5 w-5 text-white" />
                      <p className="mt-4 text-2xl font-semibold text-white">{card.value}</p>
                      <p className="mt-2 text-sm font-semibold text-white">{card.label}</p>
                      <p className="mt-2 text-sm leading-6 text-white/[0.7]">{card.detail}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      <ProjectGrid
        eyebrow="Frontend Track"
        title="React and frontend delivery"
        description="These are selected featured websites from a broader track of 10+ frontend projects."
        projects={frontendProjects}
      />

      <ProjectGrid
        eyebrow="SEO Track"
        title="SEO & optimization case studies"
        description="These are selected featured case studies from 8+ SEO and optimization projects."
        projects={seoProjects}
      />
    </div>
  );
}
