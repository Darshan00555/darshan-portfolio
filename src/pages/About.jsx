import Reveal from '../components/Reveal';
import SectionHeader from '../components/SectionHeader';
import {
  combinedCapabilities,
  education,
  resumeTracks,
  siteConfig,
  toolGroups,
} from '../data/siteContent';
import { usePageMetadata } from '../lib/seo';

import { Link } from 'react-router-dom';

import {
  ArrowRight,
  GraduationCap,
  LayoutPanelTop,
  SearchCheck,
  Sparkles,
  Workflow,
} from 'lucide-react';

const trackIcons = {
  frontend: LayoutPanelTop,
  seo: SearchCheck,
};

const toolIcons = [LayoutPanelTop, Workflow, SearchCheck, Sparkles];

export default function About() {
  usePageMetadata({
    title: 'About | Darshan Singh',
    description:
      'Learn about Darshan Singh’s frontend development, WordPress, Shopify, and SEO optimization background, tools, and working approach.',
    path: '/about',
    keywords: [
      'About Darshan Singh',
      'frontend developer profile',
      'SEO specialist profile',
      'WordPress and Shopify developer',
      'React developer India',
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      name: 'About Darshan Singh',
      description:
        'Background, tools, education, and service approach for Darshan Singh across frontend development and SEO.',
      url: `${siteConfig.baseUrl}/about`,
    },
  });

  return (
    <div className="mx-auto max-w-7xl px-3 pt-2 pb-20 sm:px-4 sm:pt-3 lg:px-6 lg:pt-4">
      <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
        <Reveal>
          <div className="page-hero rounded-[1.75rem] p-4 sm:p-5 lg:p-6">
            <p className="eyebrow mb-5">About</p>
            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-balance text-[var(--color-ink)] sm:text-[3rem] lg:text-[3.2rem] lg:leading-[1.05]">
              I build websites where visual quality, responsiveness, and search performance support
              each other.
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-7 text-[var(--color-muted)] sm:text-lg">
              My work sits between frontend implementation and SEO execution. That means design
              hierarchy, content structure, metadata, page speed, and cross-device behavior are
              treated like one system instead of separate handoffs.
            </p>
            <p className="mt-3 max-w-3xl text-base leading-7 text-[var(--color-muted)]">
              This portfolio now reflects that with stronger UI direction, more deliberate
              components, and a sharper presentation of React development, WordPress and Shopify
              delivery, and SEO optimization services.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/projects" className="btn-primary w-full sm:w-auto">
                Review projects
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/resume" className="btn-secondary w-full sm:w-auto">
                View both resumes
              </Link>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-4">
          <Reveal delay={0.05}>
            <div className="dark-panel rounded-[1.9rem] p-5 sm:p-6">
              <div className="flex items-center gap-3">
                <span className="icon-badge-dark">
                  <Workflow className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold tracking-[0.2em] text-white/[0.62] uppercase">
                    Working style
                  </p>
                  <p className="text-lg font-semibold text-white">
                    Build clearly, optimize practically
                  </p>
                </div>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {combinedCapabilities.map((capability) => (
                  <span
                    key={capability}
                    className="chip border-white/10 bg-white/10 text-white/[0.82] shadow-none"
                  >
                    {capability}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="surface-card rounded-[1.8rem] p-5 sm:p-6">
              <div className="flex items-center gap-3">
                <span className="icon-badge">
                  <GraduationCap className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold tracking-[0.2em] text-[var(--color-accent)] uppercase">
                    Education
                  </p>
                  <p className="text-lg font-semibold text-[var(--color-ink)]">
                    {education.degree}
                  </p>
                </div>
              </div>
              <p className="mt-5 text-sm leading-7 text-[var(--color-muted)]">
                {education.period} · {education.institution} · {education.location}
              </p>
            </div>
          </Reveal>
        </div>
      </div>

      <section className="section-space">
        <Reveal>
          <SectionHeader
            eyebrow="Resume Tracks"
            title="Two focused profiles with one consistent delivery style."
            description="The site now represents the same person through two clear professional tracks instead of mixing frontend and SEO content randomly."
          />
        </Reveal>
        <div className="mt-8 grid gap-6 xl:grid-cols-2">
          {resumeTracks.map((track, index) => {
            const Icon = trackIcons[track.id];

            return (
              <Reveal key={track.id} delay={0.05 * index}>
                <article className="surface-card interactive-card rounded-[1.95rem] p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold tracking-[0.22em] text-[var(--color-accent)] uppercase">
                        Profile track
                      </p>
                      <h2 className="mt-3 text-2xl font-semibold text-[var(--color-ink)]">
                        {track.title}
                      </h2>
                    </div>
                    <span className="icon-badge">
                      <Icon className="h-5 w-5" />
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
                    {track.summary}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {track.skills.map((skill) => (
                      <span key={skill} className="chip">
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 space-y-5">
                    {track.experience.map((item) => (
                      <div
                        key={`${track.id}-${item.role}`}
                        className="page-meta-card rounded-[1.5rem] p-5"
                      >
                        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                          <div>
                            <p className="text-lg font-semibold text-[var(--color-ink)]">
                              {item.role}
                            </p>
                            <p className="text-sm text-[var(--color-muted)]">{item.company}</p>
                          </div>
                          <span className="chip">{item.period}</span>
                        </div>
                        <ul className="mt-4 space-y-3">
                          {item.points.map((point) => (
                            <li
                              key={point}
                              className="flex gap-3 text-sm leading-6 text-[var(--color-muted)]"
                            >
                              <span className="mt-2 h-2 w-2 rounded-full bg-[var(--color-accent)]" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <div className="page-meta-card mt-8 rounded-[1.5rem] p-5">
                    <p className="text-sm font-semibold tracking-[0.2em] text-[var(--color-accent)] uppercase">
                      Key achievements
                    </p>
                    <ul className="mt-4 space-y-3">
                      {track.achievements.map((achievement) => (
                        <li
                          key={achievement}
                          className="flex gap-3 text-sm leading-6 text-[var(--color-muted)]"
                        >
                          <span className="mt-2 h-2 w-2 rounded-full bg-[var(--color-accent)]" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="section-space">
        <Reveal>
          <SectionHeader
            eyebrow="Tooling"
            title="The stack behind the work"
            description="Development, CMS, SEO, and deployment tools are presented together because real delivery crosses all four."
          />
        </Reveal>
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {toolGroups.map((group, index) => {
            const Icon = toolIcons[index];

            return (
              <Reveal key={group.title} delay={0.05 * index}>
                <article className="surface-card interactive-card rounded-[1.75rem] p-5 sm:p-6">
                  <span className="icon-badge">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-xl font-semibold text-[var(--color-ink)]">
                    {group.title}
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-2">
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
      </section>
    </div>
  );
}
