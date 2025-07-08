// import AnimatedSkillsRow from "@/components/react/AnimatedSkillsRow";
// icons
import Api from "@/assets/icons/api.svg?url";
import Apollo from "@/assets/icons/apollo.svg?url";
import Docker from "@/assets/icons/docker.svg?url";
import Eslint from "@/assets/icons/eslint.svg?url";
import Express from "@/assets/icons/express.svg?url";
import Figma from "@/assets/icons/figma.svg?url";
import Git from "@/assets/icons/git.svg?url";
import Github from "@/assets/icons/github.svg?url";
import Graphql from "@/assets/icons/graphql.svg?url";
import Husky from "@/assets/icons/husky.svg?url";
import Jest from "@/assets/icons/jest.svg?url";
import Mysql from "@/assets/icons/mysql.svg?url";
import Nextjs from "@/assets/icons/next.svg?url";
import Nginx from "@/assets/icons/nginx.svg?url";
import Nodejs from "@/assets/icons/node.svg?url";
import Playwright from "@/assets/icons/playwright.svg?url";
import Postgresql from "@/assets/icons/postgre.svg?url";
import Prettier from "@/assets/icons/prettier.svg?url";
import ReactIcon from "@/assets/icons/react.svg?url";
import Redis from "@/assets/icons/redis.svg?url";
import Shadcn from "@/assets/icons/shadcn.svg?url";
import Tailwind from "@/assets/icons/tailwindcss.svg?url";
import Typescript from "@/assets/icons/typescript.svg?url";

const skills = {
  frontend: [
    { name: "React", icon: ReactIcon },
    { name: "Next", icon: Nextjs },
    { name: "Typescript", icon: Typescript },
    { name: "Tailwind", icon: Tailwind },
    { name: "Shadcn", icon: Shadcn },
    { name: "Figma", icon: Figma },
  ],
  backend: [
    { name: "Node", icon: Nodejs },
    { name: "Express", icon: Express },
    { name: "REST", icon: Api },
    { name: "GraphQL", icon: Graphql },
    { name: "Apollo", icon: Apollo },
    { name: "MySQL", icon: Mysql },
    { name: "Postgres", icon: Postgresql },
    { name: "Redis", icon: Redis },
  ],
  toolsAndDevOps: [
    { name: "Docker", icon: Docker },
    { name: "Nginx", icon: Nginx },
    { name: "Git", icon: Git },
    { name: "Github", icon: Github },
    { name: "ESLint", icon: Eslint },
    { name: "Prettier", icon: Prettier },
    { name: "Husky", icon: Husky },
    { name: "Jest", icon: Jest },
    { name: "Playwright", icon: Playwright },
  ],
};

// Composant simple pour tester
function SimpleSkillsRow({
  skills,
  title,
}: {
  skills: Array<{ name: string; icon: string }>;
  title: string;
}) {
  return (
    <div className="mb-4">
      <h3 className="mb-2 text-lg font-bold text-primary">{title}</h3>
      <div className="flex flex-wrap gap-4">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex items-center gap-2 rounded-lg bg-base-200 px-3 py-2"
          >
            <img src={skill.icon} alt={skill.name} className="h-6 w-6 rounded-sm" />
            <span className="font-title text-sm">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SkillsBar() {
  return (
    <div className="hero-content mx-auto flex w-full flex-col gap-4 md:px-16">
      <h2 className="mb-4 text-center text-2xl font-bold">Mes Compétences</h2>
      <SimpleSkillsRow skills={skills.frontend} title="Frontend" />
      <SimpleSkillsRow skills={skills.backend} title="Backend" />
      <SimpleSkillsRow skills={skills.toolsAndDevOps} title="DevOps & Outils" />
    </div>
  );
}
