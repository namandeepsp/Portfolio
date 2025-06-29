"use client";

import React, { useState, useMemo } from "react";
import { SectionWrapper } from "@/components/common/section-wrapper";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/lib/data";
import type { Project } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { Lightbulb, Github, ExternalLink, Filter } from "lucide-react";
import contentConfig from "@/config/content.json";

function ProjectCard({ project }: { project: Project }) {
  const projectsContent = contentConfig.projectsSection;
  return (
    <Card className="flex flex-col overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl h-full">
      {project.imageUrl && (
        <div className="relative aspect-video w-full">
          <Image
            src={project.imageUrl}
            alt={project.name}
            fill
            style={{ objectFit: "fill" }}
            data-ai-hint="project technology"
          />
        </div>
      )}
      <CardHeader className="p-4 md:p-6">
        <CardTitle className="font-headline text-xl text-primary">
          {project.name}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow p-4 md:p-6 pt-0">
        <p className="text-sm text-foreground/80 mb-3">{project.description}</p>
        {project.features && project.features.length > 0 && (
          <div className="mb-3">
            <h4 className="text-xs font-semibold text-muted-foreground mb-1">
              {projectsContent.keyFeaturesLabel}
            </h4>
            <ul className="list-disc list-inside text-xs text-foreground/70 space-y-0.5">
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
        )}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-4 md:p-6 pt-0 flex justify-start gap-2">
        {project.liveLink && (
          <Button
            asChild
            variant="outline"
            size="sm"
            className="bg-accent hover:bg-accent/90 text-accent-foreground"
          >
            <Link
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="mr-2 h-4 w-4" />{" "}
              {projectsContent.liveDemoButton}
            </Link>
          </Button>
        )}
        {project.repoLink && (
          <Button asChild variant="outline" size="sm">
            <Link
              href={project.repoLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-4 w-4" />{" "}
              {projectsContent.sourceCodeButton}
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}

export function ProjectsSection() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const allTags = useMemo(
    () => Array.from(new Set(projects.flatMap((p) => p.tags))),
    []
  );

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const filteredProjects = useMemo(() => {
    if (selectedTags.length === 0) return projects;
    return projects.filter((project) =>
      selectedTags.every((tag) => project.tags.includes(tag))
    );
  }, [selectedTags]);

  if (projects.length === 0) return null;
  const projectsContent = contentConfig.projectsSection;

  return (
    <SectionWrapper
      id="projects"
      title={projectsContent.title}
      subtitle={projectsContent.subtitle}
      icon={Lightbulb}
      className="bg-background"
    >
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Filter className="h-5 w-5 text-muted-foreground" />
          <h3 className="text-lg font-medium text-foreground">
            {projectsContent.filterLabel}
          </h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {allTags.map((tag) => (
            <Button
              key={tag}
              variant={selectedTags.includes(tag) ? "default" : "outline"}
              size="sm"
              onClick={() => toggleTag(tag)}
              className={`transition-all ${
                selectedTags.includes(tag)
                  ? "bg-primary text-primary-foreground"
                  : ""
              }`}
            >
              {tag}
            </Button>
          ))}
          {selectedTags.length > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSelectedTags([])}
            >
              {projectsContent.clearFiltersButton}
            </Button>
          )}
        </div>
      </div>
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <p className="text-center text-muted-foreground text-lg">
          {projectsContent.noProjectsMessage}
        </p>
      )}
    </SectionWrapper>
  );
}
