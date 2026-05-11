import { TvMinimal, Server, Database, Boxes, ShieldCogIcon } from "@lucide/astro";
import type { AstroComponentFactory } from "astro/runtime/server/index.js";

export type SkillCategory = {
  title: string;
  skills: string[];
  icon: AstroComponentFactory;
  horizontalAtLg: boolean;
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Front-end",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Sass",
      "Shadcn/UI",
      "Figma",
      "Accessibilité",
    ],
    icon: TvMinimal,
    horizontalAtLg: false,
  },
  {
    title: "Back-end",
    skills: [
      "Node.js",
      "Express",
      "Java",
      "Spring Boot",
      "API REST",
      "GraphQL",
      "Apollo Server",
      "TypeORM",
    ],
    icon: Server,
    horizontalAtLg: false,
  },
  {
    title: "Données",
    skills: ["PostgreSQL", "MySQL", "SQLite", "MongoDB", "Redis"],
    icon: Database,
    horizontalAtLg: false,
  },
  {
    title: "DevOps & Qualité",
    skills: [
      "Git / GitHub",
      "Docker / Nginx",
      "CI/CD",
      "Vitest / Jest",
      "Playwright (E2E)",
      "RGAA / WCAG 2.1",
      "Jira / Notion",
    ],
    icon: ShieldCogIcon,
    horizontalAtLg: false,
  },
  {
    title: "Architecture",
    skills: ["MVC", "Clean Architecture", "Microservices", "UML", "Merise"],
    icon: Boxes,
    horizontalAtLg: true,
  },
];
