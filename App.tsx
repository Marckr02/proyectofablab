
import React, { useState } from 'react';
import type { Section } from './types';
import Header from './components/Header';
import HomeSection from './components/HomeSection';
import HelpSection from './components/HelpSection';
import AiToolsSection from './components/AiToolsSection';
import GallerySection from './components/GallerySection';
import VideosSection from './components/VideosSection';
import FloatingHelpButton from './components/FloatingHelpButton';
import { LogoIcon } from './components/Icons';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>('home');

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <HomeSection />;
      case 'help':
        return <HelpSection />;
      case 'gallery':
        return <GallerySection />;
      case 'videos':
        return <VideosSection />;
      case 'ai':
        return <AiToolsSection />;
      default:
        return <HomeSection />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-gray-200 font-sans relative overflow-hidden">
      {/* Efectos de fondo animados */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/3 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>
      
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="p-4 sm:p-6 md:p-8 max-w-7xl mx-auto relative z-10">
        <div className="min-h-screen">
          {renderSection()}
        </div>
      </main>
      
      {/* Botón flotante de ayuda */}
      <FloatingHelpButton activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <footer className="text-center p-8 text-slate-500 border-t border-slate-700/50 mt-8 relative z-10 bg-slate-900/50 backdrop-blur-sm">
        <div className="flex items-center justify-center gap-3 mb-3">
            <div className="transform transition-transform duration-300 hover:rotate-12">
              <LogoIcon />
            </div>
            <p className="font-bold text-lg bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              FabLab Connect: Halot Mage Pro
            </p>
        </div>
        <p className="text-slate-400">Una iniciativa de IA + DevOps para el FabLab EPN.</p>
      </footer>
    </div>
  );
};

export default App;
