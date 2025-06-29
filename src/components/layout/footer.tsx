
"use client";

import React, { useState, useEffect } from 'react';
import contentConfig from '@/config/content.json';

export function Footer() {
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const footerContent = contentConfig.footer;

  return (
    <footer className="border-t bg-background/80">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 text-center md:flex-row md:px-6">
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear || new Date().getFullYear()} {footerContent.brandName}. {footerContent.copyrightSuffix}
        </p>
        <p className="text-sm text-muted-foreground">
          {footerContent.builtWithText}
        </p>
      </div>
    </footer>
  );
}
