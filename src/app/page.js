'use client';

import { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import Navigation from '../components/Navigation';
import ExecutiveSummary from '../components/ExecutiveSummary';
import ProductDeepDive from '../components/ProductDeepDive';
import UserPersonas from '../components/UserPersonas';
import GoToMarket from '../components/GoToMarket';
import ProductMetrics from '../components/ProductMetrics';
import Financials from '../components/Financials';
import TwoNarratives from '../components/TwoNarratives';
import Competition from '../components/Competition';
import SWOT from '../components/SWOT';
import Roadmap from '../components/Roadmap';
import Footer from '../components/Footer';

export default function Home() {
  const [activeSection, setActiveSection] = useState('summary');

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'summary', 'product', 'personas', 'gtm', 'metrics',
        'financials', 'narrative', 'competition', 'swot', 'roadmap'
      ];

      const scrollPosition = window.scrollY + 200; // Offset for navbar

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100">
      <Hero />
      <div className="relative">
        <Navigation activeSection={activeSection} onSectionChange={setActiveSection} />
        {/* Placeholder to prevent layout shift when navigation becomes fixed */}
        <div id="nav-placeholder" className="h-0"></div>
      </div>

      <main className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 max-w-7xl">
        <ExecutiveSummary />
        <ProductDeepDive />
        <UserPersonas />
        <GoToMarket />
        <ProductMetrics />
        <Financials />
        <TwoNarratives />
        <Competition />
        <SWOT />
        <Roadmap />
      </main>

      <Footer />
    </div>
  );
}
