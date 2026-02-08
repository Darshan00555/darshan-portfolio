import React from 'react';

import { Briefcase, FileText, Home, User } from 'lucide-react';

import { NavBar } from '@/components/ui/TubelightNavbar';

export function NavBarDemo() {
  const navItems = [
    { name: 'Home', url: '#Home', icon: Home },
    { name: 'About', url: '#About', icon: User },
    { name: 'Projects', url: '#Projects', icon: Briefcase },
    { name: 'Resume', url: '#Resume', icon: FileText },
  ];

  return <NavBar items={navItems} />;
}
