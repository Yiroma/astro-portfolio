import React, { useState, useEffect } from "react";
// components
import ThemeSwap from "@/components/react/ThemeSwap";
import HomeIcon from "@/assets/icons/HomeIcon";
import ProjectIcon from "@/assets/icons/ProjectIcon";
import ContactIcon from "@/assets/icons/ContactIcon";
// types
import type { NavItem } from "@/types/nav.type";

const navItems: NavItem[] = [
  {
    label: "Home",
    href: "#home",
    icon: "home",
  },
  {
    label: "Projects",
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
    const sections = document.querySelectorAll("div[id]");

    if (!sections.length) return;

    const observerCallback = (entries: any[]) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0.1,
    };

    const observer = new (window as any).IntersectionObserver(observerCallback, observerOptions);

    Array.from(sections).forEach((section) => observer.observe(section));

    if (sections.length > 0) {
      setActiveSection((sections[0] as any).id);
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
    <nav className="pointer-events-auto fixed bottom-4 left-1/2 z-50 flex -translate-x-1/2 transform gap-12 rounded-full border border-base-content/10 bg-base-content/5 px-8 py-3 text-xs backdrop-blur-md transition-all duration-300 hover:border-base-content/20 hover:bg-base-content/10 md:top-4 md:bottom-auto md:px-12 md:text-base">
      <ul className="flex items-center gap-6 md:gap-12">
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
                  class={`block h-5 w-5 md:hidden ${
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
