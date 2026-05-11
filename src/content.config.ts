import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "zod";

const linkSchema = z.object({
  label: z.string(),
  href: z.string().url(),
  variant: z.enum(["primary", "outline", "ghost"]),
  external: z.boolean(),
  icon: z.string(),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/projects" }),
  schema: z.object({
    index: z.number(),
    label: z.string(),
    date: z.string(),
    title: z.string(),
    subtitle: z.string(),
    tags: z.array(z.string()),
    resume: z.string(),
    context: z.string(),
    problem: z.string(),
    solution: z.string(),
    result: z.string(),
    links: z.array(linkSchema),
    image: z.string(),
    inProgress: z.boolean().optional(),
  }),
});

const timeline = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/timeline" }),
  schema: z.object({
    order: z.number(),
    period: z.string(),
    title: z.string(),
    subtitle: z.string(),
    description: z.string(),
    isCurrent: z.boolean().optional(),
  }),
});

const profile = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/profile" }),
  schema: z.object({
    order: z.number(),
    eyebrow: z.string(),
    title: z.string(),
    tags: z.array(z.string()),
    description: z.string(),
    illustration: z.string(),
  }),
});

export const collections = { projects, timeline, profile };
