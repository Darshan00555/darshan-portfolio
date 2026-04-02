import { resumeOptions } from '../data/siteContent';

import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Download, ExternalLink, LayoutPanelTop, SearchCheck, X } from 'lucide-react';

const iconMap = {
  frontend: LayoutPanelTop,
  seo: SearchCheck,
};

const overlayTransition = {
  duration: 0.28,
  ease: [0.22, 1, 0.36, 1],
};

const MotionDiv = motion.div;

export default function ResumeModal({ isOpen, onClose }) {
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen ? (
        <MotionDiv
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[rgba(8,22,47,0.48)] px-4 py-8 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-labelledby="resume-modal-title"
          onClick={onClose}
          initial={prefersReducedMotion ? false : { opacity: 0 }}
          animate={prefersReducedMotion ? {} : { opacity: 1 }}
          exit={prefersReducedMotion ? {} : { opacity: 0 }}
          transition={overlayTransition}
        >
          <MotionDiv
            initial={prefersReducedMotion ? false : { opacity: 0, y: 24, scale: 0.98 }}
            animate={prefersReducedMotion ? {} : { opacity: 1, y: 0, scale: 1 }}
            exit={prefersReducedMotion ? {} : { opacity: 0, y: 16, scale: 0.98 }}
            transition={overlayTransition}
            className="section-shell w-full max-w-4xl rounded-[2rem] p-4 sm:p-6"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="max-w-2xl">
                <p className="eyebrow mb-3">Resume Download</p>
                <h2
                  id="resume-modal-title"
                  className="text-3xl font-semibold tracking-tight text-balance text-[var(--color-ink)] sm:text-4xl"
                >
                  Choose the CV that matches the role.
                </h2>
                <p className="mt-3 max-w-xl text-sm leading-7 text-[var(--color-muted)] sm:text-base">
                  Frontend and SEO are separated intentionally so recruiters and clients can open
                  the right profile immediately.
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(8,22,47,0.08)] bg-white/70 text-[var(--color-ink)] transition hover:border-[rgba(37,99,235,0.24)] hover:text-[var(--color-accent)]"
                aria-label="Close resume dialog"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-6 grid gap-4 lg:grid-cols-2">
              {resumeOptions.map((resume, index) => {
                const Icon = iconMap[resume.id];

                return (
                  <MotionDiv
                    key={resume.id}
                    className={`rounded-[1.7rem] p-5 sm:p-6 ${
                      index === 1 ? 'dark-panel' : 'surface-card'
                    }`}
                    initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
                    animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
                    transition={{ ...overlayTransition, delay: 0.06 * index }}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p
                          className={`text-xs font-semibold tracking-[0.24em] uppercase ${
                            index === 1 ? 'text-white/[0.7]' : 'text-[var(--color-accent)]'
                          }`}
                        >
                          {resume.shortLabel}
                        </p>
                        <h3
                          className={`mt-3 text-2xl font-semibold ${
                            index === 1 ? 'text-white' : 'text-[var(--color-ink)]'
                          }`}
                        >
                          {resume.title}
                        </h3>
                      </div>
                      <span className={index === 1 ? 'icon-badge-dark' : 'icon-badge'}>
                        <Icon className="h-5 w-5" />
                      </span>
                    </div>
                    <p
                      className={`mt-4 text-sm leading-7 ${
                        index === 1 ? 'text-white/[0.72]' : 'text-[var(--color-muted)]'
                      }`}
                    >
                      {resume.description}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {resume.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className={`chip ${index === 1 ? 'border-white/10 bg-white/10 text-white/[0.8] shadow-none' : ''}`}
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                    <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                      <a
                        href={resume.href}
                        download={resume.downloadName}
                        className={
                          index === 1
                            ? 'btn-secondary w-full sm:w-auto'
                            : 'btn-primary w-full sm:w-auto'
                        }
                      >
                        <Download className="h-4 w-4" />
                        Download PDF
                      </a>
                      <Link
                        to="/resume"
                        onClick={onClose}
                        className={
                          index === 1
                            ? 'btn-primary w-full sm:w-auto'
                            : 'btn-secondary w-full sm:w-auto'
                        }
                      >
                        Open resume page
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    </div>
                  </MotionDiv>
                );
              })}
            </div>
          </MotionDiv>
        </MotionDiv>
      ) : null}
    </AnimatePresence>
  );
}
