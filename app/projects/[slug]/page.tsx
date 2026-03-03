import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getAllProjectSlugs, getProjectBySlug } from '@/lib/projects';
import ProjectDetail from '@/components/ProjectDetail';

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  try {
    const project = getProjectBySlug(slug);
    return {
      title: `${project.title} — Simone Traversi`,
      description: project.description,
    };
  } catch {
    return { title: 'Project — Simone Traversi' };
  }
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let project;
  try {
    project = getProjectBySlug(slug);
  } catch {
    notFound();
  }

  return <ProjectDetail project={project} />;
}
