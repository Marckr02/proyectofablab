
import React from 'react';
import type { Section } from '../types';
import { LogoIcon } from './Icons';

interface HeaderProps {
  activeSection: Section;
  setActiveSection: (section: Section) => void;
}

const NavButton: React.FC<{
  label: string;
  sectionName: Section;
  activeSection: Section;
  onClick: (section: Section) => void;
}> = ({ label, sectionName, activeSection, onClick }) => {
  const isActive = activeSection === sectionName;
  return (
    <button
      onClick={() => onClick(sectionName)}
      className={`relative px-4 py-2.5 rounded-lg text-sm sm:text-base font-medium transition-all duration-300 transform hover:scale-105 ${
        isActive
          ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/30'
          : 'text-slate-300 hover:bg-slate-700/50 hover:text-white backdrop-blur-sm'
      }`}
    >
      <span className="relative z-10">{label}</span>
      {isActive && (
        <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-500 rounded-lg blur-sm opacity-50 animate-pulse"></div>
      )}
    </button>
  );
};

const Header: React.FC<HeaderProps> = ({ activeSection, setActiveSection }) => {
  return (
    <header className="bg-slate-900/80 backdrop-blur-xl sticky top-0 z-50 shadow-2xl shadow-black/30 border-b border-slate-700/50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          <div className="flex items-center">
            <div className="flex-shrink-0 text-white flex items-center gap-3 group">
              <div className="transform transition-transform duration-300 group-hover:rotate-12">
                <LogoIcon />
              </div>
              <span className="font-bold text-xl hidden sm:block bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                FabLab Connect
              </span>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex items-baseline space-x-2 sm:space-x-3 p-2 bg-slate-800/30 rounded-xl backdrop-blur-sm">
              <NavButton label="Inicio" sectionName="home" activeSection={activeSection} onClick={setActiveSection} />
              <NavButton label="Ayuda" sectionName="help" activeSection={activeSection} onClick={setActiveSection} />
              <NavButton label="Galería" sectionName="gallery" activeSection={activeSection} onClick={setActiveSection} />
              <NavButton label="Videos" sectionName="videos" activeSection={activeSection} onClick={setActiveSection} />
              <NavButton label="IA Tools" sectionName="ai" activeSection={activeSection} onClick={setActiveSection} />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
