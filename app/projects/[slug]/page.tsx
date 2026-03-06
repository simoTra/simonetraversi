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
    const url = `https://simonetraversi.it/projects/${slug}`;
    const image = project.coverImage
      ? `https://simonetraversi.it${project.coverImage}`
      : 'https://simonetraversi.it/opengraph-image';
    return {
      title: project.title,
      description: project.description,
      keywords: [...project.tags, 'Simone Traversi', 'robotics', 'engineering'],
      alternates: { canonical: url },
      openGraph: {
        type: 'article',
        url,
        title: project.title,
        description: project.description,
        images: [{ url: image }],
        siteName: 'Simone Traversi',
      },
      twitter: {
        card: 'summary_large_image',
        title: project.title,
        description: project.description,
        images: [image],
      },
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

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.description,
    url: `https://simonetraversi.it/projects/${slug}`,
    dateCreated: String(project.year),
    keywords: project.tags.join(', '),
    image: project.coverImage
      ? `https://simonetraversi.it${project.coverImage}`
      : undefined,
    ...(project.link ? { sameAs: project.link } : {}),
    ...(project.github ? { codeRepository: project.github } : {}),
    author: {
      '@type': 'Person',
      name: 'Simone Traversi',
      url: 'https://simonetraversi.it',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProjectDetail project={project} />
    </>
  );
}
