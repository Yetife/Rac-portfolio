import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ImpactMetrics from './components/ImpactMetrics';
import Projects from './components/Projects';
import Experience from './components/Experience';
import SkillsMatrix from './components/SkillsMatrix';
import EngineeringPhilosophy from './components/EngineeringPhilosophy';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 bg-grid-pattern relative selection:bg-emerald-500/20 selection:text-emerald-300 font-sans">
      {/* Top Ambient Glow */}
      <div className="absolute top-0 left-0 right-0 h-96 bg-radial-glow pointer-events-none -z-10" />

      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <ImpactMetrics />
        <Projects />
        <Experience />
        <SkillsMatrix />
        <EngineeringPhilosophy />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}