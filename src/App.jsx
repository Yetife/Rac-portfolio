import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ImpactMetrics from './components/ImpactMetrics';
import Projects from './components/Projects';
import Experience from './components/Experience';
import SkillsMatrix from './components/SkillsMatrix';
import EngineeringPhilosophy from './components/EngineeringPhilosophy';
import Contact from './components/Contact';
import Footer from './components/Footer';
import useReveal from './hooks/useReveal';

export default function App() {
  useReveal();

  return (
    <div className="min-h-screen bg-cream text-ink">
      <Navbar />
      <main id="top">
        <Hero />
        <ImpactMetrics />
        <Projects />
        <Experience />
        <SkillsMatrix />
        <EngineeringPhilosophy />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
