import React from 'react';

import { Code2, Github, Linkedin, Mail, Twitter } from 'lucide-react';

import { Footer } from './ui/AnimatedFooter';

export default function PortfolioFooter({ theme = 'light' }) {
  const socialLinks = [
    {
      icon: <Twitter className="h-full w-full" />,
      href: 'https://twitter.com/darshansingh',
      label: 'Twitter',
    },
    {
      icon: <Linkedin className="h-full w-full" />,
      href: 'https://www.linkedin.com/in/darshansingh977/',
      label: 'LinkedIn',
    },
    {
      icon: <Github className="h-full w-full" />,
      href: 'https://github.com/Darshan00555',
      label: 'GitHub',
    },
    {
      icon: <Mail className="h-full w-full" />,
      href: 'mailto:contact@darshansingh.dev',
      label: 'Email',
    },
  ];

  const navLinks = [
    { label: 'Home', href: '#Home' },
    { label: 'About', href: '#About' },
    { label: 'Projects', href: '#Projects' },
    { label: 'Resume', href: '#Resume' },
  ];

  return (
    <Footer
      brandName="Darshan Singh"
      brandDescription="Frontend Developer & UI Designer crafting bespoke digital experiences with modern web technologies. Specializing in React, WordPress, Shopify, and interactive design."
      socialLinks={socialLinks}
      navLinks={navLinks}
      creatorName="Darshan Singh"
      creatorUrl="https://darshansingh.dev"
      brandIcon={
        <Code2 className="h-8 w-8 text-white drop-shadow-lg sm:h-10 sm:w-10 md:h-14 md:w-14" />
      }
      theme={theme}
    />
  );
}
