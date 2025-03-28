"use client"

import { NavBar } from "@/components/ui/tubelight-navbar"
import { Home, User, Briefcase, FileText } from 'lucide-react'

export function NavContainer() {
  const navItems = [
    { name: 'Home', url: '#', icon: Home },
    { name: 'About', url: '#', icon: User },
    { name: 'Projects', url: '#', icon: Briefcase },
    { name: 'Resume', url: '#', icon: FileText }
  ]

  return <NavBar items={navItems} />
} 