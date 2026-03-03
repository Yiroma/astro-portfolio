import AnimatedSkillsRow from "@/components/react/AnimatedSkillsRow";

const icons = import.meta.glob<string>("/src/assets/icons/tech/*.svg", {
  eager: true,
  query: "?url",
  import: "default",
});

const icon = (name: string): string => icons[`/src/assets/icons/tech/${name}.svg`];

const skills = {
  frontend: [
    { name: "React", icon: icon("react") },
    { name: "Next", icon: icon("next") },
    { name: "Typescript", icon: icon("typescript") },
    { name: "Tailwind", icon: icon("tailwindcss") },
    { name: "Shadcn", icon: icon("shadcn") },
    { name: "Figma", icon: icon("figma") },
  ],
  backend: [
    { name: "Node", icon: icon("node") },
    { name: "Express", icon: icon("express") },
    { name: "REST", icon: icon("api") },
    { name: "GraphQL", icon: icon("graphql") },
    { name: "Apollo", icon: icon("apollo") },
    { name: "MySQL", icon: icon("mysql") },
    { name: "Postgres", icon: icon("postgre") },
    { name: "Redis", icon: icon("redis") },
    { name: "Java", icon: icon("java") },
    { name: "Spring", icon: icon("spring") },
  ],
  toolsAndDevOps: [
    { name: "Docker", icon: icon("docker") },
    { name: "Nginx", icon: icon("nginx") },
    { name: "Git", icon: icon("git") },
    { name: "Github", icon: icon("github") },
    { name: "ESLint", icon: icon("eslint") },
    { name: "Prettier", icon: icon("prettier") },
    { name: "Husky", icon: icon("husky") },
    { name: "Jest", icon: icon("jest") },
    { name: "Playwright", icon: icon("playwright") },
  ],
};

export default function SkillsBar() {
  return (
    <div className="relative container mx-auto my-4 flex h-42 w-full flex-col gap-1 md:my-8 md:h-52 md:px-16 lg:my-12">
      <AnimatedSkillsRow skills={skills.frontend} direction="left" />
      <AnimatedSkillsRow skills={skills.backend} direction="right" />
      <AnimatedSkillsRow skills={skills.toolsAndDevOps} direction="left" />
      <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-12 bg-gradient-to-r from-base-200 from-40% to-transparent md:w-40 lg:w-56"></div>
      <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-24 bg-gradient-to-l from-base-200 from-40% to-transparent md:w-40 lg:w-56"></div>
    </div>
  );
}
