import React from 'react';
import { LocaleProvider } from './contexts/LocaleContext';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HeroSection from './components/home/HeroSection';
import AboutSection from './components/home/AboutSection';
import ServicesSection from './components/home/ServicesSection';
import ProjectsSection from './components/home/ProjectsSection';
import TestimonialsSection from './components/home/TestimonialsSection';
import ContactSection from './components/home/ContactSection';

function App() {
  return (
    <ThemeProvider>
      <LocaleProvider>
        <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
          <Header />
          <main className="flex-grow">
            <HeroSection />
            <AboutSection />
            <ServicesSection />
            <ProjectsSection />
            <TestimonialsSection />
            <ContactSection />
          </main>
          <Footer />
        </div>
      </LocaleProvider>
    </ThemeProvider>
  );
}

export default App;