
import { SectionWrapper } from '@/components/common/section-wrapper';
import { Progress } from '@/components/ui/progress';
import { skills } from '@/lib/data';
import type { Skill } from '@/types';
import { Code } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import contentConfig from '@/config/content.json';

function SkillItem({ skill }: { skill: Skill }) {
  const IconComponent = skill.icon;
  return (
    <Card className="shadow-sm hover:shadow-md transition-shadow">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div className="flex items-center gap-2">
          {IconComponent && <IconComponent className="h-5 w-5 text-primary" />}
          <CardTitle className="text-md font-medium">{skill.name}</CardTitle>
        </div>
        <span className="text-sm text-muted-foreground">{skill.proficiency}%</span>
      </CardHeader>
      <CardContent>
        <Progress value={skill.proficiency} aria-label={`${skill.name} proficiency ${skill.proficiency}%`} className="h-2" />
      </CardContent>
    </Card>
  );
}

export function SkillsSection() {
  if (skills.length === 0) return null;
  const skillsContent = contentConfig.skillsSection;

  return (
    <SectionWrapper id="skills" title={skillsContent.title} subtitle={skillsContent.subtitle} icon={Code} className="bg-secondary/30">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map(skill => (
          <SkillItem key={skill.id} skill={skill} />
        ))}
      </div>
    </SectionWrapper>
  );
}
