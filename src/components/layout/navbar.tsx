
"use client";

import type { NavItem } from '@/types';
import Link from 'next/link';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu, CodeXml } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { ThemeToggle } from '@/components/layout/theme-toggle';
import contentConfig from '@/config/content.json';

interface NavbarProps {
  navItems: NavItem[];
}

export function Navbar({ navItems }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      let currentSection = '';
      navItems.forEach(item => {
        const section = document.getElementById(item.href.substring(1));
        if (section && section.offsetTop <= window.scrollY + window.innerHeight / 2) {
          currentSection = item.href.substring(1);
        }
      });
      if (currentSection) {
        setActiveSection(currentSection);
      } else if (window.scrollY < window.innerHeight / 2) {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  const NavLinks = ({isMobile = false}: {isMobile?: boolean}) => (
    navItems.map((item) => (
      <Link
        key={item.label}
        href={item.href}
        className={`font-medium transition-colors hover:text-primary ${
          activeSection === item.href.substring(1) ? 'text-primary' : 'text-foreground/80'
        } ${isMobile ? 'block py-2 text-lg' : ''}`}
      >
        {item.label}
      </Link>
    ))
  );

  const navbarContent = contentConfig.navbar;

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ease-in-out ${
        isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-md' : 'bg-transparent border-transparent'
      }`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="#home" className="flex items-center gap-2">
          <CodeXml className="h-7 w-7 text-primary" />
          <span className="font-headline text-xl font-bold text-primary">{navbarContent.brandName}</span>
        </Link>
        <div className="flex items-center gap-4">
          <nav className="hidden gap-6 md:flex">
            <NavLinks />
          </nav>
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader className="mb-4 text-left">
                <SheetTitle className="text-lg font-semibold">{navbarContent.mobileNavTitle}</SheetTitle>
              </SheetHeader>
              <nav className="grid gap-6 text-lg font-medium">
                <NavLinks isMobile={true} />
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
