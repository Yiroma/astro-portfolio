import React, { useState, useEffect } from "react";
// components
import ThemeSwap from "@/components/react/ThemeSwap";
import HomeIcon from "@/assets/icons/HomeIcon";
import LogoIcon from "@/assets/logo";
import ProjectIcon from "@/assets/icons/ProjectIcon";
import ContactIcon from "@/assets/icons/ContactIcon";
// types
import type { NavItem } from "@/types/nav.type";

const navItems: NavItem[] = [
  {
    label: "Accueil",
    href: "#home",
    icon: "home",
  },
  {
    label: "Projets",
    href: "#projects",
    icon: "project",
  },
  {
    label: "Contact",
    href: "#contact",
    icon: "contact",
  },
];

const getIconComponent = (iconType: string) => {
  switch (iconType) {
    case "home":
      return HomeIcon;
    case "project":
      return ProjectIcon;
    case "contact":
      return ContactIcon;
    default:
      return HomeIcon;
  }
};

export default function Nav() {
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const sections = document.querySelectorAll(
      "section[id='home'], section[id='projects'], section[id='contact']"
    );

    if (!sections.length) return;

    const observerCallback = (entries: { isIntersecting: boolean; target: { id: string } }[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: "-10% 0px -10% 0px",
      threshold: [0.1, 0.3, 0.5, 0.7],
    };

    const observer = new window.IntersectionObserver(observerCallback, observerOptions);

    Array.from(sections).forEach((section) => observer.observe(section));

    if (sections.length > 0) {
      setActiveSection(sections[0].id);
    }

    return () => {
      Array.from(sections).forEach((section) => observer.unobserve(section));
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent, targetId: string) => {
    e.preventDefault();
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setActiveSection(targetId);
    }
  };

  return (
    <nav className="pointer-events-auto fixed bottom-4 left-1/2 z-50 flex w-full max-w-md -translate-x-1/2 transform items-center justify-between rounded-full border border-base-content/10 bg-base-100/60 px-8 py-3 text-xs backdrop-blur-md transition-all duration-300 hover:border-base-content/20 md:top-4 md:bottom-auto md:px-12 md:text-base">
      <LogoIcon className="mr-4 h-8 w-8 hover:text-primary" />
      <ul className="flex w-full items-center justify-around">
        {navItems.map((item) => {
          const IconComponent = getIconComponent(item.icon);
          const targetId = item.href.substring(1);
          const isActive = activeSection === targetId;

          return (
            <li key={item.href}>
              <a
                href={item.href}
                className={`flex flex-col items-center gap-2 text-xs transition-all duration-200 hover:scale-105 hover:text-base-content md:text-base lg:text-lg ${
                  isActive ? "scale-105 text-primary" : "text-base-content/80"
                }`}
                onClick={(e) => handleNavClick(e, targetId)}
              >
                <IconComponent
                  className={`block h-5 w-5 md:hidden ${
                    isActive ? "scale-105 text-primary" : "text-base-content/80"
                  }`}
                />
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
      <ThemeSwap />
    </nav>
  );
}
