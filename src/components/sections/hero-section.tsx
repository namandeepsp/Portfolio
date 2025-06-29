
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import contentConfig from '@/config/content.json';

export function HeroSection() {
  const heroContent = contentConfig.heroSection;
  return (
    <section id="home" className="relative flex h-screen min-h-[600px] items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://placehold.co/1920x1080.png"
          alt="Abstract background"
          fill
          style={{ objectFit: 'cover' }}
          className="opacity-20"
          priority
          data-ai-hint="abstract background"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/80 to-background"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="font-headline text-5xl font-extrabold tracking-tight text-primary sm:text-6xl md:text-7xl lg:text-8xl">
          {heroContent.mainName} <span className="text-foreground">{heroContent.mainSurname}</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto font-body text-xl text-foreground/80 sm:text-2xl md:text-3xl">
          {heroContent.subtitle}
        </p>
        <p className="mt-4 max-w-xl mx-auto text-md text-muted-foreground sm:text-lg">
          {heroContent.tagline}
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transition-transform hover:scale-105">
            <Link href="#projects">{heroContent.ctaViewWork}</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="shadow-lg transition-transform hover:scale-105">
            <Link href="#contact">{heroContent.ctaGetInTouch}</Link>
          </Button>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <Link href="#about" aria-label={heroContent.scrollToAboutAlt}>
          <ArrowDown className="h-8 w-8 text-primary animate-bounce" />
        </Link>
      </div>
    </section>
  );
}
