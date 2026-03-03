import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Resume from '@/components/Resume';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { getAllProjectSlugs, getProjectBySlug } from '@/lib/projects';

export default function Home() {
  const projects = getAllProjectSlugs().map((slug) => {
    const { title, description, tags, coverImage } = getProjectBySlug(slug);
    return { slug, title, description, tags, coverImage };
  });

  return (
    <div>
      <Hero />
      <About />
      <Experience />
      <Projects projects={projects} />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}
