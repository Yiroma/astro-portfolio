import { motion } from "motion/react";
//types
import type { AnimatedSkillsRowProps } from "@/types/animatedSkills.type";

export default function AnimatedSkillsRow({ skills, direction }: AnimatedSkillsRowProps) {
  const duplicatedSkills = [...skills, ...skills, ...skills];
  const animationDirection = direction === "left" ? -50 : 50;

  return (
    <div className="w-full overflow-hidden">
      <motion.ul
        className="hero-content flex flex-row gap-12 whitespace-nowrap"
        animate={{
          x: [`0%`, `${animationDirection}%`],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
        style={{
          width: "200%",
        }}
      >
        {duplicatedSkills.map((skill, index) => (
          <li key={`${skill.name}-${index}`} className="flex flex-shrink-0 items-center gap-2">
            <img src={skill.icon} alt="" className="h-6 w-6 rounded-sm" />
            <span className="font-title text-lg">{skill.name}</span>
          </li>
        ))}
      </motion.ul>
    </div>
  );
}
