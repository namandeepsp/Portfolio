
import { SectionWrapper } from '@/components/common/section-wrapper';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { workExperiences } from '@/lib/data';
import type { WorkExperience } from '@/types';
import { Briefcase, CalendarDays } from 'lucide-react';
import Image from 'next/image';
import contentConfig from '@/config/content.json';

function ExperienceItem({ experience }: { experience: WorkExperience }) {
  return (
    <Card className="overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl h-full">
      <CardHeader className="flex flex-row items-start gap-4 p-4 md:p-6 bg-muted/30">
        {experience.logoUrl && (
          <Image
            src={experience.logoUrl}
            alt={`${experience.company} logo`}
            width={56}
            height={56}
            className="rounded-md border"
            data-ai-hint="company logo"
          />
        )}
        <div className="flex-grow">
          <CardTitle className="font-headline text-xl text-primary">{experience.role}</CardTitle>
          <CardDescription className="text-md text-foreground/80">{experience.company}</CardDescription>
          <div className="mt-1 flex items-center text-sm text-muted-foreground">
            <CalendarDays className="mr-1.5 h-4 w-4" />
            {experience.duration}
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4 md:p-6">
        <ul className="list-disc space-y-2 pl-5 text-foreground/90">
          {experience.description.map((desc, index) => (
            <li key={index}>{desc}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

export function ExperienceSection() {
  if (workExperiences.length === 0) return null;
  const experienceContent = contentConfig.experienceSection;

  return (
    <SectionWrapper id="experience" title={experienceContent.title} subtitle={experienceContent.subtitle} icon={Briefcase}>
      <div className="relative space-y-12 md:pl-0 pl-6"> {/* Added pl-6 for mobile */}
        <div className="absolute left-2 top-0 bottom-0 w-1 bg-border rounded-full md:left-1/2 md:-translate-x-1/2"></div>

        {workExperiences.map((exp, index) => (
          <div key={exp.id} className={`relative md:flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} md:items-start md:gap-8`}>
             {/* Timeline dot for desktop */}
            <div className="hidden md:block absolute top-8 md:top-1/2 md:-translate-y-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-md
                            ${index % 2 === 0 ? 'md:left-1/2 md:-translate-x-[calc(50%+2px)]' : 'md:right-1/2 md:translate-x-[calc(50%+2px)]'}">
            </div>
            {/* Timeline dot for mobile (always on the left) */}
            <div className="md:hidden absolute left-[-22px] top-8 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-md"></div>
            
            <div className="w-full md:w-[calc(50%-2rem)]"> {/* Adjusted width for desktop to account for gap */}
              <ExperienceItem experience={exp} />
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
