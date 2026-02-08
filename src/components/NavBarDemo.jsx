import React from 'react'
import { Home, User, Briefcase, FileText } from 'lucide-react'
import { NavBar } from "@/components/ui/TubelightNavbar"

export function NavBarDemo() {
  const navItems = [
    { name: 'Home', url: '#', icon: Home },
    { name: 'About', url: '#', icon: User },
    { name: 'Projects', url: '#', icon: Briefcase },
    { name: 'Resume', url: '#', icon: FileText }
  ]

  return <NavBar items={navItems} />
}
