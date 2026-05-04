import { GithubIcon, LinkedinIcon, MailIcon } from "@assets/icons/ui";

export const navItems = [
  { label: "Profil", href: "#profil" },
  { label: "Réalisations", href: "#realisations" },
  { label: "Compétences", href: "#competences" },
  { label: "Parcours", href: "#parcours" },
  { label: "Contact", href: "#contact" },
] as const;

export const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/Yiroma",
    icon: GithubIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/yiromaric/",
    icon: LinkedinIcon,
  },
  {
    label: "Email",
    href: "mailto:yiromaric@gmail.com?subject=Contact%20depuis%20votre%20portfolio",
    icon: MailIcon,
  },
];
