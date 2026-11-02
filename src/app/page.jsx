import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Works from '../components/Works';
import Process from '../components/Process';
import Skills from '../components/Skills';
import Services from '../components/Services';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F7F9F7] text-[#17231F] selection:bg-[#2C8C68] selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Works />
      <Process />
      <Skills />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
