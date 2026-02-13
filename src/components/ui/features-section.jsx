import { Bell, Calendar, Code, Globe, Search } from 'lucide-react';

import { BentoCard, BentoGrid } from '@/components/ui/bento-grid';

const features = [
  {
    Icon: Code,
    name: 'Clean Code Architecture',
    description:
      'Write maintainable, scalable, and efficient code following industry best practices.',
    href: '#Projects',
    cta: 'View Projects',
    background: (
      <div className="absolute -top-20 -right-20 h-[200px] w-[200px] rounded-full bg-cyan-500/20 blur-3xl" />
    ),
    className: 'lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3',
  },
  {
    Icon: Search,
    name: 'SEO Optimization',
    description:
      'Enhance visibility and ranking on search engines with semantic HTML and performance tuning.',
    href: '#contact',
    cta: 'Get Audit',
    background: (
      <div className="absolute -top-20 -right-20 h-[200px] w-[200px] rounded-full bg-purple-500/20 blur-3xl" />
    ),
    className: 'lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3',
  },
  {
    Icon: Globe,
    name: 'Global Reach',
    description:
      'Build applications that support internationalization and reach a global audience.',
    href: '#contact',
    cta: 'Expand Now',
    background: (
      <div className="absolute -top-20 -right-20 h-[200px] w-[200px] rounded-full bg-green-500/20 blur-3xl" />
    ),
    className: 'lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4',
  },
  {
    Icon: Calendar,
    name: 'Timely Delivery',
    description: 'Commitment to deadlines with agile methodologies and transparent communication.',
    href: '#contact',
    cta: 'Hire Me',
    background: (
      <div className="absolute -top-20 -right-20 h-[200px] w-[200px] rounded-full bg-yellow-500/20 blur-3xl" />
    ),
    className: 'lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2',
  },
  {
    Icon: Bell,
    name: '24/7 Support',
    description:
      'Reliable post-launch support and maintenance to keep your application running smoothly.',
    href: '#contact',
    cta: 'Contact Support',
    background: (
      <div className="absolute -top-20 -right-20 h-[200px] w-[200px] rounded-full bg-red-500/20 blur-3xl" />
    ),
    className: 'lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4',
  },
];

export default function FeaturesSection() {
  return (
    <BentoGrid className="lg:grid-rows-3">
      {features.map((feature) => (
        <BentoCard key={feature.name} {...feature} />
      ))}
    </BentoGrid>
  );
}
