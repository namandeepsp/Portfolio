import { SectionWrapper } from "@/components/common/section-wrapper";
import { UserCircle } from "lucide-react";
import Image from "next/image";
import contentConfig from "@/config/content.json";

export function AboutSection() {
  const aboutContent = contentConfig.aboutSection;
  return (
    <SectionWrapper
      id="about"
      title={aboutContent.title}
      icon={UserCircle}
      className="bg-secondary/30"
    >
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2_">
        {/* <div className="relative aspect-square max-w-md mx-auto w-full">
           <Image
            src="https://placehold.co/600x600.png"
            alt="Naman"
            width={600}
            height={600}
            className="rounded-xl shadow-2xl object-cover"
            data-ai-hint="professional portrait"
          />
        </div> */}
        <div className="space-y-6 text-left md:text-left">
          <h3 className="font-headline text-2xl font-semibold text-primary md:text-3xl">
            {aboutContent.greeting}
          </h3>
          <p className="text-lg text-foreground/90 leading-relaxed">
            {aboutContent.paragraph1}
          </p>
          <p className="text-lg text-foreground/90 leading-relaxed">
            {aboutContent.paragraph2}
          </p>
          <p className="text-lg text-foreground/90 leading-relaxed">
            {aboutContent.paragraph3}
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
