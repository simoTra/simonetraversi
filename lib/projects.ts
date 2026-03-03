import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface Project {
  title: string;
  description: string;
  tags: string[];
  year: number;
  link: string;
  github: string;
  coverImage: string;
  slug: string;
  content: string;
}

const PROJECTS_DIR = path.join(process.cwd(), 'content/projects');

export function getAllProjectSlugs(): string[] {
  const files = fs.readdirSync(PROJECTS_DIR);
  return files
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.replace(/\.md$/, ''));
}

export function getProjectBySlug(slug: string): Project {
  const filePath = path.join(PROJECTS_DIR, `${slug}.md`);
  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(raw);

  return {
    title: data.title ?? '',
    description: data.description ?? '',
    tags: data.tags ?? [],
    year: data.year ?? new Date().getFullYear(),
    link: data.link ?? '',
    github: data.github ?? '',
    coverImage: data.coverImage ?? '',
    slug,
    content,
  };
}
