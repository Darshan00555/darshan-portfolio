import Reveal from '../components/Reveal';
import SectionHeader from '../components/SectionHeader';
import { contactCards, serviceCards, siteConfig } from '../data/siteContent';
import { usePageMetadata } from '../lib/seo';
import emailjs from '@emailjs/browser';

import { useRef, useState } from 'react';

import {
  ArrowRight,
  Briefcase,
  Clock3,
  Mail,
  MapPin,
  Phone,
  SearchCheck,
  Sparkles,
} from 'lucide-react';

const initialFormData = {
  name: '',
  email: '',
  service: '',
  website: '',
  message: '',
};

const serviceHighlights = [
  {
    icon: Briefcase,
    title: 'Frontend builds',
    description: 'React interfaces, landing pages, and responsive portfolio or service redesigns.',
  },
  {
    icon: SearchCheck,
    title: 'SEO fixes',
    description:
      'On-page SEO, technical SEO, metadata, content structuring, and crawl improvements.',
  },
  {
    icon: Clock3,
    title: 'Performance',
    description:
      'Lighthouse, PageSpeed, and Core Web Vitals improvements tied to real implementation.',
  },
];

export default function Contact() {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(initialFormData);

  usePageMetadata({
    title: 'Contact | Start a Frontend or SEO Project',
    description:
      'Contact Darshan Singh for React frontend work, WordPress and Shopify development, SEO audits, technical SEO fixes, and website performance optimization.',
    path: '/contact',
    keywords: [
      'contact frontend developer',
      'contact SEO specialist',
      'React project inquiry',
      'WordPress and Shopify project inquiry',
      'technical SEO contact',
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      name: 'Contact Darshan Singh',
      url: `${siteConfig.baseUrl}/contact`,
      description:
        'Project inquiry page for frontend development, WordPress, Shopify, and SEO optimization work.',
    },
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm('service_05uiodo', 'template_kja9lhs', formRef.current, {
        publicKey: 'OtLeN4-GXrnnCCoNU',
      });

      setFormData(initialFormData);
      window.alert('Message sent successfully.');
    } catch (error) {
      console.error(error);
      window.alert('Unable to send the message right now. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-3 pt-2 pb-20 sm:px-4 sm:pt-3 lg:px-6 lg:pt-4">
      <div className="grid gap-6 xl:grid-cols-[0.88fr_1.12fr]">
        <div className="space-y-6">
          <Reveal>
            <div className="page-hero rounded-[1.75rem] p-4 sm:p-5 lg:p-6">
              <p className="eyebrow mb-5">Contact</p>
              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-balance text-[var(--color-ink)] sm:text-[3rem] lg:text-[3.1rem] lg:leading-[1.05]">
                Start a project for frontend development, SEO optimization, or a full redesign.
              </h1>
              <p className="mt-4 text-base leading-7 text-[var(--color-muted)] sm:text-lg">
                The inquiry flow is now designed to match the sharper positioning of the website and
                make the service options obvious from the first screen.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-3 xl:grid-cols-1">
            {contactCards.map((card, index) => (
              <Reveal key={card.title} delay={0.05 * index}>
                <article className="surface-card interactive-card rounded-[1.8rem] p-5">
                  <span className="icon-badge">
                    {index === 0 ? (
                      <Mail className="h-5 w-5" />
                    ) : index === 1 ? (
                      <Phone className="h-5 w-5" />
                    ) : (
                      <MapPin className="h-5 w-5" />
                    )}
                  </span>
                  <p className="mt-4 text-sm font-semibold text-[var(--color-ink)]">{card.title}</p>
                  {card.href ? (
                    <a
                      href={card.href}
                      className="mt-2 block text-sm leading-6 text-[var(--color-muted)] transition hover:text-[var(--color-accent)]"
                    >
                      {card.detail}
                    </a>
                  ) : (
                    <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
                      {card.detail}
                    </p>
                  )}
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.12}>
            <div className="dark-panel rounded-[1.9rem] p-5 sm:p-6">
              <div className="flex items-center gap-3">
                <span className="icon-badge-dark">
                  <Sparkles className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold tracking-[0.2em] text-white/[0.62] uppercase">
                    Service scope
                  </p>
                  <p className="text-lg font-semibold text-white">What you can ask for here</p>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {serviceCards
                  .flatMap((service) => service.items)
                  .map((item) => (
                    <span
                      key={item}
                      className="chip border-white/10 bg-white/10 text-white/[0.82] shadow-none"
                    >
                      {item}
                    </span>
                  ))}
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.08}>
          <div className="surface-card rounded-[2rem] p-5 sm:p-6 lg:p-7">
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {serviceHighlights.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.title} className="page-meta-card rounded-[1.4rem] p-4">
                    <span className="icon-badge h-11 w-11">
                      <Icon className="h-5 w-5" />
                    </span>
                    <p className="mt-4 text-sm font-semibold text-[var(--color-ink)]">
                      {item.title}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <form ref={formRef} onSubmit={handleSubmit} className="mt-8 grid gap-4">
              <div className="grid gap-4 md:grid-cols-2">
                <label className="grid gap-2">
                  <span className="text-sm font-medium text-[var(--color-ink)]">Name</span>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="field-input"
                    placeholder="Your name"
                  />
                </label>
                <label className="grid gap-2">
                  <span className="text-sm font-medium text-[var(--color-ink)]">Email</span>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="field-input"
                    placeholder="you@example.com"
                  />
                </label>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <label className="grid gap-2">
                  <span className="text-sm font-medium text-[var(--color-ink)]">Service</span>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="field-input"
                  >
                    <option value="">Select service type</option>
                    <option value="react_frontend">React frontend development</option>
                    <option value="wordpress_shopify">WordPress / Shopify development</option>
                    <option value="seo_optimization">SEO & optimization</option>
                    <option value="full_redesign">Full website redesign</option>
                  </select>
                </label>
                <label className="grid gap-2">
                  <span className="text-sm font-medium text-[var(--color-ink)]">Website</span>
                  <input
                    type="text"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    className="field-input"
                    placeholder="Current website or brand name"
                  />
                </label>
              </div>

              <label className="grid gap-2">
                <span className="text-sm font-medium text-[var(--color-ink)]">Project details</span>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="7"
                  className="textarea-input"
                  placeholder="Tell me about the redesign, frontend scope, SEO goals, or project timeline."
                />
              </label>

              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? 'Sending...' : 'Send project inquiry'}
                {!loading ? <ArrowRight className="h-4 w-4" /> : null}
              </button>
            </form>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
