export interface WorkExperience {
  id: string;
  role: string;
  company: string;
  duration: string;
  description: string[];
  logoUrl?: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  imageUrl?: string;
  tags: string[];
  liveLink?: string;
  repoLink?: string;
  features?: string[];
}

export interface Skill {
  id: string;
  name: string;
  proficiency: number; // 0-100
  icon?: React.ElementType; // Lucide icon component
}

export interface Certificate {
  id: string;
  name: string;
  issuingOrganization: string;
  date: string;
  credentialUrl?: string;
  imageUrl?: string;
}

export interface NavItem {
  label: string;
  href: string;
}
