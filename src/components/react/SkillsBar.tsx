import AnimatedSkillsRow from "@/components/react/AnimatedSkillsRow";
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

export default function SkillsBar() {
  return (
    <div className="relative container mx-auto my-4 flex h-42 w-full flex-col gap-1 md:my-8 md:h-52 md:px-16 lg:my-12">
      <AnimatedSkillsRow skills={skills.frontend} direction="left" />
      <AnimatedSkillsRow skills={skills.backend} direction="right" />
      <AnimatedSkillsRow skills={skills.toolsAndDevOps} direction="left" />
      <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-12 bg-gradient-to-r from-base-100 from-40% to-transparent md:w-40 lg:w-56"></div>
      <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-24 bg-gradient-to-l from-base-100 from-40% to-transparent md:w-40 lg:w-56"></div>
    </div>
  );
}
