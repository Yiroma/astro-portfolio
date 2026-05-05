export interface ProjectLink {
  label: string;
  href: string;
  variant?: "primary" | "outline";
  external?: boolean;
}

export interface Project {
  index: number;
  label: string;
  date?: string;
  title: string;
  subtitle: string;
  tags: string[];
  resume: string;
  context: string;
  problem: string;
  solution: string;
  result: string;
  links?: ProjectLink[];
  inProgress?: boolean;
  image?: string;
}
