"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { CertificatesSection } from "@/components/sections/certificates-section";
import { ResumeAssistantSection } from "@/components/sections/resume-assistant-section";
import { ContactSection } from "@/components/sections/contact-section";
import { navItems } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { SlidersHorizontal } from "lucide-react";
import contentConfig from "@/config/content.json";

export default function HomePage() {
  const [showExperience, setShowExperience] = useState(true);
  const [showProjects, setShowProjects] = useState(true);
  const [showCertificates, setShowCertificates] = useState(true);

  const displayableNavItems = navItems.filter((item) => {
    if (item.href === "#experience" && !showExperience) return false;
    if (item.href === "#projects" && !showProjects) return false;
    if (item.href === "#certificates" && !showCertificates) return false;
    return true;
  });

  const displayControlsContent = contentConfig.displayControlsSection;

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar navItems={displayableNavItems} />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />

        {/* <section id="display-controls" className="py-8 bg-muted/20">
          <div className="container mx-auto px-4 md:px-6">
            <Card className="max-w-lg mx-auto shadow-md">
              <CardHeader className="pb-4">
                <CardTitle className="font-headline text-lg text-primary flex items-center gap-2">
                  <SlidersHorizontal className="h-5 w-5"/>
                  {displayControlsContent.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between rounded-lg border p-3 shadow-sm">
                  <Label htmlFor="toggle-experience" className="flex flex-col space-y-1">
                    <span>{displayControlsContent.experienceLabel}</span>
                    <span className="font-normal leading-snug text-muted-foreground">
                      {displayControlsContent.experienceDescription}
                    </span>
                  </Label>
                  <Switch
                    id="toggle-experience"
                    checked={showExperience}
                    onCheckedChange={setShowExperience}
                    aria-label={`Toggle ${displayControlsContent.experienceLabel} section`}
                  />
                </div>
                <div className="flex items-center justify-between rounded-lg border p-3 shadow-sm">
                  <Label htmlFor="toggle-projects" className="flex flex-col space-y-1">
                    <span>{displayControlsContent.projectsLabel}</span>
                    <span className="font-normal leading-snug text-muted-foreground">
                      {displayControlsContent.projectsDescription}
                    </span>
                  </Label>
                  <Switch
                    id="toggle-projects"
                    checked={showProjects}
                    onCheckedChange={setShowProjects}
                    aria-label={`Toggle ${displayControlsContent.projectsLabel} section`}
                  />
                </div>
                <div className="flex items-center justify-between rounded-lg border p-3 shadow-sm">
                   <Label htmlFor="toggle-certificates" className="flex flex-col space-y-1">
                    <span>{displayControlsContent.certificatesLabel}</span>
                    <span className="font-normal leading-snug text-muted-foreground">
                      {displayControlsContent.certificatesDescription}
                    </span>
                  </Label>
                  <Switch
                    id="toggle-certificates"
                    checked={showCertificates}
                    onCheckedChange={setShowCertificates}
                    aria-label={`Toggle ${displayControlsContent.certificatesLabel} section`}
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </section> */}

        {showExperience && <ExperienceSection />}
        {showProjects && <ProjectsSection />}
        <SkillsSection />
        {showCertificates && <CertificatesSection />}
        <ResumeAssistantSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
