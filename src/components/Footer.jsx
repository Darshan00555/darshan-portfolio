import { contactCards, navigationLinks, siteConfig, socialLinks } from '../data/siteContent';

import { Link } from 'react-router-dom';

import { ArrowUpRight, Mail, PhoneCall, Sparkles } from 'lucide-react';

import Reveal from './Reveal';

export default function Footer() {
  return (
    <footer className="relative z-10 px-3 pt-5 pb-3 sm:px-4 lg:px-6">
      <Reveal className="mx-auto max-w-7xl">
        <div className="dark-panel rounded-[2rem] px-5 py-8 sm:px-8 sm:py-10">
          <div className="grid gap-8 xl:grid-cols-[1.2fr_0.8fr_0.9fr]">
            <div>
              <p className="eyebrow mb-4 text-white/[0.8]">Darshan Singh</p>
              <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl">
                Portfolio websites that look premium, move smoothly, and convert better.
              </h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-white/[0.72]">
                React frontend builds, WordPress and Shopify delivery, and SEO improvements are now
                presented in one sharper experience instead of a plain portfolio shell.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={`mailto:${siteConfig.email}`} className="btn-secondary">
                  <Mail className="h-4 w-4" />
                  Email me
                </a>
                <a href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`} className="btn-primary">
                  <PhoneCall className="h-4 w-4" />
                  Call now
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <div className="dark-tile rounded-[1.5rem] p-4">
                <div className="flex items-center gap-3">
                  <span className="icon-badge-dark">
                    <Sparkles className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold tracking-[0.2em] text-white/[0.62] uppercase">
                      Navigation
                    </p>
                    <p className="text-lg font-semibold text-white">Explore the portfolio</p>
                  </div>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {navigationLinks.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      className="chip border-white/10 bg-white/10 text-white/[0.82] shadow-none transition hover:bg-white/[0.14]"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="dark-tile rounded-[1.5rem] p-4">
                <p className="text-sm font-semibold tracking-[0.2em] text-white/[0.62] uppercase">
                  Social links
                </p>
                <div className="mt-4 grid gap-2">
                  {socialLinks.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                      className="flex items-center justify-between rounded-[1rem] border border-white/10 bg-white/[0.08] px-4 py-3 text-sm font-medium text-white/[0.82] transition hover:bg-white/[0.12]"
                    >
                      <span>{item.label}</span>
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {contactCards.map((card) => (
                <div key={card.title} className="dark-tile rounded-[1.5rem] p-4">
                  <p className="text-xs font-semibold tracking-[0.2em] text-white/[0.62] uppercase">
                    {card.title}
                  </p>
                  {card.href ? (
                    <a
                      href={card.href}
                      className="mt-3 block text-base font-semibold text-white transition hover:text-white/[0.8]"
                    >
                      {card.detail}
                    </a>
                  ) : (
                    <p className="mt-3 text-base font-semibold text-white">{card.detail}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="section-divider my-8 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.18),transparent)]" />

          <div className="flex flex-col gap-3 text-sm text-white/[0.62] sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} {siteConfig.name}. Responsive across mobile, tablet, and
              laptop screens.
            </p>
            <p>Built with React, motion, SEO structure, and cleaner UI hierarchy.</p>
          </div>
        </div>
      </Reveal>
    </footer>
  );
}
