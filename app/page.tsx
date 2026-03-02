import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Resume from '@/components/Resume';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Cursor from '@/components/Cursor';

export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
      <Cursor />
    </div>
  );
}
