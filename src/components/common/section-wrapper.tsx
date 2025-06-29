"use client";

import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import type { LucideIcon } from 'lucide-react';

interface SectionWrapperProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  icon?: LucideIcon;
}

export function SectionWrapper({
  id,
  title,
  subtitle,
  children,
  className,
  icon: Icon,
}: SectionWrapperProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id={id}
      ref={sectionRef}
      className={cn(
        'container mx-auto px-4 md:px-6 scroll-animate',
        isVisible && 'scroll-animate-visible',
        className
      )}
    >
      <div className="mb-8 md:mb-12 text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl flex items-center justify-center gap-3">
          {Icon && <Icon className="h-8 w-8 sm:h-10 sm:w-10" />}
          {title}
        </h2>
        {subtitle && (
          <p className="mt-3 text-lg text-muted-foreground sm:mt-4 sm:text-xl">
            {subtitle}
          </p>
        )}
      </div>
      {children}
    </section>
  );
}
