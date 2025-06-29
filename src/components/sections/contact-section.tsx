import { SectionWrapper } from "@/components/common/section-wrapper";
import { Button } from "@/components/ui/button";
import { socialLinks } from "@/lib/data";
import { Mail, Download } from "lucide-react";
import Link from "next/link";
import contentConfig from "@/config/content.json";

export function ContactSection() {
  const contactContent = contentConfig.contactSection;
  return (
    <SectionWrapper
      id="contact"
      title={contactContent.title}
      subtitle={contactContent.subtitle}
      icon={Mail}
    >
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-lg text-foreground/80 mb-8">
          {contactContent.introParagraph}
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {socialLinks.map((link) => (
            <Button
              key={link.name}
              asChild
              variant="outline"
              size="lg"
              className="shadow-md hover:shadow-lg transition-shadow hover:bg-accent/10"
            >
              <Link
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Connect on ${link.name}`}
              >
                <link.icon className="mr-2 h-5 w-5" />
                {link.name}
              </Link>
            </Button>
          ))}
        </div>
        <Button
          asChild
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transition-transform hover:scale-105"
        >
          {/* Replace with actual resume link */}
          <Link
            href="/assets/Naman-deep-singh.pdf"
            target="_blank"
            download="Naman-deep-singh.pdf"
          >
            <Download className="mr-2 h-5 w-5" />
            {contactContent.downloadResumeButton}
          </Link>
        </Button>
      </div>
    </SectionWrapper>
  );
}
