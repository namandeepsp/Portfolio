
import { SectionWrapper } from '@/components/common/section-wrapper';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { certificates } from '@/lib/data';
import type { Certificate } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { Award, ExternalLink, CalendarDays } from 'lucide-react';
import contentConfig from '@/config/content.json';

function CertificateItem({ certificate }: { certificate: Certificate }) {
  const certificatesContent = contentConfig.certificatesSection;
  return (
    <Card className="flex flex-col overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl h-full">
      {certificate.imageUrl && (
         <div className="relative aspect-[3/2] w-full bg-muted">
          <Image
            src={certificate.imageUrl}
            alt={certificate.name}
            fill
            style={{ objectFit: 'contain' }}
            className="p-2"
            data-ai-hint="certificate document"
          />
        </div>
      )}
      <CardHeader className="p-4 md:p-6">
        <CardTitle className="font-headline text-lg text-primary">{certificate.name}</CardTitle>
        <CardDescription className="text-sm text-foreground/80">{certificate.issuingOrganization}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow p-4 md:p-6 pt-0">
        <div className="flex items-center text-xs text-muted-foreground">
          <CalendarDays className="mr-1.5 h-3.5 w-3.5" />
          {certificatesContent.issuedLabel} {certificate.date}
        </div>
      </CardContent>
      {certificate.credentialUrl && (
        <CardFooter className="p-4 md:p-6 pt-0">
          <Button asChild variant="outline" size="sm" className="w-full">
            <Link href={certificate.credentialUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" /> {certificatesContent.viewCredentialButton}
            </Link>
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}

export function CertificatesSection() {
  if (certificates.length === 0) return null;
  const certificatesContent = contentConfig.certificatesSection;

  return (
    <SectionWrapper id="certificates" title={certificatesContent.title} subtitle={certificatesContent.subtitle} icon={Award}>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.map(cert => (
          <CertificateItem key={cert.id} certificate={cert} />
        ))}
      </div>
    </SectionWrapper>
  );
}
