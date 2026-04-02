import Reveal from '../components/Reveal';
import SectionHeader from '../components/SectionHeader';
import { education, resumeOptions, resumeTracks, siteConfig } from '../data/siteContent';
import { usePageMetadata } from '../lib/seo';

import { Download, ExternalLink, GraduationCap, LayoutPanelTop, SearchCheck } from 'lucide-react';

const optionIcons = {
  frontend: LayoutPanelTop,
  seo: SearchCheck,
};

export default function Resume() {
  usePageMetadata({
    title: 'Resume | Frontend CV and SEO CV',
    description:
      'Download Darshan Singh’s separate frontend web development CV and SEO & optimization CV from one page.',
    path: '/resume',
    keywords: [
      'Darshan Singh resume',
      'frontend developer CV',
      'SEO specialist CV',
      'React developer resume',
      'technical SEO resume',
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'ProfilePage',
      name: 'Darshan Singh Resume Page',
      description: 'Frontend and SEO resumes for Darshan Singh.',
      url: `${siteConfig.baseUrl}/resume`,
    },
  });

  return (
    <div className="mx-auto max-w-7xl px-3 pt-2 pb-20 sm:px-4 sm:pt-3 lg:px-6 lg:pt-4">
      <Reveal>
        <div className="page-hero rounded-[1.75rem] p-4 sm:p-5 lg:p-6">
          <p className="eyebrow mb-5">Resume Center</p>
          <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-balance text-[var(--color-ink)] sm:text-[3rem] lg:text-[3.15rem] lg:leading-[1.05]">
            Download the right CV for the role: frontend web development or SEO & optimization.
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-[var(--color-muted)] sm:text-lg">
            The navbar download flow and this page use the same two-track structure so recruiters
            and clients can choose the correct profile immediately without confusion.
          </p>
        </div>
      </Reveal>

      <section className="section-space grid gap-6 xl:grid-cols-2">
        {resumeOptions.map((resume, index) => {
          const Icon = optionIcons[resume.id];
          const isSeo = resume.id === 'seo';

          return (
            <Reveal key={resume.id} delay={0.05 * index}>
              <article
                className={`${isSeo ? 'dark-panel' : 'surface-card interactive-card'} rounded-[1.95rem] p-5 sm:p-6`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p
                      className={`text-xs font-semibold tracking-[0.24em] uppercase ${
                        isSeo ? 'text-white/[0.62]' : 'text-[var(--color-accent)]'
                      }`}
                    >
                      {resume.shortLabel}
                    </p>
                    <h2
                      className={`mt-4 text-2xl font-semibold ${isSeo ? 'text-white' : 'text-[var(--color-ink)]'}`}
                    >
                      {resume.title}
                    </h2>
                  </div>
                  <span className={isSeo ? 'icon-badge-dark' : 'icon-badge'}>
                    <Icon className="h-5 w-5" />
                  </span>
                </div>
                <p
                  className={`mt-4 text-sm leading-7 ${isSeo ? 'text-white/[0.72]' : 'text-[var(--color-muted)]'}`}
                >
                  {resume.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {resume.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className={`chip ${isSeo ? 'border-white/10 bg-white/10 text-white/[0.82] shadow-none' : ''}`}
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <a
                    href={resume.href}
                    download={resume.downloadName}
                    className={
                      isSeo ? 'btn-secondary w-full sm:w-auto' : 'btn-primary w-full sm:w-auto'
                    }
                  >
                    <Download className="h-4 w-4" />
                    Download PDF
                  </a>
                  <a
                    href={siteConfig.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className={
                      isSeo ? 'btn-primary w-full sm:w-auto' : 'btn-secondary w-full sm:w-auto'
                    }
                  >
                    LinkedIn
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </article>
            </Reveal>
          );
        })}
      </section>

      <section className="section-space">
        <Reveal>
          <SectionHeader
            eyebrow="Experience Snapshot"
            title="The resume page mirrors both career narratives clearly."
            description="The two tracks below are based on the two CVs you provided and are kept intentionally separate so the page stays easy to scan."
          />
        </Reveal>
        <div className="mt-8 grid gap-6 xl:grid-cols-2">
          {resumeTracks.map((track, index) => {
            const Icon = optionIcons[track.id];

            return (
              <Reveal key={track.id} delay={0.05 * index}>
                <article className="surface-card interactive-card rounded-[1.95rem] p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h2 className="text-2xl font-semibold text-[var(--color-ink)]">
                        {track.title}
                      </h2>
                      <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                        {track.summary}
                      </p>
                    </div>
                    <span className="icon-badge">
                      <Icon className="h-5 w-5" />
                    </span>
                  </div>
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
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="section-space">
        <Reveal>
          <div className="surface-card rounded-[1.9rem] p-5 sm:p-6">
            <div className="flex items-center gap-3">
              <span className="icon-badge">
                <GraduationCap className="h-5 w-5" />
              </span>
              <div>
                <p className="eyebrow mb-2">Education</p>
                <h2 className="text-2xl font-semibold text-[var(--color-ink)]">
                  {education.degree}
                </h2>
              </div>
            </div>
            <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
              {education.period} · {education.institution} · {education.location}
            </p>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
